# Next.js Dev Server Debugging Guide

## Detecting Memory Leaks & Crashes

### 1. Monitor Memory in Real-Time

```bash
# Monitor Node.js memory usage
watch -n 1 'ps aux | grep node'

# Or use built-in Node.js profiler
NODE_OPTIONS="--max-old-space-size=4096 --prof" next dev

# Generate heap snapshots for analysis
NODE_OPTIONS="--max-old-space-size=4096 --heapsnapshot-signal=SIGUSR2" next dev
# Then send signal: kill -SIGUSR2 <pid>
```

### 2. Common Crash Symptoms & Fixes

#### Symptom: Dev server freezes/hangs
**Root cause:** Usually Turbopack compilation loop or webpack deadlock

```bash
# Step 1: Kill existing server
pkill -f "next dev"

# Step 2: Clear all caches
npm run clean

# Step 3: Restart with verbose logging
NEXT_PRIVATE_STANDALONE=true next dev

# Step 4: If still hanging, disable Turbopack
next dev --no-turbo
```

#### Symptom: Out of memory (FATAL ERROR)
**Root cause:** JavaScript heap exhaustion

```bash
# Check current heap size
node -e "console.log(process.memoryUsage())"

# Increase heap (already set in .env.local)
NODE_OPTIONS="--max-old-space-size=8192" next dev

# Enable heap profiling
NODE_OPTIONS="--max-old-space-size=8192 --heapsnapshot-niceload=5000" next dev
# Generates snapshot every 5000ms in /tmp
```

#### Symptom: Infinite re-render loop (React)
**Root cause:** State update in render without condition

```bash
# Enable React strict mode warnings
# Already enabled in development by default

# Check React DevTools for excessive renders
# Install: npm install --save-dev @react/devtools
```

### 3. Identify Memory Leak Sources

#### A. Check for Circular Imports

```bash
# Install dependency-graph tool
npm install --save-dev dependency-graph

# Create check script
cat > check-circular.sh << 'EOF'
#!/bin/bash
echo "Checking for circular dependencies..."
npx madge --circular --extensions ts,tsx,js ./src/ 2>/dev/null
EOF
chmod +x check-circular.sh
./check-circular.sh
```

#### B. Check for Unbounded Data Structures

Look for these patterns in your code:

```typescript
// BAD: Unbounded array growth
let data = [];
function addData(newItem) {
  data.push(newItem); // Never cleared!
}

// GOOD: Bounded array with cleanup
let data = [];
const MAX_ITEMS = 100;
function addData(newItem) {
  if (data.length >= MAX_ITEMS) data.shift(); // Remove oldest
  data.push(newItem);
}

// BAD: Event listener leak
useEffect(() => {
  window.addEventListener('resize', handler); // Never removed!
}, []);

// GOOD: Proper cleanup
useEffect(() => {
  window.addEventListener('resize', handler);
  return () => window.removeEventListener('resize', handler); // Cleanup
}, []);

// BAD: setInterval without clearInterval
useEffect(() => {
  setInterval(poll, 5000); // Never stopped!
}, []);

// GOOD: Proper cleanup
useEffect(() => {
  const id = setInterval(poll, 5000);
  return () => clearInterval(id); // Cleanup
}, []);
```

#### C. Check for Large State Objects

```typescript
// Use React DevTools "Profiler" tab to check state size
// Or add this to any component temporarily:

function useMemoryMonitor(name: string, obj: any, threshold: number = 10000) {
  useEffect(() => {
    const size = JSON.stringify(obj).length;
    if (size > threshold) {
      console.warn(`${name} state is ${size} bytes (>${threshold})`);
    }
  }, [obj, name, threshold]);
}
```

### 4. Debugging Crashes with Stack Traces

```bash
# Run with full stack traces
NODE_OPTIONS="--trace-exceptions --stack-trace-on-all-errors" next dev

# Enable uncaught exception handler
cat > shallavar-site/scripts/dev-with-debug.ts << 'EOF'
// Add to the top of your page.tsx temporarily
process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception:', err);
});
process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
});
EOF
```

### 5. Next.js Specific Debug Commands

```bash
# View Next.js compilation errors in detail
next dev --debug

# Check for API route issues
curl -v http://localhost:3000/api/contact

# Check for page rendering issues
curl -v http://localhost:3000/

# Check for CSS/Tailwind issues
next build 2>&1 | grep -i "error\|warning"

# Analyze bundle size
npx next-bundle-analyzer

# Check for TypeScript errors causing runtime issues
npx tsc --noEmit --pretty
```

### 6. Quick Emergency Recovery

When the dev server completely hangs:

```bash
# Step 1: Kill ALL node processes
pkill -9 -f node

# Step 2: Clear ALL caches
rm -rf .next node_modules/.cache .turbo

# Step 3: Restart fresh
npm run dev
```

Or create an emergency script:

```bash
cat > shallavar-site/emergency.sh << 'EOF'
#!/bin/bash
echo "Emergency recovery..."
pkill -9 -f node 2>/dev/null
sleep 1
rm -rf .next node_modules/.cache .turbo
echo "Cleared. Starting dev server..."
npm run dev
EOF
chmod +x shallavar-site/emergency.sh
```

### 7. Monitoring Script (Preventive)

```bash
cat > shallavar-site/monitor-memory.sh << 'EOF'
#!/bin/bash
# Monitor Node.js memory and alert if exceeds threshold
THRESHOLD_MB=3000
while true; do
  MEM=$(ps aux | grep "[n]ode.*next" | awk '{sum += $6} END {print sum/1024}')
  if [ $(echo "$MEM > $THRESHOLD_MB" | bc -l) -eq 1 ]; then
    echo "WARNING: Node.js memory ${MEM}MB > ${THRESHOLD_MB}MB"
    ps aux | grep "[n]ode.*next"
  fi
  sleep 30
done
EOF
chmod +x shallavar-site/monitor-memory.sh
```

## Summary: Most Common Fixes

| Problem | Quick Fix | Root Cause |
|---------|-----------|------------|
| Dev server hang | `pkill -f next dev && npm run clean && npm run dev` | Turbopack cache corruption |
| Memory growing | Set `--max-old-space-size=4096` | No heap limit |
| Infinite loop | Check `useEffect` dependencies | Missing cleanup deps |
| Memory leak | Check for unclosed intervals/timeouts | Missing cleanup in useEffect |
| Circular import | Run `npx madge --circular ./src/` | Circular module dependencies |
| Large bundle | Run `npx next-bundle-analyzer` | Unused imports |
| API crash | Check `/api/*` route error logs | Unhandled exceptions in API |
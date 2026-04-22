#!/bin/bash
# Emergency Recovery Script for Next.js Dev Server
# Use when the dev server hangs, crashes, or consumes too much memory

echo "🔧 Shallavar Dev Server Emergency Recovery"
echo "==========================================="

# Step 1: Kill all Node processes
echo "[1/4] Killing Node.js processes..."
pkill -9 -f node 2>/dev/null
sleep 2

# Verify kill
if pgrep -f "next dev" > /dev/null; then
    echo "   ⚠️  Could not kill next dev process. Trying force kill..."
    pkill -9 -f next 2>/dev/null
    sleep 1
fi

# Step 2: Clear all caches
echo "[2/4] Clearing build caches..."
rm -rf .next
rm -rf node_modules/.cache
rm -rf .turbo
echo "   ✓ Cache cleared"

# Step 3: Verify disk space
echo "[3/4] Checking disk space..."
df -h . | tail -1 | awk '{print "   Disk usage: " $3 " / " $2 " (" $5 " used)"}'

# Step 4: Prompt to restart
echo "[4/4] Recovery complete!"
echo ""
echo "Options:"
echo "  1. Start dev server:    npm run dev"
echo "  2. Start with turbo:    npm run dev:turbo"
echo "  3. Clean build:         npm run build"
echo ""
echo "If problems persist, check DEBUGGING_GUIDE.md for advanced diagnostics."
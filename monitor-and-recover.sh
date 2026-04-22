#!/bin/bash
# Auto-Memory Monitor for Next.js Dev Server
# Monitors Node.js memory and auto-restarts if threshold is exceeded

# Configuration (adjusted for 48GB system)
THRESHOLD_MB=40000        # Memory threshold in MB (triggers restart)
CHECK_INTERVAL=30        # Check every N seconds
LOG_FILE=".memory-monitor.log"
DEV_PID_FILE=".next-dev.pid"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

log() {
    echo "$(date '+%Y-%m-%d %H:%M:%S') - $1" >> "$LOG_FILE"
    echo -e "$1"
}

get_node_memory_mb() {
    local mem_mb=0
    while IFS= read -r line; do
        # RSS (resident set size) in KB, convert to MB
        rss=$(echo "$line" | awk '{print $6}')
        mem_mb=$((mem_mb + rss / 1024))
    done < <(ps aux | grep "[n]ode.*next" 2>/dev/null)
    echo "$mem_mb"
}

check_and_restart() {
    # Check if next dev is running
    if ! pgrep -f "next dev" > /dev/null 2>&1; then
        log "${YELLOW}[INFO] Next.js dev server is NOT running. Starting it...${NC}"
        cd "$(dirname "$0")"
        nohup npm run dev > /dev/null 2>&1 &
        local pid=$!
        echo "$pid" > "$DEV_PID_FILE"
        log "${GREEN}[INFO] Dev server started with PID $pid${NC}"
        return 1
    fi

    local mem_mb=$(get_node_memory_mb)
    
    if [ "$mem_mb" -ge "$THRESHOLD_MB" ]; then
        log "${RED}[ALERT] Memory usage: ${mem_mb}MB >= ${THRESHOLD_MB}MB threshold${NC}"
        log "[ACTION] Stopping dev server..."
        
        # Stop dev server gracefully
        pkill -f "next dev" 2>/dev/null
        sleep 3
        
        # Force kill if still running
        if pgrep -f "next dev" > /dev/null; then
            pkill -9 -f "next dev" 2>/dev/null
            sleep 1
        fi
        
        log "[ACTION] Clearing caches..."
        rm -rf .next
        rm -rf node_modules/.cache
        
        log "[ACTION] Starting dev server..."
        cd "$(dirname "$0")"
        nohup npm run dev > /dev/null 2>&1 &
        local pid=$!
        echo "$pid" > "$DEV_PID_FILE"
        log "${GREEN}[RECOVERY] Dev server restarted with PID $pid${NC}"
        return 2
    else
        log "${GREEN}[OK] Memory usage: ${mem_mb}MB < ${THRESHOLD_MB}MB threshold${NC}"
        return 0
    fi
}

# Main loop
log "${GREEN}========================================${NC}"
log "${GREEN}  Next.js Auto-Memory Monitor Started${NC}"
log "${GREEN}  Threshold: ${THRESHOLD_MB}MB${NC}"
log "${GREEN}  Check interval: ${CHECK_INTERVAL}s${NC}"
log "${GREEN}  Log file: ${LOG_FILE}${NC}"
log "${GREEN}========================================${NC}"

while true; do
    check_and_restart
    sleep $CHECK_INTERVAL
done
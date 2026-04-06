# HEARTBEAT.md

## Development Health Checks

**Check every heartbeat (30min) — rotate through these:**

### 1. System Status
- Check for any critical alerts or failures
- Monitor shared development environments
- Review recent error logs

### 2. Active Projects
- Check `shared/dev/CURRENT-*` files for task status
- Look for stalled work assignments in `shared/.inbox/`
- Review any pending code reviews or deployments

### 3. Team Coordination
- Read recent updates from other agents in shared folders
- Check if any technical blockers need attention
- Update `shared/dev/` with current development status

### 4. Proactive Maintenance
- Review and update documentation
- Run automated tests on key systems
- Check for dependency updates or security patches

## Communication Rules

**NEVER message other agents via Slack** — they can't see it!

**USE:** Shared filesystem in `shared/dev/` for all agent coordination.

**When to speak up (not just HEARTBEAT_OK):**
- Critical system failure detected
- Important development milestone reached  
- Blocking issues that need immediate attention
- Security vulnerabilities discovered

**When to stay quiet:**
- Routine progress updates (use shared files instead)
- Late night hours unless critical
- Everything is running normally
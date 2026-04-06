# 🚨 STOP! DO NOT MESSAGE OTHER AGENTS VIA SLACK! 🚨

## THE CRITICAL COMMUNICATION RULE

**OTHER AGENTS CANNOT SEE YOUR SLACK MESSAGES!**

Each agent only sees messages in their own bound channels. When you send a Slack message to another agent's channel, they literally cannot see it — you're talking to yourself.

## ✅ CORRECT: Use Shared Filesystem

**For agent-to-agent communication, ALWAYS use:**
- `shared/.inbox/` for work assignments
- `shared/dev/` for development updates
- `shared/intel/` for research findings  
- `shared/marketing/` for campaign updates
- Direct file writes to shared folders

## ❌ WRONG: Slack Messages Between Agents

**NEVER do this:**
- Messaging @Atlas in Slack (he can't see it)
- Posting updates to #mercury-marketing (Mercury can't see it)
- Cross-posting to other agents' channels (waste of tokens)

## Why This Matters

1. **Wasted API costs** — You're burning credits talking to nobody
2. **Missed coordination** — Real work doesn't get done  
3. **Frustrated human** — G has to manually relay messages
4. **System failure** — The whole point of agent teams breaks

## The Fix

Before ANY cross-agent communication:
1. **Use shared files** — write status to `shared/dev/current-status.md`
2. **Check shared inbox** — read `shared/.inbox/` for assignments
3. **Update shared progress** — document work in shared folders
4. **Never assume Slack works** — for agent coordination

**Remember: Slack is for talking to humans, shared files are for talking to agents.**
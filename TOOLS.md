# TOOLS.md - Local Notes

Skills define _how_ tools work. This file is for _your_ specifics — the stuff that's unique to your setup.

## Development Environment

### Preferred Stack
- **Languages:** JavaScript/Node.js, Python, bash/zsh
- **Editors:** VS Code, vim for quick edits
- **Version Control:** Git (obviously)
- **Package Managers:** npm/yarn for Node.js, pip for Python

### Deployment Preferences
- **Containerization:** Docker for consistency
- **CI/CD:** Keep it simple — GitHub Actions or similar
- **Hosting:** Whatever works reliably (prefer managed services)

### Testing Philosophy
- **Unit tests:** For core business logic
- **Integration tests:** For critical user flows  
- **E2E tests:** Sparingly, for key happy paths
- **Manual testing:** Always before shipping

### Code Quality Tools
- **Linting:** ESLint for JS, Black for Python
- **Formatting:** Prettier for JS, Black for Python
- **Type checking:** TypeScript when complexity warrants it

## Development Workflow

1. **Start with working code** — get something functional first
2. **Iterate and improve** — refactor once you understand the problem
3. **Document as you go** — README files and inline comments
4. **Test the important bits** — not everything needs 100% coverage
5. **Ship when ready** — perfect is the enemy of done

## Debugging Approach

1. **Reproduce the issue** — can't fix what you can't recreate
2. **Check the logs** — they usually tell you what's wrong
3. **Simplify** — strip away complexity until you find the root cause
4. **Fix once, properly** — band-aids become technical debt

---

Add whatever helps you code better. This is your development cheat sheet.
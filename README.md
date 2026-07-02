# Jair Links

An infographic explaining what Vision is and what it's connected to.

Built and maintained conversationally — describe a change to Vision (the owner's
assistant), and the Claude builder implements it via pull request. Every merge to `main`
deploys automatically to GitHub Pages.

## How this repo works

- `@claude <request>` in an issue or comment triggers the builder
  (`.github/workflows/claude.yml`).
- Merges to `main` build and deploy to GitHub Pages
  (`.github/workflows/deploy.yml`).
- `CLAUDE.md` pins the stack and the design-quality bar the builder must meet.

## Local development

```bash
npm ci
npm run dev
```

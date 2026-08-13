# AI Development Guidelines

## Project Structure
- This is a monorepo containing an **Astro site** at the root level and a **booking app** inside `./booking-app`.
- Root site: Main marketing pages, blog, assets (`/public`), components (`/src/components`).
- App folder (`./booking-app`): React/Node booking application.

## Critical Rules & Best Practices

### 1. Build Artifacts & Assets
- **NEVER** edit files inside `dist/` or `dist/_astro/`. These are auto-generated build outputs.
- Place public images directly in `/public/`, not inside the `dist/` directory.
- Place components in `/src/components/` or `/booking-app/src/components/` as appropriate. Do not duplicate component files.

### 2. Dependency & Package Management
- When modifying dependencies inside `./booking-app`, **DO NOT manually edit conflict markers** in `package-lock.json`.
- Run `npm install` inside `./booking-app` to resolve and regenerate lockfiles.

### 3. File Operations & Cleanliness
- **DO NOT** create temporary shell scripts (e.g., `update-*.sh`) or test HTML pages inside tracked directories (`/public`, `/src`) unless explicitly requested.
- Always check `.gitignore` before placing new assets to ensure build artifacts aren't accidentally tracked.

### 4. Git & Commits
- Make small, scoped commits with clear messages.
- Do not attempt forced git pushes (`git push --force`).
- Do not commit `.env` files or secret keys under any circumstances.

## Commands Reference

### Root Project (Astro Site)
- Development server: `npm run dev`
- Build site: `npm run build`

### Booking App (`./booking-app`)
- Install dependencies: `cd booking-app && npm install`
- Development server: `cd booking-app && npm run dev`
- Build app: `cd booking-app && npm run build`
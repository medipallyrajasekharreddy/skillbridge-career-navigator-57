# SkillBridge Frontend Plan

## Goal
Build a presentation-ready responsive frontend that guides users through login, resume analysis, profile review, job matching, skill-gap analysis, learning recommendations, time-to-ready, and a final career roadmap.

## Build approach
- Create a cohesive navy/indigo SaaS design system with semantic colors for matched, partial, and missing skills.
- Use realistic typed mock data and reusable layouts, cards, badges, progress indicators, forms, filters, and charts so APIs can replace the fixtures later.
- Keep pre-profile pages focused and linear; reveal the full sidebar only after profile review.
- Add dedicated routes for every major workflow step, with clear next-action buttons and route-specific metadata.
- Include functional demo interactions: password visibility, file selection, processing progression, editable/manual forms, filters, job detail navigation, study-hours estimate, progress tracking, and voice/text assistant states.
- Validate desktop and mobile rendering plus the complete click path.

## Routes
- `/` login
- `/upload`, `/processing`, `/profile`, `/manual-profile` onboarding
- `/dashboard`, `/jobs`, `/jobs/$jobId`, `/skill-gaps`, `/training`, `/time-to-ready`, `/roadmap`, `/voice-assistant`, `/settings` main application

## Technical details
- TanStack Router file routes and typed navigation.
- React state for the frontend demo; no persistence or real authentication/API calls in this scope.
- Tailwind v4 semantic tokens in the global stylesheet; shared components under `src/components` and mock domain data under `src/data`.

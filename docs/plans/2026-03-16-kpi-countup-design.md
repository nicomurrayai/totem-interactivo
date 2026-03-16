# KPI Counter (“Eventos realizados”) — 0 → 187+

## Goal
Animate the “Eventos realizados” KPI from `0` up to `187+` quickly on initial render, improving perceived dynamism without adding dependencies.

## Scope
- Replace the current “Eventos realizados” value (`500+`) with an animated counter ending at `187+`.
- Keep other KPIs unchanged (`4K`, `24/7`).

## UX Spec
- Starts at `0` and counts up to `187` in ~`650ms` with an ease-out curve.
- Displays a `+` suffix (final text: `187+`).
- Respects `prefers-reduced-motion` by rendering the final value immediately.
- Avoids double-start in React Strict Mode (dev) with a one-time guard.

## Implementation
- Add `components/CountUp.tsx` as a client component using `requestAnimationFrame`.
- Use it only for the “Eventos realizados” KPI in `components/Hero.tsx`.

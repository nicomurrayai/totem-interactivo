# CTA Button (“Solicitar presupuesto” / “Contacto”) — Gradient + Transition

## Goal
Improve the primary CTA button visual impact and interaction by introducing a blue-family gradient, smoother transitions, and clearer hover/focus/active states, while keeping changes reusable across the app.

## Scope
- Add a reusable `variant="cta"` to the shared shadcn `Button` component.
- Apply `variant="cta"` to:
  - Hero CTA: “Solicitar presupuesto”
  - Navbar CTA: “Contacto”
- Keep each button’s existing sizing/radius via `className` overrides.

## Visual & Interaction Spec
- **Base**
  - Blue-family gradient background.
  - White text.
  - Prominent but clean shadow.
  - Slightly animated gradient (background-position shift) to add depth.
- **Hover**
  - Subtle lift (translate up).
  - Shadow increases.
  - Gradient shifts position for a “moving” feel.
  - Optional arrow icon nudges right (Hero button).
- **Active**
  - Returns to rest position (press effect from hover).
  - Slightly reduced shadow.
- **Focus-visible**
  - Blue-tinted ring for accessibility.
- **Reduced motion**
  - Avoid transform/position animation when `prefers-reduced-motion` is enabled.

## Implementation Notes
- Implement in `components/ui/button.tsx` via `class-variance-authority` variants.
- Apply in `components/Hero.tsx` and `components/Navbar.tsx`.

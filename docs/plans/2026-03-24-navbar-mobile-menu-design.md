# Navbar Mobile Panel Design (2026-03-24)

## Context
- Desktop navbar already shows `navItems` plus the `Contacto` CTA. Mobile view hides those behind the hamburger. The new requirement is a simple off-canvas panel where the mobile menu slides in from the right, reusing the existing links and CTA.

## Goals
1. Reveal the mobile links and CTA on hamburger tap.
2. Keep the desktop layout unchanged.
3. Avoid introducing new dependencies or complex component abstractions.
4. Provide a performant, visually simple slide-in interaction.

## Layout and Interaction
- The hamburger toggles a `useState`-driven panel in `Navbar`. Panel markup lives alongside the current header markup to keep behavior localized.
- Panel is `fixed inset-y-0 right-0 w-[min(80vw,320px)] rounded-l-xl border border-[#d8deea]/25 bg-white/90 shadow-lg backdrop-blur-md transition-transform duration-300`.
- Default transform is `translate-x-full` so it stays hidden off-screen; when open it becomes `translate-x-0`.
- A semi-transparent backdrop (`fixed inset-0 bg-black/40`) renders only when open and also closes the panel when tapped, improving discoverability.
- Inside the panel, items stack vertically: each nav item is a `Link` with the same text and underline hover as the desktop version, followed by the existing `Contacto` CTA button sized like the desktop CTA but full width.
- Hamburger button changes `aria-label` contextually to `Cerrar menu` when open; it retains the current `Button` styling but will toggle icon state via the same `Menu` icon (since icon change isn’t required).

## Accessibility & Focus
- The panel is a `div` with `role="dialog"` and `aria-modal="true"` to signal an overlay.
- Tapping the backdrop or pressing `Esc` closes the panel (keyboard listener attached while open).
- Focus is not trapped but the keyboard order matches the sequence (hamburger ? nav links ? CTA). Pressing the hamburger again or the backdrop restores focus to the button.

## Testing Concerns
- Confirm the panel toggles with the hamburger and backdrop both in Chrome and Safari mobile widths.
- Verify `navItems` links navigate to the correct anchors and the CTA still opens WhatsApp in a new tab.
- Ensure no layout shift happens on desktop when the panel markup is present but hidden.
- Check that `Esc` closes the menu and restores focus to the hamburger (as close as possible without bringing in a focus-trap helper).

## Implementation Notes
- Keep all state and panel markup within `components/Navbar.tsx` to minimize structural changes.
- Since the CTA button already uses gradient and shadow styles, reuse the `Link`/`Button` combination inside the panel to keep consistent weight.
- No additional packages or global context changes are needed.

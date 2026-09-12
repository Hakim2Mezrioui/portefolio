# Portfolio design context

Personal portfolio for Mezrioui Hakim, a Full Stack and IoT developer. The main audience is recruiters and prospective clients. English and French are supported through the existing TranslateService.

## Visual direction

Keep the established slate background, blue accents, Bootstrap icons and existing site typography. The header should feel quiet and readable: existing HM logo at the left, navigation in the middle, useful actions at the right. Per user preference, section links include discreet 14px Bootstrap icons that inherit text and hover colors, with consistent spacing. Keep text labels and hide these decorative icons from assistive technology. Do not duplicate the contact action with a separate email icon.

## Token ownership

`src/styles.css` remains the canonical theme source. Header CSS consumes `--color-bg-nav`, `--color-bg-menu`, `--color-text`, `--color-text-muted`, `--color-accent`, `--color-accent-muted`, `--color-border` and `--color-bg` directly. Dark background is #0f172a with #93c5fd accents; light background is #f1f5f9 with #011d41 accents. Filled accent controls use the background token for contrasting text.

## Header behavior

Desktop action order: LinkedIn and GitHub, a separator, compact theme and language controls, a separator, then CV. CV and the active language use the accent fill with contrasting background-token text: light blue with dark text in dark mode, navy with light text in light mode. Keep the inactive language transparent so selection is immediately visible. On mobile the menu trigger follows CV. Theme sizing overrides are scoped to header settings through CSS custom properties, preserving the shared component's default size elsewhere.

Preserve the original HM logo asset and its original colors in both themes. Do not recolor it with CSS filters; this is the user's preference.

All seven existing section anchors remain accessible. The labeled CV button uses CvModalService and retains the language-selection flow. At widths up to 600px, only the original logo and menu trigger remain in the top bar. Theme, languages and a full-width CV button appear inside the disclosure menu after the section links. Above 600px, these controls remain in the top bar. Below 1201px, section links use a non-modal disclosure menu; closed links are removed from keyboard navigation. Escape closes the menu and returns focus to its trigger; outside clicks and navigation close it. The menu scrolls within the available viewport.

Header height is 80px on desktop and 72px on mobile. Avoid entrance cascades, respect reduced motion, preserve visible focus outlines, and keep light and dark themes legible.

## Responsive hero

At widths up to 900px, the hero uses natural layout without CSS zoom, 20–24px outer horizontal padding and no nested content padding. The welcome heading scales with viewport width; the name is larger than the job title. Body copy is left-aligned at 16px with 1.7 line height. Mobile text entrance offsets are disabled to avoid clipping. Preserve the original copy, portrait, theme and project link. Respect reduced motion for the hero animations.

## Verification limits

The supplied desktop and mobile screenshots ground these optimizations. No connected browser was available during implementation, so the revised rendering and responsive interactions still need a visual check in the user's browser.

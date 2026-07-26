---
name: "Filip Mares Portfolio"
description: "A precise personal instrument index for senior product-engineering work."
colors:
  signal-orange: "#f45b26"
  instrument-white: "#f2f2ef"
  instrument-black: "#111111"
  graphite: "#595959"
  divider-gray: "#d8d8d6"
  canvas-gray: "#e4e4e1"
  gallery-gray: "#eaeaea"
  clean-white: "#ffffff"
  caption-white: "#fbfbfb"
  dark-muted: "#888888"
  dark-surface: "#222222"
  dark-deep: "#0a0a0a"
typography:
  display:
    fontFamily: "-apple-system, BlinkMacSystemFont, Helvetica Neue, Helvetica, Arial, sans-serif"
    fontSize: "3.5rem"
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "-apple-system, BlinkMacSystemFont, Helvetica Neue, Helvetica, Arial, sans-serif"
    fontSize: "2.5rem"
    fontWeight: 500
    letterSpacing: "-0.03em"
  title:
    fontFamily: "-apple-system, BlinkMacSystemFont, Helvetica Neue, Helvetica, Arial, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 500
    letterSpacing: "-0.01em"
  body:
    fontFamily: "-apple-system, BlinkMacSystemFont, Helvetica Neue, Helvetica, Arial, sans-serif"
    fontSize: "1.15rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "-apple-system, BlinkMacSystemFont, Helvetica Neue, Helvetica, Arial, sans-serif"
    fontSize: "0.85rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "0.15em"
rounded:
  control: "4px"
  object: "6px"
  container: "8px"
  motif: "20px"
  motif-large: "24px"
  full: "999px"
spacing:
  1: "4px"
  2: "8px"
  3: "12px"
  4: "16px"
  6: "24px"
  8: "32px"
  12: "48px"
  16: "64px"
  20: "80px"
components:
  theme-toggle:
    backgroundColor: "transparent"
    textColor: "{colors.instrument-black}"
    rounded: "{rounded.full}"
    size: "32px"
  project-back-link:
    backgroundColor: "{colors.instrument-white}"
    textColor: "{colors.instrument-black}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "8px 16px"
  index-row:
    backgroundColor: "transparent"
    textColor: "{colors.instrument-black}"
    typography: "{typography.title}"
    rounded: "0"
    padding: "20px 0"
  project-tag:
    backgroundColor: "transparent"
    textColor: "{colors.graphite}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "4px 12px"
  gallery-container:
    backgroundColor: "{colors.instrument-white}"
    textColor: "{colors.graphite}"
    rounded: "{rounded.container}"
---

# Design System: Filip Mares Portfolio

## 1. Overview

**Creative North Star: "The Personal Instrument Index"**

The portfolio behaves like a well-made personal instrument: immediately legible, materially quiet, and rewarding under closer inspection. Its Braun influence comes from usefulness, proportion, typography, honest structure, and disciplined restraint—not from nostalgic imitation. The index is the organizing idea: work, dates, roles, and evidence remain easy to scan while the interface stays calm enough for senior professional content.

Personality arrives through a few tactile signatures. The cycling San Francisco icons express affection for place; the user-triggered mechanical theme click makes a digital control feel physical; the hidden blueprint mode rewards curiosity. These are part of the identity and must remain, but they never outrank the work or become prerequisites for understanding it.

The system explicitly rejects superficial retro-Braun imitation, ornamental industrial-design motifs, generic portfolio templates, nostalgic skeuomorphism, decorative technical diagrams, and any treatment that makes the work harder to understand.

**Key Characteristics:**
- Restrained neutral surfaces with one sparing orange signal
- Single-family typography with decisive size and weight contrast
- Narrow, centered reading measures and ruled index structures
- Flat surfaces with light structural borders and rare ambient shadows
- Tactile, personal details that remain optional and non-blocking
- Responsive simplification without loss of meaning

**The Evidence-First Rule.** Personality may delight; project visuals must inform. No decorative treatment may substitute for authentic work, decisions, or outcomes.

**The Quiet-at-Rest Rule.** Pages remain visually still and legible by default. Motion responds to navigation, interaction, location, or discovery; reduced-motion users receive an equivalent static state.

## 2. Colors

The palette resembles a precision instrument housing: soft neutral shells, high-contrast markings, restrained dividers, and a single orange operational signal.

### Primary
- **Signal Orange:** Reserved for active controls, small icons, interaction feedback, and distinctive motifs. Its rarity is the source of its authority.

### Neutral
- **Instrument White:** Default light canvas and light-theme control surface.
- **Instrument Black:** Default light-theme ink and dark-theme canvas.
- **Graphite:** Secondary copy, dates, labels, and metadata on light surfaces.
- **Divider Gray:** Hairline rules, borders, placeholders, and low-emphasis structure.
- **Canvas Gray:** Raised-neutral fields used behind project motifs.
- **Gallery Gray:** Quiet image or artifact surround.
- **Clean White:** Light gallery UI surface.
- **Caption White:** Light caption rail.
- **Dark Muted:** Secondary text in dark mode.
- **Dark Surface:** Dark-theme object and gallery surface.
- **Dark Deep:** Dark-theme caption rail and deepest tonal layer.

**The One Signal Rule.** Signal Orange occupies less than 10% of a page and marks action, state, location, or a deliberate signature. Never use it as general body text on Instrument White.

**The Two-Housing Rule.** Light and dark themes are equal instrument housings, not separate brands. Preserve role parity when adding a token: canvas maps to canvas, ink to ink, muted to muted.

## 3. Typography

**Display Font:** Native system sans-serif stack
**Body Font:** Native system sans-serif stack
**Label/Mono Font:** Native system sans-serif stack; monospace appears only in the developer-mode toast

**Character:** Direct, familiar, and mechanically neutral. A single system family keeps attention on content while differences in weight, scale, spacing, case, and numeric alignment create hierarchy.

### Hierarchy
- **Display** (600, 3.5rem, 1.1): Project and about-page titles; tightly set but never tighter than -0.04em.
- **Headline** (500, 2.5rem): Homepage identity and primary introduction.
- **Title** (500, 1.25rem): Project and experience index rows.
- **Body** (400, 1.15rem, 1.6): Biography and case-study prose; keep readable text within roughly 65–75 characters.
- **Label** (400, 0.85rem, 0.15em, uppercase): Dates, company context, section labels, and compact metadata. Use only where the text is genuinely navigational or classificatory.

**The One Family Rule.** Do not add a display serif, geometric companion, or decorative mono to manufacture character. The native stack is an intentional expression of immediacy and restraint.

**The Label Rationing Rule.** Uppercase tracking is reserved for compact metadata and true index labels. Never place an eyebrow above every heading.

## 4. Elevation

The system is flat by default. Depth comes primarily from tonal contrast, one-pixel rules, overlap, and spatial separation. Shadows are ambient and low-opacity; they clarify a floating control, gallery object, or interaction response rather than decorating every container.

### Shadow Vocabulary
- **Control Lift** (`0 2px 8px rgba(0, 0, 0, 0.05)`): Project back control over a hero field.
- **Artifact Lift** (`0 4px 12px rgba(0, 0, 0, 0.05)`): Gallery container against the page canvas.
- **Object Lift** (`0 2px 4px rgba(0, 0, 0, 0.1)`): Small UI object within an artifact field.
- **Signal Glow** (`0 4px 6px rgba(244, 91, 38, 0.2)`): Brief hover response on a small social icon only.

**The Flat-by-Default Rule.** If a static surface needs a shadow to appear organized, its spacing, border, or tonal relationship is wrong.

**The Ambient Shadow Rule.** Shadows remain broad, quiet, and below 10% black opacity at rest. Hard shadows and stacked card elevation are prohibited.

## 5. Components

Components feel precise and lightly tactile: thin strokes, compact geometry, direct labels, and short state transitions.

### Buttons
- **Shape:** Circular icon controls use a full radius; compact labeled controls use a restrained 4px radius.
- **Primary:** There is no filled marketing button. Primary movement is expressed through clear text links and index rows.
- **Hover / Focus:** Ink may shift to Signal Orange, icons may translate or scale slightly, and keyboard focus must be as visible as hover.
- **Theme Toggle:** A persistent 32px circular icon control that switches sun/moon symbols and plays its mechanical click only after direct user activation. Preserve the sound as a signature; announce the resulting theme state.

### Chips
- **Style:** Transparent project tags use a one-pixel Graphite border, Graphite text, 4px radius, and compact 4px by 12px padding.
- **State:** Tags are descriptive metadata, not filters or buttons. Never imply interactivity when none exists.

### Cards / Containers
- **Corner Style:** Gallery containers use the system's largest practical radius (8px); most layout regions remain unboxed.
- **Background:** Match the current theme canvas, with a quiet tonal artifact field inside.
- **Shadow Strategy:** Use Artifact Lift only when the container genuinely floats.
- **Border:** One-pixel Divider Gray or its dark-theme translucent equivalent.
- **Internal Padding:** Captions use 16px; larger whitespace belongs between regions rather than inside nested cards.

### Navigation
- The homepage uses a visible index rather than a persistent global menu.
- About and project routes use a compact back/index link at the upper left and the theme control at the upper right.
- Link labels use medium-weight uppercase type with modest tracking; arrow movement provides directional feedback.
- Project index rows pair a title with a tabular date, separated by hairline rules. Desktop hover/focus may reveal a 320px by 240px factual preview panel; narrow screens surface the same project context inline in each row without relying on hover.

### San Francisco Location Signature

The location badge pairs an uppercase city label with a 16px Signal Orange line icon. The icon family—Sutro Tower, Transamerica Pyramid, Golden Gate Bridge, cable car, and fog—cycles every three seconds with a short vertical crossfade. This is an intentional autobiographical detail, not ornamental filler. Under reduced motion, show one stable icon while preserving the location label.

### Project Preview

The preview canvas sits outside the 600px homepage index on wide screens, follows the active project row vertically, and uses opacity plus a short horizontal translation. It is supplementary: project names and dates remain complete without it. The panel contains factual project context (title, concise description, company/date context, and restrained tags) rather than decorative geometry. Keyboard focus must receive the same informational preview as pointer hover, and narrow screens expose a concise inline equivalent in each project row.

### Blueprint Mode

Typing `grid` toggles a hidden 20px technical grid, orange outlines, and a compact developer-mode toast. Preserve it as an easter egg for curious visitors. It must never interfere with typing in future form fields, replace normal focus outlines, or become necessary for navigation.

## 6. Do's and Don'ts

### Do:
- **Do** let structure, proportion, typography, and authentic project evidence carry the identity.
- **Do** preserve the cycling San Francisco icons as an expression of place and provide a static reduced-motion state.
- **Do** preserve the user-triggered mechanical theme sound and blueprint easter egg as optional signatures.
- **Do** use Signal Orange only for action, state, location, or a deliberate motif.
- **Do** keep body text within a focused 65–75 character reading measure.
- **Do** use one-pixel rules, whitespace, and tonal layering before adding a shadow.
- **Do** maintain parity between light and dark theme roles.
- **Do** keep every primary action and all content understandable without hover, sound, animation, or discovery of an easter egg.
- **Do** use authentic screenshots, redacted artifacts, diagrams, and captions when presenting project work.

### Don't:
- **Don't** use superficial retro-Braun imitation.
- **Don't** add ornamental industrial-design motifs that do not explain the work.
- **Don't** fall into generic portfolio templates.
- **Don't** use nostalgic skeuomorphism.
- **Don't** use decorative technical diagrams as substitutes for authentic evidence.
- **Don't** add any treatment that makes the work harder to understand.
- **Don't** confuse aesthetic cosplay with functional clarity.
- **Don't** replace the native sans-serif stack with a fashionable editorial pairing.
- **Don't** repeat tiny uppercase tracked eyebrows above every section.
- **Don't** build nested card grids, glass surfaces, gradient text, or side-stripe accents.
- **Don't** use Signal Orange for small body text on Instrument White.
- **Don't** autoplay sound or require motion to understand a state change.

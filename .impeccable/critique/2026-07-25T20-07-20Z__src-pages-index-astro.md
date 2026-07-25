---
target: entire portfolio site
total_score: 24
p0_count: 0
p1_count: 2
timestamp: 2026-07-25T20-07-20Z
slug: src-pages-index-astro
---
## Design Health Score

| # | Heuristic | Score | Key issue |
|---|---|---:|---|
| 1 | Visibility of System Status | 2 | Theme state is not announced and project location is weak. |
| 2 | Match System / Real World | 3 | Career language is clear, but specialist terms are unexplained. |
| 3 | User Control and Freedom | 3 | Back links work; the 404 forces a timed redirect. |
| 4 | Consistency and Standards | 3 | The visual system is cohesive, but “Back” and “Index” vary. |
| 5 | Error Prevention | 3 | Few risky actions; surprise audio and redirect are avoidable. |
| 6 | Recognition Rather Than Recall | 3 | Core routes are visible; theme and LinkedIn rely on icons. |
| 7 | Flexibility and Efficiency | 2 | No next-project, resume, contact, or comparison path. |
| 8 | Aesthetic and Minimalist Design | 2 | Restraint is undermined by decorative heroes and fake galleries. |
| 9 | Error Recovery | 2 | The 404 offers recovery but delays it behind a metaphor. |
| 10 | Help and Documentation | 1 | No supporting links, contact route, or project evidence. |
| **Total** | | **24/40** | **Acceptable; significant improvements needed** |

## Anti-Patterns Verdict

**LLM assessment:** The homepage is not generic AI slop. Its narrow index, neutral palette, typographic restraint, tabular dates, and sparing orange form a coherent identity. The project pages do drift into Braun cosplay: oversized circles, rectangles, triangles, faux UI blocks, rounded tags, and a “blueprint” easter egg borrow industrial-design signals without adding evidence or improving comprehension.

**Deterministic scan:** Three warnings were found: bounce easing in `src/pages/404.astro:76`, and layout-property animation of `padding-left` and `height` in `src/pages/index.astro:308,322`. The detector confirmed motion/performance concerns but did not catch the more consequential missing focus styles, reduced-motion handling, or uninformative project imagery.

**Visual overlays:** Browser visualization was attempted, but the browser canvas became unavailable before detector injection. No reliable user-visible overlay is available.

## Overall Impression

The site has a disciplined, credible shell and unusually clear ownership language. Its biggest weakness is that the deeper a visitor goes, the less proof they receive: project pages replace authentic artifacts and decision-making with abstract decorative geometry and short claims. The visual identity is stronger than the portfolio evidence.

## What's Working

- The homepage establishes seniority, current work, chronology, and project scope quickly.
- The 600–900px content widths, neutral surfaces, fine rules, and restrained orange create calm authority.
- The about page adds warmth and credibility through a real portrait, quantified scale, and specific career history.

## Priority Issues

### [P1] Project pages hide evidence behind ornamental abstraction

`src/pages/projects/[slug].astro` renders generic CSS hero symbols and placeholder galleries for every project. This weakens trust and turns the Braun reference into styling rather than function. Replace each abstraction with authentic product crops, architecture/process artifacts, or carefully redacted evidence with explanatory captions.

### [P1] Practical accessibility is incomplete

No `:focus-visible`, `prefers-reduced-motion`, skip-link, `aria-pressed`, or live-region patterns exist in `src`. The theme target is 32x32px, orange-on-light contrast is 2.94:1, and theme state is not announced. Add system-wide focus, motion, target-size, contrast, and state semantics before visual polish.

### [P2] Case studies state claims but do not expose judgment

All four `src/content/projects/*.md` files share the same short paragraph-plus-“Focus” structure. Separate context, role, constraints, decisions, trade-offs, team scope, outcomes, and lessons so visitors can assess how Filip works, not only what shipped.

### [P2] Navigation lacks a professional conversion path

The homepage offers About, icon-only LinkedIn, and projects; case studies end abruptly. Add a direct contact/resume path, previous/next projects, and a concise closing invitation.

### [P2] Mobile and keyboard experiences lose useful affordances

`ProjectPreview.astro` is hover-only and disappears under 1000px. Project titles and controls remain small at narrow widths and zoom. Give keyboard focus the same preview behavior, provide meaningful inline mobile media, and use 44px minimum controls.

## Persona Red Flags

**Jordan (First-Timer):** Understands the title quickly but may not understand “agentic,” CSP, LLM, or ReactXP. Abstract project heroes give no product recognition, and there is no clear final action.

**Sam (Accessibility-Dependent):** No authored focus indicators; the 32px theme control has no announced state; repeated motion lacks reduction; the 404 changes content and redirects without a live region.

**Casey (Mobile User):** Desktop previews disappear without replacement. Dense prose, small top controls, and absent next-project links increase scrolling and backtracking.

## Minor Observations

- Muted text contrast is sound in both themes (6.25:1 light; 5.33:1 dark).
- Orange is safe on dark (5.73:1) but fails for small text on light (2.94:1).
- Static output is lean at roughly 512KB total; the portrait is about 116KB and the client router about 16KB.
- “Index” is precise but less familiar than “Home.”
- The rotating San Francisco icon is charming but does not help evaluate the work.
- The blueprint easter egg shows craft, but more detail is invested there than in case-study proof.

## Questions to Consider

- What if every decorative hero had to prove one real product decision?
- Would a design leader trust these case studies without seeing one authentic interface or artifact?
- If a hiring executive gives the site 90 seconds, where is the clearest proof of Filip’s unique leverage?
- Is Braun shaping the information architecture, or only supplying circles, rules, uppercase labels, and orange?

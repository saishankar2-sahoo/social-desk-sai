---
name: PulseFlow Clarity System
colors:
  surface: '#faf8ff'
  surface-dim: '#d2d9f4'
  surface-bright: '#faf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f3ff'
  surface-container: '#eaedff'
  surface-container-high: '#e2e7ff'
  surface-container-highest: '#dae2fd'
  on-surface: '#131b2e'
  on-surface-variant: '#464555'
  inverse-surface: '#283044'
  inverse-on-surface: '#eef0ff'
  outline: '#777587'
  outline-variant: '#c7c4d8'
  surface-tint: '#4d44e3'
  primary: '#3525cd'
  on-primary: '#ffffff'
  primary-container: '#4f46e5'
  on-primary-container: '#dad7ff'
  inverse-primary: '#c3c0ff'
  secondary: '#006591'
  on-secondary: '#ffffff'
  secondary-container: '#39b8fd'
  on-secondary-container: '#004666'
  tertiary: '#95002b'
  on-tertiary: '#ffffff'
  tertiary-container: '#bf0f3c'
  on-tertiary-container: '#ffd0d2'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e2dfff'
  primary-fixed-dim: '#c3c0ff'
  on-primary-fixed: '#0f0069'
  on-primary-fixed-variant: '#3323cc'
  secondary-fixed: '#c9e6ff'
  secondary-fixed-dim: '#89ceff'
  on-secondary-fixed: '#001e2f'
  on-secondary-fixed-variant: '#004c6e'
  tertiary-fixed: '#ffdadb'
  tertiary-fixed-dim: '#ffb2b7'
  on-tertiary-fixed: '#40000d'
  on-tertiary-fixed-variant: '#92002a'
  background: '#faf8ff'
  on-background: '#131b2e'
  surface-variant: '#dae2fd'
typography:
  display:
    fontFamily: Plus Jakarta Sans
    fontSize: 2.25rem
    fontWeight: '700'
    lineHeight: 2.75rem
    letterSpacing: -0.03em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 1.75rem
    fontWeight: '600'
    lineHeight: 2.25rem
    letterSpacing: -0.025em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 1.375rem
    fontWeight: '600'
    lineHeight: 1.75rem
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 1.25rem
    fontWeight: '600'
    lineHeight: 1.75rem
    letterSpacing: -0.02em
  title-sm:
    fontFamily: Inter
    fontSize: 0.9375rem
    fontWeight: '600'
    lineHeight: 1.375rem
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 1rem
    fontWeight: '400'
    lineHeight: 1.5rem
  body-md:
    fontFamily: Inter
    fontSize: 0.875rem
    fontWeight: '400'
    lineHeight: 1.25rem
  body-sm:
    fontFamily: Inter
    fontSize: 0.75rem
    fontWeight: '400'
    lineHeight: 1.125rem
  label-md:
    fontFamily: Inter
    fontSize: 0.8125rem
    fontWeight: '500'
    lineHeight: 1rem
    letterSpacing: -0.005em
  label-sm:
    fontFamily: Inter
    fontSize: 0.6875rem
    fontWeight: '600'
    lineHeight: 0.875rem
    letterSpacing: 0.02em
  mono-metric:
    fontFamily: Inter
    fontSize: 0.875rem
    fontWeight: '600'
    lineHeight: 1.25rem
    letterSpacing: -0.02em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1rem
  gutter-md: 1.5rem
  gutter-lg: 2rem
  margin: 1rem
  margin-md: 1.5rem
  margin-lg: 2rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 0.75rem
  space-lg: 1rem
  space-xl: 1.5rem
  space-2xl: 2rem
---

## Brand & Style
The design system embodies precision, operational focus, and velocity. Targeted at modern content creators, growth marketers, and boutique agency founders, the aesthetic removes cognitive friction across high-density content workflows. It merges the austere utility of developer tools (Linear/Vercel) with the refined transactional polish of modern financial software (Stripe).

The visual narrative relies on a pristine light architecture: expansive off-white surfaces, razor-sharp 1px structural framing, purposeful kinetic feedback, and micro-elevation shifts. Rather than relying on loud marketing gradients, the chrome remains calm and slate-toned, allowing rich media previews and vivid platform badges (YouTube, Instagram, LinkedIn, X) to deliver immediate context and visual rhythm.

## Colors
The color architecture establishes an intentional distinction between system chrome, operational states, and third-party channel identities.

### Core Architecture
- **Primary Indigo (`#4F46E5`)**: Reserved strictly for high-intent primary interactions, bulk publishing actions, key metrics, and active states.
- **Secondary Slate/Cyan (`#0EA5E9`)**: Informational indicators, content enrichment tags, and AI assistant actions.
- **Tertiary Accent (`#F43F5E`)**: High-priority alert states, destructive flows, and system blocks.
- **Neutral Core (`#0F172A`)**: Pure slate foundation providing optical contrast across borders (`#E2E8F0`), muted text (`#64748B`), and canvas background (`#F8FAFC`).

### Channel Accent Tokens
Channel indicators must retain strict brand fidelity without overpowering interface hierarchy:
- **LinkedIn**: `#0A66C2`
- **Instagram**: `#E1306C`
- **X / Threads**: `#0F1419`
- **YouTube Shorts**: `#FF0000`
- **TikTok**: `#000000` / `#FE2C55`

### Functional Lifecycle Tokens
- **Published**: Green-600 (`#16A34A`), surface Green-50 (`#F0FDF4`), border Green-200 (`#BBF7D0`)
- **Scheduled**: Indigo-600 (`#4F46E5`), surface Indigo-50 (`#EEF2FF`), border Indigo-200 (`#C7D2FE`)
- **Pending Approval**: Amber-600 (`#D97706`), surface Amber-50 (`#FFFBEB`), border Amber-200 (`#FDE68A`)
- **Draft**: Slate-500 (`#64748B`), surface Slate-100 (`#F1F5F9`), border Slate-200 (`#E2E8F0`)
- **Failed / Error**: Rose-600 (`#E11D48`), surface Rose-50 (`#FFF1F2`), border Rose-200 (`#FECDD3`)

## Typography
The system employs an authoritative duo: **Plus Jakarta Sans** for headlines and structural landmarks, bringing geometric clarity and human approachability; and **Inter** for dense dashboards, scheduling calendars, forms, and data tables.

All numeric metric readouts, reach counters, and date grids must enforce tabular figures (`font-feature-settings: 'tnum' 1, 'cv05' 1`) to eliminate character jitter during real-time synchronization. Letter spacing scales inward as font sizes scale upward to maintain visual density.

## Layout & Spacing
A strict 4px/8px mathematical foundation governs the system. Dynamic workspaces and multi-feed repurposing pipelines require efficient use of space without visual clutter.

### Grid Systems & Breakpoints
- **Mobile (<768px)**: Single column stream, 16px margins, dynamic vertical stacks for timeline cards.
- **Tablet (768px - 1199px)**: 8-column layout, 24px margins, collapsible auxiliary calendar drawer.
- **Desktop (1200px+)**: 12-column layout (max-width 1680px), fixed 260px utility sidebar, 24px–32px canvas gutters, flex multi-column post preview pipeline.

### Rhythm Principles
Interactive micro-elements (chips, buttons, icon hits) standardize on 4px (`space-xs`) and 8px (`space-sm`) internal padding. Structural card containers employ 16px (`space-lg`) to 24px (`space-xl`) internal offsets to preserve distinct operational blocks.

## Elevation & Depth
Elevation emphasizes tactile precision through crisp, ultra-fine borders paired with subtle, low-spread ambient shadows. Avoid heavy theatrical blur.

### Depth Hierarchy
1. **Base Floor (`Canvas`)**: Pure off-white `#F8FAFC`. Zero elevation, zero shadow.
2. **Layer 1 (`Surface Cards & Feeds`)**: Solid `#FFFFFF`, rimmed by an explicit `1px solid rgba(226, 232, 240, 0.8)`. Soft grounding shadow: `0 1px 2px 0 rgba(15, 23, 42, 0.04)`.
3. **Layer 2 (`Hover States & Active Draggables`)**: Content cards in kanban or repurposing streams lift on hover with `box-shadow: 0 4px 12px -2px rgba(15, 23, 42, 0.08), 0 2px 6px -1px rgba(15, 23, 42, 0.03)` with border shifting to `#CBD5E1`.
4. **Layer 3 (`Popovers & Flyouts`)**: Dropdowns, calendar pickers, and channel selectors use `box-shadow: 0 10px 25px -4px rgba(15, 23, 42, 0.1), 0 4px 10px -2px rgba(15, 23, 42, 0.04)`.
5. **Layer 4 (`Modals & Publishing Overlays`)**: Tinted scrim `rgba(15, 23, 42, 0.4)` paired with frosted backdrop blur `blur(4px)` and centered container floating with `box-shadow: 0 20px 30px -10px rgba(15, 23, 42, 0.16)`.

## Shapes
A balanced medium roundedness (`8px` base) anchors the interface. It maintains an engineered software feel without sharp harshness or overly playful geometry.

- **Base Radius (`rounded-md` / 8px)**: Default for input fields, content repurposing cards, action buttons, table rows, and dialogue surfaces.
- **Pill Radius (`rounded-full` / 9999px)**: Strictly dedicated to status badges, channel pills, tag collections, and user avatar wrappers.
- **Outer Shell Radius (`rounded-xl` / 16px)**: Complex dashboard analytics modules, unified master queue panels, and rich media transformation workspaces.

## Components

### Buttons
- **Primary**: Solid Indigo (`#4F46E5`), text `#FFFFFF`, font weight 600, height 36px, horizontal padding 14px, radius 8px. Hover shifts to `#4338CA`. Subtle inset top bevel: `box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.15)`.
- **Secondary / Outline**: `#FFFFFF` background, `1px solid #E2E8F0`, text `#0F172A`. Hover shifts surface to `#F8FAFC` and border to `#CBD5E1`.
- **Ghost**: Zero border, transparent fill. Active/Hover reveals `#F1F5F9`.

### Badges & Status Chips
Always styled as rounded pills (`rounded-full`) with a height of 22px, `label-sm` font, and 8px horizontal padding:
- Accompanied by a 6px solid dot indicator or direct platform SVG icon (12px).
- Composed of a 50-tint background with matching 200-tint border and 700-tint text (e.g., Scheduled: bg `#EEF2FF`, border `#C7D2FE`, text `#4338CA`).

### Channel Repurposing Cards
- Surface: `#FFFFFF` encased in `1px solid rgba(226, 232, 240, 0.85)`.
- Header: Left-aligned platform avatar pill + target handle, right-aligned status chip and character limit ticker.
- Content zone: Multi-line rich text editor supporting variable token tags (e.g., `{hook}`, `{link}`, `{cta}`).
- Footer: Media attachment bar with aspect ratio lock badges (`9:16`, `1:1`, `16:9`) and time-delay republish offsets.

### Form Inputs & Selectors
- Standard height: 38px, radius 8px, font size 14px.
- Idle state: `1px solid #CBD5E1`, surface `#FFFFFF`, placeholder `#94A3B8`.
- Focus state: Border shifts to `#4F46E5` with an outer glow: `box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.12)`.
- Monospace counters on bottom right indicate real-time platform constraints (e.g., `242 / 280`).

### Selection Controls
- **Checkboxes**: 16x16px, 4px border-radius. Inactive border `#CBD5E1`. Checked state transitions to `#4F46E5` with a sharp white checkmark vector.
- **Radio Buttons**: 16x16px circular toggle, centered 6px primary dot when active.

### Multi-Channel Queue Matrix
- Compact horizontal scheduling rows. 
- Left-aligned drag handle, followed by synchronized time slot, multi-channel avatar stack, content snippet with inline media thumbnail (40x40px, 6px radius), and status pill.
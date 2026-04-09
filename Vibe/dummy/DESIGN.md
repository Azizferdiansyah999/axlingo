# Design System Strategy: The Neon Pulse

## 1. Overview & Creative North Star
**Creative North Star: "The Digital Kineticist"**

This design system moves away from the static, boxy structures of traditional education apps and instead embraces the high-octane energy of a gaming HUD (Heads-Up Display). We are creating an environment that feels less like a classroom and more like a command center. 

To break the "template" look, the system utilizes **Intentional Asymmetry** and **Dynamic Layering**. By overlapping glass containers and using high-contrast typography scales, we create a sense of forward motion. Elements should feel like they are floating in a dark, midnight ether, illuminated by the internal "power source" of the neon accents. This is a high-tech, editorial approach to learning—sophisticated enough for modern teens, but visually stimulating enough to compete with their favorite gaming titles.

---

### 2. Colors & Surface Philosophy

The color strategy is built on a "Midnight-Neon" contrast. The core background is deep and immersive, allowing the interactive elements to "pop" with an almost radioactive intensity.

*   **Primary (`#5cb8fd`):** The "Interactive Energy." Used for the most critical actions and primary navigation paths.
*   **Secondary (`#e67aff`):** The "Brand Soul." Used for achievement highlights, progress streaks, and branding accents.
*   **Tertiary (`#c3ffcd`):** The "Success Signal." Reserved for positive reinforcement, correct answers, and growth metrics.
*   **Neutral (`#0e0e0e`):** The "Midnight Ether." The deep, immersive background for the entire application.

**The "No-Line" Rule**
Sectioning is never achieved through 1px solid lines. We define boundaries through **Tonal Shifts**. To separate a sidebar from a main feed, transition from `surface` to `surface-container-low`. Solid lines are considered "analog noise" and are prohibited for structural division.

**Surface Hierarchy & Nesting**
Treat the UI as a series of stacked, translucent plates.
1.  **Base:** `surface` (#0e0e0e - aligned with `neutral_color_hex`)
2.  **Sectioning:** `surface-container-low` for large content areas.
3.  **Interactive Cards:** `surface-container-highest` to bring critical content "closer" to the user.

**The "Glass & Gradient" Rule**
For top-tier prominence (e.g., a "New Level Unlocked" modal), use Glassmorphism. Apply `surface_variant` at 40% opacity with a `20px` backdrop blur. Enhance this with a **Signature Texture**: a linear gradient from `primary` to `primary_container` at a 10% opacity overlay to give the glass a "charged" feel.

---

### 3. Typography: The Bold Editorial

We use a high-contrast pairing to balance technical precision with readability.

*   **Display & Headlines (Space Grotesk):** This is our "Tech-Voice." It is wide, bold, and unapologetically digital. Use `display-lg` for gamified milestones and `headline-md` for screen titles. The tight tracking and bold weight mimic premium editorial layouts.
*   **Body & Titles (Be Vietnam Pro):** Our "Human-Voice." This sans-serif provides the necessary legibility for learning complex grammar or vocabulary. `body-lg` is the workhorse for lesson content.

**Hierarchy Strategy:** 
Use extreme scale. Pair a `display-sm` streak number with a `label-sm` caption. The vast difference in size creates a professional, "designed" look that distinguishes the app from generic utility tools.

---

### 4. Elevation & Depth

In a cyberpunk environment, depth is light.

*   **The Layering Principle:** Instead of shadows, use **Value Stepping**. A `surface-container-high` element placed on a `surface` background creates a natural, crisp lift.
*   **Ambient Glows:** Traditional black shadows are banned. When a floating state is required (e.g., a dragged vocabulary card), use a shadow tinted with the component's accent color (e.g., a 4% `primary` glow) with a `32px` blur. 
*   **The "Ghost Border" Fallback:** For buttons or inputs that need to stand out against busy backgrounds, use a "Ghost Border": `outline-variant` at 15% opacity. This provides a structural hint without "locking" the element in a heavy box.
*   **Neon Highlights:** Use 2px "Top-Stroke" highlights on containers—a subtle line of `primary` or `secondary` only at the top edge of a card to simulate an overhead neon light source.

---

### 5. Components

**Buttons (The Power Cells)**
*   **Primary:** Solid `primary` background. No border. On-hover, apply a `primary_dim` outer glow (8px blur).
*   **Secondary:** Glass-style. `surface-container-high` at 50% opacity with a `primary` Ghost Border.
*   **Tertiary:** All-caps `label-md` text using `primary` color, no container.

**Input Fields (The Data Ports)**
*   Use `surface-container-lowest` as the field background. 
*   **Active State:** The bottom border transforms into a 2px `primary` neon glow.
*   **Error State:** The glow shifts to `error_dim` (#d73357).

**Cards & Lists**
*   **Strict Rule:** No dividers. Use 24px vertical padding (`spacing-xl`) or a subtle shift to `surface-container-low` to distinguish list items.
*   **Progress Cards:** Use a gradient fill for progress bars (from `secondary` to `primary`) to visualize the "energy" of learning.

**Learning Chips**
*   Small, `sm` rounded corners.
*   Unselected: `surface-container-high`.
*   Selected: `primary` background with `on-primary` text.

---

### 6. Do's and Don'ts

**Do:**
*   **Do** use asymmetrical layouts (e.g., a 60/40 split for lesson content) to keep the eye moving.
*   **Do** use `backdrop-blur` on all floating navigation bars to maintain the "midnight" depth.
*   **Do** lean into the "Neon Emerald" (`tertiary`) for all micro-interactions involving "Correct" answers—make success feel like a power-up.

**Don't:**
*   **Don't** use pure white (#FFFFFF) for body text; use `on_surface_variant` (#adaaaa) to reduce eye strain against the charcoal background.
*   **Don't** use 90-degree sharp corners; stick to the `md` (0.375rem) or `lg` (0.5rem) roundedness scale to keep the tech feeling "designed" rather than "brutalist."
*   **Don't** use standard drop shadows. If it doesn't look like it's emitting light, it doesn't belong in the midnight aesthetic.
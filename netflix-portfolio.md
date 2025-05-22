# Netflix-Style Portfolio Landing Page

## UI Structure

### Screen 1: Landing Page
- **Background:** Full black (#141414)
- **Centered Name:** "Soham Juneja" in large, bold, Netflix red (#E50914), using Netflix Sans or closest alternative (e.g., Bebas Neue, Arial Black, or sans-serif fallback)
- **Text Effects:** Slight bottom curve, subtle shadow/glow for depth
- **Hint Text:** Small, subtle hint at the bottom: "Click anywhere or press any key to continue"

### Cinematic Transition
- On click or key press:
  - Red text scales up (125-150%)
  - Moves forward in 3D (z-axis transform, perspective)
  - Shadow grows as text comes forward
  - Fades out at max scale
  - Smooth transition to Screen 2

### Screen 2: Profile Selection
- **Title:** "Select Your Experience" in Netflix-style typography
- **Avatars:** 4 rounded-square avatars, centered, with the following:
  1. Developer (dark blue, tech icon)
  2. Designer (purple, creativity icon)
  3. Projects (red, code/work icon)
  4. Contact (orange, communication icon)
- **Avatar Effects:**
  - Hover: scale up (110%), subtle border
  - Click: triggers page transition
- **Responsive:**
  - Avatars stack vertically on mobile
  - Netflix aesthetic maintained across all sizes

## Major Design Elements
- Netflix Sans or closest alternative for all major text
- Signature Netflix red (#E50914) for primary highlights
- Use of Framer Motion for all transitions and avatar hover/click effects
- Tailwind CSS for layout, color, and responsive design

---

**Next Steps:**
- Implement Landing and Profile screens as React components
- Use Framer Motion for cinematic transition
- Ensure mobile responsiveness and Netflix-style polish

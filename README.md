# michaelkaffel.com

Personal portfolio site for Michael Kaffel — QA engineer and full-stack developer.

**Live at:** [michaelkaffel.com](https://michaelkaffel.com)

---

## Stack

- **Framework:** Vite + React 18
- **Routing:** React Router v7
- **Styling:** Tailwind CSS v3 with CSS custom properties for theming
- **Icons:** react-icons
- **Email:** EmailJS (contact form)
- **Deployment:** Vercel (auto-deploy on push to `main`)

---

## Pages

| Route | Description |
|---|---|
| `/` | Hero with background image, skills ticker, and project highlights |
| `/about` | Background, approach, and tools |
| `/projects` | Featured projects with tech stack and links |
| `/qa-testing` | QA background, testing philosophy, and Playwright work |
| `/contact` | EmailJS-powered contact form |

---

## Features

### Design System
All brand colors are defined as CSS custom properties in `:root` and consumed by Tailwind via mapped variable references. The palette is built around deep moss tones with amber reserved for CTAs and primary actions, and green as the main accent. Headings and body text use the same token system, making global adjustments a single-file change.

### Hero
The homepage hero uses a bark/forest background image with a dark overlay. A horizontally scrolling CSS ticker displays technology icons via react-icons, built from a duplicated array to create a seamless loop using a `translateX` keyframe animation.

### ShimmerTags
A custom `ShimmerTags` component applies a sequential brightness-transition glow effect to skill and technology tags. A `subtle` prop variant is used on the homepage for a more restrained effect.

### Contact Form
The contact form is wired to EmailJS and sends messages directly to email without a backend. Form state is managed with React controlled inputs.

### Navigation
All five routes share a consistent navbar with the MK mountain-peak logo. A `useDocumentTitle` hook sets the page title on every route. A `vercel.json` SPA rewrite ensures direct URL navigation works in production.

---

## Local Development

```bash
npm install
npm run dev
```

Requires a `.env` file with EmailJS credentials:

```
VITE_EMAILJS_SERVICE_ID=
VITE_EMAILJS_TEMPLATE_ID=
VITE_EMAILJS_PUBLIC_KEY=
```

---

## Author

[Michael Kaffel](https://michaelkaffel.com)

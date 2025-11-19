# Axel Trepout – Portfolio

Personal portfolio built with React, TypeScript and Vite to showcase my background, projects and skills with a modern, animated experience.

https://github.com/axel-tpt

---

## ✨ Highlights

- **Hero / About / Projects / Experience / Skills / Contact** sections rendered inside a responsive layout.
- **Dynamic data** (bio, projects, experiences, skills) sourced from `src/data`.
- **Dark & light themes** with smooth transitions and a reusable theme provider.
- **French & English** locales powered by `react-i18next`.
- **Animated background** with floating gradients, beams and particles plus scroll-triggered cards.
- **Reusable UI kit** (`Button`, `Card`, `AnimatedCard`, `SectionTitle`, etc.) built on Tailwind CSS.
- **Maintenance mode** toggleable via environment variable to display a “Site en construction” page instantly.

---

## 🛠 Tech Stack

- React 18 + TypeScript
- Vite
- Tailwind CSS
- react-i18next
- ESLint + TypeScript configs from Vite starter

---

## 🚀 Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start dev server (http://localhost:5173)
npm run dev

# 3. Build for production
npm run build

# 4. Preview production build
npm run preview
```

Node 18+ is recommended to match Vite’s requirements.

---

## ⚙️ Environment Variables

Create a `.env` file at the project root to override defaults.

```bash
# Enable “site under construction” mode
VITE_SITE_UNDER_CONSTRUCTION=true
```

When the flag is `true` (or `1`), `App.tsx` renders the dedicated `UnderConstruction` page instead of the main layout. Remove the variable or set it to `false` to restore the full portfolio. Restart the dev server if the value changes while it’s running.

---

## 🧱 Project Structure (partial)

```
src/
├─ components/
│  ├─ AnimatedBackground.tsx
│  ├─ Layout.tsx
│  └─ ui/
│     ├─ AnimatedCard.tsx
│     ├─ Button.tsx
│     ├─ Card.tsx
│     └─ SectionTitle.tsx
├─ data/
│  ├─ about.ts
│  ├─ projects.ts
│  ├─ experience.ts
│  └─ skills.ts
├─ i18n/
│  ├─ en/common.json
│  └─ fr/common.json
├─ pages/
│  ├─ AboutMe.tsx
│  ├─ Projects.tsx
│  ├─ Experience.tsx
│  ├─ Skills.tsx
│  └─ UnderConstruction.tsx
├─ config/
│  └─ siteStatus.ts
└─ App.tsx
```

---

## 🌍 Internationalisation

- Namespace `common` centralises strings for both locales.
- `useTranslation('common')` is used by pages/components.
- To add translations, edit `src/i18n/en/common.json` and `src/i18n/fr/common.json` (keeping keys in sync).

---

## 🧩 Customization Tips

- Update personal information and copy inside `src/data/*`.
- Replace placeholder media (e.g. About section image) with your assets.
- Tailwind design tokens can be tweaked inside `tailwind.config.js`.
- Additional sections can be created inside `src/pages` and wired into `App.tsx`.

---

## 📬 Contact

- LinkedIn: https://www.linkedin.com/in/axel-trepout/
- GitHub: https://github.com/axel-tpt
- Email: axel.trepout@gmail.com

Feel free to fork, adapt or reach out if you have feedback! 👋

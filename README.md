# ByteSpace — Modern E-Learning & Creator Marketplace Platform

[![Next.js](https://img.shields.io/badge/Next.js-16.3.6-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.8-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Zod](https://img.shields.io/badge/Zod-v4-3E67B1?style=for-the-badge&logo=zod&logoColor=white)](https://zod.dev/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

**ByteSpace** is a high-performance, responsive e-learning and creator marketplace platform built with **Next.js 16 (App Router)**, **React 19**, **TypeScript**, and **Tailwind CSS v4**. Engineered with production-grade modular architecture, it delivers a sleek modern UI with fluid animations, rich course discovery, creator portfolio hubs, a persistent cart with promo code engine, learner dashboards, and user authentication flows.

---

## 📑 Table of Contents

- [Overview & Highlights](#-overview--highlights)
- [Key Features](#-key-features)
- [Tech Stack & Tooling](#-tech-stack--tooling)
- [Folder & Architecture Structure](#-folder--architecture-structure)
- [Application Route Map](#-application-route-map)
- [State Management & Contexts](#-state-management--contexts)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
  - [Running the App](#running-the-app)
- [Testing & Demo Data](#-testing--demo-data)
- [Design Tokens & Theme](#-design-tokens--theme)
- [Available Scripts](#-available-scripts)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🌟 Overview & Highlights

- **Server-First Architecture:** Built on Next.js App Router with React Server Components (RSC) by default for lightning-fast initial page loads and optimal SEO.
- **Modern Creator Economy:** Designed specifically for digital course creators and ambitious students with intuitive course exploration, instructor showcases, and seamless checkout.
- **Production-Ready Codebase:** Features strict TypeScript types, centralized route definitions, modular service layers, and schema-validated forms using Zod.
- **Client State Resilience:** LocalStorage-backed state for user authentication, wishlist bookmarks, and interactive shopping cart with discount voucher calculations.
- **Design System:** Electric Lime (`#CBFC01`) and Electric Blue (`#0052FE`) accents, custom typography, micro-interactions, and responsive layout across all screen breakpoints.

---

## ✨ Key Features

### 1. 🏠 Landing & Discovery Experience (`/`)
- **Hero Stage:** Interactive 3D floating badges, live learner statistics, dynamic CTAs, and avatar stacks.
- **Brand Partners Strip:** Clean marquee showcasing industry-leading design and tech partners.
- **Featured Course Grid:** Live preview of trending courses with instructor metadata, ratings, and price tags.
- **Curated Learning Paths:** Structured tracks in UI/UX Design, Full-Stack Development, Digital Marketing, and Product Management.
- **Growth & Creator Management:** Informational sections highlighting platform reach, creator benefits, and teaching opportunities.
- **Social Proof:** Testimonial carousel and review cards from satisfied students.

### 2. 📚 Course Catalog & Search (`/courses`)
- **Live Search & Filter:** Instant search by keywords and filter by categories (*Design, Development, Business, Marketing*) and difficulty levels (*Beginner, Intermediate, Advanced*).
- **Sorting Options:** Sort courses by highest rated, newest, or price (low-to-high / high-to-low).
- **Interactive Course Cards:** Hover states, duration, lesson count, student avatars, wishlist toggle, and "Add to Cart" button.

### 3. 📖 Course Details & Curriculum (`/courses/[slug]`)
- **Comprehensive Syllabus:** Expandable curriculum modules with individual lesson durations and overview.
- **Creator Bio Card:** Direct access to creator info, rating, and follower count.
- **Action Sidebar:** Sticky purchase card, enrollment CTA, lifetime access guarantees, and direct cart integration.
- **Student Reviews:** Breakdown of student ratings, written reviews, and verified badges.
- **Related Courses:** Recommended courses within the same domain.

### 4. 🎨 Creator Portfolio Hub (`/creators/[id]`)
- **Creator Profile:** Banner, avatar, biography, follower statistics, and total published courses count.
- **Social & Follow Action:** Interactive "Follow / Following" toggle button with instant follower count updates.
- **Creator Course Catalog:** Grid displaying all courses authored by the selected creator.

### 5. 🛒 Shopping Cart & Coupon Engine (`/cart`)
- **Cart Management:** Add, remove, and review course items with quantities and totals.
- **Voucher / Promo Engine:** Instant coupon validation supporting dynamic percentage discounts with immediate recalculation.
- **Summary Breakdown:** Transparent display of subtotal, voucher savings, platform discount, estimated taxes, and final total.
- **Persistent Storage:** Keeps cart items and applied vouchers preserved across page reloads via `localStorage`.

### 6. 📊 Learner Dashboard (`/dashboard`)
- **Progress Tracking:** In-progress course cards showing real completion percentages and last accessed timestamps.
- **Wishlist Manager:** Dedicated tab to manage and launch courses saved for later.
- **Certificates Hub:** View and trigger PDF downloads for earned course completion certificates.
- **Learning Streak & Analytics:** Metrics cards displaying total enrolled courses, hours learned, and certificates.

### 7. 🔐 Authentication Suite (`/(auth)`)
- **Sign In (`/login`):** Zod-validated email and password inputs, error states, and remember-me option.
- **Sign Up (`/register`):** Full name, email, and password registration with schema validation.
- **Password Recovery (`/forgot-password`):** Password reset request workflow.
- **Global Toast Alerts:** Floating animated toast notifications for all major feedback events (cart updates, wishlist actions, auth success).

---

## 🚀 Tech Stack & Tooling

| Layer | Technology | Version | Purpose |
| :--- | :--- | :--- | :--- |
| **Framework** | [Next.js](https://nextjs.org/) (App Router) | `16.3.6` | React server framework with file-system routing & Turbopack |
| **Library** | [React](https://react.dev/) | `19.2.8` | Core UI library with modern Concurrent & Server features |
| **Language** | [TypeScript](https://www.typescriptlang.org/) | `5.x` | Strict type-safety across props, API responses, and models |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) | `4.x` | Modern utility-first CSS framework via `@tailwindcss/postcss` |
| **Validation** | [Zod](https://zod.dev/) | `4.6.5` | TypeScript-first schema declaration and data validation |
| **Icons** | [Lucide React](https://lucide.dev/) | `^1.48.0` | Crisp, tree-shakeable SVG icon collection |
| **Utilities** | `clsx` & `tailwind-merge` | Latest | Conditional and conflict-free class combining (`cn`) |
| **Linting** | [ESLint](https://eslint.org/) | `9.x` | Next.js core Web Vitals and code standard enforcement |

---

## 📁 Folder & Architecture Structure

```text
bytespace-new/
├── public/                       # Static public assets (images, icons, vectors)
├── src/
│   ├── app/                      # Next.js App Router (Pages, Layouts & Route Groups)
│   │   ├── (auth)/               # Route Group: Isolated Authentication Pages
│   │   │   ├── forgot-password/  # Password reset page
│   │   │   ├── login/            # Login page & client form
│   │   │   └── register/         # User registration page & client form
│   │   ├── (dashboard)/          # Route Group: Protected Dashboard Layout
│   │   │   ├── dashboard/        # Learner overview, enrolled courses & certificates
│   │   │   └── layout.tsx        # Dashboard layout with sidebar navigation
│   │   ├── cart/                 # Shopping Cart & Checkout Overview (`/cart`)
│   │   ├── courses/              # Course Catalog & Discovery (`/courses`)
│   │   │   ├── [slug]/           # Dynamic Course Syllabus & Detail Page
│   │   │   └── page.tsx          # Catalog listing with search & filters
│   │   ├── creators/             # Creator Directory (`/creators`)
│   │   │   └── [id]/             # Dynamic Creator Portfolio Page
│   │   ├── error.tsx             # Global Route Error Boundary
│   │   ├── globals.css           # Global Tailwind CSS v4 styling rules
│   │   ├── layout.tsx            # Root Application Layout (Fonts, Context Providers)
│   │   ├── loading.tsx           # Suspense fallback skeleton loader
│   │   ├── not-found.tsx         # Custom 404 Not Found Page
│   │   └── page.tsx              # Home / Landing Page
│   │
│   ├── components/               # Modular UI Components
│   │   ├── home/                 # Landing-specific blocks (Hero, Courses, Testimonials, etc.)
│   │   ├── shared/               # Universal UI (Navbar, Footer, Logo, AuthVisualStack)
│   │   └── ui/                   # Reusable atomic UI (Button, Input, CourseCard, Badges)
│   │
│   ├── constants/                # App-wide Static Configurations
│   │   ├── mock-data.ts          # Seed data for courses, creators, reviews, and testimonials
│   │   ├── routes.ts             # Type-safe application route mapping object
│   │   └── site-config.ts        # App metadata and social links
│   │
│   ├── context/                  # React Context Providers for Global State
│   │   ├── auth-context.tsx      # User profile, login/logout, and wishlist storage
│   │   ├── cart-context.tsx      # Cart item mutations, promo code engine, and totals
│   │   └── toast-context.tsx     # Animated bottom-right feedback notifications
│   │
│   ├── data/                     # Data definitions and category constants
│   ├── features/                 # Domain-driven feature modules (Auth schemas & components)
│   ├── hooks/                    # Reusable React hooks (useClickOutside, useScrollReveal)
│   ├── lib/                      # Shared helper utilities & fetcher clients
│   │   ├── fetcher.ts            # Type-safe API wrapper
│   │   └── utils.ts              # Tailwind class merge helper (`cn`)
│   ├── services/                 # Service layer for Courses and Creators
│   └── types/                    # TypeScript interfaces (Course, Creator, User, Pagination)
│
├── .env.example                  # Environment variable blueprint
├── next.config.ts                # Next.js configuration
├── package.json                  # Dependencies and script definitions
├── postcss.config.mjs            # PostCSS configuration for Tailwind v4
└── tsconfig.json                 # TypeScript compiler configuration
```

---

## 🗺️ Application Route Map

| Route Path | Type | Description |
| :--- | :--- | :--- |
| `/` | Public | High-converting landing page with 3D hero stage, course previews, and reviews |
| `/courses` | Public | Filterable course directory with category tags, level pills, and price sorting |
| `/courses/[slug]` | Public | Dynamic course page with module breakdown, instructor card, and enrollment CTA |
| `/creators/[id]` | Public | Creator showcase page with bio, follower stats, and authored courses |
| `/cart` | Public | Shopping cart with discount coupon validation and order calculation |
| `/dashboard` | Protected / User | Enrolled courses tracking, progress percentages, certificates, and saved wishlist |
| `/login` | Auth | User authentication sign-in page with Zod schema validation |
| `/register` | Auth | User account creation page |
| `/forgot-password` | Auth | Account recovery / password reset flow |

---

## ⚡ State Management & Contexts

The application utilizes clean React Context providers wrapped in `src/app/layout.tsx`:

1. **`CartContext` (`src/context/cart-context.tsx`)**:
   - Manages items, quantity, subtotal, and total price calculation.
   - Handles coupon discount verification and calculation.
   - Automatically synchronizes with browser `localStorage`.

2. **`AuthContext` (`src/context/auth-context.tsx`)**:
   - Manages active user profile, login state, and role.
   - Stores and toggles course wishlist IDs (`localStorage` persisted).

3. **`ToastContext` (`src/context/toast-context.tsx`)**:
   - Global notification dispatcher (`showToast(message, 'success' | 'info' | 'warning')`).
   - Smoothly displays non-blocking animated alert cards.

---

## 🛠️ Getting Started

### Prerequisites

Ensure you have the following installed on your operating system:
- **Node.js**: `v18.18.0` or higher (Node `v20.x` or `v22.x` recommended)
- **Package Manager**: `npm` (v9+), `pnpm`, or `yarn`

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Mohosin075/bytespace-frontend.git
   cd bytespace-frontend
   ```

2. **Install project dependencies:**
   ```bash
   npm install
   ```

### Environment Variables

Copy the template environment file to create your local environment:

```bash
cp .env.example .env.local
```

Configure the following variables in `.env.local`:

```env
# Application Public API URL
NEXT_PUBLIC_API_URL=https://api.example.com

# Site Base URL
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### Running the App

Run the development server with Next.js Turbopack:

```bash
npm run dev
```

Open your browser and navigate to:
```
http://localhost:3000
```

---

## 🧪 Testing & Demo Data

### 🏷️ Working Promo / Discount Codes
You can test the checkout discount engine on `/cart` with any of the following pre-configured promo codes:

| Promo Code | Discount | Description |
| :--- | :--- | :--- |
| `BYTESPACE20` | **20% OFF** | Standard platform discount |
| `SAVE20` | **20% OFF** | Promotional saving voucher |
| `HALF50` | **50% OFF** | Special half-price campaign voucher |
| `BYTESPACE50` | **50% OFF** | Special platform partner voucher |

### 👤 Demo Authentication
- The login and register pages (`/login`, `/register`) are active with client-side Zod validation.
- Entering any valid email address and password will log you in as a **Pro Member / Student** and persist your session in the browser.

---

## 🎨 Design Tokens & Theme

The project follows a modern tech aesthetic:

- **Primary Brand Color:** `#0052FE` (Electric Royal Blue)
- **Accent Glow:** `#CBFC01` (Electric Lime / Neon Yellow)
- **Neutral Dark:** `#0B0F17` / `#111827` (Deep Slate / Charcoal)
- **Backgrounds:** Clean white (`#FFFFFF`) with subtle soft grid patterns (`bg-hero-grid`)
- **Typography:**
  - Headings: `font-poppins` (Poppins Bold & Semi-bold)
  - Body & UI: `font-satoshi` / `font-sans` (Satoshi / Inter clean sans-serif)

---

## 📜 Available Scripts

| Command | Purpose |
| :--- | :--- |
| `npm run dev` | Runs the Next.js development server at `localhost:3000` |
| `npm run build` | Builds the optimized production build |
| `npm run start` | Runs the production server after building |
| `npm run lint` | Runs ESLint to check for code quality and style standards |

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!
Feel free to check the [issues page](https://github.com/Mohosin075/bytespace-frontend/issues).

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'feat: Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

<p align="center">
  Crafted with care by <strong>ByteSpace Team</strong> &bull; Powered by Next.js & React 19
</p>

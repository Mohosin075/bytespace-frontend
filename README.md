# ByteSpace — Modern Next.js Production Architecture

A high-performance, scalable, and feature-driven web application built with **Next.js (App Router)**, **TypeScript**, **Tailwind CSS**, and **Zod**. Engineered with industry-standard modular architecture for maximum maintainability, clean code separation, and reusability.

---

## 🚀 Tech Stack & Core Libraries

- **Framework:** [Next.js 15+ (App Router)](https://nextjs.org/)
- **Language:** [TypeScript](https://www.typescriptlang.org/) (Strict Mode)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Form & Validation:** [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)
- **UI & Icons:** Custom Reusable UI Components + [Lucide React](https://lucide.dev/)
- **Utility Helpers:** `clsx` & `tailwind-merge` (`cn` helper)

---

## 📁 Project Architecture & Folder Structure

This project follows a **Feature-Based / Domain-Driven Modular Architecture**. Business logic, API services, and UI components are scoped within their respective feature modules under `@/features`, promoting scalability and isolated code responsibility.

```text
bytespace-new/
├── src/
│   ├── app/                      # Next.js App Router (Routes & Layouts)
│   │   ├── (auth)/               # Route Group: Auth pages (login, register)
│   │   │   └── login/
│   │   │       └── page.tsx
│   │   ├── (dashboard)/          # Route Group: Dashboard Layout & Overview
│   │   │   ├── dashboard/
│   │   │   │   └── page.tsx
│   │   │   └── layout.tsx
│   │   ├── layout.tsx            # Root Layout (Inter Font & Global Meta)
│   │   ├── page.tsx              # Landing Hero Page
│   │   ├── loading.tsx           # Global Loading Suspense UI
│   │   └── error.tsx             # Global Error Boundary
│   │
│   ├── components/               # Reusable & Shared Components
│   │   ├── ui/                   # Atomic UI primitives (Button, Input, Card)
│   │   ├── shared/               # Global Layout UI (Navbar, Footer, Sidebar)
│   │   └── feedback/             # Spinners, Toast, Skeleton loaders
│   │
│   ├── features/                 # Modular Feature Blocks (Domain Logic)
│   │   └── auth/                 # Auth Feature Block
│   │       ├── components/       # LoginForm, RegisterForm UI
│   │       ├── services/         # Auth API Requests / Server Actions
│   │       ├── validators/       # Zod schemas (loginSchema, registerSchema)
│   │       └── types/            # Auth specific interfaces
│   │
│   ├── lib/                      # Core Libraries & Configurations
│   │   ├── utils.ts              # Tailwind class merger (cn helper)
│   │   └── fetcher.ts            # Type-safe API Client wrapper
│   │
│   ├── constants/                # Centralized App Constants
│   │   ├── routes.ts             # Strongly-typed Route paths
│   │   └── site-config.ts        # App Meta configurations
│   │
│   └── types/                    # Common / Shared TypeScript Definitions
│       └── index.ts              # Global API Response, User, Pagination types
│
├── public/                       # Static Assets
├── .env.example                  # Environment Template
├── next.config.ts                # Next.js Configuration
├── tailwind.config.ts            # Tailwind CSS Configuration
├── tsconfig.json                 # TypeScript Configuration
└── package.json                  # Dependencies & Scripts
```

---

## ✨ Key Features & Best Practices

1. **React Server Components (RSC) First:** All components are Server Components by default. Client directives (`'use client'`) are strictly limited to interactive leaf components for optimal performance and SEO.
2. **Type-Safe Form Validation:** Built-in form schema validation using Zod with React Hook Form compatibility.
3. **Reusable Component System:** Modular UI components in `src/components/ui/` built with variant properties and accessible focus states.
4. **Clean API Fetcher:** Standardized `fetcher` wrapper providing custom headers, parameter handling, and unified error catching.
5. **Centralized Route Management:** Route paths are managed via `ROUTES` constants in `src/constants/routes.ts` to prevent broken links.

---

## 🛠️ Getting Started

### Prerequisites

Ensure you have **Node.js 18.x** or higher installed on your machine.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Mohosin075/bytespace-frontend.git
   cd bytespace-frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up Environment Variables:**
   Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

4. **Run the Development Server:**
   ```bash
   npm run dev
   ```

5. **Open in Browser:**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

---

## 🧪 Available Scripts

In the project directory, you can run:

- `npm run dev`: Starts the development server with Turbopack.
- `npm run build`: Compiles and optimizes the application for production.
- `npm run start`: Starts the production server after building.
- `npm run lint`: Runs ESLint to inspect code quality and formatting errors.

---

## 📜 License

This project is licensed under the MIT License.

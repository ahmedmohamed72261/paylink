# PayLink Project

A modern Next.js application built with TypeScript, Tailwind CSS, and Radix UI components.

## 🏗️ Project Structure

```
paylink/
├── 📁 app/                     # Next.js App Router
│   ├── 📁 about/              # About page
│   ├── 📁 admin/              # Admin dashboard
│   ├── 📁 api/                # API routes
│   ├── 📁 api-docs/           # API documentation
│   ├── 📁 auth/               # Authentication pages
│   ├── 📁 blog/               # Blog pages
│   ├── 📁 careers/            # Careers page
│   ├── 📁 contact/            # Contact page
│   ├── 📁 dashboard/          # User dashboard
│   ├── 📁 faq/                # FAQ page
│   ├── 📁 help/               # Help pages
│   ├── 📁 how-it-works/       # How it works page
│   ├── 📁 paylink/            # PayLink specific pages
│   ├── 📁 privacy/            # Privacy policy
│   ├── 📁 status/             # Status page
│   ├── 📁 templates/          # Template pages
│   ├── 📁 terms/              # Terms of service
│   ├── 📄 globals.css         # Global styles
│   ├── 📄 layout.tsx          # Root layout
│   ├── 📄 page.tsx            # Home page
│   └── 📄 sitemap.ts          # Sitemap generation
│
├── 📁 components/              # Reusable React components
│   ├── 📁 dashboard/          # Dashboard-specific components
│   ├── 📁 ui/                 # UI components (shadcn/ui)
│   ├── 📄 auth-provider.tsx   # Authentication provider
│   ├── 📄 main-footer.tsx     # Main footer component
│   ├── 📄 main-header.tsx     # Main header component
│   ├── 📄 theme-provider.tsx  # Theme provider
│   └── 📄 whatsapp-button.tsx # WhatsApp integration
│
├── 📁 lib/                    # Utility functions and configurations
├── 📁 hooks/                  # Custom React hooks
├── 📁 actions/                # Server actions
├── 📁 public/                 # Static assets
├── 📁 styles/                 # Additional stylesheets
├── 📁 tests/                  # Test files
│
├── 📄 package.json            # Dependencies and scripts
├── 📄 tsconfig.json           # TypeScript configuration
├── 📄 tailwind.config.ts      # Tailwind CSS configuration
├── 📄 next.config.mjs         # Next.js configuration
├── 📄 postcss.config.mjs      # PostCSS configuration
└── 📄 components.json         # shadcn/ui configuration
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, or pnpm

### Installation
```bash
# Install dependencies
npm install
# or
pnpm install

# Run development server
npm run dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 Tech Stack

- **Framework**: Next.js 15.2.4 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI + shadcn/ui
- **Forms**: React Hook Form + Zod
- **Animation**: Framer Motion
- **Icons**: Lucide React

## 🗂️ File Organization Guidelines

### 📁 App Directory (`/app`)
- Each folder represents a route
- Use `page.tsx` for page components
- Use `layout.tsx` for shared layouts
- Use `loading.tsx` for loading states
- Use `error.tsx` for error boundaries
- API routes go in `/app/api`

### 📁 Components (`/components`)
- **UI Components** (`/components/ui`): Reusable UI primitives
- **Feature Components** (`/components/[feature]`): Feature-specific components
- **Layout Components**: Header, Footer, Navigation
- **Provider Components**: Context providers

### 📁 Lib (`/lib`)
- Utility functions
- API clients
- Database configurations
- Validation schemas
- Constants

### 📁 Hooks (`/hooks`)
- Custom React hooks
- Reusable stateful logic

### 📁 Actions (`/actions`)
- Server actions for form handling
- Database operations
- External API calls

## 🎨 Styling Guidelines

### Tailwind CSS
- Use Tailwind utility classes
- Create custom components for repeated patterns
- Use CSS variables for theming
- Follow mobile-first responsive design

### Component Structure
```tsx
// components/ui/button.tsx
import { cn } from "@/lib/utils"

interface ButtonProps {
  variant?: "default" | "destructive" | "outline"
  size?: "default" | "sm" | "lg"
  // ... other props
}

export function Button({ 
  className, 
  variant = "default", 
  size = "default",
  ...props 
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-md",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    />
  )
}
```

## 🔧 Development Scripts

```bash
# Development
npm run dev          # Start development server

# Building
npm run build        # Build for production
npm run start        # Start production server

# Code Quality
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript compiler
```

## 📝 Naming Conventions

### Files and Folders
- **Pages**: `kebab-case` (e.g., `how-it-works/`)
- **Components**: `PascalCase` (e.g., `UserProfile.tsx`)
- **Utilities**: `camelCase` (e.g., `formatCurrency.ts`)
- **Constants**: `UPPER_SNAKE_CASE` (e.g., `API_ENDPOINTS.ts`)

### Code
- **Components**: `PascalCase`
- **Functions**: `camelCase`
- **Variables**: `camelCase`
- **Constants**: `UPPER_SNAKE_CASE`
- **Types/Interfaces**: `PascalCase`

## 🔒 Environment Variables

No environment variables are required for this project. The application runs completely standalone without any external dependencies or configuration.

## 🧪 Testing

- Unit tests: Jest + React Testing Library
- Integration tests: API routes testing
- E2E tests: Playwright (recommended)

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com)
- [Radix UI Documentation](https://www.radix-ui.com)

## 🤝 Contributing

1. Follow the established file structure
2. Use TypeScript for type safety
3. Write meaningful commit messages
4. Test your changes before submitting
5. Follow the coding conventions outlined above

---

**Happy coding! 🚀**
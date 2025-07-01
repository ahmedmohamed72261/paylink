# Project Structure Guide

## 📋 Overview
This document provides detailed guidelines for organizing and structuring the PayLink project to maintain consistency, scalability, and developer experience.

## 🏗️ Directory Structure

### `/app` - Next.js App Router
```
app/
├── about/                     # About page
├── contact/                   # Contact page
├── help/                      # Help pages
├── blog/                      # Blog pages
├── api/                       # API routes (if needed)
├── globals.css
├── layout.tsx                 # Root layout
├── page.tsx                   # Home page
├── loading.tsx                # Global loading UI
├── error.tsx                  # Global error UI
└── not-found.tsx             # 404 page
```

### `/components` - React Components
```
components/
├── ui/                        # Base UI components (shadcn/ui)
│   ├── button.tsx
│   ├── input.tsx
│   ├── dialog.tsx
│   └── ...
├── forms/                     # Form components
│   └── contact-form.tsx
├── layout/                    # Layout components
│   ├── header.tsx
│   ├── footer.tsx
│   └── navigation.tsx
├── landing/                   # Landing page components
│   ├── hero-section.tsx
│   ├── features-section.tsx
│   └── cta-section.tsx
├── providers/                 # Context providers
│   └── theme-provider.tsx
└── common/                    # Common/shared components
    ├── loading-spinner.tsx
    ├── error-boundary.tsx
    └── seo-head.tsx
```

### `/lib` - Utilities and Configurations
```
lib/
├── database.ts                # Simple data structures
├── validations/               # Zod schemas
│   └── contact.ts
├── utils/                     # General utilities
│   ├── cn.ts                  # Class name utility
│   ├── format.ts              # Formatting functions
│   ├── constants.ts           # App constants
│   └── helpers.ts             # Helper functions
└── types/                     # TypeScript type definitions
    ├── project.ts
    └── contact.ts
```

### `/hooks` - Custom React Hooks
```
hooks/
├── use-local-storage.ts      # Local storage hook
├── use-debounce.ts           # Debounce hook
└── use-loading.ts            # Loading state hook
```

## 📝 File Naming Conventions

### Components
- **React Components**: `PascalCase.tsx`
  - ✅ `UserProfile.tsx`
  - ✅ `ContactForm.tsx`
  - ❌ `userProfile.tsx`
  - ❌ `contact-form.tsx`

### Pages (App Router)
- **Page Files**: `page.tsx`
- **Layout Files**: `layout.tsx`
- **Loading Files**: `loading.tsx`
- **Error Files**: `error.tsx`
- **Route Folders**: `kebab-case`
  - ✅ `how-it-works/`
  - ✅ `user-settings/`
  - ❌ `howItWorks/`
  - ❌ `UserSettings/`

### Utilities and Hooks
- **Utility Files**: `kebab-case.ts`
  - ✅ `format-currency.ts`
  - ✅ `validate-email.ts`
- **Custom Hooks**: `use-kebab-case.ts`
  - ✅ `use-local-storage.ts`
  - ✅ `use-loading.ts`

### Types and Interfaces
- **Type Files**: `kebab-case.ts`
  - ✅ `project-types.ts`
  - ✅ `contact-types.ts`
- **Type Names**: `PascalCase`
  - ✅ `interface ProjectData {}`
  - ✅ `type ContactStatus = "pending" | "completed"`

## 🎯 Component Organization Patterns

### 1. Feature-Based Organization
Group related components by feature:
```
components/
├── contact/
│   ├── ContactForm.tsx
│   ├── ContactInfo.tsx
│   └── ContactMap.tsx
├── landing/
│   ├── HeroSection.tsx
│   ├── FeaturesSection.tsx
│   └── CTASection.tsx
└── layout/
    ├── Header.tsx
    ├── Footer.tsx
    └── Navigation.tsx
```

### 2. Component Structure Template
```tsx
// components/contact/ContactForm.tsx
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { contactSchema } from '@/lib/validations/contact'
import type { ContactFormData } from '@/lib/types/contact'

interface ContactFormProps {
  onSubmit: (data: ContactFormData) => void
  isLoading?: boolean
}

export function ContactForm({ onSubmit, isLoading = false }: ContactFormProps) {
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  })

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
      {/* Form content */}
    </form>
  )
}
```

## 🔧 Configuration Files Organization

### Root Level Configs
```
├── next.config.mjs           # Next.js configuration
├── tailwind.config.ts        # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
├── postcss.config.mjs       # PostCSS configuration
├── components.json          # shadcn/ui configuration
├── .eslintrc.json          # ESLint configuration
└── .gitignore              # Git ignore rules
```

### Package.json Scripts Organization
```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "lint:fix": "next lint --fix",
    "type-check": "tsc --noEmit",
    "test": "jest",
    "test:watch": "jest --watch",
    "test:coverage": "jest --coverage"
  }
}
```

## 📚 Import Organization

### Import Order
1. React and Next.js imports
2. Third-party libraries
3. Internal utilities and types
4. Components (UI first, then feature components)
5. Relative imports

```tsx
// ✅ Good import organization
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'sonner'

import { cn } from '@/lib/utils'
import { contactSchema } from '@/lib/validations/contact'
import type { ContactData } from '@/lib/types/contact'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ContactStatus } from '@/components/contact/ContactStatus'

import './contact-form.css'
```

### Path Aliases
Configure in `tsconfig.json`:
```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./*"],
      "@/components/*": ["components/*"],
      "@/lib/*": ["lib/*"],
      "@/hooks/*": ["hooks/*"],
      "@/types/*": ["lib/types/*"]
    }
  }
}
```

## 🚀 Best Practices

### 1. Component Design
- Keep components small and focused
- Use composition over inheritance
- Implement proper TypeScript types
- Follow the single responsibility principle

### 2. State Management
- Use React state for component-level state
- Use Context for app-level state
- Consider Zustand for complex state management

### 3. Error Handling
- Implement error boundaries
- Use proper error types
- Provide meaningful error messages
- Log errors appropriately

### 4. Performance
- Use React.memo for expensive components
- Implement proper loading states
- Optimize images and assets
- Use dynamic imports for code splitting

### 5. Accessibility
- Use semantic HTML elements
- Implement proper ARIA attributes
- Ensure keyboard navigation
- Test with screen readers

## 📋 Checklist for New Features

- [ ] Create feature branch
- [ ] Follow naming conventions
- [ ] Implement TypeScript types
- [ ] Add proper error handling
- [ ] Write unit tests
- [ ] Update documentation
- [ ] Test accessibility
- [ ] Review performance impact
- [ ] Create pull request

---

This structure guide should be updated as the project evolves and new patterns emerge.
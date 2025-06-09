# Component Structure

This directory contains all React components used in the Alpha School website. The structure is designed to be AI-friendly and maintainable.

## Directory Structure

```
components/
├── ui/                 # Reusable UI components (buttons, inputs, etc.)
├── layout/            # Layout components (header, footer, etc.)
├── sections/          # Page sections (hero, features, etc.)
├── features/          # Feature-specific components
└── shared/            # Shared components used across multiple features
```

## Naming Conventions

1. **File Names**:
   - Use kebab-case for file names: `feature-name.tsx`
   - Use PascalCase for component names: `FeatureName`

2. **Component Names**:
   - UI components: `Button`, `Input`, `Card`
   - Layout components: `Header`, `Footer`, `Sidebar`
   - Section components: `HeroSection`, `FeaturesSection`
   - Feature components: `TestimonialCard`, `NewsCarousel`

3. **Props Interface Names**:
   - Use PascalCase with "Props" suffix: `ButtonProps`, `CardProps`

## Component Organization

### UI Components (`/ui`)
- Basic building blocks
- Highly reusable
- No business logic
- Examples: buttons, inputs, cards

### Layout Components (`/layout`)
- Page structure components
- Navigation elements
- Global UI elements
- Examples: header, footer, navigation

### Section Components (`/sections`)
- Full page sections
- Composed of UI and feature components
- Examples: hero section, features section

### Feature Components (`/features`)
- Feature-specific components
- May contain business logic
- Examples: testimonials, news carousel

### Shared Components (`/shared`)
- Components used across multiple features
- Reusable business logic
- Examples: data fetchers, common utilities

## Best Practices

1. **Component Structure**:
   ```typescript
   import { type ComponentProps } from 'react'
   
   interface ComponentNameProps {
     // Props definition
   }
   
   export function ComponentName({ prop1, prop2 }: ComponentNameProps) {
     // Component logic
     return (
       // JSX
     )
   }
   ```

2. **Documentation**:
   - Add JSDoc comments for complex components
   - Document props and their types
   - Include usage examples for complex components

3. **Type Safety**:
   - Use TypeScript for all components
   - Define proper interfaces for props
   - Avoid using `any` type

4. **Testing**:
   - Components should be easily testable
   - Keep business logic separate from UI
   - Use proper prop types for testing 
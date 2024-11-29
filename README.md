# Next.js Project Structure

A modern Next.js application with built-in theme support and reusable UI components.

## 🚀 Tech Stack

- **Framework:** Next.js 15.0.3
- **Styling:** Tailwind CSS
- **Theme Management:** next-themes
- **UI Components:** Radix UI
- **Icons:** Lucide React
- **Utilities:**
  - class-variance-authority (for component variants)
  - clsx & tailwind-merge (for className merging)
  - tailwindcss-animate (for animations)

## 🛠️ Key Dependencies

### Production Dependencies

- `next`: ^15.0.3
- `react` & `react-dom`: 19.0.0-rc
- `@radix-ui/react-dropdown-menu`: ^2.1.2
- `@radix-ui/react-slot`: ^1.1.0
- `next-themes`: ^0.4.3
- `lucide-react`: ^0.462.0
- `class-variance-authority`: ^0.7.1
- `tailwind-merge`: ^2.5.5
- `tailwindcss-animate`: ^1.0.7

### Development Dependencies

- `typescript`: ^5
- `tailwindcss`: ^3.4.1
- `eslint` & related plugins
- `prettier` & related plugins
- `@typescript-eslint/parser`: ^8.16.0

## 🎨 Theme System

The project includes a robust theming system with:

- Light/Dark mode support
- System theme detection
- CSS variables for consistent styling
- Smooth theme transitions

### Theme Toggle Component

The theme toggle allows users to switch between light, dark, and system themes using a dropdown menu. Reference implementation:

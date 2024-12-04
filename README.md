# Next.js Project Boilerplate

A modern, well-structured Next.js boilerplate with built-in theme support, TypeScript, ESLint, Prettier, and Husky setup.

## 🚀 Features

- ⚡️ Next.js 15 with App Router
- 🎨 Tailwind CSS for styling
- 🌙 Dark/Light mode with next-themes
- 📏 ESLint & Prettier for code linting and formatting
- 🐶 Husky for Git hooks
- 📝 Lint staged for running checks on staged files
- 🔍 TypeScript for type checking
- 📦 Radix UI for accessible components
- 🎯 Absolute imports and path aliases

## 📦 Getting Started

1. Clone the repository:

   ```bash
   git clone [your-repo-url]
   ```

2. Install dependencies:

   ```bash
   yarn install
   ```

3. Run the development server:
   ```bash
   yarn dev
   ```

## 🛠️ Development

### Commands

- `yarn dev` - Start development server
- `yarn build` - Create production build
- `yarn start` - Start production server
- `yarn lint` - Run ESLint
- `yarn format` - Run Prettier
- `yarn check-types` - Run TypeScript compiler check
- `yarn test` - Run all checks (lint, types)

### Git Hooks

- Pre-commit: Runs lint-staged, which:
  - Lints and formats staged files
  - Runs type checking
  - Ensures code quality before commits

## 🏗️ Project Structure

```
├── app
├── app/ # App router pages
├── components/ # React components
│ ├── ui/ # Reusable UI components
│ └── ... # Feature-specific components
├── lib/ # Library code
├── styles/ # Global styles
├── types/ # TypeScript type definitions
└── utils/ # Utility functions


## 🔧 Configuration Files

- `.eslintrc.json` - ESLint configuration
- `.prettierrc.js` - Prettier configuration
- `tailwind.config.js` - Tailwind CSS configuration
- `tsconfig.json` - TypeScript configuration
- `.husky/` - Git hooks
- `.lintstagedrc.js` - Lint-staged configuration

## 📝 License

MIT
```

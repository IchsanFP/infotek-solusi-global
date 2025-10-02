## 🚀 Heliogic Company Profile

This is a [Next.js](https://nextjs.org) project building with typescript for web application.

## 📁 Project Structure

```bash
src/
│
├── app/ # Next.js App Router structure
│ ├── layout.tsx # Shared layout
│ └── page.tsx # Main page route
│
├── components/ # Reusable components (feature/layout/UI level)
│
├── features/ # Feature-specific components (domain logic)
│
├── hooks/ # Custom React hooks
│
├── lib/ # External libraries and config interceptor
│
├── providers/ # Context providers (e.g., Auth, Zustand)
│
├── store/ # zustand slices & store config
│
├── styles/ # CSS / Tailwind / global styles
│
├── types/ # Shared TypeScript type definitions
│
├── utils/ # Helper functions and global function for access everywhere
```

## 🧱 Tech Stack

- [Next.js 15+](https://nextjs.org/docs) – App Router
- [TypeScript](https://www.typescriptlang.org/)
- [Zustand](https://zustand-demo.pmnd.rs/) - state management
- [Axios](https://axios-http.com/) – for HTTP requests
- [Tailwind CSS](https://tailwindcss.com/) – optional utility-first styling
- [ESLint](https://eslint.org/) – with `@typescript-eslint` rules
- [PostCSS](https://postcss.org/) – for processing styles
- [Motion](https://motion.dev/docs) - for handle animation
- [React-Hook-Form](https://react-hook-form.com/get-started#Quickstart) - for handle form control
- [Zod](https://zod.dev/) - for handled validation form
- [Zustand-lens](https://github.com/dhmk083/dhmk-zustand-lens) - wrapper for Zustand slice
- [Daisy UI](https://daisyui.com/) - It provides useful component class names

## 📁 Notes

in this project using [Daisy UI](https://daisyui.com/) for tailwind plugin classnames component and UI create by scratch. if you won't using Daisy UI you can uninstall that package and install youre favorite component library for example [shadcn/radix](https://ui.shadcn.com/).



## 🚀 Run Project

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts).


## ⚙️ Environment Variables
Create a .env.local file based on .env.example:

```bash
NEXT_PUBLIC_API_URL=https://your-api.com
NODE_ENV=development
```

## 🧪 Testing (optional setup)
Coming soon or based on the testing stack (Jest, React Testing Library, etc.).


## 🔒 Authentication
The app uses an AuthProvider inside src/providers/AuthProvider.tsx to manage authentication logic via Context API or hooks.

You can extend this logic with:

- JWT token validation

- Refresh token handling

- Role-based routing


## 📘 Folder Naming Convention
- PascalCase: Components, files in providers/, store/, etc.

- camelCase: Hooks, utility functions, file exports

- kebab-case: File names when necessary (e.g., example-store.type.ts)

## 🛠 Linting & Formatting

```bash
# Lint all files
npm run lint
```
Make sure your editor supports ESLint and Prettier for consistent formatting.



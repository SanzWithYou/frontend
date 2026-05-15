# Frontend

A modern React + TypeScript frontend application built with Vite, featuring shadcn/ui components and a feature-based architecture.

## Tech Stack

| Technology                 | Description                                                  |
| -------------------------- | ------------------------------------------------------------ |
| **React 19**               | UI library with the React Compiler for automatic memoization |
| **TypeScript 6**           | Type-safe development                                        |
| **Vite 8**                 | Fast dev server and bundler with HMR                         |
| **Tailwind CSS v4**        | Utility-first CSS framework                                  |
| **shadcn/ui + Radix UI**   | Accessible, unstyled component primitives                    |
| **React Router v7**        | Client-side routing                                          |
| **Axios**                  | HTTP client                                                  |
| **react-hook-form**        | Form state management and validation                         |
| **Lucide React**           | Icon library                                                 |
| **ESLint + Prettier**      | Linting and code formatting                                  |
| **@rolldown/plugin-babel** | React Compiler Babel integration                             |

## Getting Started

### Prerequisites

- Node.js >= 18
- npm (or pnpm, yarn)

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd frontend

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
```

### Development

```bash
npm run dev
```

Opens the dev server at [http://localhost:5173](http://localhost:5173) with hot module replacement.

### Build for Production

```bash
npm run build
```

Outputs the production build to the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
frontend/
├── public/              # Static assets (favicon, icons)
├── src/
│   ├── assets/          # Images and static resources
│   ├── core/
│   │   ├── api/         # API client and request modules
│   │   ├── components/  # Shared UI components (shadcn/ui)
│   │   ├── layouts/     # Layout components
│   │   ├── lib/         # Utility functions and helpers
│   │   └── styles/      # Global styles and Tailwind CSS entry
│   ├── features/        # Feature-based modules
│   │   ├── auth/        # Authentication (login, register, etc.)
│   │   └── main/        # Main application pages
│   ├── main.tsx         # App entry point
│   └── routes.tsx       # Route definitions
├── .env.example         # Environment variable template
├── components.json      # shadcn/ui configuration
├── eslint.config.js     # ESLint flat config
├── index.html           # HTML entry point
├── package.json
├── tsconfig.json        # TypeScript project references
├── tsconfig.app.json    # TypeScript config (app code)
├── tsconfig.node.json   # TypeScript config (Node tooling)
└── vite.config.ts       # Vite configuration
```

The project follows a **feature-based architecture** — each feature (auth, main) is self-contained with its own routes, components, and logic. Shared code lives in `core/`.

## Available Scripts

| Script            | Description                                         |
| ----------------- | --------------------------------------------------- |
| `npm run dev`     | Start the Vite dev server with HMR                  |
| `npm run build`   | Type-check with TypeScript and build for production |
| `npm run preview` | Preview the production build locally                |
| `npm run lint`    | Run ESLint across the project                       |
| `npm run format`  | Format source files with Prettier                   |

## Environment Variables

| Variable          | Description                                       |
| ----------------- | ------------------------------------------------- |
| `VITE_API_CLIENT` | Base URL or identifier for the backend API client |

Copy `.env.example` to `.env` and fill in the values.

## Code Style

This project uses Prettier with import sorting and Tailwind CSS class sorting, plus ESLint for TypeScript-aware linting. Run `npm run format` and `npm run lint` before committing.

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

1. Fork the repository
2. Create a feature branch (`git checkout -b feat/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feat/amazing-feature`)
5. Open a Pull Request

## License

MIT

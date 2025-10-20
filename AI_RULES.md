# AI Rules for Fusion Starter Application

This document outlines the core technologies and specific library usage guidelines for developing features in this application. Adhering to these rules ensures consistency, maintainability, and leverages the strengths of the chosen tech stack.

## Tech Stack Overview

*   **Frontend Framework**: React 18 with TypeScript for robust and scalable user interfaces.
*   **Routing**: React Router 6 for client-side single-page application (SPA) navigation.
*   **Build Tool**: Vite for a fast development experience and optimized production builds.
*   **Styling**: Tailwind CSS 3 for utility-first styling, ensuring responsive and consistent designs.
*   **UI Components**: shadcn/ui, built on Radix UI primitives and styled with Tailwind CSS, for accessible and customizable UI elements.
*   **Icons**: Lucide React for a comprehensive set of vector icons.
*   **Backend**: Express.js server for API endpoints, integrated seamlessly with the Vite development server.
*   **Data Fetching & State Management**: React Query (`@tanstack/react-query`) for managing server state and asynchronous data operations.
*   **Form Handling & Validation**: React Hook Form for efficient form management, paired with Zod for schema validation.
*   **Notifications**: Sonner for elegant and accessible toast notifications.

## Library Usage Guidelines

To maintain a consistent and efficient development workflow, please follow these guidelines for library usage:

*   **UI Components**:
    *   **Always** prioritize using existing shadcn/ui components from `client/components/ui/`.
    *   If a required component is not available in shadcn/ui, create a **new component file** in `client/components/` using Radix UI primitives and Tailwind CSS for styling.
    *   **Do not modify** existing shadcn/ui component files directly.
*   **Styling**:
    *   **Exclusively** use Tailwind CSS utility classes for all styling.
    *   Leverage the `cn` utility function (from `client/lib/utils.ts`) for conditionally combining and merging Tailwind classes.
*   **Icons**:
    *   Use icons from the `lucide-react` library.
*   **Routing**:
    *   Define all application routes within `client/App.tsx` using `react-router-dom`.
    *   Place individual page components in the `client/pages/` directory.
*   **State Management**:
    *   For server-side state and data fetching (e.g., API calls), use `@tanstack/react-query`.
    *   For simple, local component state, use React's built-in `useState` and `useReducer` hooks.
*   **Form Handling**:
    *   Implement forms using `react-hook-form`.
    *   Define form schemas and validation rules using `zod` and integrate with `react-hook-form` via `@hookform/resolvers`.
*   **Toasts/Notifications**:
    *   For displaying user notifications, use the `Sonner` component (imported as `Toaster` in `client/App.tsx`).
    *   The `useToast` hook (from `client/hooks/use-toast.ts`) is also available for more imperative toast control if needed.
*   **Date Pickers**:
    *   Use `react-day-picker` for all date selection functionalities.
*   **Theming**:
    *   Utilize `next-themes` for managing dark and light mode themes.
*   **Utility Functions**:
    *   The `cn` function (from `client/lib/utils.ts`) should be used for combining CSS classes.
*   **Backend API**:
    *   Create new API endpoints in `server/routes/` and register them in `server/index.ts`.
    *   Define shared types for API requests and responses in `shared/api.ts`.
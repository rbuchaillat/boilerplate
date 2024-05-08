# Boilerplate Next.js

This boilerplate is a pre-configured starting point for Next.js projects, integrating a robust frontend and backend setup with a variety of tools and libraries to streamline development. Utilize `npm` to manage dependencies and run the project.

## 📋 Recommendations

- **PostgreSQL Local Installation**: For development purposes, it is recommended to install PostgreSQL locally. This ensures faster development cycles and easier testing before deployment. Follow the official PostgreSQL documentation to install it on your machine.

## 🚀 Quick Start

1. **Clone the repository:**

```bash
   git clone https://your-repository-url.git
```

2. **Navigate to the project directory:**

```bash
   cd boilerplate-nextjs
```

3. **Install dependencies:**

```bash
   npm install
```

4. **Run the development server:**

```bash
   npm run dev
```

## 🔧 Configuration

Before starting the server, ensure you set up your environment variables correctly:

1. **Create a `.env` File**:
   Copy the `.env.example` file provided in the repository and rename it to `.env`. This file contains template environment variables necessary for running the project.

2. **Authentication Secrets**:

   - For `AUTH_SECRET`, refer to the [AuthJS documentation](https://authjs.dev/getting-started/installation#setup-environment) to generate a secure key.
   - This key is essential for securing your sessions and should be unique and private.

3. **OAuth Providers**:

   - To configure OAuth providers (like Google, Facebook, etc.), follow the steps detailed in the [AuthJS OAuth configuration guide](https://authjs.dev/getting-started/authentication/oauth).
   - Ensure you replace the placeholder keys in the `.env` file with the actual client IDs and client secrets provided by your OAuth providers.

4. **Run Prisma Migrate**

```bash
   npm run prisma:migrate:dev
```

These steps are crucial for setting up your authentication mechanism properly and ensuring that your application can manage user logins securely.

## 🌐 Frontend

- React.js & Next.js: Core frameworks for building the UI, utilizing server-side rendering for improved performance and SEO.
- Tailwind CSS: A utility-first CSS framework for rapid UI development.
- @shadcn/ui: A UI library providing pre-built components for a consistent and efficient design.
- Zustand: A minimalist state management library for managing state across components.
- TanStack Query: Library for fetching, caching, and updating asynchronous data in React.
- Zod: TypeScript-first schema validation to ensure data integrity.
- Lucide: Icon library to enhance visual design with scalable vector icons.
- React Hook Form: Simplifies form management with hooks, improving form validation and performance.
- @t3-oss/env-nextjs: Utility for managing environment variables in Next.js.

## ⚙️ Backend

- Next.js: Used for API routes to handle server-side functionalities seamlessly integrated with the frontend.
- Prisma: ORM for efficient database management, particularly integrated with Postgres.
- PostgreSQL (in Neon): Database system known for its robustness and performance, hosted in Neon cloud environment.
- NextAuth.js: Authentication solution for Next.js applications, supporting various login methods.

## 📚 Technology Stack Explained

This section provides a brief overview of the technologies used in this boilerplate.

- React.js & Next.js: These JavaScript frameworks offer server-side rendering and efficient data fetching, ideal for high-performance web applications.
- Tailwind CSS: Allows developers to use utility classes to build custom designs without leaving your HTML.
- Zustand & TanStack Query: Handle global and asynchronous state with ease, improving scalability and maintainability of state management.
- Zod & React Hook Form: Enhance form handling and data validation, ensuring robust and user-friendly forms.
- Lucide: Provide modern icons to enhance UI aesthetics and usability.
- Prisma & PostgreSQL: Offer powerful tools for database schema management and high-performance queries.

Make sure to configure your environment variables correctly with @t3-oss/env-nextjs to seamlessly integrate all backend functionalities.

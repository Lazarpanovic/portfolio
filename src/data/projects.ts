import { Project } from "../types/portfolio";

export const projects: Project[] = [
  {
    title: "Personal Finance Tracker",
    description:
      "A full stack finance tracking application for managing income, expenses, categories, budgets, and financial insights through a clean dashboard experience with a modern Next.js frontend and NestJS backend.",
    href: "https://finance-tracker.lazarpanovic.dev",
    desktopImage: "/personal-finance-laptop.png",
    mobileImage: "/personal-finance-mobile.png",
    darkDesktopImage: "/personal-finance-laptop-dark.png",
    darkMobileImage: "/personal-finance-mobile-dark.png",
    tags: ["Next.js", "NestJS", "PostgreSQL", "TypeScript"],
    category: "Full Stack",
    featured: true,
  },
  {
    title: "MW Concept",
    description:
      "A premium responsive storefront concept for presenting design and tech services, featuring service browsing, pricing comparison, cart flow, multilingual support, and a polished Tailwind CSS interface.",
    href: "https://mw-concept.lazarpanovic.dev",
    desktopImage: "/mw-concept-laptop.png",
    mobileImage: "/mw-concept-mobile.png",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "i18n"],
    category: "Frontend",
  },
  {
    title: "Lucky Spin",
    description:
      "A modern reward wheel simulator rebuilt from a vanilla JavaScript project into a component-based Next.js application with weighted rewards, inventory management, spin history, game statistics, localStorage persistence, and a responsive dark dashboard UI.",
    href: "https://lucky-spin.lazarpanovic.dev",
    desktopImage: "/lucky-spin-laptop.png",
    mobileImage: "/lucky-spin-mobile.png",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    category: "Frontend",
  },
  {
    title: "TaskFlow",
    description:
      "A modern Kanban project management dashboard with sprint planning, backlog management, drag-and-drop task workflows, ticket reordering, reports, settings, light/dark mode, responsive SaaS-style UI, and localStorage persistence.",
    href: "https://taskflow.lazarpanovic.dev",
    desktopImage: "/taskflow-laptop.png",
    mobileImage: "/taskflow-mobile.png",
    darkDesktopImage: "/taskflow-laptop-dark.png",
    darkMobileImage: "/taskflow-mobile-dark.png",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "dnd-kit", "localStorage"],
    category: "Frontend",
  },
];

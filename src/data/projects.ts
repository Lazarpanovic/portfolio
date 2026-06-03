import mwmockup from "../../public/mwmockup.png";
import ebankmockup from "../../public/ebankmockup.png";
import spinmockup from "../../public/spinmockup.png";
import { Project } from "../types/portfolio";

export const projects: Project[] = [
  {
    title: "Personal Finance Tracker",
    description:
      "A full stack finance tracking application for managing income, expenses, categories, budgets, and financial insights through a clean dashboard experience.",
    href: "https://...",
    desktopImage: "/personal-finance-laptop.png",
    mobileImage: "/personal-finance-mobile.png",
    tags: ["Next.js", "NestJS", "PostgreSQL", "TypeScript"],
    category: "Full Stack",
    featured: true,
  },
  {
    title: "MW Concept",
    description:
      "A premium storefront concept for selling design and tech services, with service browsing, pricing comparison, cart flow, multilingual support, and polished responsive UI.",
    href: "https://...",
    desktopImage: "/mw-concept-laptop.png",
    mobileImage: "/mw-concept-mobile.png",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "i18n"],
    category: "Frontend",
  },
];

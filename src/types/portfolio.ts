import { IconType } from "react-icons";
import { StaticImageData } from "next/image";

export type Project = {
  title: string;
  description: string;
  href: string;
  desktopImage: StaticImageData | string;
  darkDesktopImage?: StaticImageData | string;
  mobileImage: StaticImageData | string;
  darkMobileImage?: StaticImageData | string;
  tags: string[];
  category?: string;
  featured?: boolean;
};

export type SkillItem = {
  label: string;
  icon: IconType;
};

export type SkillGroup = {
  title: string;
  description: string;
  items: SkillItem[];
};

export type ExperienceItem = {
  period: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
};

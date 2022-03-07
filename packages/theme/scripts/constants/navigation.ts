import type { Navigation } from "../types";

export const NAVIGATIONS: Navigation[] = [
  {
    name: "Projects",
    href: "/pages/projects",
    isExtern: false,
  },
  {
    name: "API References",
    href: "/pages/api-references",
    isExtern: false,
  },
  {
    name: "GJS",
    href: "https://gjs.guide/",
    isExtern: true,
  },
  // {
  //   name: "GJS API References",
  //   href: "https://gjs-docs.gjsify.org",
  //   isExtern: true,
  // },
  // {
  //   name: "Node-GTK API References",
  //   href: "https://node-gtk-docs.gjsify.org",
  //   isExtern: true,
  // },
];

export const process = {
  dev: true,
};

export const site = {
  home: process.dev ? "https://localhost:8080/" : "https://nepluev.com",
};

export const app = {
  title: "Clash of clans - Vue 3",
};

export const links = [
  {
    title: "Home",
    alias: "home",
    url: "/",
  },
  {
    title: "About",
    alias: "about",
    url: "/about",
  },
];

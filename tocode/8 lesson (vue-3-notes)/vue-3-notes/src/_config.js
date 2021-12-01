export const process = {
  dev: true,
};

export const site = {
  home: process.dev ? "https://localhost:8080/" : "https://nepluev.com",
};

export const app = {
  title: "Notes",
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

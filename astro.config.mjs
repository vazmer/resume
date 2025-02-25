import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import mdx from "@astrojs/mdx";
import icon from "astro-icon";

import netlify from "@astrojs/netlify";

export default defineConfig({
  integrations: [mdx(), icon()],

  vite: {
    plugins: [tailwindcss()],
  },

  output: "static",
  adapter: netlify(),
});

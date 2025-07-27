// unocss.config.ts
import { presetWind } from "@unocss/preset-wind3";
import { defineConfig, transformerDirectives } from "unocss";
import { presetAnimations } from "unocss-preset-animations";
import { presetShadcn } from "unocss-preset-shadcn";

export default defineConfig({
  presets: [
    presetWind({
      dark: "media",
    }),
    presetAnimations(),
    presetShadcn(
      {
        color: "stone",
        darkSelector: "media",
      },
      {
        // If you are using reka ui.
        componentLibrary: "reka",
      },
    ),
  ],
  transformers: [transformerDirectives()],
  // By default, `.ts` and `.js` files are NOT extracted.
  // If you want to extract them, use the following configuration.
  // It's necessary to add the following configuration if you use shadcn-vue or shadcn-svelte.
  content: {
    pipeline: {
      include: [
        // the default
        /\.(vue|svelte|[jt]sx|mdx?|astro|elm|php|phtml|html)($|\?)/,
        // include js/ts files
        "**/*.{js,ts}",
      ],
    },
  },
  theme: {
    container: {
      center: true,
    },
    fontFamily: {
      zodiak: "'Zodiak', serif",
      sans: "'Plus Jakarta Sans', sans-serif",
    },
  },
});

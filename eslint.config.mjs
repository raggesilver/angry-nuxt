// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt({
  rules: {
    // Vue still doesn't handle optional props very well. It works tho.
    "vue/require-default-prop": "off",
    // Vue complains about self closing tags, but it generates valid HTML in
    // the end, so it's fine. Closing <img> tags makes me sleep better at night.
    "vue/html-self-closing": "off",
  }
});

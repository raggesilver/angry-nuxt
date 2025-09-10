import { configure } from "vee-validate";

export default defineNuxtPlugin((_) => {
  configure({
    // Disable all automatic validation. Users get flashing error messages while
    // typing, which is bad UX.
    validateOnBlur: false,
    validateOnChange: false,
    validateOnInput: false,
    validateOnModelUpdate: false,
  });
});

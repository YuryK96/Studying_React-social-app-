import { createSelectorHook } from "react-redux";
import { createSelector } from "reselect";

export const getCaptcha = (state) => {
  return state.auth.captchaUrl;
};

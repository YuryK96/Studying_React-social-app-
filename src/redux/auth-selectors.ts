import { AppStateType } from "./redux-store";

export const getCaptcha = (state: AppStateType) => {
  return state.auth.captchaUrl;
};

export const getLogin = (state: AppStateType) => {
  return state.auth.login;
};

export const getIsAuth = (state: AppStateType) => {
  return state.auth.isAuth;
};

export const getUserId = (state: AppStateType) => {
  return state.auth.userId;
};

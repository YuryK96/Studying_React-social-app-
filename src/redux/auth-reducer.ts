import { BlockLike } from "typescript";
import { authAPI, securityAPI } from "../api/api";

const SET_USER_DATA = "SET_USER_DATA";
const GET_CAPTCHA_URL_SUCCESS = "GET_CAPTCHA_URL_SUCCESS";
const GET_CAPTCHA_URL_CLEAR = "GET_CAPTCHA_URL_CLEAR";

export type initialStateType2 = {
  userId: number | null;
  email: string | null;
  login: string | null;
  isFetching: boolean;
  isAuth: boolean;
  captchaUrl: string | null;
};

let initialState = {
  userId: null as number | null,
  email: null as string | null,
  login: null as string | null,
  isFetching: false,
  isAuth: false,
  captchaUrl: null as string | null, // if null, then captcha is nor required
};

export type initialStateType = typeof initialState;

const authReducer = (state = initialState, action: any): initialStateType2 => {
  switch (action.type) {
    case SET_USER_DATA: {
      return {
        ...state,
        ...action.payload,
        userId: "2",
      };
    }
    case GET_CAPTCHA_URL_SUCCESS: {
      return {
        ...state,
        captchaUrl: action.payload.captchaUrl,
      };
    }
    case GET_CAPTCHA_URL_CLEAR: {
      return {
        ...state,
        captchaUrl: action.payload.captchaUrl,
      };
    }

    default:
      return state;
  }
};

type setAuthUserDataActionPayloadType = {
  userId: number | null;
  email: string | null;
  login: string | null;
  isAuth: boolean;
};

type setAuthUserDataActionType = {
  type: typeof SET_USER_DATA;
  payload: setAuthUserDataActionPayloadType;
};

export const setAuthUserData = (
  userId: number | null,
  email: string | null,
  login: string | null,
  isAuth: boolean
): setAuthUserDataActionType => ({
  type: SET_USER_DATA,
  payload: {
    userId,
    email,
    login,
    isAuth,
  },
});

type getCaptchaUrlSuccess = {
  type: typeof GET_CAPTCHA_URL_SUCCESS;
  payload: { captchaUrl: string };
};

export const getCaptchaUrlSuccess = (
  captchaUrl: string
): getCaptchaUrlSuccess => ({
  type: GET_CAPTCHA_URL_SUCCESS,
  payload: { captchaUrl },
});
export const getCaptchaUrlClear = (captchaUrl: string | null) => ({
  type: GET_CAPTCHA_URL_CLEAR,
  payload: { captchaUrl },
});

export const logOut = () => async (dispatch: any) => {
  let response = await authAPI.logout();
  if (response.data.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false));
  }
};

export const setAuthUser = () => async (dispatch: any) => {
  let response = await authAPI.me();
  if (response.data.resultCode === 0) {
    let { id, email, login } = response.data.data;
    dispatch(setAuthUserData(id, email, login, true));
  }
};

export const login =
  (
    email: string | null,
    password: string | null,
    rememberMe: boolean,
    captcha: string | null,
    setError: any
  ) =>
  async (dispatch: any) => {
    let response = await authAPI.login(email, password, rememberMe, captcha);
    if (response.data.resultCode === 0) {
      dispatch(setAuthUser());
      dispatch(getCaptchaUrlClear(null));
    } else {
      if (response.data.resultCode === 10) {
        dispatch(getCaptchaUrl());
      }
      dispatch(getCaptchaUrlClear(null));
      setError("server", { message: response.data.messages });
    }
  };
export const getCaptchaUrl = () => async (dispatch: any) => {
  let response = await securityAPI.getCaptchaUrl();
  const getCaptchaUrl = response.data.url;
  dispatch(getCaptchaUrlSuccess(getCaptchaUrl));
};

export default authReducer;

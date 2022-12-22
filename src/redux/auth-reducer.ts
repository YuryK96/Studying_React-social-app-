import { Dispatch } from "react";
import { ThunkAction } from "redux-thunk";
import { authAPI, securityAPI } from "../api/api";
import { ResultCodeForCaptcha, ResultCodesEnum } from "../types/types";
import { AppStateType } from "./redux-store";

const SET_USER_DATA = "SET_USER_DATA";
const GET_CAPTCHA_URL_SUCCESS = "GET_CAPTCHA_URL_SUCCESS";
const GET_CAPTCHA_URL_CLEAR = "GET_CAPTCHA_URL_CLEAR";

let initialState = {
  userId: null as number | null,
  email: null as string | null,
  login: null as string | null,
  isFetching: false,
  isAuth: false,
  captchaUrl: null as string | null, // if null, then captcha is nor required
};

export type initialStateType = typeof initialState;

const authReducer = (
  state = initialState,
  action: ActionTypes
): initialStateType => {
  switch (action.type) {
    case SET_USER_DATA: {
      return {
        ...state,
        ...action.payload,
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

type ActionTypes =
  | setAuthUserDataActionType
  | getCaptchaUrlSuccessType
  | getCaptchaUrlClearType;

type getStateType = () => AppStateType;
type DispatchType = Dispatch<ActionTypes>;
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionTypes>;

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

type getCaptchaUrlSuccessType = {
  type: typeof GET_CAPTCHA_URL_SUCCESS;
  payload: { captchaUrl: string };
};

export const getCaptchaUrlSuccess = (
  captchaUrl: string
): getCaptchaUrlSuccessType => ({
  type: GET_CAPTCHA_URL_SUCCESS,
  payload: { captchaUrl },
});

type getCaptchaUrlClearType = {
  type: typeof GET_CAPTCHA_URL_CLEAR;
  payload: { captchaUrl: string | null };
};

export const getCaptchaUrlClear = (
  captchaUrl: string | null
): getCaptchaUrlClearType => ({
  type: GET_CAPTCHA_URL_CLEAR,
  payload: { captchaUrl },
});

export const logOut = (): ThunkType => async (dispatch) => {
  let logOutData = await authAPI.logout();
  if (logOutData.resultCode === ResultCodesEnum.Success) {
    dispatch(setAuthUserData(null, null, null, false));
  }
};

export const setAuthUser = (): ThunkType => async (dispatch) => {
  let meData = await authAPI.me();
  if (meData.resultCode === ResultCodesEnum.Success) {
    let { id, email, login } = meData.data;
    dispatch(setAuthUserData(id, email, login, true));
  }
};

export const login =
  (
    email: string,
    password: string,
    rememberMe: boolean,
    captcha: string,
    setError: any
  ): ThunkType =>
  async (dispatch) => {
    let loginData = await authAPI.login(email, password, rememberMe, captcha);
    if (loginData.resultCode === ResultCodesEnum.Success) {
      dispatch(setAuthUser());
      dispatch(getCaptchaUrlClear(null));
    } else {
      if (loginData.resultCode === ResultCodeForCaptcha.captchaIsRequired) {
        dispatch(getCaptchaUrl());
      }
      dispatch(getCaptchaUrlClear(null));
      setError("server", { message: loginData.messages });
    }
  };
export const getCaptchaUrl = (): ThunkType => async (dispatch) => {
  let captchaData = await securityAPI.getCaptchaUrl();
  const getCaptchaUrl = captchaData.url;
  dispatch(getCaptchaUrlSuccess(getCaptchaUrl));
};

export default authReducer;

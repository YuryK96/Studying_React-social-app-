import { authAPI } from "../api/auth-api";
import { securityAPI } from "../api/security-api";
import { ResultCodeForCaptcha, ResultCodesEnum } from "../api/api";
import { BaseThunkType } from "./redux-store";

let initialState = {
  userId: null as number | null,
  email: null as string | null,
  login: null as string | null,
  isFetching: false,
  isAuth: false,
  captchaUrl: null as string | null, // if null, then captcha is nor required
};

const authReducer = (
  state = initialState,
  action: ActionTypes
): initialStateType => {
  switch (action.type) {
    case "SM/auth/SET_USER_DATA": {
      return {
        ...state,
        ...action.payload,
      };
    }
    case "SM/auth/GET_CAPTCHA_URL_SUCCESS": {
      return {
        ...state,
        captchaUrl: action.payload.captchaUrl,
      };
    }
    case "SM/auth/GET_CAPTCHA_URL_CLEAR": {
      return {
        ...state,
        captchaUrl: action.payload.captchaUrl,
      };
    }

    default:
      return state;
  }
};

export const actions = {
  setAuthUserData: (
    userId: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean
  ) =>
    ({
      type: "SM/auth/SET_USER_DATA",
      payload: {
        userId,
        email,
        login,
        isAuth,
      },
    } as const),

  getCaptchaUrlSuccess: (captchaUrl: string) =>
    ({
      type: "SM/auth/GET_CAPTCHA_URL_SUCCESS",
      payload: { captchaUrl },
    } as const),

  getCaptchaUrlClear: (captchaUrl: string | null) =>
    ({
      type: "SM/auth/GET_CAPTCHA_URL_CLEAR",
      payload: { captchaUrl },
    } as const),
};

export const logOut = (): BaseThunkType<ActionTypes> => async (dispatch) => {
  let logOutData = await authAPI.logout();
  if (logOutData.resultCode === ResultCodesEnum.Success) {
    dispatch(actions.setAuthUserData(null, null, null, false));
  }
};

export const setAuthUser =
  (): BaseThunkType<ActionTypes> => async (dispatch) => {
    let meData = await authAPI.me();
    if (meData.resultCode === ResultCodesEnum.Success) {
      let { id, email, login } = meData.data;
      dispatch(actions.setAuthUserData(id, email, login, true));
    }
  };

export const login =
  (
    email: string,
    password: string,
    rememberMe: boolean,
    captcha: string,
    setError: any
  ): BaseThunkType<ActionTypes> =>
  async (dispatch) => {
    let loginData = await authAPI.login(email, password, rememberMe, captcha);
    if (loginData.resultCode === ResultCodesEnum.Success) {
      dispatch(setAuthUser());
      dispatch(actions.getCaptchaUrlClear(null));
    } else {
      if (loginData.resultCode === ResultCodeForCaptcha.captchaIsRequired) {
        dispatch(getCaptchaUrl());
      }
      dispatch(actions.getCaptchaUrlClear(null));
      setError("server", { message: loginData.messages });
    }
  };
export const getCaptchaUrl =
  (): BaseThunkType<ActionTypes> => async (dispatch) => {
    let captchaData = await securityAPI.getCaptchaUrl();
    const getCaptchaUrl = captchaData.url;
    dispatch(actions.getCaptchaUrlSuccess(getCaptchaUrl));
  };

export default authReducer;

export type initialStateType = typeof initialState;

type ActionTypes =
  | ReturnType<typeof actions.setAuthUserData>
  | ReturnType<typeof actions.getCaptchaUrlSuccess>
  | ReturnType<typeof actions.getCaptchaUrlClear>;

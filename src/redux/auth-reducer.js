import { authAPI, securityAPI } from "../api/api";

const SET_USER_DATA = "SET_USER_DATA";
const GET_CAPTCHA_URL_SUCCESS = "GET_CAPTCHA_URL_SUCCESS";
const GET_CAPTCHA_URL_CLEAR = "GET_CAPTCHA_URL_CLEAR";

let initialState = {
  userId: null,
  email: null,
  login: null,
  isFetching: false,
  isAuth: false,
  captchaUrl: null, // if null, then captcha is nor required
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA: {
      return {
        ...state,
        ...action.data,
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

export const setAuthUserData = (userId, email, login, isAuth) => ({
  type: SET_USER_DATA,
  data: {
    userId,
    email,
    login,
    isAuth,
  },
});
export const getCaptchaUrlSuccess = (captchaUrl) => ({
  type: GET_CAPTCHA_URL_SUCCESS,
  payload: { captchaUrl },
});
export const getCaptchaUrlClear = (captchaUrl) => ({
  type: GET_CAPTCHA_URL_CLEAR,
  payload: { captchaUrl },
});

export const logOut = () => async (dispatch) => {
  let response = await authAPI.logout();
  if (response.data.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false));
  }
};

export const setAuthUser = () => async (dispatch) => {
  let response = await authAPI.me();
  if (response.data.resultCode === 0) {
    let { id, email, login } = response.data.data;
    dispatch(setAuthUserData(id, email, login, true));
  }
};

export const login =
  (email, password, rememberMe, captcha, setError) => async (dispatch) => {
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
export const getCaptchaUrl = () => async (dispatch) => {
  let response = await securityAPI.getCaptchaUrl();
  const getCaptchaUrl = response.data.url;
  dispatch(getCaptchaUrlSuccess(getCaptchaUrl));
};

export default authReducer;

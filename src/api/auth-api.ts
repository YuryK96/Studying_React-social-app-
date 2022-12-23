import axios, { AxiosResponse } from "axios";

import {
  DefaultResponseTypes,
  instance,
  ResultCodeForCaptcha,
  ResultCodesEnum,
} from "./api";

type MeResponseDataType = {
  id: number;
  email: string;
  login: string;
};

type LoginResponseDataType = {
  uesrId: number;
};

export const authAPI = {
  me() {
    return instance
      .get<DefaultResponseTypes<MeResponseDataType>>("auth/me")
      .then((res) => res.data);
  },
  login(
    email: string,
    password: string,
    rememberMe: boolean,
    captcha: string | null = null
  ) {
    return instance
      .post<
        DefaultResponseTypes<
          LoginResponseDataType,
          ResultCodeForCaptcha | ResultCodesEnum
        >
      >("auth/login", {
        email,
        password,
        rememberMe,
        captcha,
      })
      .then((res) => res.data);
  },
  logout() {
    return instance
      .delete<DefaultResponseTypes>("auth/login")
      .then((res) => res.data);
  },
};

import axios, { AxiosResponse } from "axios";
import { UserType } from "../types/types";
import { instance, DefaultResponseTypes } from "./api";
type securityAPIType = {
  url: string;
};

export const securityAPI = {
  getCaptchaUrl() {
    return instance
      .get<securityAPIType>("security/get-captcha-url")
      .then((res) => res.data);
  },
};

import axios from "axios";

export const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "72e23854-f5e3-4835-a7c4-abe54c7e9e9c",
  },
});

export enum ResultCodesEnum {
  Success = 0,
  Error = 1,
}
export enum ResultCodeForCaptcha {
  captchaIsRequired = 10,
}

export type DefaultResponseTypes<D = {}, RC = ResultCodesEnum> = {
  data: D;
  resultCode: RC;
  messages?: Array<string>;
};

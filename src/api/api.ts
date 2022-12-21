import axios, { AxiosResponse } from "axios";
import { PhotoType, UserProfileType } from "../types/types";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "72e23854-f5e3-4835-a7c4-abe54c7e9e9c",
  },
});

export const usersAPI = {
  getUsers(currentPage: number, pageSize: number) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`, {
        withCredentials: true,
      })
      .then((response) => {
        return response.data;
      });
  },
  unFollow(id: number) {
    return instance.delete(`follow/${id}`);
  },
  follow(id: number) {
    return instance.post(`follow/${id}`);
  },
  getProfile(userId: number | null) {
    console.warn("Obsolete method. Please profileAPI object");
    return profileAPI.getProfile(userId);
  },
};

export const profileAPI = {
  getProfile(userId: number | null) {
    return instance.get(`profile/${userId}`);
  },
  getStatus(userId: number | null) {
    return instance.get(`profile/status/${userId}`);
  },
  updateStatus(status: string) {
    return instance.put(`profile/status/`, { status: status });
  },
  updateProfile(data: UserProfileType, userId: number | null) {
    return instance.put("profile", {
      userId: userId,
      AboutMe: data.aboutMe,
      lookingForAJob: data.lookingForAJob,
      lookingForAJobDescription: data.lookingForAJobDescription,
      fullName: data.fullName,
      contacts: {
        github: data.contacts.github,
        vk: data.contacts.vk,
        facebook: data.contacts.facebook,
        instagram: data.contacts.instagram,
        twitter: data.contacts.twitter,
        website: data.contacts.website,
        youtube: data.contacts.youtube,
        mainLink: data.contacts.mainLink,
      },
    });
  },
  setPhoto(photo: string | Blob) {
    const formData = new FormData();
    formData.append("image", photo);
    return instance.put("profile/photo/", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },
};

export enum ResultCodesEnum {
  Success = 0,
  Error = 1,
}
export enum ResultCodeForCaptcha {
  captchaIsRequired = 10,
}

type MeResponseType = {
  data: {
    id: number;
    email: string;
    login: string;
  };
  resultCode: ResultCodesEnum;
  messages: Array<string>;
};
type LoginResponseType = {
  data: {
    uesrId: number;
  };
  resultCode: ResultCodesEnum | ResultCodeForCaptcha;
  messages: Array<string>;
};
type LogOutResponseType = {
  data: {};
  resultCode: ResultCodesEnum;
  messages: Array<string>;
};

export const authAPI = {
  me() {
    return instance.get<MeResponseType>("auth/me").then((res) => res.data);
  },
  login(
    email: string,
    password: string,
    rememberMe: boolean,
    captcha: string | null = null
  ) {
    return instance
      .post<LoginResponseType>("auth/login", {
        email,
        password,
        rememberMe,
        captcha,
      })
      .then((res) => res.data);
  },
  logout() {
    return instance
      .delete<LogOutResponseType>("auth/login")
      .then((res) => res.data);
  },
};
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

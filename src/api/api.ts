import axios, { AxiosResponse } from "axios";
import {
  PhotoType,
  ResultCodeForCaptcha,
  ResultCodesEnum,
  UserProfileType,
  UserType,
  DefaultResponseTypes,
  PhotosType,
} from "../types/types";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "72e23854-f5e3-4835-a7c4-abe54c7e9e9c",
  },
});

type GetUsersTypes = {
  items: Array<UserType>;
  totalCount: number;
  error: string | null;
};

export const usersAPI = {
  getUsers(currentPage: number, pageSize: number) {
    return instance
      .get<GetUsersTypes>(`users?page=${currentPage}&count=${pageSize}`, {
        withCredentials: true,
      })
      .then((response) => {
        return response.data;
      });
  },
  unFollow(id: number) {
    return instance
      .delete<DefaultResponseTypes>(`follow/${id}`)
      .then((response) => {
        return response.data;
      });
  },
  follow(id: number) {
    return instance
      .post<DefaultResponseTypes>(`follow/${id}`)
      .then((response) => {
        return response.data;
      });
  },
};

type SavePhotoType = {
  data: { photos: PhotosType };
  resultCode: ResultCodesEnum;
  messages: Array<string>;
};

export const profileAPI = {
  getProfile(userId: number | null) {
    return instance
      .get<UserProfileType>(`profile/${userId}`)
      .then((response) => {
        return response.data;
      });
  },
  getStatus(userId: number | null) {
    return instance.get<string>(`profile/status/${userId}`).then((response) => {
      return response.data;
    });
  },
  updateStatus(status: string) {
    return instance
      .put<DefaultResponseTypes>(`profile/status/`, { status: status })
      .then((response) => {
        return response.data;
      });
  },
  updateProfile(data: UserProfileType, userId: number | null) {
    return instance
      .put<DefaultResponseTypes>("profile", {
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
      })
      .then((response) => {
        return response.data;
      });
  },
  setPhoto(photo: string | Blob) {
    const formData = new FormData();
    formData.append("image", photo);
    return instance
      .put<SavePhotoType>("profile/photo/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        return response.data;
      });
  },
};

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
      .delete<DefaultResponseTypes>("auth/login")
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

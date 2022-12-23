import axios, { AxiosResponse } from "axios";
import { UserType, PhotosType, UserProfileType } from "../types/types";
import { DefaultResponseTypes, instance, ResultCodesEnum } from "./api";

type SavePhotoDataType = { photos: PhotosType };

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
      .put<DefaultResponseTypes<SavePhotoDataType>>(
        "profile/photo/",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((response) => {
        return response.data;
      });
  },
};

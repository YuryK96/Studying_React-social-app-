export type MyPostType = {
  value: String;
  countLikes: Number;
  id: Number;
};

export type ContactsType = {
  facebook: string | null;
  github: string | null;
  instagram: string | null;
  mainLink: null;
  twitter: string | null;
  vk: string | null;
  website: string | null;
  youtube: string | null;
};

export type PhotosType = {
  large: null | string;
  small: null | string;
};

export type UserProfileType = {
  aboutMe: string | null;
  fullName: string | null;
  lookingForAJob: boolean;
  lookingForAJobDescription: string | null;
  userId: Number | null;
  photos: PhotosType;
  contacts: ContactsType;
};

export type UserType = {
  name: null | string;
  id: number;
  uniqueUrlName: null | string;
  followed: null | boolean;
  photos: PhotosType;
  status: null | string;
};

export type DialogType = {
  id: number;
  name: string;
};
export type MessageType = {
  id: number;
  message: string;
};

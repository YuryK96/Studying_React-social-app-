export type MyPostType = {
  value: string;
  countLikes: number;
  id: number;
};

export type PhotoType = {
  lastModified: number;
  lastModifiedDate?: number;
  name: string;
  size: number;
  type: string;
  webkitRelativePath: string;
};
export type PhotosType = {
  large: null | string;
  small: null | string;
};

export type ContactsType = {
  facebook: string | null;
  github: string | null;
  instagram: string | null;
  mainLink: string | null;
  twitter: string | null;
  vk: string | null;
  website: string | null;
  youtube: string | null;
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
  uniqueUrlName?: null | string;
  followed: null | boolean;
  photos: PhotosType;
  status: null | string;
};

export type DialogType = {
  id: number;
  name: string;
  messagesData: Array<MessageType>;
};
export type MessageType = {
  id: number;
  message: string;
};

import { ResultCodesEnum } from "../api/api";
import { profileAPI } from "../api/profile-api";
import { MyPostType, PhotosType, UserProfileType } from "../types/types";
import { BaseThunkType } from "./redux-store";

let initialState = {
  myPostData: [
    { value: "Hi my name is Petya", countLikes: 10, id: 1 },
    { value: "Hi my name is Wasya", countLikes: 11, id: 2 },
    { value: "Hi my name is Roma", countLikes: 1, id: 3 },
    { value: "Hi my name is Yury", countLikes: 8, id: 4 },
    { value: "Hi my name is Nastya", countLikes: 15, id: 5 },
  ] as Array<MyPostType>,
  newPostText: "",
  userProfile: null as UserProfileType | null,
  status: "" as string,
};

const profileReducer = (
  state = initialState,
  action: ActionTypes
): InitialStateType => {
  switch (action.type) {
    case "SN/profile/ADD_POST": {
      return {
        ...state,
        newPostText: "",
        myPostData: [
          ...state.myPostData,
          { value: action.newPostText, id: 1, countLikes: 11 },
        ],
      };
    }

    case "SN/profile/SET_USER_PROFILE": {
      return { ...state, userProfile: action.userProfile };
    }
    case "SN/profile/SAVE_PHOTO_SUCCESS": {
      return {
        ...state,
        userProfile: {
          ...state.userProfile,
          photos: action.photos,
        } as UserProfileType,
      };
    }
    case "SN/profile/SET_STATUS": {
      return { ...state, status: action.status };
    }
    case "SN/profile/DELETE_POST": {
      return {
        ...state,
        myPostData: state.myPostData.filter((p) => p.id != action.postId),
      };
    }

    default:
      return state;
  }
};

export const actions = {
  onAddPost: (newPostText: string) =>
    ({
      type: "SN/profile/ADD_POST",
      newPostText,
    } as const),

  deletePost: (postId: number) =>
    ({
      type: "SN/profile/DELETE_POST",
      postId,
    } as const),

  setUserProfile: (userProfile: UserProfileType) =>
    ({
      type: "SN/profile/SET_USER_PROFILE",
      userProfile,
    } as const),

  setStatus: (status: string) =>
    ({
      type: "SN/profile/SET_STATUS",
      status,
    } as const),

  savePhotoSuccess: (photos: PhotosType) =>
    ({
      type: "SN/profile/SAVE_PHOTO_SUCCESS",
      photos,
    } as const),
};

export const setUser =
  (userId: number | null): BaseThunkType<ActionTypes> =>
  async (dispatch) => {
    let profileData = await profileAPI.getProfile(userId);
    dispatch(actions.setUserProfile(profileData));
  };
export const getStatus =
  (userId: number): BaseThunkType<ActionTypes> =>
  async (dispatch) => {
    let statusString = await profileAPI.getStatus(userId);
    dispatch(actions.setStatus(statusString));
  };
export const updateStatus =
  (status: string): BaseThunkType<ActionTypes> =>
  async (dispatch) => {
    let StatusData = await profileAPI.updateStatus(status);
    if (StatusData.resultCode === ResultCodesEnum.Success) {
      dispatch(actions.setStatus(status));
    }
  };
export const updateProfile =
  (
    data: UserProfileType,
    userId: number | null,
    setError: any
  ): BaseThunkType<ActionTypes> =>
  async (dispatch) => {
    let profileData = await profileAPI.updateProfile(data, userId);
    if (profileData.resultCode === ResultCodesEnum.Success) {
      dispatch(setUser(userId));
    } else {
      setError("server", { message: profileData.messages });
    }
  };

export const savePhoto =
  (photo: File): BaseThunkType<ActionTypes> =>
  async (dispatch) => {
    let photoData = await profileAPI.setPhoto(photo);

    if (photoData.resultCode === ResultCodesEnum.Success) {
      dispatch(actions.savePhotoSuccess(photoData.data.photos));
    }
  };

export default profileReducer;

type ActionTypes =
  | ReturnType<typeof actions.onAddPost>
  | ReturnType<typeof actions.deletePost>
  | ReturnType<typeof actions.setUserProfile>
  | ReturnType<typeof actions.setStatus>
  | ReturnType<typeof actions.savePhotoSuccess>;

export type InitialStateType = typeof initialState;

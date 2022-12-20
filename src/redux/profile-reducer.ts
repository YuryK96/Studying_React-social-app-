import { Dispatch } from "react";
import { ThunkAction } from "redux-thunk";
import { profileAPI, usersAPI } from "../api/api";
import {
  MyPostType,
  PhotosType,
  PhotoType,
  UserProfileType,
} from "../types/types";
import { AppStateType } from "./redux-store";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";
const DELETE_POST = "DELETE_POST";
const SAVE_PHOTO_SUCCESS = "SAVE_PHOTO_SUCCESS";

export type InitialStateType = typeof initialState;
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
    case ADD_POST: {
      return {
        ...state,
        newPostText: "",
        myPostData: [
          ...state.myPostData,
          { value: action.newPostText, id: 1, countLikes: 11 },
        ],
      };
    }

    case SET_USER_PROFILE: {
      return { ...state, userProfile: action.userProfile };
    }
    case SAVE_PHOTO_SUCCESS: {
      return {
        ...state,
        userProfile: {
          ...state.userProfile,
          photos: action.photos,
        } as UserProfileType,
      };
    }
    case SET_STATUS: {
      return { ...state, status: action.status };
    }
    case DELETE_POST: {
      return {
        ...state,
        myPostData: state.myPostData.filter((p) => p.id != action.postId),
      };
    }

    default:
      return state;
  }
};

type ActionTypes =
  | OnAddPostActionType
  | DeletePostActionType
  | SetUserProfileActionType
  | SetStatusActionType
  | SavePhotoSuccessActionType;

type getStateType = () => AppStateType;
type DispatchType = Dispatch<ActionTypes>;
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionTypes>;

type OnAddPostActionType = {
  type: typeof ADD_POST;
  newPostText: string;
};
export const onAddPost = (newPostText: string): OnAddPostActionType => ({
  type: ADD_POST,
  newPostText,
});

type DeletePostActionType = {
  type: typeof DELETE_POST;
  postId: Number;
};
export const deletePost = (postId: number): DeletePostActionType => ({
  type: DELETE_POST,
  postId,
});

type SetUserProfileActionType = {
  type: typeof SET_USER_PROFILE;
  userProfile: UserProfileType;
};
export const setUserProfile = (
  userProfile: UserProfileType
): SetUserProfileActionType => ({
  type: SET_USER_PROFILE,
  userProfile,
});

type SetStatusActionType = {
  type: typeof SET_STATUS;
  status: string;
};
export const setStatus = (status: string): SetStatusActionType => ({
  type: SET_STATUS,
  status,
});

type SavePhotoSuccessActionType = {
  type: typeof SAVE_PHOTO_SUCCESS;
  photos: PhotosType;
};
export const savePhotoSuccess = (
  photos: PhotosType
): SavePhotoSuccessActionType => ({
  type: SAVE_PHOTO_SUCCESS,
  photos,
});

export const setUser =
  (userId: number | null): ThunkType =>
  async (dispatch) => {
    let response = await usersAPI.getProfile(userId);
    dispatch(setUserProfile(response.data));
  };
export const getStatus =
  (userId: number): ThunkType =>
  async (dispatch) => {
    let response = await profileAPI.getStatus(userId);
    dispatch(setStatus(response.data));
  };
export const updateStatus =
  (status: string): ThunkType =>
  async (dispatch) => {
    let response = await profileAPI.updateStatus(status);
    if (response.data.resultCode === 0) {
      dispatch(setStatus(status));
    }
  };
export const updateProfile =
  (data: UserProfileType, userId: number | null, setError: any): ThunkType =>
  async (dispatch) => {
    let response = await profileAPI.updateProfile(data, userId);
    if (response.data.resultCode === 0) {
      dispatch(setUser(userId));
    } else {
      setError("server", { message: response.data.messages });
    }
  };

export const savePhoto =
  (photo: PhotoType): ThunkType =>
  async (dispatch) => {
    let response = await profileAPI.setPhoto(photo);
    if (response.data.resultCode === 0) {
      dispatch(savePhotoSuccess(response.data.data.photos));
    }
  };

export default profileReducer;

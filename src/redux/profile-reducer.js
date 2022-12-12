import { profileAPI, usersAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";
const DELETE_POST = "DELETE_POST";
const SAVE_PHOTO_SUCCESS = "SAVE_PHOTO_SUCCESS";

let initialState = {
  myPostData: [
    { value: "Hi my name is Petya", countLikes: "10", id: 1 },
    { value: "Hi my name is Wasya", countLikes: "11", id: 2 },
    { value: "Hi my name is Roma", countLikes: "1", id: 3 },
    { value: "Hi my name is Yury", countLikes: "8", id: 4 },
    { value: "Hi my name is Nastya", countLikes: "15", id: 5 },
  ],

  userProfile: null,
  status: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      return {
        ...state,
        newPostText: "",
        myPostData: [
          ...state.myPostData,
          { value: action.newPostText, countLikes: 11 },
        ],
      };
    }

    case SET_USER_PROFILE: {
      return { ...state, userProfile: action.userProfile };
    }
    case SAVE_PHOTO_SUCCESS: {
      return {
        ...state,
        userProfile: { ...state.userProfile, photos: action.photos },
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

export const onAddPost = (newPostText) => ({
  type: ADD_POST,
  newPostText,
});
export const deletePost = (postId) => ({
  type: DELETE_POST,
  postId,
});

export const setUserProfile = (userProfile) => ({
  type: SET_USER_PROFILE,
  userProfile,
});
export const setStatus = (status) => ({
  type: SET_STATUS,
  status,
});
export const savePhotoSuccess = (photos) => ({
  type: SAVE_PHOTO_SUCCESS,
  photos,
});

export const setUser = (userId) => async (dispatch) => {
  let response = await usersAPI.getProfile(userId);
  dispatch(setUserProfile(response.data));
};
export const getStatus = (userId) => async (dispatch) => {
  let response = await profileAPI.getStatus(userId);
  dispatch(setStatus(response.data));
};
export const updateStatus = (status) => async (dispatch) => {
  let response = await profileAPI.updateStatus(status);
  if (response.data.resultCode === 0) {
    dispatch(setStatus(status));
  }
};

export const savePhoto = (photo) => async (dispatch) => {
  let response = await profileAPI.setPhoto(photo);
  if (response.data.resultCode === 0) {
    dispatch(savePhotoSuccess(response.data.data.photos));
  }
};

export default profileReducer;

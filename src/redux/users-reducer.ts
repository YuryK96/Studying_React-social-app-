import { usersAPI } from "../api/api";
import { UserType } from "../types/types";
import { updateObjectInArray } from "../utils/helper/objects-helpers";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USER_COUNT = "SET_TOTAL_USER_COUNT";
const TOOGLE_IS_FETCHING = "TOOGLE_IS_FETCHING";
const TOOGLE_IS_FOLLOWING = "TOOGLE_IS_FOLLOWING";

let initialState = {
  users: [] as Array<UserType>,
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [] as Array<number>, // array of users  ids
};

export type InitialStateType = typeof initialState;
const usersReducer = (state = initialState, action: any): InitialStateType => {
  switch (action.type) {
    case FOLLOW: {
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, "id", {
          followed: true,
        }),
      };
    }

    case UNFOLLOW: {
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, "id", {
          followed: false,
        }),
      };
    }

    case SET_USERS:
      return {
        ...state,
        users: [...action.users],
      };

    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.page,
      };
    case SET_TOTAL_USER_COUNT:
      return {
        ...state,
        totalUsersCount: action.totalCount,
      };
    case TOOGLE_IS_FOLLOWING:
      return {
        ...state,
        followingInProgress: action.followingInProgress
          ? [...state.followingInProgress, action.userId]
          : [state.followingInProgress.filter((id) => id != action.userId)],
      };
    case TOOGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      };
    default:
      return state;
  }
};

type FollowActionType = {
  type: typeof FOLLOW;
  userId: Number;
};
export const follow = (userId: number): FollowActionType => ({
  type: FOLLOW,
  userId,
});
type UnfollowActionType = {
  type: typeof UNFOLLOW;
  userId: Number;
};
export const unfollow = (userId: number): UnfollowActionType => ({
  type: UNFOLLOW,
  userId,
});

type SetUsersActionType = {
  type: typeof SET_USERS;
  users: Array<UserType>;
};
export const setUsers = (users: Array<UserType>): SetUsersActionType => ({
  type: SET_USERS,
  users,
});
type SetCurrentPageActionType = {
  type: typeof SET_CURRENT_PAGE;
  page: Number;
};
export const setCurrentPage = (page: number): SetCurrentPageActionType => ({
  type: SET_CURRENT_PAGE,
  page,
});
type SetTotalUserCountActionType = {
  type: typeof SET_TOTAL_USER_COUNT;
  totalCount: Number;
};
export const setTotalUserCount = (
  totalCount: number
): SetTotalUserCountActionType => ({
  type: SET_TOTAL_USER_COUNT,
  totalCount,
});
type ToggleIsFetchingActionType = {
  type: typeof TOOGLE_IS_FETCHING;
  isFetching: boolean;
};
export const toggleIsFetching = (
  isFetching: boolean
): ToggleIsFetchingActionType => ({
  type: TOOGLE_IS_FETCHING,
  isFetching,
});
type ToggleIsFollowingActionType = {
  type: typeof TOOGLE_IS_FOLLOWING;
  followingInProgress: boolean;
  userId: number;
};
export const toggleIsFollowing = (
  followingInProgress: boolean,
  userId: number
): ToggleIsFollowingActionType => ({
  type: TOOGLE_IS_FOLLOWING,
  followingInProgress,
  userId,
});

export const requestUsers = (page: number, pageSize: number) => {
  return async (dispatch: any) => {
    dispatch(toggleIsFetching(true));
    dispatch(setCurrentPage(page));
    let response = await usersAPI.getUsers(page, pageSize);

    dispatch(toggleIsFetching(false));
    dispatch(setUsers(response.items));
    dispatch(setTotalUserCount(response.totalCount));
  };
};

const followUnfollowFlow = async (
  dispatch: any,
  id: number,
  apiMethod: any,
  actionCreator: any
) => {
  dispatch(toggleIsFollowing(true, id));

  let response = await apiMethod(id);
  if (response.data.resultCode === 0) {
    dispatch(actionCreator(id));
  }
  dispatch(toggleIsFollowing(false, id));
};

export const toggleUserFollow = (id: number) => async (dispatch: any) => {
  followUnfollowFlow(dispatch, id, usersAPI.unFollow.bind(usersAPI), unfollow);
};

export const toggleUserUnFollow = (id: number) => async (dispatch: any) => {
  followUnfollowFlow(dispatch, id, usersAPI.follow.bind(usersAPI), follow);
};

export default usersReducer;

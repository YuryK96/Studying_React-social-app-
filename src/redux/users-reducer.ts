import { DefaultResponseTypes, ResultCodesEnum } from "../api/api";
import { usersAPI } from "../api/users-api";
import { UserType } from "../types/types";
import { updateObjectInArray } from "../utils/helper/objects-helpers";
import { BaseThunkType, DispatchType } from "./redux-store";

let initialState = {
  users: [] as Array<UserType>,
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [] as Array<number>, // array of users  ids
};

const usersReducer = (
  state = initialState,
  action: ActionTypes
): InitialStateType => {
  switch (action.type) {
    case "SN/users/FOLLOW": {
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, "id", {
          followed: true,
        }),
      };
    }

    case "SN/users/UNFOLLOW": {
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, "id", {
          followed: false,
        }),
      };
    }

    case "SN/users/SET_USERS":
      return {
        ...state,
        users: [...action.users],
      };

    case "SN/users/SET_CURRENT_PAGE":
      return {
        ...state,
        currentPage: action.page,
      };
    case "SN/users/SET_TOTAL_USER_COUNT":
      return {
        ...state,
        totalUsersCount: action.totalCount,
      };
    case "SN/users/TOOGLE_IS_FOLLOWING":
      return {
        ...state,
        followingInProgress: action.followingInProgress
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter((id) => id != action.userId),
      };
    case "SN/users/TOOGLE_IS_FETCHING":
      return {
        ...state,
        isFetching: action.isFetching,
      };
    default:
      return state;
  }
};

export const actions = {
  follow: (userId: number) =>
    ({
      type: "SN/users/FOLLOW",
      userId,
    } as const),

  unfollow: (userId: number) =>
    ({
      type: "SN/users/UNFOLLOW",
      userId,
    } as const),

  setUsers: (users: Array<UserType>) =>
    ({
      type: "SN/users/SET_USERS",
      users,
    } as const),

  setCurrentPage: (page: number) =>
    ({
      type: "SN/users/SET_CURRENT_PAGE",
      page,
    } as const),

  setTotalUserCount: (totalCount: number) =>
    ({
      type: "SN/users/SET_TOTAL_USER_COUNT",
      totalCount,
    } as const),

  toggleIsFetching: (isFetching: boolean) =>
    ({
      type: "SN/users/TOOGLE_IS_FETCHING",
      isFetching,
    } as const),

  toggleIsFollowing: (followingInProgress: boolean, userId: number) =>
    ({
      type: "SN/users/TOOGLE_IS_FOLLOWING",
      followingInProgress,
      userId,
    } as const),
};

export const requestUsers = (
  page: number,
  pageSize: number
): BaseThunkType<ActionTypes> => {
  return async (dispatch, getState) => {
    dispatch(actions.toggleIsFetching(true));
    dispatch(actions.setCurrentPage(page));
    let response = await usersAPI.getUsers(page, pageSize);

    dispatch(actions.toggleIsFetching(false));
    dispatch(actions.setUsers(response.items));
    dispatch(actions.setTotalUserCount(response.totalCount));
  };
};

const _followUnfollowFlow = async (
  dispatch: DispatchType<ActionTypes>,
  id: number,
  apiMethod: (id: number) => Promise<DefaultResponseTypes>,
  actionCreator: (
    id: number
  ) => ReturnType<typeof actions.follow> | ReturnType<typeof actions.unfollow>
) => {
  dispatch(actions.toggleIsFollowing(true, id));

  let responseData = await apiMethod(id);
  if (responseData.resultCode === ResultCodesEnum.Success) {
    dispatch(actionCreator(id));
  }
  dispatch(actions.toggleIsFollowing(false, id));
};

export const toggleUserFollow =
  (id: number): BaseThunkType<ActionTypes> =>
  async (dispatch) => {
    _followUnfollowFlow(
      dispatch,
      id,
      usersAPI.unFollow.bind(usersAPI),
      actions.unfollow
    );
  };

export const toggleUserUnFollow =
  (id: number): BaseThunkType<ActionTypes> =>
  async (dispatch) => {
    _followUnfollowFlow(
      dispatch,
      id,
      usersAPI.follow.bind(usersAPI),
      actions.follow
    );
  };

export default usersReducer;

export type InitialStateType = typeof initialState;

type ActionTypes =
  | ReturnType<typeof actions.setCurrentPage>
  | ReturnType<typeof actions.setTotalUserCount>
  | ReturnType<typeof actions.toggleIsFetching>
  | ReturnType<typeof actions.toggleIsFollowing>
  | ReturnType<typeof actions.follow>
  | ReturnType<typeof actions.setUsers>
  | ReturnType<typeof actions.unfollow>;

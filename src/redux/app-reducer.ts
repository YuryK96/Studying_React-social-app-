import { Dispatch } from "react";
import { ThunkAction } from "redux-thunk";
import { authAPI } from "../api/api";
import { setAuthUser } from "./auth-reducer";
import { AppStateType } from "./redux-store";

const SET_INITIALIZED_SUCCESS = "SET_INITIALIZED_SUCCESS";
export type InitialStateType = {
  initialized: boolean;
};
let initialState: InitialStateType = {
  initialized: false,
};

const appReducer = (
  state = initialState,
  action: ActionTypes
): InitialStateType => {
  switch (action.type) {
    case SET_INITIALIZED_SUCCESS: {
      return {
        ...state,
        initialized: true,
      };
    }

    default:
      return state;
  }
};

type ActionTypes = initializedSuccessActionType;

type getStateType = () => AppStateType;
type DispatchType = Dispatch<ActionTypes>;
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionTypes>;

type initializedSuccessActionType = {
  type: typeof SET_INITIALIZED_SUCCESS;
};

export const initializedSuccess = (): initializedSuccessActionType => ({
  type: SET_INITIALIZED_SUCCESS,
});

export const initializeApp = (): ThunkType => async (dispatch) => {
  let response = await dispatch(setAuthUser());
  dispatch(initializedSuccess());
};

export default appReducer;

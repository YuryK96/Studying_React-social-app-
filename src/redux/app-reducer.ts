import { authAPI } from "../api/api";
import { setAuthUser } from "./auth-reducer";

const SET_INITIALIZED_SUCCESS = "SET_INITIALIZED_SUCCESS";
export type InitialStateType = {
  initialized: boolean;
};
let initialState: InitialStateType = {
  initialized: false,
};

const appReducer = (state = initialState, action: any): InitialStateType => {
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

type initializedSuccessActionType = {
  type: typeof SET_INITIALIZED_SUCCESS;
};

export const initializedSuccess = (): initializedSuccessActionType => ({
  type: SET_INITIALIZED_SUCCESS,
});

export const initializeApp = () => (dispatch: any) => {
  let promise = dispatch(setAuthUser());
  promise.then(() => {
    dispatch(initializedSuccess());
  });
};

export default appReducer;

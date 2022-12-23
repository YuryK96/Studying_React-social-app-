import { setAuthUser } from "./auth-reducer";
import { BaseThunkType } from "./redux-store";

let initialState: InitialStateType = {
  initialized: false,
};

const appReducer = (
  state = initialState,
  action: ActionTypes
): InitialStateType => {
  switch (action.type) {
    case "SN/APP/SET_INITIALIZED_SUCCESS": {
      return {
        ...state,
        initialized: true,
      };
    }

    default:
      return state;
  }
};

export const actions = {
  initializedSuccess: () =>
    ({
      type: "SN/APP/SET_INITIALIZED_SUCCESS",
    } as const),
};
export const initializeApp =
  (): BaseThunkType<ActionTypes> => async (dispatch) => {
    let response = await dispatch(setAuthUser());
    dispatch(actions.initializedSuccess());
  };

export default appReducer;

export type InitialStateType = {
  initialized: boolean;
};

type ActionTypes = ReturnType<typeof actions.initializedSuccess>;

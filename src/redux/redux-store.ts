import {
  Action,
  applyMiddleware,
  combineReducers,
  compose,
  legacy_createStore as createStore,
} from "redux";
import authReducer from "./auth-reducer";
import dialogReducer from "./dialog-reducer";
import profileReducer from "./profile-reducer";
import sideBarReducer from "./sideBar-reducer";
import usersReducer from "./users-reducer";
import thunkMiddleware, { ThunkAction } from "redux-thunk";
import appReducer from "./app-reducer";
import { Dispatch } from "react";

let rootReducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogReducer,
  sideBar: sideBarReducer,
  usersPage: usersReducer,
  auth: authReducer,
  app: appReducer,
});

// let store = createStore(reducers, applyMiddleware(thunkMiddleware));

const composeEnhancers =
  // @ts-ignore
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducers,
  /* preloadedState, */ composeEnhancers(applyMiddleware(thunkMiddleware))
);
// @ts-ignore
window.__store__ = store;
export default store;

type RootReducerType = typeof rootReducers;
export type AppStateType = ReturnType<RootReducerType>;

export type DispatchType<A> = Dispatch<A>;
export type BaseThunkType<A extends Action, R = Promise<void>> = ThunkAction<
  R,
  AppStateType,
  unknown,
  A
>;

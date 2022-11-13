import { combineReducers, legacy_createStore as createStore } from "redux";
import dialogReducer from "./dialog-reducer";
import profileReducer from "./profile-reducer";
import sideBarReducer from "./sideBar-reducer";
import usersReducer from "./users-reducer";

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogReducer,
  sideBar: sideBarReducer,
  usersPage: usersReducer,
});
let store = createStore(reducers);

window.store = store;
export default store;

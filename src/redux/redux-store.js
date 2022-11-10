import { combineReducers, legacy_createStore as createStore } from "redux";
import dialogReducer from "./dialog-reducer";
import profileReducer from "./profile-reducer";
import sideBarReducer from "./sideBar-reducer";

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogReducer,
  sideBar: sideBarReducer,
});
let store = createStore(reducers);
console.log(store);
export default store;

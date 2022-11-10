import dialogReducer from "./dialog-reducer";
import profileReducer from "./profile-reducer";
import sideBarReducer from "./sideBar-reducer";
let store = {
  // all info in Project
  _appState: {
    dialogsPage: {
      dialogsData: [
        { name: "Vasya", id: "1" },
        { name: "Petya", id: "2" },
        { name: "Alberto", id: "3" },
        { name: "Nikitos", id: "4" },
        { name: "Lebowski", id: "5" },
        { name: "iValera", id: "6" },
      ],
      // Messages in Messages
      messagesData: [
        { message: "Hi, How are you?" },
        { message: "What are you going to do at night?" },
        { message: "We make a patie!" },
        { message: "4o slichno?" },
        { message: "Lebowski, Where is my money?!" },
        { message: "Darou" },
      ],
      newMessage: "",
    },

    profilePage: {
      // Post in Profile
      myPostData: [
        { value: "Hi my name is Petya", countLikes: "10" },
        { value: "Hi my name is Wasya", countLikes: "11" },
        { value: "Hi my name is Roma", countLikes: "1" },
        { value: "Hi my name is Yury", countLikes: "8" },
        { value: "Hi my name is Nastya", countLikes: "15" },
      ],
      newPostText: "",
    },
    siderBar: {},
  },

  getState() {
    return this._appState;
  },
  dispatch(action) {
    this._appState.profilePage = profileReducer(
      this._appState.profilePage,
      action
    );
    this._appState.dialogsPage = dialogReducer(
      this._appState.dialogsPage,
      action
    );
    this._appState.siderBar = sideBarReducer(this._appState.siderBar, action);

    this._callSubscriber(this._appState);
  },

  // observer for rendering from index.js
  _callSubscriber: () => {},
  subscribe(observer) {
    this._callSubscriber = observer;
  },
};

export default store;

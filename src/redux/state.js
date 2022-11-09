const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";
const ADD_POST = "ADD-POST";
const ADD_MESSAGE = "ADD-MESSAGE";

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
      newMessage: ""
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
  },

  getState() {
    return this._appState;
  },
  dispatch(action) {
    if (action.type === ADD_POST) {
      let newPost = {
        value: this._appState.profilePage.newPostText,
        countLikes: 10,
      };
      this._appState.profilePage.myPostData.push(newPost);
      this._appState.profilePage.newPostText = "";
      this._callSubscriber(this._appState);
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._appState.profilePage.newPostText = action.newText;
      this._callSubscriber(this._appState);
     
    } 
    else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
      this._appState.dialogsPage.newMessage = action.newMessage;
      this._callSubscriber(this._appState);

    }
    else if (action.type === ADD_MESSAGE) {
      let newMessage = {
        message: this._appState.dialogsPage.newMessage,
      };
      this._appState.dialogsPage.messagesData.push(newMessage);
      this._appState.dialogsPage.newMessage = ''
      this._callSubscriber(this._appState);
    }
  },

  // observer for rendering from index.js
  _callSubscriber: () => {},
  subscribe(observer) {
    this._callSubscriber = observer;
  },
};

export const addPostActionCreater = () => ({
  type: ADD_POST,
});

export const updateNewPostTextActionCreator = (action) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: action.target.value,
});

export const updateNewMessageTextActionCreator = (action) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  newMessage: action.target.value,
});


export const addNewMessage=() => ({
  type: ADD_MESSAGE,
})

export default store;

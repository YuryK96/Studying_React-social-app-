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

  getState () {
    return this._appState
  },

 

 
  dispatch(action){
      if (action.type === 'ADD-POST') {
        let newPost = {
          value: this._appState.profilePage.newPostText,
          countLikes: 10,
        };
        this._appState.profilePage.myPostData.push(newPost);
        this._appState.profilePage.newPostText = "";
        this._callSubscriber(this);
      }
      else if (action.type === 'UPDATE-NEW-POST-TEXT'){
        this._appState.profilePage.newPostText = action.newText;
        this._callSubscriber(this);
      }

      else if (action.type === 'ADD-MESSAGE'){
        let newMessage = {
          message: action.message,
        };
        this._appState.dialogsPage.messagesData.push(newMessage);
      }

  },


  // observer for rendering from index.js
  _callSubscriber: () => {},
  subscribe(observer) {
    this._callSubscriber = observer;
  },
};
export default store;

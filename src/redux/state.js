

    // observer for rendering from index.js
let renderEntireTree = ()=> {}
export const subscribe =(observer) => {
   renderEntireTree =  observer;
}


export let appState = {
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
};
export default appState;

// add Post in Profile
export const changeNewPostText = (newPostTextUp) => {
  appState.profilePage.newPostText = newPostTextUp;
  renderEntireTree(appState);
};


// add Post in Profile
export const addPost = () => {
  let newPost = {
    value: appState.profilePage.newPostText,
    countLikes: 10,
  };
  appState.profilePage.myPostData.push(newPost);
  appState.profilePage.newPostText = "";

  renderEntireTree(appState);
};


 // add Message in Messages
export const addMessage = (textarea) => {
  let newMessage = {
    message: textarea,
  };
  appState.dialogsPage.messagesData.push(newMessage);

};



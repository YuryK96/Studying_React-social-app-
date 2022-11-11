const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
  // Post in Profile
  myPostData: [
    { value: "Hi my name is Petya", countLikes: "10" },
    { value: "Hi my name is Wasya", countLikes: "11" },
    { value: "Hi my name is Roma", countLikes: "1" },
    { value: "Hi my name is Yury", countLikes: "8" },
    { value: "Hi my name is Nastya", countLikes: "15" },
  ],
  newPostText: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        value: state.newPostText,
        countLikes: 10,
      };
      let stateCopy = { ...state };

      stateCopy.myPostData = [...state.myPostData];
      stateCopy.myPostData.push(newPost);
      stateCopy.newPostText = "";
      return stateCopy;
    }

    case UPDATE_NEW_POST_TEXT: {
      let stateCopy = { ...state };
      stateCopy.newPostText = action.newText;
      return stateCopy;
    }
    default:
      return state;
  }
};

export const addPostActionCreater = () => ({
  type: ADD_POST,
});

export const updateNewPostTextActionCreator = (action) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: action.target.value,
});

export default profileReducer;

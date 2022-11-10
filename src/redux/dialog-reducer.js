const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";
const ADD_MESSAGE = "ADD-MESSAGE";

let initialState = {
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
};

const dialogReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_TEXT:
      state.newMessage = action.newMessage;
      return state;

    case ADD_MESSAGE:
      let newMessage = {
        message: state.newMessage,
      };
      state.messagesData.push(newMessage);
      state.newMessage = "";
      return state;
    default:
      return state;
  }
};

export const updateNewMessageTextActionCreator = (action) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  newMessage: action.target.value,
});

export const addNewMessageActionCreator = () => ({
  type: ADD_MESSAGE,
});

export default dialogReducer;

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
    { message: "Hi, How are you?", id: "1" },
    { message: "What are you going to do at night?", id: "2" },
    { message: "We make a patie!", id: "3" },
    { message: "4o slichno?", id: "4" },
    { message: "Lebowski, Where is my money?!", id: "5" },
    { message: "Darou", id: "6" },
  ],
  newMessage: "",
};

const dialogReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_TEXT: {
      return { ...state, newMessage: action.newMessage };
    }
    case ADD_MESSAGE: {
      return {
        ...state,
        messagesData: [
          ...state.messagesData,
          { message: state.newMessage, id: 7 },
        ],
        newMessage: "",
      };
    }
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

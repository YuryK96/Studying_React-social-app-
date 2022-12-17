import { DialogType, MessageType } from "../types/types";

const ADD_MESSAGE = "ADD-MESSAGE";

export type initialStateType = typeof initialState;

let initialState = {
  dialogsData: [
    { name: "Vasya", id: 1 },
    { name: "Petya", id: 2 },
    { name: "Alberto", id: 3 },
    { name: "Nikitos", id: 4 },
    { name: "Lebowski", id: 5 },
    { name: "iValera", id: 6 },
  ] as Array<DialogType>,
  // Messages in Messages
  messagesData: [
    { message: "Hi, How are you?", id: 1 },
    { message: "What are you going to do at night?", id: 2 },
    { message: "We make a patie!", id: 3 },
    { message: "4o slichno?", id: 4 },
    { message: "Lebowski, Where is my money?!", id: 5 },
    { message: "Darou", id: 6 },
  ] as Array<MessageType>,
};

type AddMessageActionType = {
  type: typeof ADD_MESSAGE;
  newMessage: string;
};

const dialogReducer = (
  state = initialState,
  action: AddMessageActionType
): initialStateType => {
  switch (action.type) {
    case ADD_MESSAGE: {
      return {
        ...state,
        messagesData: [
          ...state.messagesData,
          { message: action.newMessage, id: 7 },
        ],
      };
    }
    default:
      return state;
  }
};

type AddNewMessageActionType = {
  type: typeof ADD_MESSAGE;
  newMessage: string;
};
export const addNewMessage = (newMessage: string): AddNewMessageActionType => ({
  type: ADD_MESSAGE,
  newMessage,
});

export default dialogReducer;

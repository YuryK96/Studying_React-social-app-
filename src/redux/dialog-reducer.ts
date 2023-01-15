import { DialogType, MessageType } from "../types/types";

let initialState = {
  dialogsData: [
    {
      name: "User 1",
      id: 0,
      messagesData: [{ message: "Hi, How are you?", id: 1 }],
    },
    {
      name: "User 2",
      id: 2,
      messagesData: [
        { message: "Hello", id: 1 },
        { message: "What are you going to do at night?", id: 2 },
      ],
    },
    {
      name: "User 3",
      id: 3,
      messagesData: [
        { message: "Hi, nice to meet you", id: 1 },
        { message: "My name is Sergio", id: 2 },
      ],
    },
    {
      name: "User 4",
      id: 4,
      messagesData: [
        { message: "Hi", id: 1 },
        { message: "Sup?", id: 2 },
      ],
    },
    {
      name: "User 5",
      id: 5,
      messagesData: [
        { message: "Welcome", id: 1 },
        { message: "You are amazing", id: 2 },
      ],
    },
    {
      name: "User 6",
      id: 6,
      messagesData: [
        { message: "Hi, did you check your email?", id: 1 },
        { message: "sure", id: 2 },
      ],
    },
  ] as Array<DialogType>,
};

const dialogReducer = (
  state = initialState,
  action: ActionTypes
): initialStateType => {
  switch (action.type) {
    case "SN/dialog/ADD_MESSAGE": {
      return {
        ...state,
        dialogsData: state.dialogsData.map((item, i) => {
          if (item.id === action.id) {
            return {
              ...item,
              messagesData: [
                ...item.messagesData,
                { message: action.newMessage, id: 1 },
              ],
            };
          } else {
            return item;
          }
        }),
      };
    }
    default:
      return state;
  }
};

export const actions = {
  addNewMessage: (newMessage: string, id: number = 0) =>
    ({
      type: "SN/dialog/ADD_MESSAGE",
      newMessage,
      id,
    } as const),
};
export default dialogReducer;

export type initialStateType = typeof initialState;
type ActionTypes = ReturnType<typeof actions.addNewMessage>;

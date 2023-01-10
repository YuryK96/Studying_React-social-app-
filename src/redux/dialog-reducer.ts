import { DialogType, MessageType } from "../types/types";

let initialState = {
  dialogsData: [
    {
      name: "Vasya",
      id: 0,
      messagesData: [{ message: "Hi, How are you?", id: 1 }],
    },
    {
      name: "Petya",
      id: 2,
      messagesData: [
        { message: "Hi, How are you?", id: 1 },
        { message: "What are you going to do at night?", id: 2 },
      ],
    },
    {
      name: "Alberto",
      id: 3,
      messagesData: [
        { message: "Hi, How are you?", id: 1 },
        { message: "What are you going to do at night?", id: 2 },
      ],
    },
    {
      name: "Nikitos",
      id: 4,
      messagesData: [
        { message: "Hi, How are you?", id: 1 },
        { message: "bb?", id: 2 },
      ],
    },
    {
      name: "Artem",
      id: 5,
      messagesData: [
        { message: "Hi, How are you?", id: 1 },
        { message: "aa?", id: 2 },
      ],
    },
    {
      name: "iValera",
      id: 6,
      messagesData: [
        { message: "Hi, How are you?", id: 1 },
        { message: "213?", id: 2 },
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

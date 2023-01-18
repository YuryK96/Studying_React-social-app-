import { AppDispatch, BaseThunkType } from "./redux-store";
import { v1 } from "uuid";
import { chatApi, ChatMessageApiType, StatusType } from "../api/chat-api";

let initialState = {
  messages: [] as ChatMessageType[],
  status: "pending" as StatusType,
};

const chatReducer = (
  state = initialState,
  action: ActionTypes
): initialStateType => {
  switch (action.type) {
    case "SM/chat/MESSAGES_RECEIVED": {
      let newState = [...state.messages];

      if (action.payload.messages.length > 1) {
        newState = [];
      }
      return {
        ...state,
        messages: [
          ...state.messages,
          ...action.payload.messages.map((m) => ({ ...m, id: v1() })),
        ].filter((m, index, array) => index >= array.length - 60),
      };
    }

    case "SM/chat/CHANGE_STATUS": {
      return {
        ...state,
        status: action.payload.status,
      };
    }

    default:
      return state;
  }
};

export const actions = {
  messagesReceived: (messages: ChatMessageApiType[]) =>
    ({
      type: "SM/chat/MESSAGES_RECEIVED",
      payload: { messages },
    } as const),
  statusChanged: (status: StatusType) =>
    ({
      type: "SM/chat/CHANGE_STATUS",
      payload: { status },
    } as const),
};
let _newMessageHandlerCreator:
  | ((messages: ChatMessageApiType[]) => void)
  | null = null;
const newMessageHandlerCreator = (dispatch: AppDispatch) => {
  if (_newMessageHandlerCreator === null) {
    _newMessageHandlerCreator = (messages: ChatMessageApiType[]) => {
      dispatch(actions.messagesReceived(messages));
    };
  }
  return _newMessageHandlerCreator;
};
let _StatusChangingHandlerCreator: ((status: StatusType) => void) | null = null;
const StatusChangingHandlerCreator = (dispatch: AppDispatch) => {
  if (_StatusChangingHandlerCreator === null) {
    _StatusChangingHandlerCreator = (status: StatusType) => {
      dispatch(actions.statusChanged(status));
    };
  }
  return _StatusChangingHandlerCreator;
};
export const startMessagesListening =
  (): BaseThunkType<ActionTypes> => async (dispatch) => {
    chatApi.start();
    chatApi.subscribe("message-received", newMessageHandlerCreator(dispatch));
    chatApi.subscribe("status-changed", StatusChangingHandlerCreator(dispatch));
  };

export const sendMessage =
  (message: string): BaseThunkType<ActionTypes> =>
  async (dispatch) => {
    chatApi.sendMessage(message);
  };
export const stopMessagesListening =
  (): BaseThunkType<ActionTypes> => async (dispatch) => {
    chatApi.unsubscribe("message-received", newMessageHandlerCreator(dispatch));
    chatApi.unsubscribe(
      "status-changed",
      StatusChangingHandlerCreator(dispatch)
    );
    chatApi.stop();
  };

export default chatReducer;

export type initialStateType = typeof initialState;

type ActionTypes =
  | ReturnType<typeof actions.messagesReceived>
  | ReturnType<typeof actions.statusChanged>;

export type ChatMessageType = ChatMessageApiType & { id: string };

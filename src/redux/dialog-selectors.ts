import { AppStateType } from "./redux-store";

export const getMessagesData = (state: AppStateType) => {
  return state.dialogsPage.messagesData;
};

export const getDialogsData = (state: AppStateType) => {
  return state.dialogsPage.dialogsData;
};

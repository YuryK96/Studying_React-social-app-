import { AppStateType } from "./redux-store";

export const getDialogsData = (state: AppStateType) => {
  return state.dialogsPage.dialogsData;
};

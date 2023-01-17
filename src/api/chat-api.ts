import { ChatMessageType } from "../pages/Chat/ChatPage";

const subscribes = [] as SubcriberType[];
export const chatApi = {
  subscribe(callback: SubcriberType) {
    subscribes.push(callback);
  },
};

type SubcriberType = (messages: ChatMessageType[]) => void;

let ws: WebSocket | null = null;
const subscribes = {
  "message-received": [] as MessagesReceivedSubcriberType[],
  "status-changed": [] as StatusChangedSubcriberType[],
};

const closeHendler = () => {
  setTimeout(() => {
    notifySubscribersAboutStatus("pending");
    createChannel();
  }, 3000);
};

const messageHandler = (e: MessageEvent) => {
  const newMessage = JSON.parse(e.data);
  subscribes["message-received"].forEach((s) => s(newMessage));
};

const openHandler = () => {
  notifySubscribersAboutStatus("read");
};
const errorHandler = () => {
  notifySubscribersAboutStatus("error");
  console.error("REFRESH PAGE");
};

const notifySubscribersAboutStatus = (status: StatusType) => {
  subscribes["status-changed"].forEach((s) => s(status));
};

const cleanUp = () => {
  ws?.removeEventListener("close", closeHendler);
  ws?.removeEventListener("message", messageHandler);
  ws?.removeEventListener("open", openHandler);
  ws?.removeEventListener("error", errorHandler);
};

function createChannel() {
  cleanUp();

  ws?.close();

  ws = new WebSocket(
    "wss://social-network.samuraijs.com/handlers/ChatHandler.ashx"
  );
  notifySubscribersAboutStatus("pending");
  ws.addEventListener("close", closeHendler);
  ws.addEventListener("message", messageHandler);
  ws.addEventListener("open", openHandler);
  ws.addEventListener("error", errorHandler);
}

export const chatApi = {
  start() {
    createChannel();
  },
  stop() {
    subscribes["message-received"] = [];
    subscribes["status-changed"] = [];
    cleanUp();
    ws?.close();
  },
  subscribe(
    eventName: EventsNamesType,
    callback: MessagesReceivedSubcriberType | StatusChangedSubcriberType
  ) {
    // @ts-ignore
    subscribes[eventName].push(callback);

    return () => {
      // @ts-ignore

      subscribes[eventName] = subscribes[eventName].filter(
        // @ts-ignore
        (s) => s !== callback
      );
    };
  },
  unsubscribe(
    eventName: EventsNamesType,
    callback: MessagesReceivedSubcriberType | StatusChangedSubcriberType
  ) {
    // @ts-ignore

    subscribes[eventName] = subscribes[eventName].filter(
      // @ts-ignore
      (s) => s !== callback
    );
  },

  sendMessage(message: string) {
    ws?.send(message);
  },
};

type MessagesReceivedSubcriberType = (messages: ChatMessageApiType[]) => void;
type StatusChangedSubcriberType = (status: StatusType) => void;

export type ChatMessageApiType = {
  message: string;
  photo: string;
  userId: number;
  userName: string;
};

type EventsNamesType = "message-received" | "status-changed";
export type StatusType = "pending" | "read" | "error";

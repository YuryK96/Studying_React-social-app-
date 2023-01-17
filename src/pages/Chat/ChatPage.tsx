import { Avatar, Box, Button, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Divider from "@mui/material/Divider";
import SendIcon from "@mui/icons-material/Send";
import { SubmitHandler, useForm } from "react-hook-form";
import Preloader from "../../components/common/Preloader/Preloader";

const ChatPage: React.FC = () => {
  return (
    <Box>
      <Chat />
    </Box>
  );
};

const Chat: React.FC = () => {
  const [wsChannel, setWsChannel] = useState<WebSocket | null | undefined>(
    null
  );
  const [isOpenChannel, setIsOpenChannel] = useState<boolean>(false);

  useEffect(() => {
    let ws: WebSocket;

    function closeHendler() {
      setTimeout(() => {
        setIsOpenChannel(false);

        createChannel();
      }, 3000);
    }

    function changeIsOpenChannel() {
      setIsOpenChannel(true);
    }

    function createChannel() {
      ws?.removeEventListener("close", closeHendler);
      ws?.removeEventListener("open", changeIsOpenChannel);
      ws?.close();

      ws = new WebSocket(
        "wss://social-network.samuraijs.com/handlers/ChatHandler.ashx"
      );
      ws.addEventListener("close", closeHendler);
      ws.addEventListener("open", changeIsOpenChannel);
      setWsChannel(ws);
    }

    createChannel();

    return () => {
      ws.removeEventListener("close", closeHendler);
      ws.removeEventListener("open", changeIsOpenChannel);

      ws.close();
    };
  }, []);

  return (
    <>
      {!isOpenChannel && <Preloader />}
      <Box display={"flex"} width={"100%"} flexDirection={"column"}>
        <Messages wsChannel={wsChannel} />
        <AddmessageForm isOpenChannel={isOpenChannel} wsChannel={wsChannel} />
      </Box>
    </>
  );
};
const Messages: React.FC<{ wsChannel: WebSocket | null | undefined }> = ({
  wsChannel,
}) => {
  const [messages, setMessages] = useState<ChatMessageType[]>([]);

  useEffect(() => {
    let getMessageHandler = (e: MessageEvent) => {
      let newMessage = JSON.parse(e.data);

      setMessages((prevMessages) => {
        if (newMessage.length > 1) {
          prevMessages = [];
        }
        return [...prevMessages, ...newMessage];
      });
    };

    wsChannel?.addEventListener("message", (e: MessageEvent) => {
      getMessageHandler(e);
    });

    return () => {
      wsChannel?.removeEventListener("message", getMessageHandler);
    };
  }, [wsChannel]);

  return (
    <Box
      sx={{
        height: "65vh",
        overflowY: "auto",
      }}
    >
      {messages.map((m: any, index) => {
        return (
          <Box key={index}>
            <Message message={m} /> <Divider />{" "}
          </Box>
        );
      })}
    </Box>
  );
};
const Message: React.FC<{ message: ChatMessageType }> = ({ message }) => {
  return (
    <Box display={"flex"} alignItems={"center"} m={2}>
      <Box
        width={100}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={"column"}
      >
        {" "}
        <Typography fontSize={13} textAlign={"center"}>
          {message.userName}
        </Typography>
        <Avatar sizes={"100%"} variant="rounded" src={message.photo} />{" "}
      </Box>
      <Typography marginLeft={"10%"} textAlign={"center"}>
        {message.message}
      </Typography>
    </Box>
  );
};
const AddmessageForm: React.FC<{
  wsChannel: WebSocket | null | undefined;
  isOpenChannel: boolean;
}> = ({ wsChannel, isOpenChannel }) => {
  const [message, setMessage] = useState("");
  const [readyStatus, setReadyStatus] = useState<"pending" | "ready">(
    "pending"
  );
  useEffect(() => {
    let openHandler = () => {
      setReadyStatus("ready");
    };

    wsChannel?.addEventListener("open", openHandler);

    return () => {
      wsChannel?.removeEventListener("open", openHandler);
    };
  }, [wsChannel]);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = () => {};

  const sendMessage = () => {
    if (!message) {
      return;
    }

    wsChannel?.send(message);
    setMessage("");
  };
  return (
    <Box height={"17vh"}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box m={3} display={"flex"}>
          <TextField
            label="New Message"
            multiline
            {...register("newMessage")}
            minRows={2}
            onChange={(e) => setMessage(e.currentTarget.value)}
            value={message}
          />
          <Box alignSelf={"end"} marginLeft={1}>
            <Button
              disabled={
                isOpenChannel === false ||
                wsChannel === null ||
                readyStatus === "pending"
              }
              type="submit"
              variant="outlined"
              endIcon={<SendIcon />}
              onClick={sendMessage}
            >
              Send
            </Button>
          </Box>
        </Box>
      </form>
    </Box>
  );
};
export default ChatPage;

type FormValues = {
  newMessage: string;
};

export type ChatMessageType = {
  message: string;
  photo: string;
  userId: number;
  userName: string;
};

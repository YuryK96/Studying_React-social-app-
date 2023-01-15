import { Avatar, Box, Button, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Divider from "@mui/material/Divider";
import SendIcon from "@mui/icons-material/Send";
import { SubmitHandler, useForm } from "react-hook-form";

const wsChannel = new WebSocket(
  "wss://social-network.samuraijs.com/handlers/ChatHandler.ashx"
);
export type ChatMessageType = {
  message: string;
  photo: string;
  userId: number;
  userName: string;
};
const ChatPage: React.FC = () => {
  return (
    <Box>
      <Chat />
    </Box>
  );
};

const Chat: React.FC = () => {
  return (
    <Box display={"flex"} width={"100%"} flexDirection={"column"}>
      <Messages />
      <AddmessageForm />
    </Box>
  );
};
const Messages: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessageType[]>([]);
  useEffect(() => {
    wsChannel.addEventListener("message", (e: MessageEvent) => {
      let newMessage = JSON.parse(e.data);
      setMessages((prevMessages) => [...prevMessages, ...newMessage]);
    });
  }, []);

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
const AddmessageForm: React.FC = () => {
  const [message, setMessage] = useState("");
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
    wsChannel.send(message);
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

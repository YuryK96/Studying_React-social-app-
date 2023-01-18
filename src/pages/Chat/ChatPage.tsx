import { Avatar, Box, Button, TextField, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import Divider from "@mui/material/Divider";
import SendIcon from "@mui/icons-material/Send";
import { SubmitHandler, useForm } from "react-hook-form";
import Preloader from "../../components/common/Preloader/Preloader";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, AppStateType } from "../../redux/redux-store";
import {
  ChatMessageType,
  sendMessage,
  startMessagesListening,
  stopMessagesListening,
} from "../../redux/chat-reducer";
import { ChatMessageApiType } from "../../api/chat-api";

const ChatPage: React.FC = () => {
  return (
    <Box>
      <Chat />
    </Box>
  );
};

const Chat: React.FC = () => {
  const statusChannel = useSelector((state: AppStateType) => state.chat.status);
  const dispatch: AppDispatch = useDispatch();
  useEffect(() => {
    dispatch(startMessagesListening());

    return () => {
      dispatch(stopMessagesListening());
    };
  }, []);

  return (
    <>
      {statusChannel !== "read" && (
        <Box
          position={"fixed"}
          z-index={2}
          width={"100%"}
          display={"flex"}
          justifyContent={"center"}
        >
          {" "}
          <Preloader />{" "}
        </Box>
      )}
      <Box display={"flex"} width={"100%"} flexDirection={"column"}>
        <Messages />
        <AddmessageForm />
      </Box>
    </>
  );
};
const Messages: React.FC<{}> = ({}) => {
  const messagesAnchorRef = useRef<HTMLDivElement>(null);
  const messages = useSelector((state: AppStateType) => state.chat.messages);
  const [isAutoScroll, setIsAutoScroll] = useState(true);

  const scrollHandler = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
    let element = e.currentTarget;
    if (
      Math.abs(
        element.scrollHeight - element.clientHeight - element.scrollTop
      ) < 1
    ) {
      setIsAutoScroll(true);
    } else if (
      isAutoScroll === true &&
      Math.abs(
        element.scrollHeight - element.clientHeight - element.scrollTop
      ) < 10
    ) {
      setIsAutoScroll(false);
    }
  };

  useEffect(() => {
    if (isAutoScroll) {
      messagesAnchorRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <Box
      onScroll={(e) => scrollHandler(e)}
      sx={{
        height: "65vh",
        overflowY: "auto",
      }}
    >
      {messages.map((m: ChatMessageType, index) => {
        return (
          <Box key={m.id}>
            <Message message={m} /> <Divider />{" "}
          </Box>
        );
      })}
      <Box ref={messagesAnchorRef}></Box>
    </Box>
  );
};
const Message: React.FC<{ message: ChatMessageApiType }> = React.memo(
  ({ message }) => {
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
  }
);
const AddmessageForm: React.FC<{}> = ({}) => {
  const statusChannel = useSelector((state: AppStateType) => state.chat.status);
  const [message, setMessage] = useState("");

  const dispatch: AppDispatch = useDispatch();

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = () => {};

  const sendMessageHandler = () => {
    if (!message) {
      return;
    }

    dispatch(sendMessage(message));
    setMessage("");
  };

  const onKeyDownHandler = (
    event: React.KeyboardEvent<HTMLDivElement>
  ): void => {
    if ((event.key === "Enter" && event.ctrlKey) || event.key === "Enter") {
      event.preventDefault();
      event.stopPropagation();

      statusChannel === "read" && sendMessageHandler();
    }
  };
  return (
    <Box height={"17vh"}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box m={3} display={"flex"}>
          <TextField
            onKeyDown={(e) => onKeyDownHandler(e)}
            label="New Message"
            multiline
            {...register("newMessage")}
            minRows={2}
            onChange={(e) => setMessage(e.currentTarget.value)}
            value={message}
          />
          <Box alignSelf={"end"} marginLeft={1}>
            <Button
              disabled={statusChannel !== "read"}
              type="submit"
              variant="outlined"
              endIcon={<SendIcon />}
              onClick={sendMessageHandler}
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

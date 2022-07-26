import { useForm, SubmitHandler } from "react-hook-form";
import { MessageType } from "../../../types/types";
import DialogsCss from "./../Dialogs.module.css";

type PropsTypeNewMessage = {
  addNewMessage: (newMessage: string) => void;
};

type FormValues = {
  newMessage: string;
};

type PropsTypeMessages = {
  addNewMessage: (newMessage: string) => void;
  messagesData: Array<MessageType>;
};

const NewMessage: React.FC<PropsTypeNewMessage> = ({ addNewMessage }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    addNewMessage(data.newMessage);
    reset();
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <textarea {...register("newMessage")} cols={30} rows={10}></textarea>
        <div>
          <input type="submit" value={"Send"} />
        </div>
      </form>
    </div>
  );
};

const Messages: React.FC<PropsTypeMessages> = ({
  messagesData,
  addNewMessage,
}) => {
  let arrMessages = messagesData.map((message, i) => {
    return (
      <div key={i} className={DialogsCss.message}>
        <p>{message.message}</p>
      </div>
    );
  });

  return (
    <div className={DialogsCss.message}>
      {arrMessages}
      <NewMessage addNewMessage={addNewMessage} />
    </div>
  );
};

export default Messages;

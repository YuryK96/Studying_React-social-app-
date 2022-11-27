import { useForm } from "react-hook-form";
import DialogsCss from "./../Dialogs.module.css";

const NewMessage = ({ addNewMessage }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = (data) => {
    addNewMessage(data.newMessage);
    reset();
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <textarea {...register("newMessage")} cols="30" rows="10"></textarea>
        <div>
          <input type="submit" value={"Send"} />
        </div>
      </form>
    </div>
  );
};

const Messages = ({ messagesData, addNewMessage }) => {
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

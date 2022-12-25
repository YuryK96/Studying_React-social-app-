import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { MyPostType } from "../../../types/types";
import s from "./MyPosts.module.css";
import Post from "./Posts/Post";

const MyPosts: React.FC<MyPostsType> = React.memo(
  ({ myPostData, onAddPost }) => {
    const {
      register,
      formState: { errors, isValid },
      handleSubmit,
      reset,
    } = useForm<FormValues>();

    let arrPostData = myPostData.map((post, i) => {
      return <Post key={i} value={post.value} countLikes={post.countLikes} />;
    });

    const onSubmit: SubmitHandler<FormValues> = (data) => {
      onAddPost(data.newPostText);
      reset();
    };

    return (
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <textarea
            className={s.newMessage}
            style={
              errors?.newPostText ? { border: "1px solid red" } : undefined
            }
            {...register("newPostText", {
              required: "need to text something",
              maxLength: {
                value: 20,
                message: "need less 20 symbols",
              },
            })}
            cols={30}
            rows={5}
          />
          <div>
            <p style={{ color: "red" }}>{errors?.newPostText?.message}</p>{" "}
            <input type={"submit"} />
          </div>
        </form>
        {arrPostData}
      </div>
    );
  }
);

export default MyPosts;

type MyPostsType = {
  myPostData: Array<MyPostType>;
  onAddPost: (newPostText: string) => void;
};
type FormValues = {
  newPostText: string;
};

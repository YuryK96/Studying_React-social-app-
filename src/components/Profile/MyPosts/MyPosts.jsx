import React from "react";
import { useForm } from "react-hook-form";
import s from "./MyPosts.module.css";
import Post from "./Posts/Post";

const MyPosts = React.memo(
  ({ myPostData, newPostText, onChangePost, onAddPost }) => {
    console.log("render");
    const {
      register,
      formState: { errors, isValid },
      handleSubmit,
      reset,
    } = useForm();

    let arrPostData = myPostData.map((post, i) => {
      return <Post key={i} value={post.value} countLikes={post.countLikes} />;
    });

    const onSubmit = (data) => {
      onAddPost(data.newPostText);
      reset();
    };

    return (
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <textarea
            className={s.newMessage}
            style={errors?.newPostText ? { border: "1px solid red" } : null}
            {...register("newPostText", {
              required: "need to text something",
              maxLength: {
                value: 20,
                message: "need less 20 symbols",
              },
            })}
            cols="30"
            rows="5"
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

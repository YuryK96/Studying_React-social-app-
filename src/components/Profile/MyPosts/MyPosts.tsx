import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { MyPostType } from "../../../types/types";
import s from "./MyPosts.module.css";
import Post from "./Posts/Post";
import { useDispatch, useSelector } from "react-redux";
import { getmyPostData } from "../../../redux/profile-selectors";
import { AppDispatch } from "../../../redux/redux-store";
import { actions } from "../../../redux/profile-reducer";
import { Box, Button, TextField, Typography } from "@mui/material";
import MapsUgcIcon from "@mui/icons-material/MapsUgc";
import { useWindowSize } from "../../hook/useWindowSize";

const MyPosts: React.FC<MyPostsType> = React.memo(({}) => {
  const myPostData = useSelector(getmyPostData);
  const dispatch: AppDispatch = useDispatch();

  const onAddPost = (newPostText: string) => {
    dispatch(actions.onAddPost(newPostText));
  };
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
    <Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box>
          <Box
            maxWidth={270}
            display={"flex"}
            justifyContent={"center"}
            flexDirection={"column"}
            padding={3}
          >
            <TextField
              label="New Comment"
              multiline
              minRows={3}
              {...register("newPostText", {
                required: "need to text something",
                maxLength: {
                  value: 20,
                  message: "need less 20 symbols",
                },
              })}
            />
            <Typography color={"red"}>
              {errors?.newPostText?.message}
            </Typography>{" "}
            <Button
              endIcon={<MapsUgcIcon />}
              variant="outlined"
              type={"submit"}
            >
              Comment
            </Button>
          </Box>
        </Box>
      </form>
      {arrPostData}
    </Box>
  );
});

export default MyPosts;

type MyPostsType = {};
type FormValues = {
  newPostText: string;
};

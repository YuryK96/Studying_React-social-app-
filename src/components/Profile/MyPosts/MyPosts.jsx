import { useForm } from "react-hook-form";
import MyPostCss from "./MyPosts.module.css";
import Post from "./Posts/Post";

const MyPosts = ({ myPostData, newPostText, onChangePost, onAddPost }) => {
  const {
    register,
    formState: { errors },
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
        <textarea {...register("newPostText")} cols="30" rows="5" />
        <div>
          {" "}
          <input type={"submit"} />
        </div>
      </form>
      {arrPostData}
    </div>
  );
};

export default MyPosts;

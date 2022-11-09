import { createRef } from "react";
import MyPostCss from "./MyPosts.module.css";
import Post from "./Posts/Post";
import { updateNewPostTextActionCreator } from "../../../redux/state";
import { addPostActionCreater } from "../../../redux/state";

const MyPosts = ({ myPostData, newPostText, dispatch }) => {
  let arrPostData = myPostData.map((post) => {
    return <Post value={post.value} countLikes={post.countLikes} />;
  });

  return (
    <div>
      <textarea
        onChange={(e) => dispatch(updateNewPostTextActionCreator(e))}
        name=""
        id=""
        cols="30"
        rows="5"
        value={newPostText}
      />
      <div>
        {" "}
        <button onClick={() => dispatch(addPostActionCreater())}>click</button>
      </div>

      {arrPostData}
    </div>
  );
};

export default MyPosts;

import { createRef } from "react";
import MyPostCss from "./MyPosts.module.css";
import Post from "./Posts/Post";

const MyPosts = ({myPostData, newPostText,addPost,changeNewPostText}) => {
  let postText = createRef();

  let arrPostData = myPostData.map((post) => {
    return <Post value={post.value} countLikes={post.countLikes} />;
  });

  let onNewPost = () => {
    addPost(postText);
  };

  let onChangeText = () => {
    changeNewPostText(postText.current.value);
  };

  return (
    <div>
      <textarea
        onChange={onChangeText}
        ref={postText}
        name=""
        id=""
        cols="30"
        rows="5"
        value={newPostText}
      />
      <div>
        {" "}
        <button onClick={onNewPost}>click</button>
      </div>

      {arrPostData}
    </div>
  );
};

export default MyPosts;

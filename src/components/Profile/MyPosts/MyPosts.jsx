import MyPostCss from "./MyPosts.module.css";
import Post from "./Posts/Post";

const MyPosts = ({ myPostData, newPostText, onChangePost, onAddPost }) => {
  let arrPostData = myPostData.map((post) => {
    return <Post value={post.value} countLikes={post.countLikes} />;
  });

  return (
    <div>
      <textarea
        onChange={(action) => onChangePost(action)}
        name=""
        id=""
        cols="30"
        rows="5"
        value={newPostText}
      />
      <div>
        {" "}
        <button onClick={onAddPost}>click</button>
      </div>

      {arrPostData}
    </div>
  );
};

export default MyPosts;

import MyPostCss from "./MyPosts.module.css";
import Post from "./Posts/Post";

const MyPosts = ({ myPostData, newPostText, updateTextPost, addPost }) => {
  let arrPostData = myPostData.map((post) => {
    return <Post value={post.value} countLikes={post.countLikes} />;
  });

  return (
    <div>
      <textarea
        onChange={(e) => updateTextPost(e)}
        name=""
        id=""
        cols="30"
        rows="5"
        value={newPostText}
      />
      <div>
        {" "}
        <button onClick={addPost}>click</button>
      </div>

      {arrPostData}
    </div>
  );
};

export default MyPosts;

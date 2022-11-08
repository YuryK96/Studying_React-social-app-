import { createRef } from "react";
import MyPostCss from "./MyPosts.module.css";
import Post from "./Posts/Post";

const MyPosts = ({ myPostData, newPostText, dispatch }) => {
  let arrPostData = myPostData.map((post) => {
    return <Post value={post.value} countLikes={post.countLikes} />;
  });

 
  return (
    <div>
      <textarea
        onChange={(e) => dispatch({ 
          type: 'UPDATE-NEW-POST-TEXT',
         newText: e.target.value
        
        })}
        name=""
        id=""
        cols="30"
        rows="5"
        value={newPostText}
      />
      <div>
        {" "}
        <button onClick={()=> dispatch({type: 'ADD-POST'})}>click</button>
      </div>

      {arrPostData}
    </div>
  );
};

export default MyPosts;

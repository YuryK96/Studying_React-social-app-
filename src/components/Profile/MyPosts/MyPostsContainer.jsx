import { updateNewPostTextActionCreator } from "../../../redux/profile-reducer";
import { addPostActionCreater } from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = ({ store }) => {
  let state = store.getState();
  let onChangePost = (e) => {
    store.dispatch(updateNewPostTextActionCreator(e));
  };

  let onAddPost = () => {
    store.dispatch(addPostActionCreater());
  };

  return (
    <MyPosts
      updateTextPost={onChangePost}
      addPost={onAddPost}
      myPostData={state.profilePage.myPostData}
      newPostText={state.profilePage.newPostText}
    />
  );
};

export default MyPostsContainer;

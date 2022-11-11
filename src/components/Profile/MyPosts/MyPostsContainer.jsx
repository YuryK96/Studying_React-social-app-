import { connect } from "react-redux";
import { updateNewPostTextActionCreator } from "../../../redux/profile-reducer";
import { addPostActionCreater } from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

let mapStateToProps = (state) => {
  return {
    myPostData: state.profilePage.myPostData,
    newPostText: state.profilePage.newPostText,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    onChangePost: (action) => dispatch(updateNewPostTextActionCreator(action)),
    onAddPost: () => dispatch(addPostActionCreater()),
  };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;

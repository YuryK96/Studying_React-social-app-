import { connect } from "react-redux";
import { compose } from "redux";
import { onAddPost } from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

let mapStateToProps = (state) => {
  return {
    myPostData: state.profilePage.myPostData,
    newPostText: state.profilePage.newPostText,
  };
};

export default compose(connect(mapStateToProps, { onAddPost }))(MyPosts);

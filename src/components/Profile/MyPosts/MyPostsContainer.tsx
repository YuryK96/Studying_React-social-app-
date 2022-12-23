import { connect } from "react-redux";
import { compose } from "redux";
import { actions } from "../../../redux/profile-reducer";
import {
  getmyPostData,
  getnewPostText,
} from "../../../redux/profile-selectors";
import { AppStateType } from "../../../redux/redux-store";
import { MyPostType } from "../../../types/types";
import MyPosts from "./MyPosts";

const onAddPost = actions.onAddPost;

type MapStatePropsType = {
  myPostData: Array<MyPostType>;
};

type MapDispatchPropsType = {
  onAddPost: (newPostText: string) => void;
};

type OwnPropsType = {};
let mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    myPostData: getmyPostData(state),
  };
};

export default compose(
  connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(
    mapStateToProps,
    { onAddPost }
  )
)(MyPosts);

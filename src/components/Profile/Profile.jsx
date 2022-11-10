import ProfileCss from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = ({ myPostData, dispatch }) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts
        myPostData={myPostData.myPostData}
        dispatch={dispatch}
        newPostText={myPostData.newPostText}
      />
    </div>
  );
};

export default Profile;

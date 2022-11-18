import ProfileCss from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = ({ profile, setUserProfile }) => {
  return (
    <div>
      <ProfileInfo profile={profile} />
      <MyPostsContainer />
    </div>
  );
};

export default Profile;

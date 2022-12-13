import ProfileCss from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = ({
  profile,
  status,
  updateStatus,
  isOwner,
  savePhoto,
  updateProfile,
  userId,
}) => {
  return (
    <div>
      <ProfileInfo
        isOwner={isOwner}
        profile={profile}
        status={status}
        updateStatus={updateStatus}
        savePhoto={savePhoto}
        updateProfile={updateProfile}
        userId={userId}
      />
      <MyPostsContainer />
    </div>
  );
};

export default Profile;

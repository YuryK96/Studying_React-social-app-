import ProfileCss from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import { UserProfileType } from "../../types/types";

type ProfileType = {
  profile: UserProfileType | null;
  status: string;
  userId: number | null;
  updateStatus: (status: string) => void;
  savePhoto: (photo: any) => void;
  updateProfile: (data: UserProfileType, userId: number, setError: any) => void;
  isOwner: boolean;
};

const Profile: React.FC<ProfileType> = ({
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

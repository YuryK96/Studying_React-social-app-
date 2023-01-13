import { useState } from "react";
import { UserProfileType } from "../../../types/types";
import Preloader from "../../common/Preloader/Preloader";
import ProfileDataForm from "./ProfileDataForm";
import ProfileInfoCss from "./ProfileInfo.module.css";
import ProfileStatuswithHooks from "./ProfileStatuswithHooks";
import { Box } from "@mui/material";
import { ProfileData } from "./ProfileData";

const ProfileInfo: React.FC<ProfileInfoType> = ({
  profile,
  status,
  updateStatus,
  isOwner,
  savePhoto,
  updateProfile,
  userId,
}) => {
  const [editMode, setEditMode] = useState(false);
  if (!profile) {
    return <Preloader />;
  }

  return (
    <Box
      sx={{
        background: " rgb(232, 231, 231)",
        borderRadius: 10,
      }}
    >
      {editMode ? (
        <ProfileDataForm
          OutFromEditMode={() => {
            setEditMode(false);
          }}
          profile={profile}
          isOwner={isOwner}
          updateProfile={updateProfile}
          userId={userId}
          savePhoto={savePhoto}
        />
      ) : (
        <ProfileData
          profile={profile}
          status={status}
          updateStatus={updateStatus}
          isOwner={isOwner}
          goToEditMode={() => {
            setEditMode(true);
          }}
        />
      )}
    </Box>
  );
};

export default ProfileInfo;

type ProfileInfoType = {
  profile: UserProfileType | null;
  status: string;
  userId: number | null;
  updateStatus: (status: string) => void;
  savePhoto: (photo: File) => void;
  updateProfile: (
    data: UserProfileType,
    userId: number | null,
    setError: any
  ) => void;
  isOwner: boolean;
};

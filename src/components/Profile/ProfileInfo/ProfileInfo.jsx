import { useState } from "react";
import Preloader from "../../common/Preloader/Preloader";
import ProfileDataForm from "./ProfileDataForm";
import ProfileInfoCss from "./ProfileInfo.module.css";
import ProfileStatuswithHooks from "./ProfileStatuswithHooks";

const ProfileInfo = ({
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
    <div className={ProfileInfoCss.content}>
      <div className={ProfileInfoCss.head_img}>
        <img
          src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
          alt=""
        />
      </div>
      {editMode ? (
        <ProfileDataForm
          OutFromEditMode={() => {
            setEditMode(false);
          }}
          profile={profile}
          isOwner={isOwner}
          updateProfile={updateProfile}
          userId={userId}
        />
      ) : (
        <ProfileData
          profile={profile}
          isOwner={isOwner}
          savePhoto={savePhoto}
          goToEditMode={() => {
            setEditMode(true);
          }}
        />
      )}
      <div className={ProfileInfoCss.status}>
        <ProfileStatuswithHooks status={status} updateStatus={updateStatus} />
      </div>
    </div>
  );
};

const ProfileData = ({ profile, isOwner, goToEditMode }) => {
  return (
    <div className={ProfileInfoCss.item}>
      {isOwner && (
        <div>
          {" "}
          <button onClick={goToEditMode}>Edit</button>
        </div>
      )}
      <div className={ProfileInfoCss.avatar}>
        <div className={ProfileInfoCss.name}>
          <b> {profile.fullName} </b>
        </div>
        <img
          src={
            profile.photos.large ||
            "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000"
          }
          alt=""
        />
      </div>
      <div>
        {" "}
        <b> About Me</b>
      </div>
      <div className={ProfileInfoCss.aboutMe}>{profile.aboutMe}</div>

      <div>
        <div>
          {" "}
          <b> Work </b>
        </div>
        {profile.lookingForAJob ? (
          <div>Open to work </div>
        ) : (
          <div>Not in looking for</div>
        )}
        <div>{profile.lookingForAJobDescription}</div>
      </div>

      <div>
        <div>
          {" "}
          <b> Contacts</b>
        </div>
        {Object.keys(profile.contacts).map((key) => {
          return (
            <Contacts
              key={key}
              contactTitle={key}
              contactValue={profile.contacts[key]}
            />
          );
        })}
      </div>
    </div>
  );
};

const Contacts = ({ contactTitle, contactValue }) => {
  return (
    <div>
      {contactTitle} : {contactValue}
    </div>
  );
};
export default ProfileInfo;

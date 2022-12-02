import Preloader from "../../common/Preloader/Preloader";
import ProfileInfoCss from "./ProfileInfo.module.css";
import ProfileStatuswithHooks from "./ProfileStatuswithHooks";

const ProfileInfo = ({ profile, status, updateStatus }) => {
  if (!profile) {
    return <Preloader />;
  } else {
    return (
      <div className={ProfileInfoCss.content}>
        <div className={ProfileInfoCss.head_img}>
          <img
            src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
            alt=""
          />
        </div>
        <div className={ProfileInfoCss.avatar}>
          <img src={profile.photos.large} alt="" />

          <ProfileStatuswithHooks status={status} updateStatus={updateStatus} />
          <div>
            <div>Social Network</div>

            <div>
              <a target="_blank" href={profile.contacts.facebook}>
                Faceebook
              </a>
            </div>

            <div>
              <a target="_blank" href={profile.contacts.vk}>
                vk
              </a>
            </div>

            <div>
              <a target="_blank" href={profile.contacts.twitter}>
                twitter
              </a>
            </div>

            <div>
              <a target="_blank" href={profile.contacts.github}>
                gitHub
              </a>
            </div>
          </div>
          <div>
            <div>Work</div>
            {profile.lookingForAJob ? <div>Open to work </div> : null}
            <div>{profile.lookingForAJobDescription}</div>
          </div>
        </div>
      </div>
    );
  }
};

export default ProfileInfo;

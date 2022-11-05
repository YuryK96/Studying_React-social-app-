import ProfileCss from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = ({myPostData,addPost, newPostText, changeNewPostText}) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts
        myPostData={myPostData.myPostData}
        addPost={addPost}
        newPostText={newPostText}
        changeNewPostText={changeNewPostText}
      />
    </div>
  );
};

export default Profile;

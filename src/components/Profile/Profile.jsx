
import ProfileCss from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';





const Profile = (props) => {
 
  return (
   <div>
          <ProfileInfo/>
          <MyPosts  myPostData={props.myPostData.myPostData} addPost={props.addPost} newPostText={props.myPostData.newPostText} changeNewPostText={props.changeNewPostText}/>

    </div>
  )
}

export default Profile;
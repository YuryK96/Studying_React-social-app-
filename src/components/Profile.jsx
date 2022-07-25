import ProfileCss from './Profile.module.css';

const Profile = () => {
    return (
      <div className={ProfileCss.content}>
      <div className={ProfileCss.head_img}>
        <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt="" />
      </div>
      <div className={ProfileCss.avatar}>
        <img src="https://tinypng.com/images/social/website.jpg" alt="" />
       <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem eos quibusdam ducimus aperiam ipsa ab quaerat quia quos. Enim est ullam in suscipit aliquid quam vel esse non tenetur alias.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem eos quibusdam ducimus aperiam ipsa ab quaerat quia quos. Enim est ullam in suscipit aliquid quam vel esse non tenetur alias.</p>
      </div>
      <div className={ProfileCss.item}>My post</div>
      <div className={ProfileCss.item}>New Post</div>
      <div className={ProfileCss.item}>post1</div>
      <div className={ProfileCss.item}>post2</div>

    </div>
  );
};

export default Profile;
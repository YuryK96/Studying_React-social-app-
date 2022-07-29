import PostCss from './Post.module.css'


const Post = (props) => {

    return (

        <div className={PostCss.wrapper}>
            <img src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000" alt="" />
            <div className={PostCss.likes} >likes: <p className={PostCss.countLikes}>{props.countLikes}</p></div>
            <div className={PostCss.post}>{props.value}</div>
            
        </div>
    )

}

export default Post;
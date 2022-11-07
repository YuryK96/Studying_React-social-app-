import PostCss from './Post.module.css'


const Post = ({countLikes, value}) => {

    return (

        <div className={PostCss.wrapper}>
            <img src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000" alt="" />
            <div className={PostCss.likes} >likes: <p className={PostCss.countLikes}>{countLikes}</p></div>
            <div className={PostCss.post}>{value}</div>
            
        </div>
    )

}

export default Post;
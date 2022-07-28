import PostCss from './Post.module.css'


const Post = () => {

    return (

        <div className={PostCss.wrapper}>
            <img src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000" alt="" />
            <div className={PostCss.post}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia animi eaque qui eveniet consequatur natus nisi expedita quod sit totam soluta doloribus id maxime ea, laborum dolor ipsa iusto facilis? lo</div>
            
        </div>
    )

}

export default Post;
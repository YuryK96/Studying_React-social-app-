import MyPostCss from './MyPosts.module.css'
import Post from './Posts/Post'

const MyPosts = (props) => {

    return (

        <div>
         <Post value='Hi my name is Petya' countLikes='10'/>
         <Post value='Hi my name is Wasya'countLikes='11'/>
         <Post value='Hi my name is Roma' countLikes='1'/>
         <Post value='Hi my name is Yury' countLikes='8'/>
         <Post value='Hi my name is Nastya' countLikes='15'/>
        </div>
    )

}

export default MyPosts;
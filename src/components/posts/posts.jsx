import "./posts.scss"
import DP from "../../images/pexels-yurii-hlei-1545743.jpg";
import story3 from "../../images/pexels-jacob-moore-12330354.jpg";
import Post from "../post/post.jsx";

const Posts = () => {
    const posts = [
        {
            id: 1,
            name: "Driver 1",
            userId: 1,
            profilePic: DP,
            desc: "picture I took of the r8 today.",
            img: DP
        },
        {
            id: 2,
            name: "Driver 2",
            userId: 2,
            profilePic: story3,
            desc: "Boost or No Boost?",
            img: story3
        },
        
    ];
    return <div className="posts">
        { posts.map(post => (
            <Post post = {post} key={post.id}/>
        ))}
    </div>
    
};
export default Posts;
import Posts from "../../components/posts/posts.jsx"
import Stories from "../../components/stories/stories.jsx"

import "./home.scss"

const Home = () => {
    return ( 
        <div className="home">
            <Stories />
            <Posts />
        </div>
    )
    
}

export default Home
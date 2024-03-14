import "./post.scss";
import { FavoriteBorderOutlined } from '@mui/icons-material';
import { FavoriteOutlined } from '@mui/icons-material';
import { TextsmsOutlined } from '@mui/icons-material';
import { ShareOutlined } from '@mui/icons-material';
import { MoreHoriz } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Post = ({post}) => {
  //Temp
  const liked = true; 
  return (
    <div className='post'>
      <div className="container">
        <div className="user">
          <div className="userInfo">
              <img src = {post.profilePic} alt = ""/>
              <div className="details">
                  <Link to={`/profile/${post.userId}`} style= {{textDecoration:"none", color:"inherit"}}>
                    <span className="name">{post.name}</span>
                  </Link>
                  <span className="date">1 min ago</span>
                  
              </div>
              <MoreHoriz />
          </div>
        </div>
        <div className="content">
          <p>{post.desc}</p>
          <img src = {post.img} alt = ""/>
        </div>
        <div className="info">
          <div className="item">
            {liked ? <FavoriteOutlined/> : <FavoriteBorderOutlined/> } 
            12 Likes
          </div>
          <div className="item">
            <TextsmsOutlined />
            Comments
          </div>
          <div className="item">
            <ShareOutlined/>
            Share
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;

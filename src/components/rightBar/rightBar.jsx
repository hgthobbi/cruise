import "./rightBar.scss"
import DP from "../../images/pexels-yurii-hlei-1545743.jpg"

const RightBar = ()=> {
    return (
        <div className="rightBar">
            <div className="container">
                <div className="item">
                    <span>Suggestions For You</span>
                    <div className="user">
                        <div className="userInfo">
                            <img src={DP} alt=""/>
                            <span>Driver 2</span>
                        </div>
                        <div className="buttons">
                            <button>follow</button>
                            <button>dismiss</button>
                        </div>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img src={DP} alt=""/>
                            <span>Driver 3</span>
                        </div>
                        <div className="buttons">
                            <button>follow</button>
                            <button>dismiss</button>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <span>Recent Activity</span>
                    <div className="user">
                        <div className="userInfo">
                            <img src={DP} alt=""/>
                            <p>
                            <span>Driver 3 </span>
                            changed their profile picture
                            </p>
                            
                        </div>
                        <span>10 min ago</span>
                    </div>

                    <div className="user">
                        <div className="userInfo">
                            <img src={DP} alt=""/>
                            <p>
                            <span>Driver 3 </span>
                             started a new drive
                            </p>
                            
                        </div>
                        <span>7 min ago</span>
                    </div>

                    <div className="user">
                        <div className="userInfo">
                            <img src={DP} alt=""/>
                            <p>
                            <span>Driver 3 </span>
                             met with Driver 2
                            </p>
                            
                        </div>
                        <span>2 min ago</span>
                    </div>

                    <div className="user">
                        <div className="userInfo">
                            <img src={DP} alt=""/>
                            <p>
                            <span>Driver 3 </span>
                             is now friends with Driver 2
                            </p>
                            
                        </div>
                        <span>1 min ago</span>
                    </div>
                </div>

                <div className="item">
                    <span>Online Friends</span>

                    <div className="user">
                        <div className="userInfo">
                            <img src={DP} alt=""/>
                            <div className="online" />
                            <span>Driver 4 </span>
                        </div>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img src={DP} alt=""/>
                            <div className="online" />
                            <span>Driver 5 </span>
                        </div>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img src={DP} alt=""/>
                            <div className="online" />
                            <span>Driver 6 </span>
                        </div>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img src={DP} alt=""/>
                            <div className="online" />
                            <span>Driver 7 </span>
                        </div>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img src={DP} alt=""/>
                            <div className="online" />
                            <span>Driver 8 </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RightBar
import "./leftBar.scss";
import DP from "../../images/pexels-yurii-hlei-1545743.jpg"
import Friends from "../../assets/1.png";
import Groups from "../../assets/2.png";
import Drives from "../../assets/map.png"
import Market from "../../assets/3.png";
import Memories from "../../assets/5.png";
// import Watch from "../..assets/4.png";
// import Events from "../../assets/6.png";
// import Gaming from "../../assets/7.png";
// import Gallery from "../../assets/8.png";
// import Videos from "../../assets/9.png";
// import Messages from "../../assets/10.png";
// import Tutorials from "../../assets/11.png";
// import Courses from "../../assets/12.png";
// import Fund from "../../assets/13.png";

const LeftBar = ()=> {
    return (
        <div className="leftBar">
            <div className="container">
                <div className="menu">
                    <div className="user">
                    <img src={DP} alt=""/>
                    <span>Driver 1</span>
                    </div>
                    <div className="item">
                        <img src={Friends} alt=""/>
                        <span>Friends</span>
                    </div>
                    <div className="item">
                        <img src={Groups} alt=""/>
                        <span>Groups</span>
                    </div>
                    <div className="item">
                        <img src={Drives} alt=""/>
                        <span>Drives</span>
                    </div>
                    <div className="item">
                        <img src={Market} alt=""/>
                        <span>Marketplace</span>
                    </div>
                    <div className="item">
                        <img src={Memories} alt=""/>
                        <span>Memories</span>
                    </div>

                    
                </div>
            </div>
        </div>
    )
}

export default LeftBar
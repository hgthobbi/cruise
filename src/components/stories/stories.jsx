import "./stories.scss";
import DP from "../../images/pexels-yurii-hlei-1545743.jpg";
import story1 from "../../images/pexels-albin-berlin-919073.jpg";
import story2 from "../../images/pexels-alex-amorales-909907.jpg";
import story3 from "../../images/pexels-jacob-moore-12330354.jpg";
import story4 from "../../images/pexels-jacob-moore-12330626.jpg";
import story5 from "../../images/pexels-pavlo-luchkovski-337909.jpg";
import { useContext } from "react";
import { AuthContext } from "../../context/authenticationContext";

const Stories = () => {
    const { currentUser } = useContext(AuthContext);
    const stories = [
        {
            id: 1, 
            name: "Driver 4",
            img: story1 // Using imported image directly
        },
        {
            id: 2, 
            name: "Driver 5",
            img: story2
        },
        {
            id: 3, 
            name: "Driver 6",
            img: story3
        },
        {
            id: 4, 
            name: "Driver 7",
            img: story4
        },
        {
            id: 5, 
            name: "Driver 8",
            img: story5
        }
    ];

    return (
        <div className="stories">
            <div className="story">
                <img src={currentUser.profilePic} alt="" />
                <span>{currentUser.name}</span>
                <button>+</button>
            </div>
            {stories.map(story => (
                <div className="story" key={story.id}>
                    <img src={story.img} alt="" />
                    <span>{story.name}</span>
                </div>
            ))}
        </div> 
    );
};

export default Stories;

import "./navBar.scss"
import DP from "../../images/pexels-yurii-hlei-1545743.jpg"
import GarageOutlinedIcon from '@mui/icons-material/GarageOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import SportsMotorsportsOutlinedIcon from '@mui/icons-material/SportsMotorsportsOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
import { AuthContext } from "../../context/authenticationContext";


const NavBar = ()=> {
    const { toggle, darkMode } = useContext(DarkModeContext);
    const { currentUser } = useContext(AuthContext);

    return (
        <div className="navBar">
            <div className="left">
                <Link to="/" style={{textDecoration:"none"}}>  
                    <span>CRUISE</span>
                </Link>
                <HomeOutlinedIcon/>
                {darkMode ? (
                    <LightModeOutlinedIcon onClick={toggle} />
                ) : (
                    <DarkModeOutlinedIcon onClick={toggle}/> 
                )}
                <GridViewOutlinedIcon/>
                <div className="search">
                    <SearchOutlinedIcon/>
                    <input type="text" placeholder="Search..." />
                </div>

            </div>
            <div className="right">
                <NotificationsActiveOutlinedIcon/>
                <EmailOutlinedIcon/>
                <SportsMotorsportsOutlinedIcon/>
                <div className="user">
                    <img src={DP} alt=""/>
                    <span>Driver 1</span>
                </div>
            </div>
        </div>
    );
};

export default NavBar
import "./navBar.scss"
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


const NavBar = ()=> {
    return (
        <div className="navBar">
            <div className="left">
                <Link to="/" style={{textDecoration:"none"}}>  
                    <span>cruise</span>
                </Link>
                <HomeOutlinedIcon/>
                <DarkModeOutlinedIcon/>
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
                    <img src="https://www.pexels.com/photo/man-in-black-jacket-771742/" alt=""/>
                    <span>Driver 1</span>
                </div>
            </div>
        </div>
    );
};

export default NavBar
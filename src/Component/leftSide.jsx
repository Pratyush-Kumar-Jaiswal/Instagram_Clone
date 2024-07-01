import "./leftSide.css";
import React from 'react';
import instaLogo from "../assests/Logo-Instagram.png";
import profile from "../assests/profile_pic.jpeg";
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ExploreIcon from '@mui/icons-material/Explore';
import MusicVideoIcon from '@mui/icons-material/MusicVideo';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
// import GestureOutlinedIcon from '@mui/icons-material/GestureOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

const LeftSide = () => {
  return (
    <div className="LeftSide">
        <div className="logo"><img  className="logoImg" src={instaLogo} alt="Logo"/></div>
        <div className="navLinkPart">
            <div className="navLink">
                <HomeIcon sx={{fontSize:"30px",margin:"0 20px 0 0"}}/>
                <div className="navName">
                    Home
                </div>
            </div>
            <div className="navLink">
                <SearchIcon sx={{fontSize:"30px",margin:"0 20px 0 0"}}/>
                <div className="navName">
                    Search
                </div>
            </div>
            <div className="navLink">
                <ExploreIcon sx={{fontSize:"30px",margin:"0 20px 0 0"}}/>
                <div className="navName">
                    Explore
                </div>
            </div>
            <div className="navLink">
                <MusicVideoIcon sx={{fontSize:"30px",margin:"0 20px 0 0"}}/>
                <div className="navName">
                    Reels
                </div>
            </div>
            <div className="navLink">
                <EmailOutlinedIcon sx={{fontSize:"30px",margin:"0 20px 0 0"}}/>
                <div className="navName">
                    Messages
                </div>
            </div>
            <div className="navLink">
                <FavoriteBorderOutlinedIcon sx={{fontSize:"30px",margin:"0 20px 0 0"}}/>
                <div className="navName">
                    Notification
                </div>
            </div>
            <div className="navLink">
                <AddBoxOutlinedIcon sx={{fontSize:"30px",margin:"0 20px 0 0"}}/>
                <div className="navName">
                    Create
                </div>
            </div>
            <div className="navLink">
                <img className="profileImg" src={profile} alt="profile_pic" />
                <div className="navName">
                    Profile
                </div>
            </div>
            <div className="belowPart">
              {/* <div className="navLink">
                  <GestureOutlinedIcon sx={{fontSize:"30px",margin:"0 20px 0 0"}}/>
                  <div className="navName">
                      Threads
                  </div>
              </div> */}
              <div className="navLink">
                  <MenuOutlinedIcon sx={{fontSize:"30px",margin:"0 20px 0 0"}}/>
                  <div className="navName">
                      More
                  </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default LeftSide;

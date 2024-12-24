import { CgProfile } from "react-icons/cg";
import { FaHistory } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { MdOutlineVideoLibrary, MdSubscriptions } from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";
import { exploreData } from "../Utils/Data";
import '../Styles/Menu.css'
import React from "react";

const Menu = ({menu}) => {
  return (
    <div className={`menu-container ${menu?"":'small-menu'}`} >
      <div className="main">
        <div className="home">
          <IoMdHome /> <span>Home</span>
        </div>
        <div className="shorts">
          <SiYoutubeshorts /> <span>Shorts</span>
        </div>
        <div className="subscription">
          {" "}
          <MdSubscriptions /> <span>Subscription</span>
        </div>
      </div>
      <div className="history-you">
        <div className="you">
          <MdOutlineVideoLibrary /> <span>You</span>
        </div>
        <div className="history">
          <FaHistory /> <span>History</span>
        </div>
      </div>
      <div className="log-in">
        <span>Sign in to like videos, comment, and subscribe.</span>
        <div className="sign-in">
          <CgProfile /> Sign-In
        </div>
      </div>
      <div className="explore">
        {exploreData.map((data,i) => (
          <div className="explore-data" key={i}>
            {React.createElement(data.icon)} <span>{data.name}</span> 
          </div>
        ))}
      </div>
      <div className="more-from-youtube">
      <div className="youtube-premium">
          <img src="./images/YouTube-Logo.png" alt="" /> <span>YouTube Premium</span>
        </div>
      <div className="youtube-music">
          <img src="./images/yMusic.png" alt="" /> <span>YouTube Music</span>
        </div>
      <div className="youtube-kids">
          <img src="./images/yKids.png" alt="" /> <span>YouTube Kids</span>
        </div>
      </div>
      
    </div>
  );
};
export default Menu;

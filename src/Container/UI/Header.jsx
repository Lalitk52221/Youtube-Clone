import "../Styles/Header.css";
import { BsThreeDotsVertical } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { IoMenu, IoMicSharp, IoSearchSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const Header = ({setMenu}) => {
  return (
    <div className="header">
      <Link to="/" className="logo-menu">
        <IoMenu className="menu-icon" onClick={()=>setMenu(prev=>prev===false?true:false)} />

        <div className="logo">
          {" "}
          <img
            src="./images/YouTube-Logo.png"
            alt="Youtube Logo"
            className="logo-img"
          />{" "}
          <span className="logo-text">YouTube</span>
        </div>
      </Link>
      <div className="search-box">
        <div className="input-box">
          <input type="search" placeholder="search" />
          <IoSearchSharp className="search-icon" />
        </div>
        <button className="mic">
          <IoMicSharp className="mic-icon" />
        </button>
      </div>
      <div className="profile">
        <BsThreeDotsVertical className="dot-icon" />{" "}
        <button className="sign-in">
          {" "}
          <CgProfile className="profile-icon" />
          Sign In
        </button>
      </div>
    </div>
  );
};
export default Header;

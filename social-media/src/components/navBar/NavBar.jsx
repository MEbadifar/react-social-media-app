import React from "react";
import "./navbar.scss";
import { ReactDOM,Link } from "react-router-dom";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import PersonOutlinedIcon  from '@mui/icons-material/PersonOutlined';
import EmailOutlinedIcon  from '@mui/icons-material/EmailOutlined';
import SearchOutlinedIcon  from '@mui/icons-material/SearchOutlined';
import NotificationsOutlinedIcon  from '@mui/icons-material/NotificationsOutlined';



const NavBar = () => {
  return (
    <div className="navbar">
      <div className="left">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span>LamaSocial</span>
        </Link>
        <HomeOutlinedIcon />
        <DarkModeOutlinedIcon />
        <GridViewOutlinedIcon />
        <div className="search">
        <SearchOutlinedIcon />
        <input type="text" placeholder="Search..."/>
        </div>
      </div>
      <div className="right" >
        <PersonOutlinedIcon />
        <EmailOutlinedIcon />
        <NotificationsOutlinedIcon />
        <div className="user">
          <img src="https://images.pexels.com/photos/15846364/pexels-photo-15846364/free-photo-of-fashion-frau-model-dach.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
          <span>Mehdi</span>
        </div>
      </div>

    </div>);
};
export default NavBar;

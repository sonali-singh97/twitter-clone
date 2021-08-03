import React from 'react'
import { Link, Redirect } from 'react-router-dom';
import { useHistory} from "react-router"
import SidebarOption from './SidebarOption';
import TwitterIcon from "@material-ui/icons/Twitter";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { Button } from "@material-ui/core";

const Sidebar = () => {
  const history = useHistory();

  const login = localStorage.getItem("userId");
    const handleLogout = () => {
      
      if(login){
        localStorage.removeItem("userId")
      }

      history.push("/login")
    }

    return (
        <div className="sidebar">
        <TwitterIcon className="sidebar__twitterIcon" />
  
        <SidebarOption  Icon={HomeIcon} text="Home" link="/" />
        <SidebarOption Icon={PermIdentityIcon} text="Profile" link="/profile" />
        <SidebarOption Icon={SearchIcon} text="Explore" link="/" />
      
  
        <Button variant="outlined" className="sidebar__tweet" fullWidth>
         <Link  onClick={handleLogout}> {login ? "Logout" : "Login"} </Link> 
        </Button>
      </div>
    )
}

export default Sidebar;


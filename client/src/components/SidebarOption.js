import React from 'react'
import { Link } from "react-router-dom";

const SidebarOption = ({active, text, Icon, link}) => {
    return (
      <Link to={link} style={{color: "#000", textDecoration: "none"}}>
    <div className={`sidebarOption ${active && "sidebarOption--active"}`}>
      <Icon />
      <h2>{text}</h2>
      
    </div>
    </Link>
    )
}

export default SidebarOption;

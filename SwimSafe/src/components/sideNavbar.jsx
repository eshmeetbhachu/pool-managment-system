import "../styles/sidenavbar.css"
import logo from "../assets/logo.png"
import { MdSpaceDashboard } from "react-icons/md";
import { MdOutlineTaskAlt } from "react-icons/md";
import { FaCalendarAlt } from "react-icons/fa";
import { IoIosDocument } from "react-icons/io";
import { MdMessage } from "react-icons/md";
import { IoIosSettings } from "react-icons/io";
import { MdLogout } from "react-icons/md";

function SideNavbar(){

    const menuItems =[
        {
            title: "DASHBOARD",
            icon: MdSpaceDashboard,
        },
        {
            title: "TASK",
            icon: MdOutlineTaskAlt,
        },
        {
            title: "CALENDAR",
            icon: FaCalendarAlt,
        },
        {
            title: "REPORT",
            icon: IoIosDocument,
        },
        {
            title: "MESSAGES",
            icon: MdMessage,
        },
    ]

    return(
        <>
        <div className="side-navbar">
           <img src={logo} alt="company-logo" />
           <p>MENU</p>
           
           {menuItems.map((item) => {
            return(
                <div className="component" key={item.title}>
                    <item.icon />
                    <h4>{item.title}</h4>
                </div>
            )
           })}

           <div className="general">
            <p>GENERAL</p>
            <div className="component"><IoIosSettings style={{color : "white"}}/><h4>SETTING</h4></div>
            <div className="component"><MdLogout  style={{color : "white"}}/><h4>LOG OUT</h4></div>
           </div>
        </div>
        </>
    )
}

export default SideNavbar;
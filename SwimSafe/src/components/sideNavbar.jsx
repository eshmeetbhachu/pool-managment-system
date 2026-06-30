import "../styles/sidenavbar.css"
import logo from "../assets/logo.png"
import { MdSpaceDashboard } from "react-icons/md";
// import { MdOutlineTaskAlt } from "react-icons/md";
import { IoPeople } from "react-icons/io5";
import { FaCalendarAlt } from "react-icons/fa";
import { IoIosDocument } from "react-icons/io";
import { MdMessage } from "react-icons/md";
import { IoIosSettings } from "react-icons/io";
import { MdLogout } from "react-icons/md";
import { NavLink } from "react-router-dom";

function SideNavbar(){

    const menuItems =[
        {
            title: "DASHBOARD",
            icon: MdSpaceDashboard,
            path: "/dashboard",
        },
        {
            title: "STAFF",
            icon: IoPeople,
            path: "/dashboard/staff",
        },
        {
            title: "CALENDAR",
            icon: FaCalendarAlt,
            path: "/dashboard/calendar",
        },
        {
            title: "DUTIES",
            icon: IoIosDocument,
            path: "/dashboard/duties",
        },
        {
            title: "MESSAGES",
            icon: MdMessage,
            path: "/dashboard/messages",
        },
    ]

    return(
        <>
        <div className="side-navbar">
            <div className="content">
           <img src={logo} alt="company-logo" />
           <p>MENU</p>
            
           {menuItems.map((item) => {
            return(
                    <NavLink key={item.title} to={item.path} end={item.path === "/dashboard"} className={({isActive}) => isActive?"component active":"component"}>
                    <item.icon />
                    <h4>{item.title}</h4>
                    </NavLink>
            )
           })}
            </div>

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
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

function SideNavbar({activePage, setActivePage}){

    const menuItems =[
        {
            title: "DASHBOARD",
            icon: MdSpaceDashboard,
            page: "dashboard",
        },
        {
            title: "STAFF",
            icon: IoPeople,
            page: "staff",
        },
        {
            title: "CALENDAR",
            icon: FaCalendarAlt,
            page: "calendar",
        },
        {
            title: "REPORT",
            icon: IoIosDocument,
            page: "report",
        },
        {
            title: "MESSAGES",
            icon: MdMessage,
            page: "messages",
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
                <div className={activePage==item.page ? "component active" : "component"} key={item.title} onClick={() => {setActivePage(item.page)}}>
                    <item.icon />
                    <h4>{item.title}</h4>
                </div>
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
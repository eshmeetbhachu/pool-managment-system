import "../styles/sidenavbar.css"
import logo from "../assets/logo.png"

import { useState } from 'react'

import { MdSpaceDashboard } from "react-icons/md";
// import { MdOutlineTaskAlt } from "react-icons/md";
import { IoPeople } from "react-icons/io5";
import { FaCalendarAlt } from "react-icons/fa";
import { IoIosDocument } from "react-icons/io";
import { MdMessage } from "react-icons/md";
import { IoIosSettings } from "react-icons/io";
import { MdLogout } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { IoDocumentsSharp } from "react-icons/io5";
import { RxAvatar } from "react-icons/rx";
import { FaCheckCircle } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import { MdPhoneInTalk } from "react-icons/md";

function SideNavbar(){

    const userId = JSON.parse(localStorage.getItem("user")).id;

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
            path: `/dashboard/duties/${userId}`,
        },
    ]

    const applications = [
        {
            title: "APPLICATIONS",
            icon: IoDocumentsSharp,
            children: [
                {
                    title: "NEW APPLICANTS",
                    icon: RxAvatar,
                    path: "/dashboard/application/new"
                },
                {
                    title: "HIRED",
                    icon: FaCheckCircle,
                    path: "/dashboard/application/hired"
                },
                {
                    title: "REJECTED",
                    icon: MdCancel,
                    path: "/dashboard/application/rejected"
                },
                {
                    title: "INTERVIEWS",
                    icon: MdPhoneInTalk,
                    path: "/dashboard/application/interview"
                },
                {
                    title: "DOCUMENTATION",
                    icon: IoDocumentsSharp,
                    path: "/dashboard/application/documents"
                },
            ]
        }
    ]

    const [showApplications,setShowApplications] = useState(false)
    const currentUser = JSON.parse(localStorage.getItem("user"))

    return(
        <>
        <div className="side-navbar">
            <div className="content">
           <img src={logo} alt="company-logo" />
           <p>MENU</p>
            
           {menuItems.map((item) => {
            return(
                    <NavLink key={item.title} to={item.path} end={item.path === "/dashboard"} className={({isActive}) => isActive?"component active":"component"} onClick={() => setShowApplications(false)}>
                    <item.icon />
                    <h4>{item.title}</h4>
                    </NavLink>
            )
           })}

           {currentUser.designation == "Admin" &&
            <div className={`component ${showApplications ? "active" : ""}`} onClick={ () => setShowApplications(!showApplications)}>
            <IoDocumentsSharp/>
            <h4>APPLICATIONS</h4>
            </div>
            }

            {showApplications && applications[0].children.map((applicant) => {
            return(
                    <NavLink key={applicant.title} to={applicant.path} className={({isActive}) => isActive?"component active":"component"}>
                    <applicant.icon />
                    <h4>{applicant.title}</h4>
                    </NavLink>
            )
           })}
            </div>



           <div className="general">
            <p>GENERAL</p>
            <div className="component"><MdLogout  style={{color : "white"}}/><h4>LOG OUT</h4></div>
           </div>
        </div>
        </>
    )
}

export default SideNavbar;
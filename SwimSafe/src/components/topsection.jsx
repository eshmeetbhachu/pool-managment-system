import "../styles/topsection.css"
import { FaSearch } from "react-icons/fa";
import profile from "../assets/profile.png"
import { useState,useEffect } from "react";

function TopSection(){
    const [user,setUser] = useState(null);

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem("user"));
        setUser(storedUser);
    },[])
    
    return(
        <div className="top-section">
            <div className="search-container">
            <FaSearch className="search-icon"/>
            <input type="text" placeholder="Search Task"/>
            </div>

            <div className="profile">
            <img src={profile} alt="profile-image" />
            <div className="profile-info">
            <h4>{user
                    ? `${user.firstName} ${user.lastName}`
                    : "Loading..."
                }</h4>
            <p>{user?.designation}</p>
            </div>
            </div>
        </div>
    )
}

export default TopSection; 
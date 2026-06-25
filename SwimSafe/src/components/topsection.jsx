import "../styles/topsection.css"
import { FaSearch } from "react-icons/fa";
import profile from "../assets/profile.png"

function TopSection(){
    return(
        <div className="top-section">
            <div className="search-container">
            <FaSearch className="search-icon"/>
            <input type="text" placeholder="Search Task"/>
            </div>

            <div className="profile">
            <img src={profile} alt="profile-image" />
            <div className="profile-info">
            <h4>STAFF NAME</h4>
            <p>Designation</p>
            </div>
            </div>
        </div>
    )
}

export default TopSection; 
import SideNavbar from "../components/sideNavbar";
import TopSection from "../components/topsection";
import "../styles/Dashboard.css"
import { Outlet } from "react-router-dom";

function Dashboard(){
    return(
        <>
        <div className="dashboard">
            <SideNavbar />
            <div className="right-side">
                <TopSection />
                <div className="main-content">
                <Outlet />
                </div>
            </div>
        </div>
        </>
    )
}

export default Dashboard;
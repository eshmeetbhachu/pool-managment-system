import { useState } from "react";
import MainContent from "../components/Main-content/maincontent";
import SideNavbar from "../components/sideNavbar";
import TopSection from "../components/topsection";
import "../styles/Dashboard.css"

function Dashboard(){
    const [activePage, setActivePage] = useState("dashboard");
    return(
        <>
        <div className="dashboard">
            <SideNavbar 
            activePage={activePage}
            setActivePage={setActivePage}/>
            <div className="right-side">
                <TopSection />
                <MainContent activePage={activePage}/>
            </div>
        </div>
        </>
    )
}

export default Dashboard;
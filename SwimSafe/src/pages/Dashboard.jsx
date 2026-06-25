import MainContent from "../components/maincontent";
import SideNavbar from "../components/sideNavbar";
import TopSection from "../components/topsection";
import "../styles/Dashboard.css"

function Dashboard(){
    return(
        <>
        <div className="dashboard">
            <SideNavbar />
            <div className="right-side">
                <TopSection />
                <MainContent />
            </div>
        </div>
        </>
    )
}

export default Dashboard;
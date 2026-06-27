import CalendarContent from "./CalendarContent";
import DashboardContent from "./DashboardContent";
import MessagesContent from "./MessagesContent";
import ReportContent from "./ReportContent";
import StaffContent from "./StaffContent";
import "./maincontent.css"

function MainContent({activePage}){
    return(
        <>
        <div className="main-content">
        {activePage === "dashboard" && <DashboardContent />}
        {activePage === "staff" && <StaffContent />}
        {activePage === "calendar" && <CalendarContent />}
        {activePage === "report" && <ReportContent />}
        {activePage === "messages" && <MessagesContent />}
        </div>
        </>
    )
}

export default MainContent;
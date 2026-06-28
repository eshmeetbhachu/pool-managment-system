import { IoIosPeople } from "react-icons/io";
import { IoPersonRemove } from "react-icons/io5";
import { MdPersonAdd } from "react-icons/md";
import { FaRegCalendarTimes } from "react-icons/fa";
import DigitalClock from "./digitalclock";
import "./dashboardcontent.css"
import AttendanceChart from "./AttendanceChart";

function DashboardContent(){

    const attendance =[
        {
            title: "TOTAL EMPLOYEE",
            number: 350,
            icon: IoIosPeople,
        },
        {
            title: "TOTAL PRESENT",
            number: 330,
            icon: MdPersonAdd,
        },
        {
            title: "TOTAL ABSENT",
            number: 20,
            icon: IoPersonRemove,
        },
        {
            title: "UNAPPROVED LEAVES",
            number: 10,
            icon: FaRegCalendarTimes,
        },
    ]

    return(
            <>
            <h2>DASHBOARD</h2>
            <div className="dashboard-grid">
                <div className="dashboard-card card1">
                    {attendance.map((info) =>{
                        return(
                            <div className="attendance-information">
                                <info.icon />
                                <div className="numbers">
                                <h3>{info.title}</h3>
                                <p>{info.number}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="dashboard-card card2">
                    <DigitalClock />
                </div>
                <div className="dashboard-card card3">
                    <h3>UPCOMING TASKS:</h3>
                    <div className="task">
                    <input type="checkbox" id="task1" />
                    <label htmlFor="task1">
                        <span>Pool Inspection</span>
                        <span>08:00 AM</span>
                    </label>
                    </div>

                    <div className="task">
                    <input type="checkbox" id="task2" />
                    <label htmlFor="task2">
                        <span>Equipment Check</span>
                        <span>10:00 AM</span>
                    </label>
                    </div>

                    <div className="task">
                    <input type="checkbox" id="task3" />
                    <label htmlFor="task3">
                        <span>Staff Meeting</span>
                        <span>02:00 PM</span>
                    </label>
                    </div>

                    <div className="task">
                    <input type="checkbox" id="task4" />
                    <label htmlFor="task4">
                        <span>Water Testing</span>
                        <span>04:00 PM</span>
                    </label>
                    </div>

                </div>
                <div className="dashboard-card card4">
                    <AttendanceChart /> 
                </div>
            </div>
            </>
    )
}

export default DashboardContent;
import { useEffect, useState } from "react";
import "./digitalclock.css"
import { IoIosArrowDropdown } from "react-icons/io";

function DigitalClock(){
    const [time, setTime] = useState(new Date());
    const [staff,setStaff] = useState(() => JSON.parse(localStorage.getItem("user")) || {});

    const day = time.toLocaleDateString('en-US', {
        weekday: 'long'
    });

    const date = time.toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });

    useEffect(() => {

        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const handleClockInUpdate = async () => {
        try {
            const storedUser = JSON.parse(localStorage.getItem("user"));
            console.log("Stored User:", storedUser);
            console.log("ID:", storedUser?.id);
            const id = storedUser.id;
            const response = await fetch(`http://localhost:8000/api/auth/staff/${id}/clockin`,{method: "PUT"});
            const data = await response.json();
            setStaff(data);
            localStorage.setItem("user",JSON.stringify(data));
        } catch (error) {
            alert("error in updating data");
        }
    }

    const handleClockOutUpdate = async () => {
        try {
            const storedUser = JSON.parse(localStorage.getItem("user"));
            console.log("Stored User:", storedUser);
            console.log("ID:", storedUser?.id);
            const id = storedUser.id;
            const response = await fetch(`http://localhost:8000/api/auth/staff/${id}/clockout`,{method: "PUT"});
            const data = await response.json();
            setStaff(data);
            localStorage.setItem("user",JSON.stringify(data));
        } catch (error) {
            alert("error in updating data");
        }
    }

    return (
        <div className="clock-card">
            <div className="top-content">

            <div className="day">
            <p>{day}</p>
            <p>{date}</p>
            </div>

            <div className="clock-in">
            <button className="clockin-button" onClick={handleClockInUpdate} disabled={staff.isActive}><span>clock in</span><IoIosArrowDropdown /></button>
            <button className="clockin-button" onClick={handleClockOutUpdate} disabled={!staff.isActive}><span>clock out</span><IoIosArrowDropdown /></button>
            </div>
            </div>

            <p>{staff.isActive?"clocked in":"clocked out"}<br />{staff.isActive?  new  Date(staff.clockInTime).toLocaleTimeString(): new  Date(staff.clockOutTime).toLocaleTimeString()}</p>

            <div className="time">
            <h3>Current Time</h3>
            <h1>{time.toLocaleTimeString()}</h1>
            </div>
        </div>
    );
}

export default DigitalClock;
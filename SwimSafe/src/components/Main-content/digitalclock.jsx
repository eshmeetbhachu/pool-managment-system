import { useEffect, useState } from "react";
import "./digitalclock.css"
import { IoIosArrowDropdown } from "react-icons/io";

function DigitalClock(){
    const [time, setTime] = useState(new Date());

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

    return (
        <div className="clock-card">
            <div className="top-content">

            <div className="day">
            <p>{day}</p>
            <p>{date}</p>
            </div>

            <div className="clock-in">
            <button className="clockin-button"><span>clock in</span><IoIosArrowDropdown /></button>
            </div>

            </div>

            <div className="time">
            <h3>Current Time</h3>
            <h1>{time.toLocaleTimeString()}</h1>
            </div>
        </div>
    );
}

export default DigitalClock;
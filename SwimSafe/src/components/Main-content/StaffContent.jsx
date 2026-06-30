import "./staffcontent.css"
import avatar1 from "../../assets/avatar1.jpg"
import avatar2 from "../../assets/avatar2.jpg"
import avatar3 from "../../assets/avatar3.jpg"
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";


function StaffContent(){

    const staffImage = [avatar1,avatar2,avatar3];
    const [staff,setStaff] = useState([]);

    useEffect(() => {
        async function fetchStaff() {
            const response = await fetch("http://localhost:8000/api/auth/staff");
            const data = await response.json();
            setStaff(data);
        }
        fetchStaff();
    },[]);


    return(
        <>
        <h2>STAFF INFORMATION</h2>

        <div className="staff-information">
        {staff.map((person,index) => {
            const image = staffImage[index % staffImage.length];
            return(
                <NavLink to={`/dashboard/duties/${person._id}`} className="card" key={person._id}>
                <div className="card-border-top">
                </div>    
                <div className="img">
                    <img src={image} alt="" />
                </div>
                <span>{person.firstName}{" "}{person.lastName}</span>
                <p className="job"> {person.designation}</p>
                <p className="email">Email: {person.email}</p>
                <p className="email">{person.isActive ? "Clocked IN" : "Clocked OUT"}</p>
                </NavLink>
            )
        })}
        </div>
        </>
    )
}

export default StaffContent;
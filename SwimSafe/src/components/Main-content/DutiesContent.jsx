import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import avatar1 from "../../assets/avatar1.jpg"
import avatar2 from "../../assets/avatar2.jpg"
import avatar3 from "../../assets/avatar3.jpg"
import "./DutiesContent.css"

function DutiesContent(){
    const {id} = useParams();
    const [staff,setStaff] = useState({});
    const staffImage = [avatar1,avatar2,avatar3];
    const image = staffImage[Math.floor(Math.random() * staffImage.length)];

        useEffect(() => {
            async function fetchStaff() {
                const response = await fetch(`http://localhost:8000/api/auth/staff/${id}`);
                const data = await response.json();
                setStaff(data);
            }
            fetchStaff();
        },[id]);

        return(
            
            <>
            <div className="duties-content">
                <div className="staff-all-information">
                <div className="staff-image">
                <img src={image} alt="" />
                </div>
                <div className="staff-personal-information">
                <h2>{staff.firstName}{" "}{staff.lastName}</h2>
                <h4>{staff.designation}</h4>
                <p>Email : {staff.email}</p>
                <p>Phone : {staff.phoneNumber}</p>
                </div>
                </div>

                <div className={staff.isActive ? "clock-active" : "clock-inactive"}>
                    <h4>{staff.isActive ? "Clocked IN" : "Clocked OUT"}</h4>
                </div>
            </div>

            </>
        )
}

export default DutiesContent;
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import avatar1 from "../../assets/avatar1.jpg"
import avatar2 from "../../assets/avatar2.jpg"
import avatar3 from "../../assets/avatar3.jpg"
import "./DutiesContent.css"

function DutiesContent(){
    const {id} = useParams();
    const [staff,setStaff] = useState({});
    const currentUser = JSON.parse(localStorage.getItem("user"))

    const [showform,setShowForm] = useState(false);
    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("");
    const [duties,setDuties] = useState([])

    const staffImage = [avatar1,avatar2,avatar3];
    const [image,setImage] = useState(" ");

        useEffect(() => {
            async function fetchStaff() {
                const response = await fetch(`http://localhost:8000/api/auth/staff/${id}`);
                const data = await response.json();
                setStaff(data);
                setImage(staffImage[Math.floor(Math.random() * staffImage.length)]);
            }

            const fetchDuties = async () => {
                const response = await fetch(`http://localhost:8000/api/auth/duties/${id}`);
                const data = await response.json();
                setDuties(data);
            }
            fetchDuties();
            fetchStaff();
        },[id]);

        const handlesubmit = async (e) => {
            e.preventDefault();
        try {
            const response = await fetch("http://localhost:8000/api/auth/duties",{
                method: "POST",
                headers: {
                "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    title: title,
                    description: description,
                    assignedTo: staff._id,
                    assignedBy: currentUser.id,
                }),
            })
            const data = await response.json();
            setDuties(prev => [...prev,data.duty]);
            setTitle("");
            setDescription("");
            setShowForm(!showform);
        } catch (error) {
            alert("error in submitting")
        }
        }

        return(
            
            <>
            <div className="duties-content">
                <div className="staff-content">
                    <div className="staff-all-information">
                        <div className="staff-image">
                            <img src={image} alt="avatar-image" />
                        </div>
                        <div className="staff-personal-information">
                        <h2>{staff.firstName}{" "}{staff.lastName}</h2>
                        <h4>{staff.designation}</h4>
                        <p>Email : {staff.email}</p>
                        <p>Phone : {staff.phoneNumber}</p>
                        </div>
                    </div>

                    <div className="right-section-content">
                        <div className={staff.isActive ? "clock-active" : "clock-inactive"}>
                        <p>{staff.isActive ? "Clocked IN" : "Clocked OUT"}</p>
                        {currentUser.designation === "Admin" && <button className="assign" onClick={() => {setShowForm(!showform)}}>Assign Duties</button>}
                        </div>
                    </div>
                </div>

                <div className="duties-section">
                <div className="assign-duty">
                {showform && 
                    <div className="assign-duty-form">
                    <form onSubmit={handlesubmit}>
                        <label style={{color:"white"}}>Duty Title:</label>
                        <input type="text" required={true} name="title" value={title} onChange={(e) => {setTitle(e.target.value)}}/>

                        <label style={{color:"white"}}>Duty Description:</label>
                        <input type="text" required={true} name="description" value={description} onChange={(e) => {setDescription(e.target.value)}}/>

                        <button className="submit-duty" type="submit">Assign</button>
                    </form>
                    </div>
                }

                <div className="duties">
                    <h3>TASK LIST</h3>
                        {duties.map((duty,index) => {
                            return(
                            <div className="task-list" key={index}>
                            <input type="checkbox" className="task" />
                            <label htmlFor="task">{duty.title}{" "}:{" "}{duty.description}</label>
                            </div>
                            )
                        })}
                </div>
                </div>
                </div>

            </div>

            </>
        )
}

export default DutiesContent;
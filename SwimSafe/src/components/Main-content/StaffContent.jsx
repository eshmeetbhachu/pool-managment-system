import "./staffcontent.css"
import avatar1 from "../../assets/avatar1.jpg"
import avatar2 from "../../assets/avatar2.jpg"
import avatar3 from "../../assets/avatar3.jpg"

function StaffContent(){

    const staffImage = [avatar1,avatar2,avatar3];

    const staffmembers = [
        {
            firstName: "Eshmeet",
            lastName : "Singh",
            email : "eshmeett@gmail.com",
            designation : "admin",
        },
        {
            firstName: "Guneet",
            lastName : "Bhachu",
            email : "eshmeett@gmail.com",
            designation : "lifeguard",
        },
        {
            firstName: "Sonia",
            lastName : "Bhachu",
            email : "eshmeett@gmail.com",
            designation : "lifeguard",
        },
        {
            firstName: "Jaspal",
            lastName : "Singh",
            email : "eshmeetfwft@gmail.com",
            designation : "lifeguard",
        },
        {
            firstName: "Eshmeet",
            lastName : "Singh",
            email : "eshmeetewft@gmail.com",
            designation : "admin",
        },
        {
            firstName: "Guneet",
            lastName : "Bhachu",
            email : "eshmeeagtt@gmail.com",
            designation : "lifeguard",
        },
        {
            firstName: "Sonia",
            lastName : "Bhachu",
            email : "eshmeett@gmail.com",
            designation : "lifeguard",
        },
        {
            firstName: "Jaspal",
            lastName : "Singh",
            email : "eshmeett@gmail.com",
            designation : "lifeguard",
        },
    ]
    return(
        <>
        <h2>STAFF INFORMATION</h2>

        <div className="staff-information">
        {staffmembers.map((person) => {
            const image = staffImage[Math.floor(Math.random() * staffImage.length)];
            return(
                <div className="card">
                <div className="card-border-top">
                </div>    
                <div className="img">
                    <img src={image} alt="" />
                </div>
                <span>{person.firstName}{" "}{person.lastName}</span>
                <p className="job"> {person.designation}</p>
                <p className="email">Email: {person.email}</p>
                </div>
            )
        })}
        </div>
        </>
    )
}

export default StaffContent;
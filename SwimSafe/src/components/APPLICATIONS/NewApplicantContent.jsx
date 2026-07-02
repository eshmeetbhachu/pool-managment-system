import "./NewApplicantContent.css"
import avatar1 from "../../assets/avatar1.jpg"
import avatar2 from "../../assets/avatar2.jpg"
import avatar3 from "../../assets/avatar3.jpg"

function NewApplicantContent(){

    const staffImage = [avatar1,avatar2,avatar3];
    const image = staffImage[1 % staffImage.length];

    return(
        <>
        <div className="full-information">
            <div class="card">
                <div class="profileImage">
                    <img src={image} alt="" />
                </div>
                
                <div class="textContainer">
                    <p class="name">Pepper Potts</p>
                    <p class="profile">Profile</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default NewApplicantContent;
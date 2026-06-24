import "../styles/signup.css"
import { useState } from "react";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

function SignupForm({ setIsRegistering }) {

  const [showpassword , setShowPassword] = useState(false);
  const [showconfirmpassword , setShowConfirmPassword] = useState(false);

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  let isValid = true;

  const [formData, setFormData] = useState({
  name: "",
  email: "",
  phoneNumber: "",
  password: "",
  confirmPassword: "",
  });

  const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
  };

  const handleRegister = async (e) => {
  e.preventDefault();

  const nameRegex = /^[A-Za-z ]+$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^[0-9]{10}$/;

  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

  if (!nameRegex.test(formData.name)) {
    setNameError("Name should contain only letters");
    isValid = false;
  }

  if (!emailRegex.test(formData.email)) {
    setEmailError("Invalid email");
    isValid = false;
  }

  if (!phoneRegex.test(formData.phoneNumber)) {
    setPhoneError("Phone number must be exactly 10 digits");
    isValid = false;
  }

  if (!passwordRegex.test(formData.password)) {
    setPasswordError(
      "Password must contain uppercase, lowercase, number and special character"
    );
    isValid = false;
  }

  if (
    formData.password !==
    formData.confirmPassword
  ) {
    setConfirmPasswordError("Passwords do not match");
    isValid = false;
  }

  if (!isValid) return;
  
  try {
    const response = await fetch(
      "http://localhost:8000/api/auth/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );

    const data = await response.json();

    if (response.ok) {
      alert("Registration Successful");

      setIsRegistering(false);
    } else {
      alert(data.message);
    }
  } catch (error) {
    console.error(error);
    alert("Server Error");
  }
};

  return (
    <div className="login-card register-card">
      <h1>Create Account</h1>

      <form onSubmit={handleRegister}>
        <div className="register-grid">

        <div className="group"> 
        <label>Name</label>
        <input type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}/>
        <span className="error">{nameError}</span>
        </div>

        <div className="group">
        <label>Email</label>
        <input type="email" 
        name="email"
        value={formData.email}
        onChange={handleChange}/>
        <span className="error">{emailError}</span>
        </div>

        <div className="group">
        <label>Phone Number</label>
        <input type="text" 
        name="phoneNumber"
        value={formData.phoneNumber}
        onChange={handleChange}/>
        <span className="error">{phoneError}</span>
        </div>

        <div className="group">
        <label>Password</label>
        <input type={showpassword ? "text" : "password"}
        name="password"
        value={formData.password}
        onChange={handleChange}/>
        {showpassword ? <FaEye onClick={() => setShowPassword(false)} className="eye-style"/> :<FaEyeSlash onClick={() => setShowPassword(true)} className="eye-style" />}
        <span className="error">{passwordError}</span>
        </div>
        
        
        <div className="group">
        <label>Confirm Password</label>
        <input type={showconfirmpassword ? "text" : "password"} 
        name="confirmPassword"
        value={formData.confirmPassword}
        onChange={handleChange}/>
        {showconfirmpassword ? <FaEye onClick={() => setShowConfirmPassword(false)} className="eye-style"/> :<FaEyeSlash onClick={() => setShowConfirmPassword(true)} className="eye-style" />}
        <span className="error">{confirmPasswordError}</span>
        </div>

        </div>
        <button type="submit">
          REGISTER
        </button>

        <p>Already have an account?{" "}
          <span onClick={() => setIsRegistering(false)}>Login</span>
        </p>
      </form>
    </div>
  );
}

export default SignupForm;
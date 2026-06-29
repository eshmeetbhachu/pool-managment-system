import { useState } from "react";
import "../styles/loginform.css"
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function LoginForm({setIsRegistering}){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showpassword , setShowPassword] = useState(false);
    const navigate = useNavigate();

            const handleLogin = async (e) => {
            e.preventDefault();

            try {
                 const response = await fetch(
                "http://localhost:8000/api/auth/login",
                 {
                    method: "POST",
                    headers: {
                    "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                    email,
                    password,
                    }),
                }
                );

                const data = await response.json();

                if (response.ok) {
                localStorage.setItem("token", data.token);

                localStorage.setItem(
                    "user",
                    JSON.stringify(data.user)
                );

                alert("Login Successful");

                navigate("/dashboard");
                } else {
                alert(data.message);
                }
            } catch (error) {
                console.error(error);
                alert("Server Error");
            }
            };

    return(
        <div className="login-card">

        <h1>Welcome Back</h1>

        <p>
          Enter your email and password to access your account.
         </p>

        <form onSubmit={handleLogin}>
            <label htmlFor="email">Email</label>
            <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />

            <label htmlFor="password">Password</label>
            <div className="password-container">
            <input
                type={showpassword ? "text" : "password"}
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            {showpassword ? <FaEye onClick={() => setShowPassword(false)} className="eye"/> :<FaEyeSlash onClick={() => setShowPassword(true)} className="eye" />}
            </div>

            <div className="login-options">
            <a href="#">
                Forgot Your Password?
            </a>
            </div>

            <button type="submit">
                LOG IN
            </button>

            <p className="register-link">New User?{" "}
            <span onClick={() => setIsRegistering(true)}>Register Now</span><br/>
            Want to work with us?{" "}
            <span onClick={() => setIsRegistering(true)}>Apply Now</span>
            </p>
        </form>
    </div>
    )
}

export default LoginForm;
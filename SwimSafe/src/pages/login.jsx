import HeroSection from "../components/herosection";
import LoginForm from "../components/loginform";
import SignupForm from "../components/signup";
import "../styles/login.css"
import { useState } from "react";

function Login(){

    const [isRegistering, setIsRegistering] = useState(false);

    return(
        <>
        <div className="login-page">
        {isRegistering ? 
        <SignupForm setIsRegistering={setIsRegistering} /> : 
        <LoginForm isRegistering={isRegistering} setIsRegistering={setIsRegistering}/>}
        {!isRegistering && <HeroSection />}
        </div>
        </>
    )
}

export default Login;
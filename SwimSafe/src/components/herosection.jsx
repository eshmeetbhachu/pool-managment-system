import logo from "../assets/logo.png"
import "../styles/herosection.css"

function HeroSection(){
    return(
        <div className="hero-section">
            <img src={logo} alt="company-logo" />
            <h1>Making Pool Operations Safer and Simpler.</h1>
        </div>
    )
}

export default HeroSection;
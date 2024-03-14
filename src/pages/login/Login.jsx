import { Link } from "react-router-dom"
import "./login.scss"
import Register from "../register/register"
import { AuthContext } from "../../context/authenticationContext"
import { useContext } from "react";


const Login = () => {
    const { login } = useContext(AuthContext);

    const handleLogin = () => {
        console.log("logging in")
        login();
    };
    
    return ( 
        <div className="login">
            <div className="card">
                <div className="left">
                    <h1> Hello Driver!</h1>
                    <p>Welcome to Cruise! A social media app for drivers by drivers.</p>

                    <span> Don't have an account?</span>
                    <Link to="/register">
                        <button>Register</button>
                    </Link>
                    
                </div>

                <div className = "right"> 
                    <h1>Login</h1>
                    <form>
                        <input type="text" placeholder="Username"/>
                        <input type="password" placeholder="Password"/>
                        <button onClick={handleLogin}>Log In</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
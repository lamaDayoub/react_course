import { useState } from 'react'
import './login.css'
export function LoginForm() {
    const [isHidden, setIshidden] = useState(true);
    function handleClick() {
        setIshidden(!isHidden);
    }

    return (
        <>
            <div>
                <input placeholder="Email" className="email-input" />
            </div>
            <div>
                <input placeholder="Password" className="password-input" type={isHidden ? "password" : "text"} />
                <button className="show-hide-button" onClick={handleClick}>{isHidden ? "show" : "hide"}</button>
            </div>
            <button className="login-button">Login</button>
            <button className="signup-button">Sign up</button>

        </>
    );
}
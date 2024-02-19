import React, { useState } from "react";
import "./styles/loginTest.css";

function Login() {
    const [usernameReg, setUsernameReg] = useState('');
    const [passwordReg, setPasswordReg] = useState('');

    const register = () => {
        fetch('http://localhost:3000/page2', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: usernameReg,
                password: passwordReg
            })
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            // Optionally, you can clear the input fields after successful registration
            setUsernameReg('');
            setPasswordReg('');
            return response.json();
        })
        .then(data => {
            console.log('User registered successfully:', data);
            // Optionally, provide feedback to the user about successful registration
        })
        .catch(error => {
            console.error('Error registering:', error);
            // Optionally, provide feedback to the user about registration failure
        });
    }

    return (
        <div className="App">
            <div className="registration">
                <h1>Registration</h1>
                <label>Username</label>
                <input
                    type="text"
                    value={usernameReg}
                    onChange={(e) => {
                        setUsernameReg(e.target.value);
                    }}
                />
                <label>Password</label>
                <input
                    type="password"
                    value={passwordReg}
                    onChange={(e) => {
                        setPasswordReg(e.target.value);
                    }}
                />
                <button onClick={register}>Register</button>
            </div>

            <div className="login">
                <h1>Login</h1>
                <input type="text" placeholder="Username..." />
                <input type="password" placeholder="Password..." />
                <button>Login</button>
            </div>
        </div>
    );
}

export default Login;

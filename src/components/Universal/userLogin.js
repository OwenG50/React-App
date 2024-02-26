import React, { useState } from 'react';
import "./styles/loginTest.css";
import { useNavigate } from 'react-router-dom'; // Import useNavigate

function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const [message, setMessage] = useState({ text: '', isError: false });

    const navigate = useNavigate(); // Instantiate the useNavigate hook

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Submitting form...');

        // Clear previous messages
        setMessage({ text: '', isError: false });

        try {
            const response = await fetch('https://a8j9qmdd57.execute-api.us-east-1.amazonaws.com/initialStage/UserLoginResource', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: formData.email,
                    password: formData.password,
                }),
            });

            const data = await response.json();
            console.log('Response received:', data);

            if (data.statusCode === 200) {
                // Success message
                setMessage({ text: 'Login Successful', isError: false });
                navigate('/page4'); //TODO Change redirect location after successful login
            } else if (data.statusCode === 401 && data.body === "{\"message\":\"Incorrect password\"}") {
                // Fail message (Wrong PW)
                setMessage({ text: 'Incorrect password. Please try again.', isError: true });
            } else if (data.statusCode === 401 && data.body === "{\"message\":\"An account with this email does not exist\"}"){
                //Fail message (no matching email found)
                setMessage({ text: 'An account with this email does not exist.', isError: true });
            }
            else {
                // Handle other statuses or generic error
                setMessage({ text: 'An error occurred. Please try again later.', isError: true });
            }
        } catch (error) {
            console.error('Login request failed:', error);
            setMessage({ text: 'Failed to login due to a network error.', isError: true });
        }
    };


    return (
        <div className="LoginContainer">
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                    {/* Display message here, under the password field */}
                    {message.text && (
                        <p className={message.isError ? 'error' : ''}>{message.text}</p>
                    )}
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;

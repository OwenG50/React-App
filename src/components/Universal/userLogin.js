import React, { useState } from 'react';
import "./styles/loginTest.css";

function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    // Combined state for messages
    const [message, setMessage] = useState({ text: '', isError: false });

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
            //console.log(data.body)

            if (data.statusCode === 200){
                //Print login successful
            }
            else if(data.statusCode === 401){
                //print data.body
            }



        } catch (error) {
            console.error('Login request failed:', error);
            setMessage({ text: 'Failed to login due to a network error.', isError: true });
        }
    };



    return (
        <div className="LoginContainer">
            <form onSubmit={handleSubmit}>
                <h1>Login:</h1>
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
                </div>
                <button type="submit">Login</button>
            </form>
            {/* Display message with conditional class for error */}
            {message.text && (
                <p className={message.isError ? 'error' : ''}>{message.text}</p>
            )}
        </div>
    );
}

export default Login;

import React, { useState } from 'react';
import "./styles/loginTest.css";
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import WorkStudyHome from '../../pages/TestPages (DO NOT USE THESE)/WSHomePage';

function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        user_id: '',
        role: '',
    });

    const handleSignIn = () => {
        navigate("/register");
    };

    const role = sessionStorage.getItem('role');

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
                // Parse the body to get data from DB
                const responseBody = JSON.parse(data.body);

                // Success message
                setMessage({ text: 'Login Successful', isError: false });
                console.log("User logged in as: " + formData.email);
                console.log("User logged in as: " + responseBody.user_id);
                console.log(responseBody.role);

                //Store userEmail and UUID in localStorage upon login success
                sessionStorage.setItem('userEmail', formData.email);
                sessionStorage.setItem('userID', responseBody.user_id);
                sessionStorage.setItem('role', responseBody.role);



                if (responseBody.role === 'admin') {
                    navigate('/WSHomePage'); //No Admin Page yet
                } else if (responseBody.role === 'student') {
                    navigate('/SaHome');
                } else if (responseBody.role === 'work study') {
                    navigate('/WSHomePage');
                } else if (responseBody.role === 'user'){
                    navigate('/WSHomePage'); //User Testing Role has access to All Features
                }
                else {
                    setMessage({ text: 'Unknown role.', isError: true });
                }


               


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
            <h1>Login:</h1>
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
            <div>
            <a href="#" className="register" onClick={handleSignIn}>
                Need an account? Register Here
            </a>

            </div>
        </div>
 
    );
}

export default Login;


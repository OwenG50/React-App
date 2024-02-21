import React, { useState } from 'react';
import "./styles/loginTest.css"

function UserRegistration() {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        email: '',
    });
    const [registrationStatus, setRegistrationStatus] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        let errorMessage = '';

        if (name === 'password') {
            // Check if password is at least 8 characters long
            if (value.length < 8) {
                errorMessage = 'Password must be at least 8 characters long.';
            } else {
                // Check if password includes a number
                const hasNumber = /\d/.test(value);
                if (!hasNumber) {
                    errorMessage = 'Password must include a number.';
                }

                // Check if password includes a symbol
                const hasSymbol = /[!@#$%^&*(),.?":{}|<>]/.test(value);
                if (!hasSymbol) {
                    errorMessage = 'Password must include a symbol.';
                }
            }
        }

        setFormData({
            ...formData,
            [name]: value,
        });
        setPasswordError(errorMessage);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://u5zs3f9b78.execute-api.us-east-1.amazonaws.com/initialstage/Users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json', // Ensures the payload is treated as JSON
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const data = await response.json();
                console.log(data);
                setRegistrationStatus('User registered successfully.');
                // Clear form data after 3 seconds
                setTimeout(() => {
                    setRegistrationStatus('');
                }, 3000);
                setFormData({
                    username: '',
                    password: '',
                    email: '',
                });
            } else {
                // You might want to parse the response here to provide more detailed error messages
                console.error('Failed to register user: Server responded with an error');
                setRegistrationStatus('Failed to register user.');
            }
        } catch (error) {
            console.error('Failed to register user:', error);
            setRegistrationStatus('Failed to register user due to a network error.');
        }
    };

    return (
    <div className='RegisterContainer'>
            <form onSubmit={handleSubmit}>
            <h1>Create an Account:</h1>
                <div>
                    <label>Username:</label>
                    <input
                        type="text"
                        name="username"
                        value={formData.username}
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
                    {passwordError && <p>{passwordError}</p>}
                </div>
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
                <button type="submit">Register</button>
            </form>
            {registrationStatus && <p>{registrationStatus}</p>}
        </div>
    );
}

export default UserRegistration;

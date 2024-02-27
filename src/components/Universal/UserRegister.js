import React, { useState } from 'react';
import "./styles/loginTest.css"

function UserRegistration() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const [registrationStatus, setRegistrationStatus] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [emailError, setEmailError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        let errorMessage = '';

        if (name === 'password') {
            // Password validation logic
            if (value.length < 8) {
                errorMessage = 'Password must be at least 8 characters long.';
            } else if (!/\d/.test(value)) {
                errorMessage = 'Password must include a number.';
            } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(value)) {
                errorMessage = 'Password must include a symbol.';
            }
        } else if (name === 'email') {
            // Email validation logic
            if (!value.endsWith('@mail.sacredheart.edu')) {
                errorMessage = 'Email must end with @mail.sacredheart.edu';
            } else {
                errorMessage = ''; // Clear email error if email format is correct
            }
            setEmailError(errorMessage);
        }

        setFormData({
            ...formData,
            [name]: value,
        });
        if (name === 'password') {
            setPasswordError(errorMessage);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // You can perform further validation here before submitting the form
        if (!formData.email.endsWith('@mail.sacredheart.edu')) {
            setEmailError('Email must end with @mail.sacredheart.edu');
            return;
        }
        try {
            const response = await fetch('https://1va05bceqi.execute-api.us-east-1.amazonaws.com/initialstage/UserRegister', {
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
                    email: '',
                    password: '',
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
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    {emailError && <p>{emailError}</p>}
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
                <button type="submit">Register</button>
            </form>
            {registrationStatus && <p>{registrationStatus}</p>}
        </div>
    );
}

export default UserRegistration;

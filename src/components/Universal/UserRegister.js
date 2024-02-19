import React, { useState } from 'react';

function UserRegistration() {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        email: '',
    });
    const [registrationStatus, setRegistrationStatus] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
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
        <div>
            <form onSubmit={handleSubmit}>
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

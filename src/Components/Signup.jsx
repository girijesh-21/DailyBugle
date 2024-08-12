import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.css';

const SignUp = ({ closeSignUpForm }) => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        dob: '',
        password: '',
        confirmPassword: ''
    });

    const navigate = useNavigate(); // Hook for navigation

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const calculateAge = (dob) => {
        if (!dob) return '';
        const birthDate = new Date(dob);
        const today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match!");
            return;
        }
    
        console.log('Submitting form:', formData);
    
        try {
            const response = await fetch('http://localhost:9001/Fitfreak/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    fname: formData.firstName,
                    lname: formData.lastName,
                    email: formData.email,
                    phone: formData.phone,
                    dob: formData.dob,
                    password: formData.password,
                    age: calculateAge(formData.dob)
                }),
            });
    
            console.log('Response status:', response.status);
            
            if (response.ok) {
                const responseText = await response.text();
                try {
                    const result = JSON.parse(responseText);
                    console.log('Signup Successful:', result);
                } catch (e) {
                    console.log('Response is not valid JSON:', responseText);
                }
                navigate('/'); 
            } else {
                const errorText = await response.text();
                console.error('Signup failed:', errorText);
                alert(`Signup failed: ${errorText}`);
            }
        } catch (error) {
            console.error('Signup failed:', error);
            alert('Signup failed. Please try again.');
        }
    };
    
    

    return (
        <div className="signup-form">
            <div className="close0" onClick={closeSignUpForm}>✖</div>
            <h2>Create an account</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <input
                    type="number "
                    name="phone"
                    placeholder="Phone No."
                    value={formData.phone}
                    onChange={handleChange}
                    required
                />
                <input
                    type="date"
                    name="dob"
                    placeholder="Date of Birth"
                    value={formData.dob}
                    onChange={handleChange}
                    required
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />
                <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                />
                <button type="submit" className="submit">Continue</button>
            </form>
            <div className="or">or</div>
            <div className="login-link">
                <a href="/login" className='already'>Already have an account? Log in</a>
            </div>
        </div>
    );
};

export default SignUp;

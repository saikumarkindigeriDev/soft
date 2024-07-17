

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import './index.css'

const Login = () => {
    const [formData, setFormData] = useState({
        user_email: '',
        user_password: '',
    });

    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const navigate = useNavigate();
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
        setErrors({
            ...errors,
            [name]: '',
        });
    };

    const validateForm = () => {
        let valid = true;
        let newErrors = {};

        if (!formData.user_email) {
            valid = false;
            newErrors.user_email = 'Email is required';
        }
        if (!formData.user_password) {
            valid = false;
            newErrors.user_password = 'Password is required';
        }

        setErrors(newErrors);
        return valid;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        try {
            const response = await axios.post('https://syoft.dev/Api/userlogin/api/userlogin', {
                user_email: formData.user_email,
                user_password: formData.user_password,
            });

            if (response.data.status) {
                const userData = response.data.user_data[0];
                console.log(userData.user_firstname)
                localStorage.setItem('username', userData.user_firstname);
                setSuccessMessage('Successful Login!');
                setTimeout(() => navigate('/'), 2000); 
            } else {
                setErrorMessage(response.data.msg);
            }
        } catch (error) {
            setErrors({ global: 'An error occurred. Please try again.' });
            console.error(error);
        }
    };
const handleNew=()=>{
    navigate("/register")
}
    return (
        <div className="containerr">
            <div className="image-container">
               
               </div>
            <div className="header-container">
                <h1 className='heading'>Welcome Back!</h1>
                <p className='para'>Login to access your account and manage your profile.</p>
            </div>
            <div className="fdorm-container">
                <form onSubmit={handleSubmit}>
                    <h2>Login</h2>
                    {errors.global && <div className="error">{errors.global}</div>}
                    <div className='label-container'>
                        <label htmlFor="user_email">Email</label>
                        <input
                            type="email"
                            id="user_email"
                            name="user_email"
                           
                            value={formData.user_email}
                            onChange={handleChange}
                        />
                        {errors.user_email && <div className="error">{errors.user_email}</div>}
                    </div>
                    <div className='label-container'>
                        <label htmlFor="user_password">Password</label>
                        <input
                            type="password"
                            id="user_password"
                            name="user_password"
                           
                            value={formData.user_password}
                            onChange={handleChange}
                        />
                        {errors.user_password && <div className="error">{errors.user_password}</div>}
                    </div>
                    <button type="submit">Login</button>

                    <p className='paras' onClick={handleNew}>Don't have an account? Create a New account! </p> 
                    {successMessage && <div className="para">{successMessage}</div>}
                    {errorMessage && <div className="para">{errorMessage}</div>}
                </form>
            </div>
        </div>
    );
};

export default Login;

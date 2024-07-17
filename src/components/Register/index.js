import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './index.css'






const Register = () => {
    const [formData, setFormData] = useState({
        user_firstName: '',
        user_lastName: '',
        user_phone: '',
        user_email: '',
        user_password: '',
        user_zipcode: '',
        user_city: '',
        user_agreement: false,
    });

    const navigate = useNavigate();
    const [errors, setErrors] = useState({});
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
        setErrors({
            ...errors,
            [name]: '',
        });
    };

    const validateForm = () => {
        let valid = true;
        let newErrors = {};

        if (!formData.user_firstName) {
            valid = false;
            newErrors.user_firstName = 'First name is required';
        }
        if (!formData.user_lastName) {
            valid = false;
            newErrors.user_lastName = 'Last name is required';
        }
        if (!formData.user_phone) {
            valid = false;
            newErrors.user_phone = 'Phone number is required';
        }
        if (!formData.user_email) {
            valid = false;
            newErrors.user_email = 'Email is required';
        }
        if (!formData.user_password) {
            valid = false;
            newErrors.user_password = 'Password is required';
        }
        if (!formData.user_zipcode) {
            valid = false;
            newErrors.user_zipcode = 'Zipcode is required';
        }
        if (!formData.user_city) {
            valid = false;
            newErrors.user_city = 'City is required';
        }
        if (!formData.user_agreement) {
            valid = false;
            newErrors.user_agreement = 'You must agree to the terms';
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
            const response = await axios.post('https://syoft.dev/Api/user_registeration/api/user_registeration', {
                user_firstname: formData.user_firstName,
                user_lastname: formData.user_lastName,
                user_phone: formData.user_phone,
                user_password: formData.user_password,
                user_email: formData.user_email,
                user_city: formData.user_city,
                user_zipcode: formData.user_zipcode,
            });

            if (response.data.status) {
            

                setSuccessMessage('Registration successful! Redirecting to login...');
                    setTimeout(() => navigate('/login'), 1000); 
            } else {
                setErrorMessage(response.data.msg);
            }
        } catch (error) {
            setErrorMessage('An error occurred. Please try again.');
            console.error(error);
        }
    };
const handleSignIn=()=>{
    navigate("/login")
}
    return (
        <div className="container">
            <div className="image-container">
           <h1 className='heaading'>Welcome to <br/>our Community</h1>
           
           <p className='paraa'>Fuse helps developers to build organized and well coded <br/> dashboards full of beautiful and rich modules. Join us and start <br/> building your application today. </p>
          <div className='png-des'> 

<div className='profile-container'> 
<div className='pf'><img src="https://res.cloudinary.com/dyjmh036b/image/upload/v1703510812/SAI_PRO_fhqa4f.jpg" alt="Profile 1" />
<img src="https://res.cloudinary.com/dyjmh036b/image/upload/v1721105444/random_ssdbxa.avif" alt="Profile 2"/>
<img src="https://res.cloudinary.com/dyjmh036b/image/upload/v1721105424/radha_krishn_hqgxca.webp" alt="Profile 3"/>
<img src="https://res.cloudinary.com/dyjmh036b/image/upload/v1721105400/musk_tlndzh.jpg" alt="Profile 4"/>
<img src="https://res.cloudinary.com/dyjmh036b/image/upload/v1721105384/tata_zgyy19.webp" alt="Profile 5"/>
</div>
<div className='para-con'><p className='paraa'>More than 17k people joined us, it's your turn </p></div>
</div></div>
            </div>
            
                   
            
            <div className='logos-container'>
                <img src="https://res.cloudinary.com/dyjmh036b/image/upload/v1721116720/icons8-ethereum-64_jvxrx7.png" alt="logo" className='logo' />
               
         <h1 className='heading'>Sign up</h1>
         <p className='para'>Already have an account? <span onClick={handleSignIn} className='navigate'>Sign in</span></p>
                <div className='form-container'>
                <form  onSubmit={handleSubmit}>
                   
                   {errors.global && <div className="error">{errors.global}</div>}
                   <div className='label-container'>
                       <label htmlFor="user_firstName">First Name*</label>
                       <input
                           type="text"
                           id="user_firstName"
                           name="user_firstName"
                          
                           value={formData.user_firstName}
                           onChange={handleChange}
                       />
                       {errors.user_firstName && <div className="error">{errors.user_firstName}</div>}
                   </div>
                   <div className='label-container'>
                       <label htmlFor="user_lastName">Last Name*</label>
                       <input
                           type="text"
                           id="user_lastName"
                           name="user_lastName"
                           
                           value={formData.user_lastName}
                           onChange={handleChange}
                       />
                       {errors.user_lastName && <div className="error">{errors.user_lastName}</div>}
                   </div>
                   <div className='label-container'>
                       <label htmlFor="user_phone">Phone Number*</label>
                       <input
                           type="text"
                           id="user_phone"
                           name="user_phone"
                          
                           value={formData.user_phone}
                           onChange={handleChange}
                       />
                       {errors.user_phone && <div className="error">{errors.user_phone}</div>}
                   </div>
                   <div className='label-container'>
                       <label htmlFor="user_email">Email*</label>
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
                       <label htmlFor="user_password">Password*</label>
                       <input
                           type="password"
                           id="user_password"
                           name="user_password"
                         
                           value={formData.user_password}
                           onChange={handleChange}
                       />
                       {errors.user_password && <div className="error">{errors.user_password}</div>}
                   </div>
                   <div className='label-container'>
                       <label htmlFor="user_zipcode">Zipcode*</label>
                       <input
                           type="text"
                           id="user_zipcode"
                           name="user_zipcode"
                         
                           value={formData.user_zipcode}
                           onChange={handleChange}
                       />
                       {errors.user_zipcode && <div className="error">{errors.user_zipcode}</div>}
                   </div>
                   <div className='label-container'>
                       <label htmlFor="user_city">City*</label>
                       <input
                           type="text"
                           id="user_city"
                           name="user_city"
                          
                           value={formData.user_city}
                           onChange={handleChange}
                       />
                       {errors.user_city && <div className="error">{errors.user_city}</div>}
                   </div>
                   <div className='label-container'>
                       <input
                           type="checkbox"
                           id="user_agreement"
                           name="user_agreement"
                           checked={formData.user_agreement}
                           onChange={handleChange}
                       />
                       <label htmlFor="user_agreement">I agree to the terms and conditions</label>
                       {errors.user_agreement && <div className="error">{errors.user_agreement}</div>}
                   </div>
                   <button type="submit">Register</button>
                   {successMessage && <div className="para">{successMessage}</div>}
                   {errorMessage && <div className="para">{errorMessage}</div>}
               </form>
                </div>
              
            </div>
        </div>
    );
};

export default Register;

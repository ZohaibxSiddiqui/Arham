import React, { useState } from 'react';
import axios from 'axios';
import TabSwitcher from './TabSwitcher';
import RegisterForm from './RegisterForm';
import LoginForm from './LoginForm';
import './register.css';
import { useNavigate } from 'react-router-dom'; // Import useNavigate


const Register = () => {
    const [activeTab, setActiveTab] = useState('register');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password_confirmation: ''
    });
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleTabSwitch = (tab) => {
        setActiveTab(tab);
        setFormData({
            name: '',
            email: '',
            password: '',
            password_confirmation: ''
        });
        setErrors({});
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleRegister = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:8000/api/register', formData, {
                headers: { 'Content-Type': 'application/json' },
            });

            if (response.status === 200) {
                console.log(response.data);
                // Redirect to dashboard after successful registration
                handleTabSwitch("login");
                //navigate("/dashboard")
            }
        } catch (error) {
            if (error.response && error.response.data.errors) {
                setErrors(error.response.data.errors);
            } else {
                console.error(error);
            }
        }
    };

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:8000/api/login', formData, {
                headers: { 'Content-Type': 'application/json' },
            });

            if (response.status === 200) {
                console.log(response.data);
                // Redirect to dashboard after successful login
               navigate("/dashboard");
            }
        } catch (error) {
            if (error.response && error.response.data.errors) {
                setErrors(error.response.data.errors);
            } else {
                console.error(error);
            }
        }
    };

    return (
        <div class='App'>  <h1>Welcome register</h1>

        <div className="register-container">
            
            <TabSwitcher activeTab={activeTab} onTabSwitch={handleTabSwitch} />
            {activeTab === 'register' ? (
                <RegisterForm formData={formData} errors={errors} onChange={handleChange} onSubmit={handleRegister} />
            ) : (
                <LoginForm formData={formData} errors={errors} onChange={handleChange} onSubmit={handleLogin} />
            )}
        </div>
        </div>
    );
};

export default Register;
// component props / as functions
// learn router / navigate for navigation (dynamic url/id handling) 
// how to get query parameter using navigate or router library
// src/App.js
import React from 'react';
import './register.css';
import Register from './Register'; // Your Register component
import Dashboard from './Dashboard'; // Your Dashboard component
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import OrderForm from './OrderForm';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Register />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path= "/orderForm" element = {<OrderForm/>} />
            </Routes>
        </Router>
    );
};
export default App;

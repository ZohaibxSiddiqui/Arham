import React, { useState } from 'react';
import OrderForm from './OrderForm';
import './Dashboard.css'; // Add styles here to handle the popup styles
import OrderTable from './OrderTable'; // Import the OrderTable component


const Dashboard = () => {
    const [flag, setFlag] = useState(false);

    const togglePopup = () => {
        setFlag(!flag);
    };

    return (
        <div>
            <OrderTable />

            <button class='order-button' onClick={togglePopup}>Place New Order</button>

            {flag && (
                <div className="popup-overlay">
                    <div className="popup-content">
                        <button className="close-button" onClick={togglePopup}>Close</button>
                        <OrderForm />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Dashboard;

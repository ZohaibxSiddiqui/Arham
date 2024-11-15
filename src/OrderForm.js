import React, { useState } from 'react';
import axios from 'axios';

const OrderForm = () => {
    const [orderData, setOrderData] = useState({
        name: '',
        email: '',
        address: '',
        category: ''
    });
    const [loading, setLoading] = useState(false); // Track loading state

    const handleChange = (e) => {
        const { name, value } = e.target;

        setOrderData({
            ...orderData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Automatically set product_details based on selected category
        const productDetails = orderData.category === '1' ? 'Internet' : 'Internet + TV';

        // Send POST request to the API
        try {
            setLoading(true); // Set loading state to true when request starts

            const response = await axios.post('http://localhost:8000/api/place-order', {
                name: orderData.name,
                email: orderData.email,
                address: orderData.address,
                category: orderData.category,
                product_details: productDetails, // Send product_details automatically based on category
            });

            // Success: Log response, reset form, and refresh the page
            console.log('Order saved:', response.data);

            // Reset form fields
            setOrderData({
                name: '',
                email: '',
                address: '',
                category: '' // Reset category
            });

            setLoading(false); // Reset loading state after success

            // Optionally refresh page to reset state
            window.location.reload();
        } catch (error) {
            // Handle error
            console.error('Error submitting order:', error);
            setLoading(false); // Reset loading state after error
        }
    };

    return (
        <div className="order-form">
            <h2>Place Your Order</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={orderData.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                    />
                </div>

                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={orderData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                    />
                </div>

                <div>
                    <label>Address:</label>
                    <input
                        type="text"
                        name="address"
                        value={orderData.address}
                        onChange={handleChange}
                        placeholder="Enter your address"
                    />
                </div>

                <div>
                    <label>Category:</label>
                    <select name="category" value={orderData.category} onChange={handleChange} required>
                        <option value="">Select a category</option>
                        <option value="1">Category 1</option>
                        <option value="2">Category 2</option>
                    </select>
                </div>

                <button type="submit" disabled={loading}>
                    {loading ? 'Submitting...' : 'Submit Order'}
                </button>
            </form>
        </div>
    );
};

export default OrderForm;

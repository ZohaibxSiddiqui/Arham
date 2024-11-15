import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ordertable.css';

const OrderTable = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true); 
    const [error, setError] = useState(null); 

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/orders');
                setOrders(response.data);
            } catch (err) {
                setError('Failed to fetch orders'); 
            } finally {
                setLoading(false); 
            }
        };

        fetchOrders();
    }, []); 

    if (loading) {
        return <p>Loading orders...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div className="order-table">
            <h2>Order List</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Category</th>
                        <th>Product Details</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.length > 0 ? (
                        orders.map((order) => (
                            <tr key={order.id}>
                                <td>{order.name}</td>
                                <td>{order.email}</td>
                                <td>{order.address}</td>
                                <td>{String(order.category) === '1' ? 'Category 1' : 'Category 2'}</td>
                                <td>{order.product_details}</td>
                                <td>{new Date(order.created_at).toLocaleString()}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="6">No orders found</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default OrderTable;

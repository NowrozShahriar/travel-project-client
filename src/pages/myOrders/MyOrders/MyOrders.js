import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import useServices from "../../../hooks/useServices";
import MyOrder from "../MyOrder/MyOrder";
import "./MyOrders.css";

function MyOrders() {
    const { userId } = useParams();
    const {services} = useServices();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch(`https://arcane-bayou-05771.herokuapp.com/orders/${userId}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [userId])

    const myOrders = [];
    for (const order of orders) {
        for (const service of services) {
            if (order.serviceId === service._id) {
                myOrders.push(service)
            }
        }
    }

    return (
        <div>
            <h2>My Orders</h2>
            <div className="my-orders">
            {
                myOrders.map(order => <MyOrder
                key={order._id} 
                service={order} 
                orders={orders} 
                ></MyOrder>)
            }
            </div>
        </div>
    );
};

export default MyOrders;
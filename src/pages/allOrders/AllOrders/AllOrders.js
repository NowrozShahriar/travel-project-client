import React, { useState } from "react";
import { useEffect } from "react";
import useServices from "../../../hooks/useServices";
import Order from "../Order/Order";
import "./AllOrders.css";

function AllOrders() {
    const [allOrders, setAllOrders] = useState([]);
    const {services} = useServices();

    useEffect(() => {
        fetch('http://localhost:5000/orders')
        .then(res => res.json())
        .then(data => setAllOrders(data))
    }, [])

    const orderedServices = [];
    for (const order of allOrders) {
        for (const service of services) {
            if (order.serviceId === service._id) {
                orderedServices.push(service)
            }
        }
    }

    return (
        <div>
            <h2>All Orders</h2>
            <div className="orders">
            {
                // myOrders.map(order => <MyOrder
                //     key={order._id} 
                //     service={order} 
                //     orders={orders} 
                //     ></MyOrder>)
                orderedServices.map(order => <Order 
                    key={order._id} 
                    service={order}
                    orders={allOrders} 
                    ></Order>)
            }
            </div>
        </div>
    );
};

export default AllOrders;
import React, { useState } from "react";
import axios from "axios";
import { useForm } from 'react-hook-form';
import useAuth from "../../hooks/useAuth";
import "./PlaceOrder.css";
import { useParams } from "react-router";
import useServices from "../../hooks/useServices";

function PlaceOrder() {
    const { register, handleSubmit, reset } = useForm();
    const { id } = useParams();
    const { user } = useAuth();
    const {services} = useServices();
    const [placed, setPlaced] = useState(false);

    const onSubmit = data => {
        const order = { 
            serviceId: id, 
            status: 'Pending', 
            userId: user.uid, 
            userName: user.displayName, 
            userEamil: user.email, 
            ...data
        }
        axios.post('https://arcane-bayou-05771.herokuapp.com/orders', order)
            .then(res => {
                if (res.data.insertedId) {
                    setPlaced(true);
                }
            })
        reset();
    }

    return (
        <div className="place-order">
            {
                services.map(service => service._id === id && 
                <div key={id}><h1>{service.name}</h1><p><span>Price: $</span>{service.price}</p></div>)
            }
            <form onSubmit={handleSubmit(onSubmit)}>
                <h3>{user.displayName}</h3>
                {placed ? 
                <><h2>Order placed successfully.</h2><p>Go to <strong>My Orders</strong> to see all of your orders.</p></> : 
                <><p>{user.email}</p>
                <textarea placeholder="Address" defaultValue="" {...register("address")} />
                <input type="number" placeholder="phone number" {...register("phone", {required: true})} />
                <input type="submit" value="Place Order" /></>}
            </form>
        </div>
    );
};

export default PlaceOrder;
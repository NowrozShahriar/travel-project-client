import React from "react";
import { Link } from "react-router-dom";
import "./Service.css";

function Service({service}) {
    const { _id, name, img, price, shortDesc } = service;
    return (
        <div className="service">
            <img width="100%" src={img} alt="" />
            <div className="service-text">
                <h2>{name}</h2>
                <p>{shortDesc}</p>
                <p><span>Price: $</span>{price}</p>
                <Link to={`/place-order/${_id}`}><button>Order Now</button></Link>
            </div>
        </div>
    );
};

export default Service;
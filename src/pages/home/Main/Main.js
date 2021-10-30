import React from "react";
import useServices from "../../../hooks/useServices";
import Service from "../Service/Service";
import "./Main.css";

function Main() {
    const {services, isLoading} = useServices();
    if (isLoading) {
        return <img width="100px" src="https://i.ibb.co/2c9qxBN/hug.gif" alt="" />
    }

    return (
        <div className="main-container">
            <h1>Our Best Offers</h1>
            <div className="main">
                {
                    services.map(service => <Service className="card" key={service._id} service={service} />)
                }
            </div>
        </div>
        
    );
};

export default Main;
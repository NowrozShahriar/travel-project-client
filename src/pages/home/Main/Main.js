import React, { useEffect, useState } from "react";
import Service from "../Service/Service";
import "./Main.css";

function Main() {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('./fakedata.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);

    return (
        <div className="main-container">
            <h1>Our Best Offers</h1>
            <div className="main">
                {
                    services.map(service => <Service className="card" key={service.key} service={service} />)
                }
            </div>
        </div>
        
    );
};

export default Main;
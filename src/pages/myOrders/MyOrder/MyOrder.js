import React from "react";
import "./MyOrder.css";

function MyOrder({service, orders}) {
    const { _id, name, img } = service;
    const order = orders.find(order => order.serviceId === _id);
    const { status } = order;

    function cancelTrip() {
        let cancel = window.confirm('Cancel this trip?');
        if (cancel) {
            fetch(`https://arcane-bayou-05771.herokuapp.com/orders/${order._id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    window.location.reload();
                    alert('deleted');
                }
            })
        }
    }

    return (
        <div className="my-order">
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h3>{name}</h3>
                <p><b>Status:</b> {status}</p>
            </div>
            <div>
                <button onClick={cancelTrip}>Cancel Trip</button>
            </div>
        </div>
    );
};

export default MyOrder;
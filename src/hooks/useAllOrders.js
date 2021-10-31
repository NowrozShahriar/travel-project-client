import { useEffect, useState } from "react";

function useAllOrders() {
    const [allOrders, setAllOrders] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => setAllOrders(data))
    }, []);
    return allOrders;
}

export default useAllOrders;
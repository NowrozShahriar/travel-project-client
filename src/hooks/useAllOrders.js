import { useEffect, useState } from "react";

function useAllOrders() {
    const [allOrders, setAllOrders] = useState([]);

    useEffect(() => {
        fetch('https://arcane-bayou-05771.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setAllOrders(data))
    }, []);
    return allOrders;
}

export default useAllOrders;
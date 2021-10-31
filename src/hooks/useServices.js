import { useEffect, useState } from "react";

function useServices() {
    const [services, setServices] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch('https://arcane-bayou-05771.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
            .finally(() => setIsLoading(false))
    }, []);
    return {services, isLoading};
}

export default useServices;
import { useState, useEffect } from "react";

const useFetch = () => {
    const [geolocation, setGeolocation] = useState(null);
    const [error, setError] = useState(null);

    const onSucess = (position) => {
        setGeolocation(position);
    }

    const onError = (errors) => {
        setError(errors);
    }

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.permissions
            .query({ name: "geolocation" })
            .then((result) => {
                if (result.state === "granted") {
                    navigator.geolocation.getCurrentPosition(onSucess, onError);
                } else if (result.state === "prompt") {
                    navigator.geolocation.getCurrentPosition(onSucess, onError);
                } else if (result.state === "denied") {
                    setError("You need to allow geolocation permissions to use this feature")
                }
            });
        } else {
            setError("Geolocation is not supported by this browser.");
        }
    }, []);

    return { geolocation, error };
};

export default useFetch;
import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);

            try {
                const response = await fetch(url);
                if (!response.ok) throw new Error(response.statusText);
                const json = await response.json();
                setData(json);
                setLoading(false);
                setError(null);
            } catch (e) {
                setLoading(false);
                setError(`Error fetching data: ${e}`);
            }
        };
        fetchData();
    }, [url]);
    return { data, loading, error };
};

export default useFetch;
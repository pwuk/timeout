import {useState, useEffect} from "react";
import {BASE_URL} from "./constants";

const useFetch = resourceType => {
    const [theData, setTheData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch(`${BASE_URL}${resourceType}.json`);
            const data = await result.json();
            setTheData(data);
        };
        fetchData();
    }, [resourceType]);

    return theData;
};

export {useFetch};

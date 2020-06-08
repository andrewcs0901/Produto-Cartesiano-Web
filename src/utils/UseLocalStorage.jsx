import { useState, useEffect } from 'react';

const UseLocalStorage = (defaultValue, key) => {
    const [value, setValue] = useState(defaultValue);
    
    useEffect(() => {
        
        const data = localStorage.getItem(key);
        if (data) {   
            setValue(JSON.parse(data));
        }
    }, [key])

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [value, key]);

    return [value, setValue];
}

export default UseLocalStorage;
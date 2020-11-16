import Axios from 'axios';
import React,{ useEffect } from 'react';
import axios from 'axios';

export default () => {
    const [message,setMessage] = useState("Loading...")
    useEffect(() => {
        axios.get("http://localhost:8000/api")
            .then(res => setMessage(res.data.message))
    }, []);
    return (
        <div>
            <h1>Hello from the backend: {message}</h1>
        </div>
    )
}
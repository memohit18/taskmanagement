import axios from 'axios';
import React from 'react';

let baseUrl = 'http://localhost:3000/info'

export default function apiCall() {
    const [post, setPost] = React.useState(null)

    React.useEffect(() => {
        axios.get(baseUrl).then((response) => {
            setPost(response)
        })
    }, [])
}
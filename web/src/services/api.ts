import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3333',
    headers: {'Accept': 'application/json'}   
})


export default api;
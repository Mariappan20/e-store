import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:4599'
});

export default instance;
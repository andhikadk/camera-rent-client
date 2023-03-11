import axios from 'axios';

axios.defaults.withCredentials = true;

const instance = axios.create({
  baseURL: 'http://localhost:5000/api',
});

export default instance;

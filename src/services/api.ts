import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:10.0.2.2',
});

export default api;

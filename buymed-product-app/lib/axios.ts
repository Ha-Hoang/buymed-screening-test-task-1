import axios from 'axios';

const BASE_URL = 'https://60443193a20ace001728ebb1.mockapi.io';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: false,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;

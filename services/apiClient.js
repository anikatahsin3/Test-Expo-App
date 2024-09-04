import axios from 'axios';

const getToken = () => {
    return 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxIiwiaWF0IjoxNzI1NDU2NzgxLCJleHAiOjE3MjU1NDMxODF9.MgicyOqLWYEdflyzmt9k6aC7FXZd855RrEzGnnxK9Os'; 
};

const apiClient = axios.create({
  baseURL: 'http://192.168.128.1:3000/',  //url
  timeout: 1000,
  headers: { 'Content-Type': 'application/json' },
//   headers: { 'Content-Type': 'application/json' }
});

apiClient.interceptors.request.use(
    async (config) => {
      const token = getToken();
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
);

export default apiClient;

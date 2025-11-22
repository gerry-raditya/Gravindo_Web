import axios from 'axios';


export const apiClient = axios.create({
    baseURL: 'http://localhost:3022', // Replace with your API base URL
    timeout: 10000, // Request timeout
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
});

// Add a request interceptor
apiClient.interceptors.request.use(
    config => {
        // You can add authorization tokens or other headers here
        const token = localStorage.getItem('authToken');
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

// Add a response interceptor
apiClient.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        // Handle errors globally
        if (error.response) {
            // Server responded with a status other than 2xx
            console.error('API Error:', error.response.status, error.response.data);
            if (error.response.status === 401) {
                // Handle unauthorized access, e.g., redirect to login
                window.location.href = '/login';
            }
        } else if (error.request) {
            // Request was made but no response received
            console.error('No response received:', error.request);
        }
        else {
            // Something else happened while setting up the request
            console.error('Error', error.message);
        }
        return Promise.reject(error);
    }
);
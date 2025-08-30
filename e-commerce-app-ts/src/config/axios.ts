import axios , {AxiosError , type InternalAxiosRequestConfig} from "axios";

const api = axios.create({
    baseURL: "https://api.ecommerce.qafdev.com",
    timeout: 10000,
});


api.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        const token : string | null = localStorage.getItem('token');
        if (token)
        {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },

    (error) => {
        return Promise.reject(error);
    } 
);

api.interceptors.response.use(
    (response) => {
        return response
    },
    (error: AxiosError) => { // Here Use ApiError
        if (error.status === 401)
        {
            localStorage.removeItem('user');
            localStorage.removeItem('token');
            window.location.href = '/login';
        }
        return Promise.reject(error);
    }
);

export default api;
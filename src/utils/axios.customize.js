import axios from 'axios';

const instance = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL,
});

// Important: If axios is used with multiple domains, the AUTH_TOKEN will be sent to all of them.
// See below for an example using Custom instance defaults instead.

instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

// Add a request interceptor
instance.interceptors.request.use(
    function (config) {
        const token = localStorage.getItem('access_token');
        config.headers.Authorization = token ? `Bearer ${token}` : '';

        return config;
    },
    function (error) {
        // Do something with request error
        return Promise.reject(error);
    },
);

// Add a response interceptor
instance.interceptors.response.use(
    function (response) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        if (response && response.data) return response.data;
        return response;
    },
    function (error) {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        console.log('Check error::', error);
        if(error?.response?.data){
            return error.response.data;
        }
        return Promise.reject(error);
    },
);

export default instance;

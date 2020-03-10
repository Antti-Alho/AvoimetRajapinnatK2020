import Axios from 'axios';

const axios = Axios.create();
axios.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('auth');
        if(token){
            config.headers.auth = token;
        }
        return config
    },
    (error) => {
        return Promise.reject(error);
    },
    );

    export default axios;
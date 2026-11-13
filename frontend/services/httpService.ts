import axios from 'axios';

// Set config defaults
const http = axios.create({
    // baseURL: process.env.NEXT_PUBLIC_BASE_API_ENDPOINT,
    baseURL:"https://2kyfkk5k93.execute-api.eu-central-1.amazonaws.com/dev/"
});
http.interceptors.request.use(
    (config:any) => {
        config.headers['Content-Type'] = 'application/json';
        return config;
    },
    (error) => Promise.reject(error)
);

http.interceptors.response.use(undefined, (error) => {
    const expectedError =
        error.response && error.response.status >= 400 && error.response.status < 500;
    if (!expectedError) {
        console.log(error);
        //  logger.log(error);
    }
    return Promise.reject(error);
});
export { http };

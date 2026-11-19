import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_BASE_API_ENDPOINT;

const http = axios.create({
    baseURL,
});

http.interceptors.request.use(
    (config) => {
        if (!baseURL) {
            return Promise.reject(
                new Error("NEXT_PUBLIC_BASE_API_ENDPOINT is not set")
            );
        }
        config.headers["Content-Type"] = "application/json";
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

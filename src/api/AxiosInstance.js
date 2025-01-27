import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://localhost:7003/api',
    headers: {
      'Content-Type': 'application/json', // Explicitly set the Content-Type
    },
    withCredentials: true, // Include cookies if needed
  });
  



// axiosInstance.interceptors.request.use(
//     (config) => {
//         // Log config to debug request details
//         console.log("Request Interceptor triggered");
//         console.log("Request Config:", config);

//         const accessToken = Cookies.get("accessToken"); // Retrieve access token from cookies
//         if (accessToken) {
//             config.headers.Authorization = `Bearer ${accessToken}`;
//             console.log("Access Token found, adding to headers:", accessToken);
//         } else {
//             console.log("No Access Token found in cookies");
//         }

//         // Return config to proceed with request
//         return config;
//     },
//     (error) => {
//         console.error("Error in Request Interceptor:", error.response?.data || error.message);
//         return Promise.reject(error);
//     }
// );


let isRefreshing = false;
let failedQueue = [];

const processQueue = (error, token = null) => {
    failedQueue.forEach((prom) => {
        if (error) {
            prom.reject(error);
        } else {
            prom.resolve(token);
        }
    });
    failedQueue = [];
};

axiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;

        // Skip refresh logic if the flag is set
        if (originalRequest.skipAuthRefresh) {
            return Promise.reject(error);
        }

        // Handle 401 errors for expired tokens
        if (error.response?.status === 401 && !originalRequest._retry) {
            if (isRefreshing) {
                return new Promise((resolve, reject) => {
                    failedQueue.push({ resolve, reject });
                });
            }

            originalRequest._retry = true;
            isRefreshing = true;

            try {
                await axiosInstance.post("/Auth/refresh/token");

                // Retry the original request after refreshing the token
                isRefreshing = false;
                return axiosInstance(originalRequest);
            } catch (refreshError) {
                isRefreshing = false;
                processQueue(refreshError, null);

                // Redirect to login if refresh fails
                if (refreshError.response?.status === 401) {
                    window.location.href = "/login";
                }
                return Promise.reject(refreshError);
            }

            
        }

        return Promise.reject(error);
    }
);

export default axiosInstance;




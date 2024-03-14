import {api} from "../api/index.js";
import {useEffect} from "react";
import {useAuth} from "./useAuth.js";
import axios from "axios";


const useAxios = () => {
    const {auth, setAuth} = useAuth();
    useEffect(() => {
        //Add a request interceptor
        const requestIntercept = api.interceptors.request.use(
            (config) => {
                const authToken = auth?.authToken;
                if (authToken) {
                    config.headers.Authorization = `Bearer ${authToken}`;
                }
                return config;
            },

            (error) => Promise.reject(error)
        )


        //Add a response interceptor
        const responseIntercept = api.interceptors.response.use(
            (response) => response,
            async (error) => {
                const originalRequest = error.config;
                if (error.response.status === 401 && !originalRequest._retry) {
                    originalRequest._retry = true;

                    try {
                        const refreshToken = auth?.refreshToken;
                        const response = await axios.post(`http://localhost:3000/auth/refresh-token`, {refreshToken});
                        const {token} = response.data;

                        console.log(`New Token: ${token}`);
                        setAuth({...auth, authToken: token});

                        originalRequest.headers.Authorization = `Bearer ${token}`;
                        return axios(originalRequest)
                    } catch (error) {
                        throw error;
                    }
                }
                return Promise.reject(error)
            }
        )
        return () => {
            api.interceptors.request.eject(requestIntercept)
            api.interceptors.response.eject(responseIntercept)
        }
    }, [auth.authToken]);
    return {api}
}

export default useAxios;

import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";
import axios from "axios";

const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000', headers: {
        authorization:`Bearer ${localStorage.getItem('access-token')}`
    }
})

const useAxiosSecured = () =>{

    const {logOut} =useAuth()
    const navigate = useNavigate()

    axiosSecure.interceptors.request.use(function(config){
        const token = localStorage.getItem('access-token')
        console.log('stopped by interseptors', token)
        config.headers.authorization = `bearer ${token}`;
        return config;
    }, function (error) {
        return Promise.reject(error)

    });

    
    axiosSecure.interceptors.response.use(function(response) {
        return response;
    }, async (error) =>{
        const status = error.response.status;
        // console.log('status error in interseptors', status);
        if(status === 401 || status === 403){
            await logOut();
            navigate('/login')
        }
        return Promise.reject(error)
    }
    )



    return axiosSecure;
}

export default useAxiosSecured
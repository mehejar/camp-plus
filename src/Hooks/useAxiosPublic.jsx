import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://camp-plus-server.vercel.app'
})

const useAxiosPublic = () =>{
    return axiosPublic;
}

export default useAxiosPublic
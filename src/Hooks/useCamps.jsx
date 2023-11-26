import { useState } from "react"
import useAxiosPublic from "./useAxiosPublic"

const useCamps = () =>{
    const [camps, setCamps] = useState([])
    const axiosPublic = useAxiosPublic()
    axiosPublic.get('/camps')
    .then(data =>{
        // console.log(data.data)
        setCamps(data.data)
    })

    // fetch('http://localhost:5000/camps')
    // .then(res => res.json())
    // .then(data =>{
    //     // console.log(data)
    //     setCamps(data)
    // })

    return camps;
}

export default useCamps
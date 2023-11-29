import { useQuery } from "@tanstack/react-query"
import useAuth from "../../Hooks/useAuth"
import useAxiosPublic from "../../Hooks/useAxiosPublic"
import { useState } from "react"
import PerticipentCard from "./PerticipentCard"
import DashboardHeading from "../../Shared/Sections/DashboardHeading"

const PerticipentCamps = () =>{

    // /perticipent-registered-camps
    const [registerCamps, setRegisterCamps] = useState([])
    const axiosPublic = useAxiosPublic()
    const {user} = useAuth()

    axiosPublic.get(`/perticipent-registered-camps?email=${user.email}`)
    .then(data =>{
        // console.log(data.data)
        setRegisterCamps(data.data)
        
    })

    // console.log(registerCamps)


    return(
        <div>
            <DashboardHeading heading="Your Registered Camps"></DashboardHeading>
            <div className="flex py-2 px-3 rounded-lg  justify-evenly">
                <h2 className="w-[50px] mx-5 font-semibold text-theme-color">#</h2>
            
                <h2 className="w-1/6" >Camp</h2>
                <h2 className="w-1/6">Venue</h2>
                <h2 className="w-[180px] text-center">Schedule</h2>
                <h2 className="w-1/6 text-center">Fee</h2>
                <div className="w-1/6">
                    <button className="">Payment</button>
                </div>
                <div className="w-1/6">
                    <button className="">Approval</button>
                </div>
                <div className="w-1/6">
                    <button className="">Action</button>
                </div>

            </div>
            {
                registerCamps.map((camp, idx) => <PerticipentCard idx={idx} camp={camp}></PerticipentCard>)
            }
        </div>
    )
}

export default PerticipentCamps
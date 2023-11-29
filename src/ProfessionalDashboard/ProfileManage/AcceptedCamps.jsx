import { useState } from "react"
import useAuth from "../../Hooks/useAuth"
import useAxiosPublic from "../../Hooks/useAxiosPublic"
import AcceptedCard from "./AcceptedCard"
import DashboardHeading from "../../Shared/Sections/DashboardHeading"

const AcceptedCamp = () =>{

    const [accepted, setAccepted] = useState([])
    const axiosPublic = useAxiosPublic()
    const {user} = useAuth()
    axiosPublic.get(`/my-requests?email=${user.email}`)
    .then(res =>{
        console.log(res.data)
        setAccepted(res.data)
    })
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
                accepted.map((camp, idx) => <AcceptedCard idx={idx} camp={camp}></AcceptedCard>)
            }
        </div>
    )
}

export default AcceptedCamp
import { useState } from "react"
import useAuth from "../../../Hooks/useAuth"
import useAxiosSecured from "../../../Hooks/useAxiosSecured"
import DashboardHeading from "../../../Shared/Sections/DashboardHeading"
import ProfessionalsCard from "./ProfessionalsCard"

const ProfessionalsInterests = () =>{
    const axiosSecure = useAxiosSecured()
    const {user} = useAuth()
    const [requests, setRequests] = useState()
    axiosSecure.get(`/professional-requests?campOrganizer=${user.email}`)
    .then(res =>{
        console.log(res.data)
        setRequests(res.data)
    })
    return(
        <div>
            <DashboardHeading heading="Health Care's Professionals Interests in Your Upcoming Camps"></DashboardHeading>

            {
                requests?.map((camp, idx) => <ProfessionalsCard camp={camp} idx={idx}></ProfessionalsCard>)
            }

        </div>
    )
}

export default ProfessionalsInterests
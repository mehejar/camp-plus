import { useState } from "react"
import useAxiosPublic from "../../../Hooks/useAxiosPublic"
import useAuth from "../../../Hooks/useAuth"
import ManageCampCard from "./managCampCard"
import DashboardHeading from "../../../Shared/Sections/DashboardHeading"

const ManageCamps = () =>{

    const {user, loading} = useAuth()
    const organizer = user.email
    // console.log(organizer)

    const [camps, setCamps] = useState([])
    const axiosPublic = useAxiosPublic()
    
    axiosPublic.get(`/organizer-camps?organizer=${organizer}`)
    .then(data =>{
        // console.log(data.data)
        setCamps(data.data)
        
    })

    // console.log(camps)

    return(
        <div>
            <DashboardHeading heading="Manage Your Camps"></DashboardHeading>
            
            {
                camps?.map((camp, idx) => 
                <ManageCampCard idx={idx} camp={camp}></ManageCampCard>)
            }
        </div>
    )
}

export default ManageCamps
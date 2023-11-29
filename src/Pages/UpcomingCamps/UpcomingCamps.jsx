import { useState } from "react"
import useAxiosPublic from "../../Hooks/useAxiosPublic"
import CampCard from "../../Shared/Sections/CampCart"
import UpcomingCampCard from "../../Shared/Sections/UpcomingCampCard"

const UpcomingCamps = () => {

    const [upcomingCamps, setUpcomingCamps] = useState([])
    const axiosPublic = useAxiosPublic()

    axiosPublic.get('/upcoming-camps')
        .then(res => {
            console.log(res.data)
            setUpcomingCamps(res.data)
        })


    return (
        <div>
            <div className="py-20">
                <h2 className="uppercase font-bold text-5xl text-center">Upcoming Camps</h2>
                <p className="w-2/3 mx-auto text-center py-4">Join us for our upcoming series of medical camps dedicated to providing accessible healthcare services to those in need. Our team of experienced healthcare professionals will offer comprehensive medical check-ups, consultations, and essential screenings</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                    upcomingCamps.map(camp => <UpcomingCampCard camp={camp}></UpcomingCampCard>)
                }
            </div>
        </div>

    )
}

export default UpcomingCamps
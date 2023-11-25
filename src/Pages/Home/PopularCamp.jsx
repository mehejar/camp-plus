import { useState } from "react"
import SectionHEading from "../../Shared/Sections/SectionHeading"
import CampCard from "../../Shared/Sections/CampCart"

const PopularCamp = () =>{
    const [popularCamps, setPopularCamps] = useState([])

    fetch('popular-camp.json')
    .then(res => res.json())
    .then(data => setPopularCamps(data))

    return(
        <div className="mt-16">
            <SectionHEading 
            heading="Popular Medical Camps"
            subheading="Discover comprehensive healthcare at our Medical Camp webapp! Access free check-ups, expert consultations, and vital resources."
            ></SectionHEading>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {
                popularCamps.map(camp => <CampCard camp={camp}></CampCard>)
            }
            </div>
        </div>
    )
}

export default PopularCamp
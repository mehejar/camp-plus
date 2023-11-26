import useCamps from "../../Hooks/useCamps"
import CampCard from "../../Shared/Sections/CampCart"

const AvailableCamps = () =>{
    const camps = useCamps()
    return(
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {
                camps.map(camp => <CampCard camp={camp}></CampCard>)
            }
            </div>
    )
}

export default AvailableCamps;
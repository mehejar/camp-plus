import useProfile from "../../Hooks/useProfile"

const ProfessionalProfile = () =>{
    const profile = useProfile()

    return(
        <div>
            {profile}
        </div>
    )
}

export default ProfessionalProfile
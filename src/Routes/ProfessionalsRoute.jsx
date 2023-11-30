import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import useProfessional from "../Hooks/useProfessional";


const ProfessionalRoute = ({children}) =>{
    const {user, loading} = useAuth()
    const [isProfessional] = useProfessional()
  
    const location = useLocation()

    if(loading){
        return <span className="loading loading-ring loading-lg flex justify-center"></span>
    }

    if(user && isProfessional){
        return children;
    
    }

    return <Navigate to='/' state={{from: location}} replace></Navigate>
    
}

export default ProfessionalRoute;
import { Navigate, useLocation } from "react-router-dom";
import useOrganizer from "../Hooks/useOrganizer";
import useAuth from "../Hooks/useAuth";

const OrganizerRoute = ({children}) =>{
    const {user, loading} = useAuth()
    const [isOrganizer] = useOrganizer()
  
    const location = useLocation()

    if(loading){
        return <span className="loading loading-ring loading-lg flex justify-center"></span>
    }

    if(user && isOrganizer){
        return children;
    
    }

    return <Navigate to='/' state={{from: location}} replace></Navigate>
    
}

export default OrganizerRoute;
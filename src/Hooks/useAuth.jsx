import { useContext } from "react"
import { AuthContext } from "../Pages/Providers.jsx/AuthProvider"

const useAuth = () =>{
    const {user} = useContext(AuthContext)
    return {user}
}

export default useAuth
import { useContext } from "react"
import { AuthContext } from "../Pages/Providers.jsx/AuthProvider"

const useAuth = () =>{
    const {user, loading} = useContext(AuthContext)
    return {user, loading}
}

export default useAuth
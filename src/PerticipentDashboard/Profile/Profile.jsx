import { useState } from "react"
import useAuth from "../../Hooks/useAuth"
import useAxiosPublic from "../../Hooks/useAxiosPublic"
import { FaUserEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import useProfile from "../../Hooks/useProfile";


const PerticipentProfile = () => {
    
    const perticipentProfile = useProfile()
    return perticipentProfile;
}

export default PerticipentProfile
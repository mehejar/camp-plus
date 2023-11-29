import useProfile from "../../../Hooks/useProfile";

const Profile = () =>{
    const organizerProfile = useProfile()
    return organizerProfile
}

export default Profile;
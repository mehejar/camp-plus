import { useState } from "react"
import useAuth from "../../Hooks/useAuth"
import useAxiosPublic from "../../Hooks/useAxiosPublic"
import { FaUserEdit } from "react-icons/fa";
import { Link } from "react-router-dom";


const PerticipentProfile = () => {
    const axiosPublic = useAxiosPublic()
    const { user } = useAuth({})

    // console.log(user)
    // const email = user.email
    // console.log('ooooooooooo',email)

    const [profile, setProfile] = useState([])

    const updateProfile = () =>{

    }





    axiosPublic.get(`/users?email=${user.email}`)
        .then(res => {
            setProfile(res.data)


            // console.log(res.data)
        })




    const photo = profile[0]?.photo
    const name = profile[0]?.name
    const role = profile[0]?.role
    const email = profile[0]?.email
    const _id = profile[0]?._id


    return (
        <div className="">
            <h2 className="text-2xl pt-8 pl-8 font-bold">Edit Profile</h2>
            <div className="divider"></div>
            <div className="p-20 m-8 bg-white rounded-3xl border-2 border-opacity-10 border-theme-color flex gap-8 items-center">
                <img className="rounded-full bg-theme-color p-2 w-[300px] h-[300px]" src={photo} alt="" />
                <div className="w-1/4">
                    <h2 className="text-5xl font-bold">{name}</h2>
                    <button className="px-4 font-semibold my-3 py-2 rounded-full bg-theme-color text-white">{role}</button>
                    <h2>{email}</h2>

                </div>
                <div className="divider lg:divider-horizontal"></div>
                <div className=" w-1/4">
                    <h2>Bio: <br /><span className="font-semibold">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span> </h2>
                    <h2 className="mt-5"><span className="font-semibold">About me:</span>  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</h2>
                </div>
                <div className="relative bottom-44 left-12">
                    <Link to={'/dashboard/update-profile'}><button className="text-xl font-semibold px-3 py-2 flex items-center"><FaUserEdit></FaUserEdit> Update Profile</button></Link>
                </div>
            </div>

        </div>
    )
}

export default PerticipentProfile
import { useState } from "react"
import { FaUserEdit } from "react-icons/fa"
import { Link } from "react-router-dom"
import useAxiosPublic from "../../Hooks/useAxiosPublic"
import useAuth from "../../Hooks/useAuth"

const UpdateProfile = () => {

    const check = () =>{
        console.log('click hocce')
    }

    const axiosPublic = useAxiosPublic()
    const { user } = useAuth()

    const [profile, setProfile] = useState([])

    axiosPublic.get(`/users?email=${user.email}`)
        .then(res => {
            setProfile(res.data)


            // console.log(res.data)
        })

    const photo = profile[0]?.photo
    const name = profile[0]?.name
    const role = profile[0]?.role
    const email = profile[0]?.email
    

    const updateProfile = (e) => {

        e.preventDefault()

       const form = e.target

        const name = form.name.value
        const photo = form.photo.value
        const bio = form.bio.value
        const about = form.about.value
        const role = form.role.value

        const updatedProfile ={name, photo, role, bio, about}

        axiosPublic.patch(`/users?email=${user.email}`,  updatedProfile)
        .then(res =>{
            console.log(res.data)
            console.log(updatedProfile)
        })

        

    }


    return (
        <div className="">
            <h2 className="text-2xl pt-8 pl-8 font-bold">Edit Profile</h2>
            <div className="divider"></div>
            <form onSubmit={updateProfile}>
            <div className="p-20 m-8 bg-white rounded-3xl border-2 border-opacity-10 border-theme-color flex gap-8 items-center">
                <div className="flex flex-col justify-center">
                    <img className="rounded-full bg-theme-color p-2 w-[300px] h-[300px]" src={photo} alt="" />
                    <p className="mt-2 text-center">Change Photo URL</p>
                    <input defaultValue={photo} name="photo" className="text-xl mt-1 bg-theme-bg px-2 py-2 rounded-lg" type="text" />
                </div>
                <div className="w-1/4 pr-4">
                    <input name="name" defaultValue={name} className="text-2xl py-2 px-3 border-2 border-theme-color rounded-lg w-[380px] font-bold" type="text" />



                    <select defaultValue={role} name="role" className="py-2 text-white bg-theme-color my-3 w-full border-2 border-blue-300 rounded-lg px-2">

                        <option selected value="perticipent">Perticipent</option>
                        <option value="professional">Health Care's Professional</option>
                        <option value="organizer">Camp Organizer</option>


                    </select>
                    <p className="text-red-600">Please careful! If You Updated you role. Your Previous Data not will be in your dashboard</p>

                    <h2 className="text-xl font-semibold mt-2">{email}</h2>

                </div>
                <div className="divider lg:divider-horizontal"></div>
                <div className=" w-1/4">
                    <input type="text" name="bio" placeholder="Write here your bio" className="input border-2 border-theme-color w-full max-w-xs" />
                    <input type="text" name="about" placeholder="Write here about you" className="input border-2 mt-5 border-theme-color w-full max-w-xs" />
                </div>
                <div className="relative bottom-44 left-12">
                    <button type="submit" className="text-lg bg-red-500 font-semibold px-3 py-2 text-white rounded-lg gap-2 flex items-center"><FaUserEdit></FaUserEdit> Confirm</button>
                    
                </div>
            </div>
            </form>
            <button onClick={check} type="submit" className="text-lg bg-red-500 font-semibold px-3 py-2 text-white rounded-lg gap-2 flex items-center"><FaUserEdit></FaUserEdit> Check</button>

        </div>
    )
}

export default UpdateProfile
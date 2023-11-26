import { BsFillCalendarDateFill } from "react-icons/bs";
import { HiCurrencyDollar } from "react-icons/hi";
import { MdAddLocationAlt } from "react-icons/md";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { MdEditDocument } from "react-icons/md";
import { useLoaderData } from "react-router-dom";
import { useForm } from "react-hook-form"
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import usePerticipent from "../../Hooks/usePerticipent";
import useCamps from "../../Hooks/useCamps";
import { useQuery } from "@tanstack/react-query";


const CampDetails = () => {

    const { register, handleSubmit } = useForm()
    const axiosPublic = useAxiosPublic()
    // ==============================

        
    const camp = useLoaderData()
    const { _id, name, image, date, fee, location, specialized_services, professionals_attend, audience } = camp;

    const { refetch, data: perticipent = [] } = useQuery({
        queryKey: ['perticipent', _id],
        queryFn: async () => {
            const res = await axiosPublic.get(`/campRegisters?campsId=${_id}`)
            return res.data
        },

    })

    const onSubmit = (data) => {
        
        const name = data.name
        const age = data.age
        const number = data.number
        const gender = data.gender
        const address = data.address
        const campsId = _id
        const registerInfo = {name, age, number, gender, address, campsId, fee}
        // console.log(registerInfo)

        axiosPublic.post('/campRegisters', registerInfo)
        .then(data =>{
            console.log(data.data)
            refetch()
        })
        // fetch('http://localhost:5000/campRegisters', {
        //     method: 'POST',
        //     headers:{
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(registerInfo)
        // })
        // .then(res => res.json())
        // .then(data =>{
        //     console.log(data)
        // })
        
    }

    return (
        <div className="py-16">
            <div className="flex gap-0 lg:flex-row">
                <div className="w-1/2">
                    <img className="rounded-lg bg-gradient-to-r from-blue-300 p-2 bg-opacity-25" src={image} alt="" />
                </div>
                <div className="w-1/2">
                    <h2 className="text-5xl py-2 font-bold ">{name}</h2>

                    <h2 className="text-lg font-semibold flex items-center gap-2 my-2">Professionals Attend: {professionals_attend}</h2>
                    <p className="text-small-text"><span className="font-semibold text-black">Benefits of Medical Camps:</span> Accessibility: Medical camps bring healthcare services closer to communities that may have limited access to hospitals or clinics due to geographical, financial, or other constraints.

                        Health Awareness: These camps often include educational sessions and workshops to raise awareness about various health issues, preventive measures, and healthy lifestyle practices.

                        Early Detection: Screenings for various health conditions such as blood pressure, diabetes, vision problems, and other diseases help in early detection and management.

                        Timely Treatment: Medical camps offer immediate medical attention and treatment for minor ailments and provide referrals for serious health issues, ensuring timely care.

                        Community Engagement: They foster community involvement and encourage people to take an active interest in their health, often promoting community bonding. </p>

                    <button onClick={() => document.getElementById('my_modal_4').showModal()} className="py-2 mt-8 font-semibold px-4 rounded-md text-white bg-theme-color flex items-center gap-2">Join Camp<FaRegArrowAltCircleRight></FaRegArrowAltCircleRight></button>

                </div>

            </div>
            <div className="flex justify-between py-2 w-3/4 mx-auto mt-16">
                <button className="bg-slate-50 text-lg font-semibold rounded-md py-1 px-4 flex items-center gap-2"><BsFillCalendarDateFill></BsFillCalendarDateFill>{date}</button>
                <button className=" text-xl font-semibold rounded-md py-1 px-4 flex items-center gap-1"><MdEditDocument></MdEditDocument>Joined:{perticipent.length}</button>
                <button className=" text-2xl font-semibold rounded-md py-1 px-4 flex items-center gap-1"><HiCurrencyDollar></HiCurrencyDollar>{fee}</button>


                <button className="bg-red-50 text-lg font-semibold rounded-md py-1 px-4 flex items-center gap-2"><MdAddLocationAlt></MdAddLocationAlt>{location}</button>

                <button className="bg-green-50 text-lg font-semibold rounded-md py-1 px-4 flex items-center gap-2">Audience: {audience}+</button>
            </div>
            <div className="w-3/4 mx-auto mt-8">
                <p className="text-small-text"><span className="font-semibold">Description of a Medical Camp: </span> Accessibility: Medical camps bring healthcare services closer to communities that may have limited access to hospitals or clinics due to geographical, financial, or other constraints.

                    Health Awareness: These camps often include educational sessions and workshops to raise awareness about various health issues, preventive measures, and healthy lifestyle practices.

                    Early Detection: Screenings for various health conditions such as blood pressure, diabetes, vision problems, and other diseases help in early detection and management.

                    Timely Treatment: Medical camps offer immediate medical attention and treatment for minor ailments and provide referrals for serious health issues, ensuring timely care.

                    Community Engagement: They foster community involvement and encourage people to take an active interest in their health, often promoting community bonding. </p>
            </div>



            {/* Camp Joining Form for perticipent */}
            <dialog id="my_modal_4" className="modal">
                <div className="modal-box w-11/12 bg-theme-bg max-w-5xl">
                    <h3 className="font-bold text-lg">Join : {name}</h3>
                    <p className="py-4">Fill your information carefully and join {name} camp</p>
                    <div className="modal-action">

                        <form method="dialog" className="w-4/5 mx-auto" onSubmit={handleSubmit(onSubmit)}>
                            <div className="flex flex-col md:flex-row gap-5">
                                <input {...register("name")} className="py-2 my-3 w-full border-2 border-blue-300 rounded-lg px-2" placeholder="Your Name" type="text" />

                                <input {...register("age")} className="py-2 my-3 w-full border-2 border-blue-300 rounded-lg px-2" placeholder="Your Age" type="text" />
                            </div>
                            <div className="flex flex-col md:flex-row gap-5">
                                <input {...register("number")} className="py-2 my-3 w-full border-2 border-blue-300 rounded-lg px-2" placeholder="Phone Number" type="" />

                                <select className="py-2 my-3 w-full border-2 border-blue-300 rounded-lg px-2" {...register("gender")}>
                                    <option value="female">female</option>
                                    <option value="male">male</option>
                                    <option value="other">other</option>
                                </select>
                            </div>
                            <div>
                                <input {...register("address")} className="py-2 my-3 w-full border-2 border-blue-300 rounded-lg px-2" placeholder="Address" type="text" />
                            </div>
                            {/* Submission Button */}
                            <div className="flex gap-5">
                            <button className="py-2 font-semibold mt-10 px-4 rounded-md text-white bg-theme-color flex items-center gap-2">Submit</button>
                            
                            </div>
                            
                        </form>


                    </div>
                </div>
            </dialog>
        </div>
    )
}

export default CampDetails
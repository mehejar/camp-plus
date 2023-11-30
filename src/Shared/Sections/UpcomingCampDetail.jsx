import { BsFillCalendarDateFill } from "react-icons/bs";
import { HiCurrencyDollar } from "react-icons/hi";
import { MdAddLocationAlt } from "react-icons/md";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { MdEditDocument } from "react-icons/md";
import { useLoaderData } from "react-router-dom";
import { useForm } from "react-hook-form"
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../Hooks/useAuth";
import useProfessional from "../../Hooks/useProfessional";


const UpcomingCampDetails = () => {

    const [isProfessional] = useProfessional()
    const { register, reset, handleSubmit } = useForm()
    const axiosPublic = useAxiosPublic()
    // ==============================


    const camp = useLoaderData()
    const { user } = useAuth()
    // const { _id, name, image, date,  organizer, fee, location, specialized_services, professionals_attend, audience } = camp;

    const name = camp[0].name
    const image = camp[0].image
    const date = camp[0].date
    const organizer = camp[0].organizer
    const fee = camp[0].fee
    const location = camp[0].location
    const specialized_services = camp[0].specialized_services
    const professionals_attend = camp[0].professionals_attend
    const audience = camp[0].audience
    const _id = camp[0]._id

    // console.log('erwer', camp[0].organizer)

    const { refetch, data: perticipent = [] } = useQuery({
        queryKey: ['perticipent', _id],
        queryFn: async () => {
            const res = await axiosPublic.get(`/campRegisters?campsId=${_id}`)
            return res.data
        },

    })

    const professionalJoin = (e) => {
        e.preventDefault()
        const form = e.target
        const professionalname = form.name.value;
        const profession = form.profession.value;
        const email = user.email
        const campsId = _id
        const campsName = name
        const campsDate = date
        const campsLocation = camp[0].location
        const campsFee = camp[0].fee
        const campOrganizer = organizer
        const stutas = 'pending'

        const professionalInfo = { email, campOrganizer, professionalname,   profession, campsId, campsFee, campsLocation, campsDate, campsName, stutas }

        console.log(professionalInfo)

        axiosPublic.post('/professional-requests', professionalInfo)
            .then(data => {
                console.log(data.data)
                refetch()
                reset()
            })
       
    }

    const onSubmit = (data) => {

        // Camp details 
        const campsId = _id
        const campsName = name
        const campsDate = date
        const campsLocation = location
        const campsFee = fee
        const campOrganizer = organizer
        const stutas = 'pending'
        const email = user.email





        // Perticipent Details
        const perticipentName = data.name
        const age = data.age
        const number = data.number
        const gender = data.gender
        const address = data.address


        const registerInfo = { perticipentName, email, campOrganizer, age, number, gender, address, campsId, campsFee, campsLocation, campsDate, campsName, stutas }
        // console.log(registerInfo)

        axiosPublic.post('/campRegisters', registerInfo)
            .then(data => {
                console.log(data.data)
                refetch()
                reset()
            })
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
                    <p className="text-small-text"><span className="font-semibold text-black">Benefits of Medical Camps:</span> {}

                        Health Awareness: These camps often include educational sessions and workshops to raise awareness about various health issues, preventive measures, and healthy lifestyle practices.

                        Early Detection: Screenings for various health conditions such as blood pressure, diabetes, vision problems, and other diseases help in early detection and management.

                        Timely Treatment: Medical camps offer immediate medical attention and treatment for minor ailments and provide referrals for serious health issues, ensuring timely care.

                        Community Engagement: They foster community involvement and encourage people to take an active interest in their health, often promoting community bonding. </p>

                    {!isProfessional ?
                        <button onClick={() => document.getElementById('my_modal_4').showModal()} className="py-2 mt-8 font-semibold px-4 rounded-md text-white bg-theme-color flex items-center gap-2">Join Camp<FaRegArrowAltCircleRight></FaRegArrowAltCircleRight></button> :

                        <button className="py-2 mt-8 font-semibold px-4 rounded-md text-white bg-theme-color flex items-center gap-2" onClick={() => document.getElementById('my_modal_3').showModal()}>Attend As A Health Care Professional</button>}

                </div>

            </div>
            <div className="flex justify-between py-2 w-3/4 mx-auto mt-16">
                <button className="bg-slate-50 text-lg font-semibold rounded-md py-1 px-4 flex items-center gap-2"><BsFillCalendarDateFill></BsFillCalendarDateFill>{date}</button>
                <button className=" text-xl font-semibold rounded-md py-1 px-4 flex items-center gap-1"><MdEditDocument></MdEditDocument>Perticipent:{perticipent.length}</button>
                <button className=" text-2xl font-semibold rounded-md py-1 px-4 flex items-center gap-1"><HiCurrencyDollar></HiCurrencyDollar>{fee}</button>


                <button className="bg-red-50 text-lg font-semibold rounded-md py-1 px-4 flex items-center gap-2"><MdAddLocationAlt></MdAddLocationAlt>{location}</button>

                <button className="bg-green-50 text-lg font-semibold rounded-md py-1 px-4 flex items-center gap-2">Audience: {audience}+</button>
            </div>
            <div className="w-3/4 mx-auto mt-8">
                <p className="text-small-text">{specialized_services}</p>
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
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
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

            {/* You can open the modal using document.getElementById('ID').showModal() method */}

            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <div>
                    <h3 className="font-bold text-center text-lg">{name}</h3>
                    <p className="py-4 text-center">Join in {name} camp as a health care's professional</p>
                    <form onSubmit={professionalJoin} method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        <div className="flex flex-col gap-5">
                        <input name="name" className="py-2 px-4 border-2 border-theme-color border-opacity-50 rounded-lg bg-theme-bg" type="text" />
                        <input name="profession" className="py-2 px-4 border-2 border-theme-color border-opacity-50 rounded-lg bg-theme-bg" type="text" />
                        </div>
                        <button type="submit" className="py-2 mt-8 font-semibold px-4 rounded-md text-white bg-theme-color flex items-center gap-2">Send Request</button>
                    </form>
                    </div>
                    
                </div>
            </dialog>
        </div>
    )
}

export default UpcomingCampDetails
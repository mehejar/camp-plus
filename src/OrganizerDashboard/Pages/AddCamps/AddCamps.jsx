import { useForm } from "react-hook-form"
import useAxiosPublic from "../../../Hooks/useAxiosPublic"
import { GiMedicalPack } from "react-icons/gi";
import useAuth from "../../../Hooks/useAuth";
import { BsFillCalendarDateFill } from "react-icons/bs";
import Swal from "sweetalert2";
import DashboardHeading from "../../../Shared/Sections/DashboardHeading";
import { Link } from "react-router-dom";


const image_hosting_key = 'e4461ef5124ec2b2f2efc56f53ded9cb'
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const AddCamps = () => {

    const {user} = useAuth()
    console.log(user)

    const { register, reset, handleSubmit } = useForm()
    const axiosPublic = useAxiosPublic()

    const onSubmit = async (data) => {

        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
        // console.log(res.data);
        if (res.data.success) {

            // const { name, image, date, fee, location, specialized_services, professionals_attend, audience } = camp;
        
            const campsInfo = {
                name: data.name,
                image: res.data.data.display_url,
                date: data.date,
                benifits: data.benifits,
                fee: data.price,
                location: data.location,
                specialized_services: data.specialized_services,
                professionals_attend: data.professionals_attend,
                audience: data.audience,
                targeted_audience: data.targeted_audience,
                organizer: user.email



            }
            console.log(campsInfo)
            const campsRes = await axiosPublic.post('/camps', campsInfo)
            console.log('Added', campsRes.data)
            if (campsRes.data.insertedId) {
                Swal.fire({
                    title: "You Added A New Camp",
                    text: "That thing is still around?",
                    icon: "success"
                  });
                reset()

            }
        }




    }

    return (
        <div>
            <div>
                <DashboardHeading heading="Add Camps"></DashboardHeading>
            </div>

            <div className="w-2/4 mx-auto my-5">
                <form className="" onSubmit={handleSubmit(onSubmit)}>


                    <div className="my-6">
                        <label className="label">
                            <span className="label-text">Camp Name*</span>
                        </label>
                        <input {...register("name")}
                            type="text"
                            placeholder="Camp Name"
                            className="input input-bordered w-full " />
                    </div>
                    <div className="flex gap-6">
                        {/* Date */}
                        <div className=" w-1/2">
                            <label className="label">
                                <span className="label-text">Scheduled</span>
                            </label>

                            <input {...register("date")}
                                type="date"
                                placeholder="Schedule"
                                className="input input-bordered w-full " />
                        </div>
                        {/* FEE */}
                        <div className=" w-1/2">
                            <label className="label">
                                <span className="label-text">Fee*</span>
                            </label>
                            <input {...register("price")}
                                type="text"
                                placeholder="Fee"
                                className="input input-bordered w-full " />
                        </div>
                    </div>

                        {/* Location */}
                        <div className="my-6">
                            <label className="label">
                                <span className="label-text">Venue Location*</span>
                            </label>
                            <input required {...register("location")}
                                type="text"
                                placeholder="Apollo Hospital, New York,USA"
                                className="input  input-bordered w-full " />
                        </div>
                        {/* specialized_services */}
                        <div className="my-6">
                            <label className="label">
                                <span className="label-text">Specialized Services*</span>
                            </label>
                            <input required {...register("specialized_services")}
                                type="text"
                                placeholder="Specialized Services"
                                className="input  input-bordered w-full " />
                        </div>
                    
                    {/* professionals_attend */}
                    <div className="my-6">
                        <label className="label">
                            <span className="label-text">Professionals Attend*</span>
                        </label>
                        <input required {...register("professionals_attend")}
                            type="text"
                            placeholder="Professionals Attend"
                            className="input input-bordered w-full " />
                    </div>
                    {/* professionals_attend */}
                    <div className="my-6">
                        <label className="label">
                            <span className="label-text">Targeted Audience*</span>
                        </label>
                        <input required {...register("targeted_audience")}
                            type="text"
                            placeholder="Professionals Attend"
                            className="input input-bordered w-full " />
                    </div>

                    <div className="my-6">
                        <label className="label">
                            <span className="label-text">Benifits</span>
                        </label>
                        <input required {...register("benifits")}
                            type="text"
                            placeholder="Explain Benifits"
                            className="input input-bordered w-full " />
                    </div>
                    <div className="my-6">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <input required {...register("description")}
                            type="text"
                            placeholder="Explain About "
                            className="input input-bordered w-full " />
                    </div>

                    <div className="my-6">
                        <input required {...register("image")} type="file" className="file-input max-w-md w-full border-2 border-theme-color" />
                    </div>


                    <div className="flex gap-5">
                        <button type="submit" className="flex gap-2 items-center bg-white btn text-xl">Add A Camp<GiMedicalPack></GiMedicalPack></button>

                        <Link to='/dashboard/add-upcoming-camps'><button className="flex gap-2 items-center bg-theme-color btn text-xl text-white">Upcoming Camps<BsFillCalendarDateFill></BsFillCalendarDateFill></button></Link>
                    </div>
                </form>
                
            </div>
        </div>
    )
}

export default AddCamps;
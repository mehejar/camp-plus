import { useForm } from "react-hook-form"

import { GiMedicalPack } from "react-icons/gi";
import useAuth from "../../../Hooks/useAuth";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";



const image_hosting_key = 'e4461ef5124ec2b2f2efc56f53ded9cb'
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const UpdateCamp = () => {

    const camp = useLoaderData()
    // console.log(camp)

    const {_id, date,benifits,
        fee,name,
        location,
        specialized_services,
        professionals_attend} = camp

      

    const {user} = useAuth()
    console.log(user)

    const { register, reset, handleSubmit } = useForm()
    const axiosPublic = useAxiosPublic()

    
    console.log('Khujo', camp[0]._id)

    const onSubmit = async (data) => {

        const imageFile = { image: data?.image[0] }
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
                organizer: user.email
            }

            console.log(campsInfo)
            const campsRes = await axiosPublic.patch(`/camps/${camp[0]._id}`, campsInfo)
            console.log('Added', campsRes.data)
            if (campsRes.data.modifiedCount > 0){

                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your work has been saved",
                    showConfirmButton: false,
                    timer: 1500
                  });
                reset()

            }
        }




    }

    return (
        <div>

            <div className="w-2/4 mx-auto">
                <form className="" onSubmit={handleSubmit(onSubmit)}>


                    <div className="my-6">
                        <label className="label">
                            <span className="label-text">Camp Name*</span>
                        </label>
                        <input defaultValue={name} {...register("date")}
                            type="text"
                           
                            className="input input-bordered w-full " />
                    </div>
                    <div className="flex gap-6">
                        {/* Date */}
                        <div className=" w-1/2">
                            <label className="label">
                                <span className="label-text">Scheduled</span>
                            </label>

                            <input defaultValue={date} {...register("date")}
                                type="date"
                                placeholder="Schedule"
                                className="input input-bordered w-full " />
                        </div>
                        {/* FEE */}
                        <div className=" w-1/2">
                            <label className="label">
                                <span className="label-text">Fee*</span>
                            </label>
                            <input defaultValue={fee} {...register("price")}
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
                            <input defaultValue={location} {...register("location")}
                                type="text"
                                placeholder="Apollo Hospital, New York,USA"
                                className="input  input-bordered w-full " />
                        </div>
                        {/* specialized_services */}
                        <div className="my-6">
                            <label className="label">
                                <span className="label-text">Specialized Services*</span>
                            </label>
                            <input defaultValue={specialized_services} {...register("specialized_services")}
                                type="text"
                                placeholder="Specialized Services"
                                className="input  input-bordered w-full " />
                        </div>
                    
                    {/* professionals_attend */}
                    <div className="my-6">
                        <label className="label">
                            <span className="label-text">Professionals Attend*</span>
                        </label>
                        <input defaultValue={professionals_attend} {...register("professionals_attend")}
                            type="text"
                            placeholder="Professionals Attend"
                            className="input input-bordered w-full " />
                    </div>

                    <div className="my-6">
                        <label className="label">
                            <span className="label-text">Benifits</span>
                        </label>
                        <input defaultValue={benifits} {...register("benifits")}
                            type="text"
                            placeholder="Explain Benifits"
                            className="input input-bordered w-full " />
                    </div>
                    <div className="my-6">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <input {...register("description")}
                            type="text"
                            placeholder="Explain About "
                            className="input input-bordered w-full " />
                    </div>

                    <div className="my-6">
                        <input {...register("image")} type="file" className="file-input max-w-md w-full border-2 border-theme-color" />
                    </div>


                    <div>
                        <button type="submit" className="flex gap-2 items-center bg-white btn text-xl">Update Camp<GiMedicalPack></GiMedicalPack></button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default UpdateCamp
import { useQuery } from "@tanstack/react-query"
import useAxiosPublic from "../../../Hooks/useAxiosPublic"
import useAuth from "../../../Hooks/useAuth"
import RegisteredCard from "./RegisteredCard"

const RegisteredCamps = () => {

    const { user } = useAuth()
    // console.log(user.email)

    const axiosPublic = useAxiosPublic()
    // const camps = useCamps()
    const { data: registered = [] } = useQuery({
        queryKey: ['registered'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/registered-camps?campOrganizer=${user.email}`)
            return res.data
        },

    })

    return (
        <div>
            <h2 className="mt-5 ml-5 text-2xl font-semibold">All Registered List</h2>
             <div className="divider"></div> 
            <div className="flex py-2 px-3 rounded-lg  justify-evenly">
                <h2 className="w-[50px] mx-5 font-semibold text-theme-color">#</h2>
                <h2 className="w-1/6">Name</h2>
                <h2 className="w-1/6" >Camp</h2>
                <h2 className="w-1/6">Venue</h2>
                <h2 className="w-1/6">Schedule</h2>
                <h2 className="w-1/6">Fee</h2>
                <div className="w-1/6">
                <button className="">Payment</button>
                </div>
                <div className="w-1/6">
                <button className="">Joining</button>
                </div>
                
            </div>
            {
                registered.map((register, idx) => <>


                    <RegisteredCard idx={idx} register={register}></RegisteredCard> </>)
            }
        </div>
    )


}

export default RegisteredCamps
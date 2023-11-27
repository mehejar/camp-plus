import { BsFillCalendarDateFill } from "react-icons/bs";
import { HiCurrencyDollar } from "react-icons/hi";
import { MdAddLocationAlt } from "react-icons/md";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { MdEditDocument } from "react-icons/md";
import { Link } from "react-router-dom";
import usePerticipent from "../../Hooks/usePerticipent";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";








const CampCard = ({ camp }) => {




    const axiosPublic = useAxiosPublic()

    const { _id, name, image, date, fee, location, specialized_services, professionals_attend, audience } = camp;

    const { data: perticipent = [] } = useQuery({
        queryKey: ['perticipent', _id],
        queryFn: async () => {
            const res = await axiosPublic.get(`/campRegisters?campsId=${_id}`)
            return res.data
        },

    })

    return (
        <div className="bg-white p-8 rounded-lg">
            <img className="w-[450px] h-[300px] rounded-lg" src={image} alt="" />
            <h2 className="text-3xl py-2 font-bold ">{name}</h2>
            <div className="flex justify-between py-2">
                <button className="bg-slate-50 text-sm font-semibold rounded-md py-1 px-4 flex items-center gap-2"><BsFillCalendarDateFill></BsFillCalendarDateFill>{date}</button>
                <button className=" text-xl font-semibold rounded-md py-1 px-4 flex items-center gap-1"><MdEditDocument></MdEditDocument>Joined: {perticipent.length}</button>
            </div>
            <h2 className="text-lg font-semibold flex items-center gap-2 my-2">Professionals Attend: {professionals_attend}</h2>
            <p className="text-small-text">{specialized_services}</p>
            <div className="flex justify-between py-2">
                <button className="bg-red-50 text-sm font-semibold rounded-md py-1 px-4 flex items-center gap-2"><MdAddLocationAlt></MdAddLocationAlt>{location}</button>

                <button className="bg-green-50 text-sm font-semibold rounded-md py-1 px-4 flex items-center gap-2">Audience: {audience}</button>

            </div>
            <div className="flex align-bottom justify-between items-center">
                <button className=" text-2xl font-semibold rounded-md py-1 px-4 flex items-center gap-1"><HiCurrencyDollar></HiCurrencyDollar>{fee}</button>

                <Link to={`/camp-details/${_id}`} ><button className="py-2 font-semibold px-4 rounded-md text-white bg-theme-color flex items-center gap-2">Details<FaRegArrowAltCircleRight></FaRegArrowAltCircleRight></button></Link>
            </div>
        </div>
    )
}

export default CampCard
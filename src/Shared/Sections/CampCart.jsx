import { BsFillCalendarDateFill } from "react-icons/bs";
import { HiCurrencyDollar } from "react-icons/hi";
import { FaUserDoctor } from "react-icons/fa6";
import { MdAddLocationAlt } from "react-icons/md";
import { FaRegArrowAltCircleRight } from "react-icons/fa";






const CampCard = ({camp}) =>{
    const {name, image, date, fee, location, specialized_services, professionals_attend, audience} = camp;
    return(
        <div className="bg-white p-8 rounded-lg">
            <img className="w-[450px] h-[300px] rounded-lg" src={image} alt="" />
            <h2 className="text-3xl py-2 font-bold ">{name}</h2>
            <div className="flex justify-between py-2">
                <button className="bg-orange-100 text-sm font-semibold rounded-md py-1 px-4 flex items-center gap-2"><BsFillCalendarDateFill></BsFillCalendarDateFill>{date}</button>
                <button className=" text-xl font-semibold rounded-md py-1 px-4 flex items-center gap-1"><HiCurrencyDollar></HiCurrencyDollar>{fee}</button>
            </div>
            <h2 className="text-lg font-semibold flex items-center gap-2 my-2"><FaUserDoctor></FaUserDoctor>{professionals_attend[0]}, {professionals_attend[1]} {professionals_attend[2]}</h2>
            <p className="text-small-text">{specialized_services[0]}, {specialized_services[1]}</p>
            <div className="flex justify-between py-2">
                <button className="bg-orange-100 text-sm font-semibold rounded-md py-1 px-4 flex items-center gap-2"><MdAddLocationAlt></MdAddLocationAlt>{location}</button>
                <button className="py-2 font-semibold px-4 rounded-md text-white bg-theme-color flex items-center gap-2">Details<FaRegArrowAltCircleRight></FaRegArrowAltCircleRight></button>
            </div>
        </div>
    )
}

export default CampCard
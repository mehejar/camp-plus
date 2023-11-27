import { RiEditBoxFill } from "react-icons/ri";
import { Link } from "react-router-dom";


const ManageCampCard = ({camp, idx}) => {
    const { _id,image,date,benifits,
        fee,name,
        location,
        specialized_services,
        professionals_attend,
        audience,
        organizer} = camp

        
       
    return (
        <div>
            <div className="overflow-x-auto ml-4 ">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th className="text-theme-bg">
                              #
                            </th>
                            <th className="text-theme-bg">Camp</th>
                            <th className="text-theme-bg">Schedule & Venue</th>
                            <th className="text-theme-bg">Specialized Service</th>
                            <th className="text-theme-bg">Professionals in Attendace</th>
                            <th className="text-theme-bg">Targeted Audience</th>
                            <th className="text-theme-bg">Update</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr className="bg-white py-2 rounded-lg">
                            <th>
                                <h2>{idx + 1}</h2>
                            </th>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{name}</div>
                                        <div className="text-sm opacity-50">{specialized_services}</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                {location}
                                <br />
                                <span className="badge badge-ghost badge-sm">{date}</span>
                            </td>
                            <td>Purple</td>
                            <td>{professionals_attend}</td>
                            <th>
                                <Link to={`/dashboard/update-camp/${_id}`}><button className=" p-2 rounded-2xl hover:text-theme-color text-2xl "><RiEditBoxFill ></RiEditBoxFill></button></Link>
                            </th>
                            <th>
                                <button className="btn btn-ghost btn-xs">details</button>
                            </th>
                        </tr>
                        </tbody>
                       

                </table>
            </div>
        </div>
    )
}

export default ManageCampCard
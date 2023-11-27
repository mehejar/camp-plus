const ManageCampCard = ({camp, idx}) => {
    const {image,date,benifits,
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
                            <th>
                              #
                            </th>
                            <th>Camp</th>
                            <th>Schedule & Venue</th>
                            <th>Specialized Service</th>
                            <th>Professionals in Attendace</th>
                            <th>Targeted Audience</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr className="bg-white shadow-md my-2 ">
                            <th>
                                <h2>{idx}</h2>
                            </th>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={name} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{name}</div>
                                        <div className="text-sm opacity-50">United States</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                Zemlak, Daniel and Leannon
                                <br />
                                <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                            </td>
                            <td>Purple</td>
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
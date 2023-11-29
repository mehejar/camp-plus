import Swal from "sweetalert2";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import useAxiosPublic from "../../Hooks/useAxiosPublic";


const AcceptedCard = ({ camp, idx }) => {
    const axiosPublic = useAxiosPublic()

    // console.log(register)

    const { _id, perticipentName, stutas, campOrganizer, age, number, gender, address, campsId, campsFee, campsLocation, campsDate, campsName } = camp

    const handleDelete = (_id) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't to Join this Camp",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#1D9EFF",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Cencel"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosPublic.delete(`/perticipent-registered-camps/${_id}`)
                    .then(res => {
                        console.log(res.data)
                        if (res.data.deletedCount > 0) {
                            // console.log('Updated')
                            Swal.fire({
                                title: "Cenceled",
                                text: `You Cenceled ${campsName} camp`,
                                icon: "success"
                            });

                        }
                    })
               
            }
        });


    }


    return (
        <div className="flex py-3 px-4 rounded-lg mx-5 bg-white mt-4 justify-evenly">
            <h2 className="w-[50px] font-semibold">{idx + 1}</h2>
            
            <h2 className="w-1/6 font-semibold text-gray-600" >{campsName}</h2>
            <h2 className="w-1/6 text-gray-500">{campsLocation}</h2>
            <h2 className="w-1/6 text-center text-gray-500">{campsDate}</h2>
            <h2 className="w-1/6 text-center text-gray-500">${campsFee}</h2>
            <div className="w-1/6">
                <button className=" btn btn-xs bg-red-200">Unpaid</button>
            </div>
            <div className="w-1/6">
                {stutas === 'Confirmed' ? <button className=" btn btn-xs bg-green-500 text-white flex items-center gap-1"><RiVerifiedBadgeFill></RiVerifiedBadgeFill>Confirmed</button>
                    :
                    <button className=" btn btn-xs bg-yellow-100">Pending</button>
                }
            </div>
            <div className="w-1/6">
            <button onClick={() =>handleDelete(_id)} className=" btn btn-xs bg-red-200">Cencel</button>
            </div>
        </div>
    )

}

export default AcceptedCard

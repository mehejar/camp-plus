import Swal from "sweetalert2";
import useAxiosPublic from "../../../Hooks/useAxiosPublic"
import { RiVerifiedBadgeFill } from "react-icons/ri";


const RegisteredCard = ({ register, idx }) => {
    const axiosPublic = useAxiosPublic()

    console.log(register)

    const { perticipentName, stutas, campOrganizer, age, number, gender, address, campsId, campsFee, campsLocation, campsDate, campsName } = register

    const handleConfirm = (_id) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't Confirmed This Perticipent",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#1D9EFF",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Confirmed"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosPublic.patch(`/registered-camps/status/${_id}`)
                    .then(res => {
                        console.log(res.data)
                        if (res.data.modifiedCount > 0) {
                            console.log('Updated')
                            Swal.fire({
                                title: "Confirmed",
                                text: `You confirmed ${perticipentName}`,
                                icon: "success"
                            });

                        }
                    })
               
            }
        });


    }


    return (
        <div className="flex py-2 px-3 rounded-lg mx-5 bg-white mt-4 justify-evenly">
            <h2 className="w-[50px]">{idx + 1}</h2>
            <h2 className="w-1/6 font-semibold">{perticipentName}</h2>
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
                    <button onClick={() => handleConfirm(register._id)} className=" btn btn-xs bg-red-200">Pending</button>
                }
            </div>
        </div>
    )

}

export default RegisteredCard

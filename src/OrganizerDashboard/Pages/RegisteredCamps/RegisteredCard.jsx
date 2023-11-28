const RegisteredCard = ({ register,idx }) => {

    console.log(register)

    const { perticipentName, campOrganizer, age, number, gender, address, campsId, campsFee, campsLocation, campsDate, campsName } = register


    return (
        <div className="flex py-2 px-3 rounded-lg mx-5 bg-white mt-4 justify-evenly">
            <h2 className="w-[50px]">{idx + 1}</h2>
            <h2 className="w-1/6 font-semibold">{perticipentName}</h2>
            <h2 className="w-1/6 font-semibold text-gray-600" >{campsName}</h2>
            <h2 className="w-1/6 text-gray-500">{campsLocation}</h2>
            <h2 className="w-1/6 text-gray-500">{campsDate}</h2>
            <h2 className="w-1/6 text-gray-500">${campsFee}</h2>
            <div className="w-1/6">
                <button className=" btn btn-xs bg-red-200">Pending</button>
            </div>
            <div className="w-1/6"> <button className=" btn btn-xs bg-red-200">Pending</button>
            </div>
        </div>
    )

}

export default RegisteredCard

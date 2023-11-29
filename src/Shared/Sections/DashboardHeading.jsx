import useAuth from "../../Hooks/useAuth"

const DashboardHeading = ({heading}) => {
    const {user} = useAuth()
     return(
        <div>
            <div className="flex pt-8 px-8 items-center justify-between">
            <h2 className="text-2xl font-bold">{heading}</h2>
            <div className="flex gap-3 items-center">
                <h2 className="font-semibold">{user.displayName}</h2>
                <img className="w-[40px] h-[40px] rounded-full" src={user.photoURL} alt="" />
            </div>
            </div>
            <div className="divider"></div>
        </div>
    )
}

export default DashboardHeading
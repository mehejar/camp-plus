import { NavLink } from "react-router-dom";
import logo from '../../assets/Logo/campPlus-02.png'

const Dashboard = () => {

    const isOrganizer = true;
    return (
        <div className="flex">
            <div className="w-1/5 min-h-screen bg-white">
                <ul className="mx-8">
                    <li><img draggable="false" className="w-[200px] mt-8" src={logo} alt="" /></li>
                    <li><NavLink to="/dashboard/organizer-profile"><button className="btn w-full my-2 mt-8 text-xl text-left">Profile</button></NavLink></li>

                    <li><NavLink to="/dashboard/add-a-camp"><button className="btn w-full my-2 text-xl text-left">Add a Camp</button></NavLink></li>
                    
                    <li><NavLink to="/dashboard/manage-camps"><button className="btn w-full my-2 text-xl text-left">Manage Camps</button></NavLink></li>
                </ul>


            </div>
            <div className="w-4/5 bg-theme-bg">

            </div>
        </div>
    )
}

export default Dashboard
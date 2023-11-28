import { NavLink, Outlet } from "react-router-dom";
import logo from '../../assets/Logo/campPlus-02.png'
import { PiUserSwitchFill } from "react-icons/pi";
import { MdAssignmentAdd, MdEditDocument } from "react-icons/md";
import { SiManageiq } from "react-icons/si";
import { AiFillHome } from "react-icons/ai";
import { IoWallet } from "react-icons/io5";






const Dashboard = () => {

    const isOrganizer = false;
    const isPerticipent = true;
    return (
        <div className="flex">
            <div className="w-1/5 min-h-screen bg-white">
                <img draggable="false" className="w-[200px] mx-8 mt-8" src={logo} alt="" />
                { isOrganizer &&
                    <ul className="mx-16 mt-8">

                        <li><NavLink
                            to="/dashboard/organizer-profile"><button className=" w-full rounded-xl py-2 px-3 text-gray-500 hover:bg-theme-bg  text-xl flex gap-3 my-2 items-center bg-white text-left"><PiUserSwitchFill className="text-2xl"></PiUserSwitchFill>Profile</button></NavLink></li>

                        <li><NavLink to="/dashboard/add-a-camp"><button className=" w-full rounded-xl text-gray-500 py-2 px-3 hover:bg-theme-bg  text-xl flex my-2 gap-3 items-center bg-white text-left"><MdAssignmentAdd className="text-2xl"></MdAssignmentAdd>Add A Camps</button></NavLink></li>

                        <li><NavLink to="/dashboard/manage-camps"><button className=" w-full text-gray-500 rounded-xl py-2 px-3 hover:bg-theme-bg text-xl flex my-2 gap-3 items-center bg-white text-left"><SiManageiq className="text-2xl"></SiManageiq>Manage Camp</button></NavLink></li>

                        <li><NavLink to="/dashboard/manage-registered-camps"><button className=" w-full text-gray-500 rounded-xl py-2 px-3 hover:bg-theme-bg text-xl flex my-2 gap-3 items-center bg-white text-left"><MdEditDocument className="text-2xl"></MdEditDocument>Registered Camps</button></NavLink></li>

                        <div className="divider"></div>

                        <li><NavLink to="/"><button className=" w-full text-gray-500 rounded-xl py-2 px-3 hover:bg-theme-bg text-xl flex my-2 gap-3 items-center bg-white text-left"><AiFillHome className="text-2xl"></AiFillHome>Home</button></NavLink></li>


                    </ul>
                }
                {
                    isPerticipent &&
                    <ul className="mx-16 mt-8">

                    <li><NavLink
                        to="/dashboard/perticipent-profile"><button className=" w-full rounded-xl py-2 px-3 text-gray-500 hover:bg-theme-bg  text-xl flex gap-3 my-2 items-center bg-white text-left"><PiUserSwitchFill className="text-2xl"></PiUserSwitchFill>Profile</button></NavLink></li>



                    <li><NavLink to="/dashboard/registered-camps"><button className=" w-full text-gray-500 rounded-xl py-2 px-3 hover:bg-theme-bg text-xl flex my-2 gap-3 items-center bg-white text-left"><MdEditDocument className="text-2xl"></MdEditDocument>Registered Camps</button></NavLink></li>

                    <li><NavLink to="/dashboard/payment-history"><button className=" w-full text-gray-500 rounded-xl py-2 px-3 hover:bg-theme-bg text-xl flex my-2 gap-3 items-center bg-white text-left"><IoWallet className="text-2xl"></IoWallet>Payment History</button></NavLink></li>

                    <div className="divider"></div>

                    <li><NavLink to="/"><button className=" w-full text-gray-500 rounded-xl py-2 px-3 hover:bg-theme-bg text-xl flex my-2 gap-3 items-center bg-white text-left"><AiFillHome className="text-2xl"></AiFillHome>Home</button></NavLink></li>


                </ul>
                }


            </div>
            <div className="w-4/5 bg-theme-bg">
                <Outlet></Outlet>
            </div>

        </div>
    )
}

export default Dashboard
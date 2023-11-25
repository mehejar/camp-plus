import { Outlet } from "react-router-dom"
import Navbar from "../../Shared/Navbar/Navbar"

const Main = () => {
    return (
        <div >
            <div className="bg-theme-bg">
                <div className=" w-4/5 mx-auto">
                    <Navbar></Navbar>
                    <Outlet></Outlet>
                </div>
            </div>


        </div>
    )
}

export default Main
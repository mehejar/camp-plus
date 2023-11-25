import { Outlet } from "react-router-dom"
import Navbar from "../../Shared/Navbar/Navbar"

const Main = () => {
    return (
        <div className=" w-4/5 mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    )
}

export default Main
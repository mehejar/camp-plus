import { NavLink } from "react-router-dom"
import logo from '../../assets/Logo/campPlus-02.png'
import { useContext } from "react"
import { AuthContext } from "../../Pages/Providers.jsx/AuthProvider"

const Navbar = () => {

    const {user, logOut} = useContext(AuthContext)

    const handleLogOut = () =>{
        logOut()
    }

    // console.log(user)


   


    const navLinks = <>

        <NavLink to='/'><li><a>Home</a></li></NavLink>
        <NavLink to='/available-camps'><li><a>Available Camps</a></li></NavLink>
        <NavLink to='/upcoming-camps'><li><a>Upcoming Camps</a></li></NavLink>
        <NavLink to='/dashboard'><li><a>Dashboard</a></li></NavLink>
        <NavLink to='/menu'><li><a>Contact Us</a></li></NavLink>
        {
            user ? <>
            <NavLink to="" onClick={handleLogOut} className="py-2 mr-4 px-4 rounded-md text-white bg-theme-color">Sign Out</NavLink>

            <img className="w-[40px] rounded-full h-[40px]" src={user.photoURL} alt="" />
            
            </> : <NavLink to="/login" className="py-2 px-4 rounded-md text-white bg-theme-color">Login</NavLink>
        }
        
        
    </>

    return (
        <div className="">
            <div className="navbar text-black mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box font-semibold w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <img className="w-[200px]" src={logo} alt="" />
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-semibold">
                        {navLinks}
                    </ul>
                </div>
                
            </div>
        </div>
    )
}

export default Navbar
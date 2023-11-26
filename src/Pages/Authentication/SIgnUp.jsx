import { useContext } from "react"
import { FaGoogle } from "react-icons/fa"
import { Link } from "react-router-dom"
import loginImg from '../../assets/Section visual/login_Artboard 1.png'
import { AuthContext } from "../Providers.jsx/AuthProvider"

const SignUp = () => {

    const { createUser, updateUser } = useContext(AuthContext)

    const handleRegister = e => {
        e.preventDefault()
        const form = e.target

        const name = form.name.value
        const photo = form.photo.value
        const email = form.email.value
        const password = form.password.value

        console.log(email, password, name)

        createUser(email, password)
            .then(result => {
                console.log(result.user)
                updateUser(name, photo)
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error.message)
            })
    }

    return (
        <div className="flex flex-col md:flex-row login-bg lg:justify-center items-center lg:gap-x-12 lg:mx-auto">
            <div className="w-1/3">
                <div>
                    <h2 className="text-3xl font-bold mb-8">Login Now</h2>
                </div>
                <form onSubmit={handleRegister} className="flex flex-col gap-5">

                    <input className="py-2 my-3 w-full border-2 border-blue-300 rounded-lg px-2" placeholder="Name" name="name" type="text" />

                    <input className="py-2 my-3 w-full border-2 border-blue-300 rounded-lg px-2" placeholder="Photo URL" name="photo" type="text" />

                    <input className="py-2 my-3 w-full border-2 border-blue-300 rounded-lg px-2" placeholder="Email" name="email" type="text" />

                    <input className="py-2 my-3 w-full border-2 border-blue-300 rounded-lg px-2" placeholder="Password" name="password" type="text" />



                    <input className=" text-white font-semibold px-4 w-full py-2 rounded-md bg-theme-color" type="submit" value="SignUp" />

                    <div className="">
                        <button className="border-2 text-blue-500 font-semibold border-gray-400 flex items-center justify-center gap-3 px-4 w-full py-2 rounded-md bg-gray-200"><FaGoogle></FaGoogle> Google</button>
                    </div>

                </form>
                <div className="mt-6">
                    <h2>Already have an account <Link to='/login' className="text-blue-500 font-semibold">SignUp</Link></h2>
                </div>
            </div>
            <div>
                <img className="" src={loginImg} alt="" />
            </div>


        </div>
    )
}

export default SignUp
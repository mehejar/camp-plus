import ThemeButton from '../../Shared/ThemeButton'
import bannerImg from '../../assets/Section visual/banner-04.png'
import { FaNotesMedical } from "react-icons/fa6";


const Banner = () => {
    return (
        <div className='flex  items-center justify-between'>
            <div>
                <h2 className='text-xl font-semibold'>Join Us for Health & Wellness:</h2>
                <h2 className='text-6xl font-bold mt-4'>Register for our</h2>
                <h2 className='text-theme-color pt-4 text-6xl font-bold'>Medical Camp Today!</h2>
                <p className='mt-10'>Discover comprehensive healthcare at our Medical Camp webapp! Access free <br /> check-ups, expert consultations, and vital resources. Join us in promoting <br /> a healthier community. Register now!</p>
                
                    <button className="py-2 font-semibold mt-10 px-4 rounded-md text-white bg-theme-color flex items-center gap-2"><FaNotesMedical></FaNotesMedical>Explore Now</button>
                
            </div>
            <div>
                <img src={bannerImg} alt="" />
            </div>
        </div>
    )
}

export default Banner
import Navbar from "../../Shared/Navbar/Navbar"
import CampDetails from "../../Shared/Sections/CampDetails"
import Banner from "./Banner"
import PopularCamp from "./PopularCamp"

const Home = () =>{
    return(
        <div className="">
            <Banner></Banner>
            <PopularCamp></PopularCamp>
            
        </div>
    )
}

export default Home
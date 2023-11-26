import { BsFillCalendarDateFill } from "react-icons/bs";
import { HiCurrencyDollar } from "react-icons/hi";
import { MdAddLocationAlt } from "react-icons/md";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { MdEditDocument } from "react-icons/md";


const CampDetails = () => {
    return (
        <div className="py-16">
            <div className="flex gap-8 lg:flex-row">
                <div className="w-1/2">
                    <img className="rounded-lg bg-gradient-to-r from-blue-300 p-2 bg-opacity-25" src="https://img.freepik.com/premium-photo/handsome-doctor-portrait-background_488220-35388.jpg?size=626&ext=jpg&ga=GA1.1.1880011253.1699142400&semt=ais" alt="" />
                </div>
                <div className="w-1/2">
                    <h2 className="text-5xl py-2 font-bold ">Kids Wellness Day</h2>

                    <h2 className="text-lg font-semibold flex items-center gap-2 my-2">Professionals Attend: Pediatricians, Vaccination Specialists</h2>
                    <p className="text-small-text"><span className="font-semibold text-black">Benefits of Medical Camps:</span> Accessibility: Medical camps bring healthcare services closer to communities that may have limited access to hospitals or clinics due to geographical, financial, or other constraints.

                        Health Awareness: These camps often include educational sessions and workshops to raise awareness about various health issues, preventive measures, and healthy lifestyle practices.

                        Early Detection: Screenings for various health conditions such as blood pressure, diabetes, vision problems, and other diseases help in early detection and management.

                        Timely Treatment: Medical camps offer immediate medical attention and treatment for minor ailments and provide referrals for serious health issues, ensuring timely care.

                        Community Engagement: They foster community involvement and encourage people to take an active interest in their health, often promoting community bonding. </p>

                        <button className="py-2 mt-8 font-semibold px-4 rounded-md text-white bg-theme-color flex items-center gap-2">Join Camp<FaRegArrowAltCircleRight></FaRegArrowAltCircleRight></button>

                </div>

            </div>
            <div className="flex justify-between py-2 w-3/4 mx-auto mt-16">
                <button className="bg-slate-50 text-lg font-semibold rounded-md py-1 px-4 flex items-center gap-2"><BsFillCalendarDateFill></BsFillCalendarDateFill>12 July 2023</button>
                <button className=" text-xl font-semibold rounded-md py-1 px-4 flex items-center gap-1"><MdEditDocument></MdEditDocument>Joined: 12</button>
                <button className=" text-2xl font-semibold rounded-md py-1 px-4 flex items-center gap-1"><HiCurrencyDollar></HiCurrencyDollar>217</button>

        
                <button className="bg-red-50 text-lg font-semibold rounded-md py-1 px-4 flex items-center gap-2"><MdAddLocationAlt>Pediatric Consultation, Immunization</MdAddLocationAlt>Dhaka Bangladesh</button>

                <button className="bg-green-50 text-lg font-semibold rounded-md py-1 px-4 flex items-center gap-2">Audience: Age 27+</button>
            </div>
            <div className="w-3/4 mx-auto mt-8">
                <p className="text-small-text"><span className="font-semibold">Description of a Medical Camp: </span> Accessibility: Medical camps bring healthcare services closer to communities that may have limited access to hospitals or clinics due to geographical, financial, or other constraints.

                    Health Awareness: These camps often include educational sessions and workshops to raise awareness about various health issues, preventive measures, and healthy lifestyle practices.

                    Early Detection: Screenings for various health conditions such as blood pressure, diabetes, vision problems, and other diseases help in early detection and management.

                    Timely Treatment: Medical camps offer immediate medical attention and treatment for minor ailments and provide referrals for serious health issues, ensuring timely care.

                    Community Engagement: They foster community involvement and encourage people to take an active interest in their health, often promoting community bonding. </p>
            </div>
        </div>
    )
}

export default CampDetails
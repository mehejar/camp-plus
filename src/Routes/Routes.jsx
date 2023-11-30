import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import Home from "../Pages/Home/Home";
import CampDetails from "../Shared/Sections/CampDetails";
import AvailableCamps from "../Pages/Available Camp/AvailableCamps";
import Dashboard from "../Layouts/Dashboard/Dashboard";
import Login from "../Pages/Authentication/Login";
import SignUp from "../Pages/Authentication/SIgnUp";
import PrivateRoute from "./PrivateRoute";
import Profile from "../OrganizerDashboard/Pages/Profile/Profile";
import AddCamps from "../OrganizerDashboard/Pages/AddCamps/AddCamps";
import ManageCamps from "../OrganizerDashboard/Pages/ManageCamps/ManageCamps";
import UpdateCamp from "../OrganizerDashboard/Pages/UpdateCams.jsx/UpdateCamps";
import RegisteredCamps from "../OrganizerDashboard/Pages/RegisteredCamps/RegisteredCamps";
import PerticipentCamps from "../PerticipentDashboard/RegisteredCamps/RegisteredCamps";
import PerticipentProfile from "../PerticipentDashboard/Profile/Profile";
import UpdateProfile from "../PerticipentDashboard/Profile/UpdateProfile";
import ProfessionalProfile from "../ProfessionalDashboard/ProfileManage/ProfessionalsProfile";
import UpcomingCamps from "../Pages/UpcomingCamps/UpcomingCamps";
import AddUpcomingCamps from "../OrganizerDashboard/Pages/AddCamps/AddUpcomingCamp";
import UpcomingCampDetails from "../Shared/Sections/UpcomingCampDetail";
import AcceptedCamp from "../ProfessionalDashboard/ProfileManage/AcceptedCamps";
import ProfessionalRoute from "./ProfessionalsRoute";
import OrganizerRoute from "./OrganizerRoute";
import ProfessionalsInterests from "../OrganizerDashboard/Pages/ProfessionalsInterests/ProfessionalsInterests";

   export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: '/camp-details/:id',
          element: <PrivateRoute><CampDetails></CampDetails></PrivateRoute>,
          loader: ({params}) => fetch(`https://camp-plus-server.vercel.app/camps/${params.id}`)
        },
        {
          path: '/upcoming-camp-details/:id',
          element: <PrivateRoute><UpcomingCampDetails></UpcomingCampDetails></PrivateRoute>,
          loader: ({params}) => fetch(`https://camp-plus-server.vercel.app/upcoming-camps/${params.id}`)
        },
        {
          path: '/available-camps',
          element: <AvailableCamps></AvailableCamps>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/signup',
          element: <SignUp></SignUp>
        },
        {
          path: '/upcoming-camps',
          element: <UpcomingCamps></UpcomingCamps>
        }
      ]
    },
    {
      path: '/dashboard',
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children:[
        {
          path: 'organizer-profile',
          element: <OrganizerRoute><Profile></Profile></OrganizerRoute>
        },
        {
          path: 'add-a-camp',
          element: <OrganizerRoute><AddCamps></AddCamps></OrganizerRoute>
        },
        {
          path: 'manage-camps',
          element: <OrganizerRoute><ManageCamps></ManageCamps></OrganizerRoute>
        },
        {
          path: 'add-upcoming-camps',
          element: <OrganizerRoute><AddUpcomingCamps></AddUpcomingCamps></OrganizerRoute>
        },
        {
          path: 'update-camp/:id',
          element: <OrganizerRoute><UpdateCamp></UpdateCamp></OrganizerRoute>,
          loader: ({params}) => fetch(`https://camp-plus-server.vercel.app/camps/${params.id}`)
        },
        {
          path: 'manage-registered-camps',
          element:<OrganizerRoute><RegisteredCamps></RegisteredCamps></OrganizerRoute>
        },
        {
          path: 'professionals-interest',
          element: <OrganizerRoute><ProfessionalsInterests></ProfessionalsInterests></OrganizerRoute>
        },
        // Perticipents====================
        {
          path: 'registered-camps',
          element: <PrivateRoute><PerticipentCamps></PerticipentCamps></PrivateRoute>
        },
        {
          path: 'perticipent-profile',
          element: <PrivateRoute><PerticipentProfile></PerticipentProfile></PrivateRoute>
        },
        {
          path:'update-profile',
          element: <PrivateRoute><UpdateProfile></UpdateProfile></PrivateRoute>,
          
        },
        {
          path: 'professionals-profile',
          element: <ProfessionalRoute><ProfessionalProfile></ProfessionalProfile></ProfessionalRoute>
        },
        {
          path: 'accepted-camps',
          element: <ProfessionalRoute><AcceptedCamp></AcceptedCamp></ProfessionalRoute>
        },
        
      ]
    }
  ]);
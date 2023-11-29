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
          loader: ({params}) => fetch(`http://localhost:5000/camps/${params.id}`)
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
          element: <PrivateRoute><Profile></Profile></PrivateRoute>
        },
        {
          path: 'add-a-camp',
          element: <AddCamps></AddCamps>
        },
        {
          path: 'manage-camps',
          element: <ManageCamps></ManageCamps>
        },
        {
          path: 'update-camp/:id',
          element: <UpdateCamp></UpdateCamp>,
          loader: ({params}) => fetch(`http://localhost:5000/camps/${params.id}`)
        },
        {
          path: 'manage-registered-camps',
          element:<PrivateRoute><RegisteredCamps></RegisteredCamps></PrivateRoute>
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
          element: <PrivateRoute><ProfessionalProfile></ProfessionalProfile></PrivateRoute>
        }
      ]
    }
  ]);
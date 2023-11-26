import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import Home from "../Pages/Home/Home";
import CampDetails from "../Shared/Sections/CampDetails";
import AvailableCamps from "../Pages/Available Camp/AvailableCamps";

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
          element: <CampDetails></CampDetails>,
          loader: ({params}) => fetch(`http://localhost:5000/camps/${params.id}`)
        },
        {
          path: '/available-camps',
          element: <AvailableCamps></AvailableCamps>
        }
      ]
    },
  ]);
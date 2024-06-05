import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../pages/ErrorPage";
import Home from "../components/Home/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Appointment from "../pages/Appointment";
import ServiceDetails from "../components/Home/Services/ServiceDetails";
import DashboardLayout from "../layouts/DashboardLayout";
import Dashboard from "../pages/Dashboard";
import AllServices from "../pages/AllServices";
import AddService from "../pages/AddService";
import Registration from "../pages/Registration";
import Login from "../pages/Login";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import EditService from "../pages/EditService"
import Profile from "../pages/Profile/Profile";
import EditProfile from "../pages/Profile/EditProfile";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch("https://medical-corner-server.onrender.com/services")
            },
            {
                path: "/services/:id",
                element: <ServiceDetails></ServiceDetails>,
                loader: ({params}) => fetch(`https://medical-corner-server.onrender.com/services/${params.id}`)
              },
            {
                path: "/about",
                element: <About></About>
            },
            {
                path: "/contact",
                element: <Contact></Contact>
            },
            {
                path: "/appointment",
                element: <PrivateRoute><Appointment></Appointment></PrivateRoute>
            },
            {
                path: "/registration",
                element: <Registration></Registration>
            },
            {
                path: "/login",
                element: <Login></Login>
            }
        ]
    },
    {
        path: "dashboard",
        element: <DashboardLayout></DashboardLayout>,
        children: [
            {
                path: "/dashboard",
                element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>
            },
            {
                path: "/dashboard/profile",
                element: <PrivateRoute><Profile></Profile></PrivateRoute>
            },
            {
                path: "/dashboard/profile/edit/:id",
                element: <PrivateRoute><EditProfile></EditProfile></PrivateRoute>,
                loader: ({params}) => fetch(`https://medical-corner-server.onrender.com/user/get/${params.id}`)
            },
            {
                path: "/dashboard/allServices",
                element: <PrivateRoute><AllServices></AllServices></PrivateRoute>
            },
            {
                path: "/dashboard/addService",
                element: <PrivateRoute><AddService></AddService></PrivateRoute>
            },
            {
                path: "/dashboard/allService/edit/:id",
                element:<PrivateRoute> <EditService></EditService></PrivateRoute>,
                loader: ({ params }) => fetch(`https://medical-corner-server.onrender.com/services/${params.id}`)
            }
        ]
    }
])
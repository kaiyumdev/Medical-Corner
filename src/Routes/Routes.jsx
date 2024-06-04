import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../pages/ErrorPage";
import Home from "../components/Home/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Appointment from "../pages/Appointment";
import ServiceDetails from "../components/Home/Services/ServiceDetails";
import Services from "../components/Home/Services/Services";
import DashboardLayout from "../layouts/DashboardLayout";
import Dashboard from "../pages/Dashboard";
import AllServices from "../pages/AllServices";
import AddService from "../pages/AddService";
import EditService from "../pages/EditService";
import Registration from "../pages/Registration";
import Login from "../pages/Login";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch("http://localhost:3000/services")
            },
            {
                path: "/",
                element: <Services></Services>,
            },
            {
                path: "/services/:id",
                element: <ServiceDetails></ServiceDetails>,
                loader: ({ params }) => fetch(`http://localhost:3000/services/${params.id}`)
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
                path: "/dashboard/allServices",
                element: <AllServices></AllServices>
            },
            {
                path: "/dashboard/addService",
                element: <AddService></AddService>
            },
            {
                path: "/dashboard/allService/edit/:id",
                element: <EditService></EditService>,
                loader: ({ params }) => fetch(`http://localhost:3000/services/${params.id}`)
            }
        ]
    }
])
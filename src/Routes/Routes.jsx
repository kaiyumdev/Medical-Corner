import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../pages/ErrorPage";
import Home from "../components/Home/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Appointment from "../pages/Appointment";
import ServiceDetails from "../components/Home/Services/ServiceDetails";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children:[
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch("http://localhost:3000/services")
            },
            {
                path: "/services/:id",
                element: <ServiceDetails></ServiceDetails>,
                loader: ({params}) => fetch(`http://localhost:3000/services/${params.id}`)
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
                element: <Appointment></Appointment>
            }
        ]
    }
])
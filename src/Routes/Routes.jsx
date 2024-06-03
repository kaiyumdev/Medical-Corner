import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../pages/ErrorPage";
import Home from "../components/Home/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Appointment from "../pages/Appointment";
import Services from "../components/Home/Services/Services";

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
                path: "/services",
                element: <Services></Services>
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
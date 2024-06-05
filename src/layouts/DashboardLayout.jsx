import { Link, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Profile from "../pages/Profile/Profile";

const DashboardLayout = () => {
  const { user } = useAuth()
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-2 bg-customLightBlue min-h-screen p-12">
        <ul>
          <li className="border border-black p-4 text w-full flex-col items-center">
            <Link to={"/dashboard/profile"}>
              <Profile>Profile</Profile>
            </Link>
          </li>
          <li className="border border-black p-4 text w-full">
            <Link to={""}>Dashboard</Link>
          </li>
          <li className="border border-black p-4 text w-full">
            <Link to={"/dashboard/allServices"}>All Service</Link>
          </li>
          <li className="border border-black p-4 text w-full">
            <Link to={"/dashboard/addService"}>Add Service</Link>
          </li>
          <li className="border border-black p-4 text w-full">
            <Link to={"/"}>Home</Link>
          </li>
        </ul>
      </div>
      <div className="col-span-10 p-20">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
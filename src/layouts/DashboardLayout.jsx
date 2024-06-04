import { Link, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const DashboardLayout = () => {
  const {user} = useAuth()
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-2 bg-customLightBlue min-h-screen p-12">
        <ul>
        <li className="border border-black p-4 text w-full flex-col items-center">
        <div className="avatar">
                    <div className="w-12 rounded-full border-2 border-black">
                      <img src={user?.photoURL || "/public/placeholder.jpg"} />
                    </div>
                  </div>
            <Link to={""}>
              

                  Profile
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
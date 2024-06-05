import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import GoogleLogin from "../Shared/GoogleLogin";
import GithubLogin from "../Shared/GithubLogin";

const Registrations = () => {
  const { createUser, user } = useAuth();
  const [passMatch, setPassMatch] = useState(true);

  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const handleSubmit = (e) => {
    const token = localStorage.getItem('token');
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirm_password = form.confirm_password.value;

    if (password !== confirm_password) {
      setPassMatch(false);
      return;
    }
    if (password === confirm_password) {
      createUser(email, password).then((data) => {
        if (data?.user?.email) {
          const userInfo = {
            email: data?.user?.email,
            name: name,
          };
          fetch("https://medical-corner-server.onrender.com/user", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(userInfo)
          }).then((data) => console.log(data));
        }
      });
    }
  };

  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [user, navigate, from]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-300 to-blue-400">
      <div className="w-full max-w-lg bg-gray-100 rounded-lg shadow-xl p-8 md:px-12 md:py-8 lg:px-16 lg:py-10">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Register Now!</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-800">Name</label>
            <input
              type="text"
              placeholder="Name"
              className="input input-bordered rounded-lg w-full px-4 py-2 text-gray-900"
              name="name"
              required
            />
          </div>
          <div>
            <label className="block text-gray-800">Email</label>
            <input
              type="email"
              placeholder="Email"
              className="input input-bordered rounded-lg w-full px-4 py-2 text-gray-900"
              name="email"
              required
            />
          </div>
          <div>
            <label className="block text-gray-800">Password</label>
            <input
              type="password"
              placeholder="Password"
              className="input input-bordered rounded-lg w-full px-4 py-2 text-gray-900"
              name="password"
              required
            />
          </div>
          <div>
            <label className="block text-gray-800">Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm Password"
              className="input input-bordered rounded-lg w-full px-4 py-2 text-gray-900"
              name="confirm_password"
              required
            />
          </div>
          {!passMatch && (
            <div className="text-red-500 text-center">Passwords don't match!</div>
          )}
          <button className="btn bg-gray-800 hover:bg-gray-900 text-white w-full rounded-lg py-2 transition duration-300">Register</button>
          <div className="text-center">
            <GoogleLogin />
          </div>
          <div className="text-center">
            <GithubLogin />
          </div>
          <div className="text-center text-gray-800">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-500 font-bold">Login</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registrations;

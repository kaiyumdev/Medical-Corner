import { Link, useLocation, useNavigate } from "react-router-dom";
// import GoogleLogin from "../components/Login-Registration/GoogleLogin";
import useAuth from "../hooks/useAuth";
import GoogleLogin from "../Shared/GoogleLogin";
// import { useEffect } from "react";

const Login = () => {
  const { signIn, user } = useAuth()
//   let navigate = useNavigate();
//   let location = useLocation();
//   let from = location.state?.from?.pathname || "/";

  const handleSubmit = async(e) => {
    e.preventDefault()

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password)
    await signIn(email, password)
  }

//   useEffect(() => {
//     if(user){
//       navigate(from, {replace: true})
//     }
//   },[user, navigate, from])
  return (
    <form onSubmit={handleSubmit} className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
               type="email"
               placeholder="email"
               className="input input-bordered"
               name="email"
               required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                name="password"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">Login</button>
            </div>
            <div className="mt-6">
              <GoogleLogin></GoogleLogin>
            </div>
            <div className="mt-6">
              <p>
                New Here?{"  "}
                <Link to="/register" className="text-red-500">Register</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Login;

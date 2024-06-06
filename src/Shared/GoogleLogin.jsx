import React from 'react'
import { FaGoogle } from "react-icons/fa";
import useAuth from '../hooks/useAuth';

const GoogleLogin = () => {
  const {googleLogin} = useAuth();
  const handleGoogleSingIn = () => {
    googleLogin()
    .then((data) => {
      console.log(data)
        if(data?.user?.email){
            const userInfo = {
                email: data?.user?.email,
                name: data?.user?.displayName,
            }
            fetch("https://medical-corner-server.onrender.com/user",{
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(userInfo)
          }).then((res) => res.json())
          .then((data) => {
            localStorage.setItem("token", data?.token);
          });
        }
    })
  }
  return (
    <button onClick={handleGoogleSingIn} className='btn w-full'>
       <div className='flex items-center gap-2'>
       <FaGoogle />
       <p>Google</p>
       </div>
        </button>
  )
}

export default GoogleLogin

// import React from 'react';
// import { FaGoogle } from "react-icons/fa";
// import useAuth from '../hooks/useAuth';

// const GoogleLogin = () => {
//     const { googleLogin } = useAuth();
//     const handleGoogleSignIn = () => {
//         googleLogin()
//             .then((data) => {
//                 console.log(data);
//                 if (data?.user?.email) {
//                     const userInfo = {
//                         email: data.user.email,
//                         name: data.user.displayName,
//                     };
//                     fetch("https://medical-corner-server.onrender.com/user", {
//                         method: "POST",
//                         headers: {
//                             "Content-Type": "application/json",
//                         },
//                         body: JSON.stringify(userInfo),
//                     })
//                         .then((res) => {
//                             if (!res.ok) {
//                                 throw new Error("Failed to authenticate user");
//                             }
//                             return res.json();
//                         })
//                         .then((data) => {
//                             localStorage.setItem("token", data?.token);
//                         })
//                         .catch((error) => {
//                             console.error("Error:", error);
//                         });
//                 }
//             })
//             .catch((error) => {
//                 console.error("Google login failed:", error);
//             });
//     };
//     return (
//         <button onClick={handleGoogleSignIn} className='btn w-full'>
//             <div className='flex items-center gap-2'>
//                 <FaGoogle />
//                 <p>Google</p>
//             </div>
//         </button>
//     );
// };

// export default GoogleLogin;

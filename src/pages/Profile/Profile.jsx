import React, { useEffect, useState } from 'react'
import useAuth from '../../hooks/useAuth'
// import { Link } from 'react-router-dom';

const Profile = () => {
    const { user } = useAuth();
    console.log(user)
    const [userInfo, setUserInfo] = useState();
    console.log(userInfo)

    useEffect(() => {
        fetch(`http://localhost:5000/user/${user?.email}`)
            .then((res) => res.json())
            .then((data) => setUserInfo(data));
    }, [user]);

    console.log(userInfo);
    return (
        <div>
            <div className="flex justify-between mb-7">
                <h1 className="text-3xl ">Profile Information</h1>
                {/* <Link
          to={`/dashboard/profile/edit/${userInfo?._id}`}
          className="btn btn-neutral btn-md"
        >
          Edit Profile
        </Link> */}
            </div>
            <div>
                <div className="avatar">
                    <div className="w-12 rounded-full border-2 border-black">
                        <img src={user?.photoURL || "/public/placeholder.jpg"} />
                    </div>
                </div>
                <h1>{userInfo?.name}</h1>
                <h1>{userInfo?.email}</h1>
            </div>
        </div>
    );
};

export default Profile
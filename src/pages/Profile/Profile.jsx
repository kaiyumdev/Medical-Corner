import React, { useEffect, useState } from 'react'
import useAuth from '../../hooks/useAuth'
import { Link } from 'react-router-dom';

const Profile = () => {
    const { user } = useAuth();
    const [userInfo, setUserInfo] = useState();

    useEffect(() => {
        fetch(`http://localhost:5000/user/${user?.email}`)
            .then((res) => res.json())
            .then((data) => setUserInfo(data));
    }, [user]);

    return (
        <div>
            <div className="flex justify-between mb-7">
                <div>
                <h1 className="text-3xl ">Profile Information</h1>
                </div>
                <Link
                    to={`/dashboard/profile/edit/${userInfo?._id}`}
                    className="btn btn-neutral btn-md"
                >
                    Edit Profile
                </Link>
            </div>
            <div>
                <h1>{userInfo?.name}</h1>
                <h1>{userInfo?.email}</h1>
            </div>
        </div>
    );
};

export default Profile
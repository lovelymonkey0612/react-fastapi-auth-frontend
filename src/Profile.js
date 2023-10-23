import React from 'react'
import { useNavigate } from "react-router";

const Profile = () => {
    const navigate = useNavigate();

    const signOut = () => {
        localStorage.removeItem("temitope");
        navigate("/");
    };

    return (
        <>
            <div style={{ marginTop: 20, minHeight: 700 }}>
                <h1>Profile page</h1>
                <p>Hello there, welcome to your profile page</p>

                <button onClick={signOut}>sign out</button>
            </div>
        </>
    )
}

export default Profile

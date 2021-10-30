import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import "./Header.css";

function Header() {
    const { user, signInWithGoogle, logOut } = useAuth();
    // <img className="user-img" src={user.photoURL} alt="" />
    return (
        <div className="header">
            <Link to="/"><h2>Good Travel</h2></Link>
            {user?.email && <nav>
                    <Link to="/my-orders">My Orders</Link>
                    <Link to="/all-orders">All Orders</Link>
                    <Link to="/add-service">Add Service</Link>
                </nav>

            }
            {user?.email ? 
                <button className="sign-in" onClick={logOut} >Sign Out</button> :
                <button className="sign-in" onClick={signInWithGoogle} >Sign In</button>
            }
        </div>
    );
};

export default Header;
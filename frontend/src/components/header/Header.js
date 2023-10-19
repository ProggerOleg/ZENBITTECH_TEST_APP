import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { clearUser } from '../../reducers/userReducer'; // Import your user-related actions and reducers
import { Outlet } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { useLogoutMutation } from '../../api/authApi';

import './header.css';

const Header = () => {
    // Get the user data from the Redux store
    const user = useSelector((state) => state.user.user);
    const dispatch = useDispatch();
    let navigate = useNavigate();
    const [logoutUser] = useLogoutMutation();;

    const handleLogout = async () => {
        // Dispatch the action to clear the user data when logging out
        const response = await logoutUser();
        dispatch(clearUser());
        return navigate("/");
    };

    return (
        <><header className='header-top-strip py-3'>
            <div className="container-xxl">
                <div className="row align-items-center">
                    <h2 className='position-absolute'><Link className='navbar-brand' to="/">Home</Link></h2>
                    <div className="d-flex justify-content-end btns gap-15 w-3">
                        {user ? (
                            // Display "Log Out" button when the user is authenticated
                            <button onClick={handleLogout} className='btn login' variant="primary">
                                Log Out
                            </button>
                        ) : (
                            // Display "Log In" and "Sign Up" buttons when the user is not authenticated
                            <>
                                <Link to="/login" className='btn login' variant="primary">Log In</Link>
                                <Link to="/sign_up" className='btn register' variant="secondary">Sign Up</Link>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </header>
            <Outlet /></>
    );
};

export default Header;

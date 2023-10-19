import React, { useState } from 'react';
import { useRegisterMutation } from '../../api/authApi'; // Import the register mutation hook from your authApi
import { useDispatch } from 'react-redux';
import { setUser } from '../../reducers/userReducer';
import { useNavigate } from "react-router-dom";

const SignUp = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Use the generated hook for the register mutation
    const [register, { isLoading, isError, error }] = useRegisterMutation();
    let navigate = useNavigate();
    const dispatch = useDispatch();
    const handleRegister = async (e) => {
        e.preventDefault(); // Prevent the form from submitting

        try {
            const response = await register({ name, email, password });
            dispatch(setUser(response));
            return navigate("/");
            // Handle successful registration, e.g., redirect to a login page or display a success message
        } catch (error) {
            // Handle registration error, e.g., display an error message
            console.error('Registration error:', error);
        }
    };

    return (
        <div className='d-flex align-items-center'>
            <div className='login-image-wrapper'>
                <img
                    className="login-image"
                    src="https://officelife.media/upload/iblock/a10/a10367285074a4057aa95bac47737047.jpg"
                    alt=""
                />
            </div>
            <div className='login-wrapper'>
                <h4>Sign Up</h4>
                <form onSubmit={handleRegister} className='d-flex w-100 flex-column' method="post">
                    <label htmlFor="name" className="label">Name</label>
                    <input
                        type="name"
                        placeholder='Name'
                        name=""
                        id="name"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <label htmlFor="email" className="label">Email</label>
                    <input
                        type="email"
                        placeholder='Email'
                        name=""
                        id="email"
                        className='mb-3'
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <label htmlFor="password" className="label">Password</label>
                    <input
                        type="password"
                        placeholder='Password'
                        id="password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <span className="forgot-password"></span>
                    <button type="submit" className='btn register w-100'>Create Account</button>
                    <span className="forgot-password no-acc">Already have an account? <a href="login">Log In</a></span>
                </form>
            </div>
        </div>
    );
};

export default SignUp;

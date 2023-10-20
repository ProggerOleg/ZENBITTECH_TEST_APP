import React, { useState } from 'react';
import { useLoginMutation } from '../../api/authApi';
import { useDispatch } from 'react-redux';
import { setUser } from '../../reducers/userReducer';
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';
import './login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Use the generated hook for the login mutation
    const [login, { isLoading, isError, error }] = useLoginMutation();

    const dispatch = useDispatch();
    let navigate = useNavigate();
    const handleLogin = async (e) => {
        e.preventDefault(); // Prevent the form from submitting

        try {
            const response = await login({ email, password });
            console.log(response);
            if (response && response.data.token) {
                dispatch(setUser(response.data));
                const refreshToken = Cookies.get('refreshToken');
                console.log(refreshToken);
                return navigate("/");
            } else {
                console.error("Login error: Invalid response");
            }
            // Handle successful login, e.g., redirect to another page or display a success message
        } catch (error) {
            // Handle login error, e.g., display an error message
            console.error('Login error:', error);
        }
    };

    return (
        <div className='d-flex align-items-center'>
            <div className='login-image-wrapper'>
                <img className="login-image" src="https://officelife.media/upload/iblock/a10/a10367285074a4057aa95bac47737047.jpg" alt="" />
            </div>
            <div className='login-wrapper'>
                <h4>Login</h4>
                <form onSubmit={handleLogin} className='d-flex w-100 flex-column' method="post">
                    <label htmlFor="email" className="label">Email</label>
                    <input
                        type="email"
                        placeholder='Email'
                        name=""
                        id="email"
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
                    <span className="forgot-password"><a href="forgot_password">Forgot Password ?</a></span>
                    <button type="submit" className='btn register w-100'>Sign In</button>
                    <span className="forgot-password no-acc">Don't have an account? <a href="sign_up">Sign Up</a></span>
                </form>
            </div>
        </div>
    );
};

export default Login;

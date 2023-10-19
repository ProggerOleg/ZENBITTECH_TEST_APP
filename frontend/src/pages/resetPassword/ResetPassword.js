import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useResetPasswordMutation } from '../../api/authApi';
import { useDispatch } from 'react-redux';
import { setUser } from '../../reducers/userReducer';

const ResetPassword = () => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState(null);

    const { token } = useParams(); // You can use useParams to get the token from the URL

    const [resetPassword] = useResetPasswordMutation();

    const dispatch = useDispatch();
    let navigate = useNavigate();

    const handleResetPassword = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setError('Passwords do not match.');
            return;
        }

        try {
            const response = await resetPassword({ password, token });
            dispatch(setUser(response));
            return navigate("/");
            // Handle success, e.g., show a success message or redirect to login
        } catch (error) {
            setError('Password reset failed. Please try again later.');
            console.error('Reset password error:', error);
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
                <h4>Reset Password</h4>
                <form onSubmit={handleResetPassword} className='d-flex w-100 flex-column' method="post">
                    <label htmlFor="password" className="label">New Password</label>
                    <input
                        type="password"
                        placeholder='Enter your new password'
                        name="password"
                        id="password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <label htmlFor="confirmPassword" className="label">Confirm Password</label>
                    <input
                        type="password"
                        placeholder='Confirm your password'
                        name="confirmPassword"
                        id="confirmPassword"
                        className='mb-4'
                        required
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    {error && <p className="error-message">{error}</p>}
                    <button type="submit" className='btn register w-100'>Reset Password</button>
                </form>
                <span className="forgot-password no-acc">
                    Don't have an account? <a href="sign_up">Sign Up Now</a>
                </span>
            </div>
        </div>
    );
};

export default ResetPassword;

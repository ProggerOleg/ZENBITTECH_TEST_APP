import React, { useState, useEffect } from 'react';
import { useForgotPasswordMutation } from '../../api/authApi'; // Import the forgot password mutation hook from your authApi

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [isLoading, setLoading] = useState(false);
    const [isButtonDisabled, setButtonDisabled] = useState(false);

    // Use the generated hook for the forgot password mutation
    const [forgotPassword] = useForgotPasswordMutation();

    const handleForgotPassword = async (e) => {
        e.preventDefault(); // Prevent the form from submitting

        try {
            setLoading(true);
            const response = await forgotPassword({ email });
            console.log(response);
            if (response.error || response.messsage) {
                console.error('Sending mail error:', response.error.data.message);
            } else {
                setLoading(true);
                setButtonDisabled(true);
            }
            // Handle the success, e.g., display a message informing the user to check their email
        } catch (error) {
            // Handle the error, e.g., display an error message
            console.error('Forgot password error:', error.data.message);
        }
    };

    useEffect(() => {
        if (isButtonDisabled) {
            const timer = setTimeout(() => {
                setButtonDisabled(false); // Re-enable the button after a minute
            }, 60000); // 60000 milliseconds = 1 minute

            return () => {
                clearTimeout(timer); // Clean up the timer if the component unmounts
            };
        }
    }, [isButtonDisabled]);
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
                <h4>Forgot Password</h4>
                <form onSubmit={handleForgotPassword} className='d-flex w-100 flex-column' method="post">
                    <label htmlFor="email" className="label">Email</label>
                    <input
                        type="email"
                        placeholder='Enter your email'
                        name=""
                        id="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <button type="submit" className='btn register w-100' disabled={isLoading || isButtonDisabled}>
                        {isLoading ? 'Sending Email...' : 'Send Email'}
                    </button>
                    <span className="forgot-password no-acc">
                        Don't have an account? <a href="sign_up">Sign Up Now</a>
                    </span>
                </form>
            </div>
        </div>
    );
};

export default ForgotPassword;

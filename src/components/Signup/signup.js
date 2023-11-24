import React, { useState } from 'react';
import './signup.css';

const Signup = () => {
    const [mobileNumber, setMobileNumber] = useState('');

    const handleInputChange = (event) => {
        setMobileNumber(event.target.value);
    }

    return (
        <div className="signup-container">
            <h2>Looks like you're new here!</h2>
            <p>Sign up with your mobile number to get started</p>
            <input
                type="text"
                placeholder="Enter Mobile number"
                value={mobileNumber}
                onChange={handleInputChange}
            />
            <p>By continuing, you agree to Flip</p>
            <button>Continue</button>
            <button>Login</button>
        </div>
    );
}

export default Signup;

import React, { useState } from "react";
import "./styles.css";

export default function MainApp() {
    const [isLogin, setIsLogin] = useState(true);
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");

    const submitHandler = (event) => {
        event.preventDefault();

        // Check if the password meets the constraints
        const isPasswordValid = validatePassword(password);

        if (!isPasswordValid) {
            setPasswordError(
                "Password must be at least 8 characters long, contain Capital letter (A-Z), Small letters (a-z), Numbers (0-9), and special character."
            );
            return;
        }

        if (!isLogin) {
            // If it's a sign-up form, check if the passwords match
            if (password !== confirmPassword) {
                setConfirmPasswordError("Passwords do not match");
                return;
            }
        }

        console.log("Submitted!");
    };

    const validatePassword = (password) => {
        const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return passwordRegex.test(password);
    };

    return (
        <div className="App">
            <div className="login-container">
                <h1>{isLogin ? "Login" : "Sign Up"}</h1>
                <form onSubmit={submitHandler}>
                    {!isLogin && (
                        <div className="form-control">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" required />
                        </div>
                    )}
                    <div className="form-control">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" required />
                    </div>
                    <div className="form-control">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            required
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value);
                                setPasswordError(""); // Clear any previous error message
                            }}
                        />
                        {passwordError && <p className="error-message">{passwordError}</p>}
                    </div>
                    {!isLogin && (
                        <div className="form-control">
                            <label htmlFor="confirm-password">Confirm Password</label>
                            <input
                                type="password"
                                id="confirm-password"
                                required
                                value={confirmPassword}
                                onChange={(e) => {
                                    setConfirmPassword(e.target.value);
                                    setConfirmPasswordError(""); // Clear any previous error message
                                }}
                            />
                            {confirmPasswordError && (
                                <p className="error-message">{confirmPasswordError}</p>
                            )}
                        </div>
                    )}
                    <button type="submit">{isLogin ? "Login" : "Sign Up"}</button>
                </form>
                {isLogin ? (
                    <><br></br>
                        New to Flipkart?{" "}
                        <a href="#" onClick={() => setIsLogin(false)}>
                            Create an account
                        </a>
                    </>
                ) : (
                    <><br></br>
                        Already have an account?{" "}
                        <a href="#" onClick={() => setIsLogin(true)}>
                            Login
                        </a>
                    </>
                )}
            </div>
        </div>
    );
}
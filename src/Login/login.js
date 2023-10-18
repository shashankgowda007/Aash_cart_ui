import React from 'react';

function LoginForm() {
    return (
        <div className="form-container">
            <h2>Login</h2>
            <form>
                <label>Email:
                    <input type="email" />
                </label>
                <label>Password:
                    <input type="password" />
                </label>
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default LoginForm;
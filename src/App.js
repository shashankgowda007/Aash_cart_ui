import React, { useState } from 'react';
import LoginForm from './Login/login'; // Update the import path
import SignupForm from './Signup/signup'; // Update the import path
import './App.css';

function App() {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="aash-cart-title">AASH Cart</h1>
        {showLogin ? (
          <LoginForm />
        ) : (
          <SignupForm />
        )}
        <button onClick={() => setShowLogin(!showLogin)}>
          {showLogin ? 'Switch to Sign Up' : 'Switch to Login'}
        </button>
      </header>
    </div>
  );
}

export default App;

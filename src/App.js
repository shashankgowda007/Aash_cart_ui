import React from 'react';
import SiteHeader from './components/SiteHeader/Site_Header'; // Import the SiteHeader component

function App() {
  return (
    <div className="App">
      <SiteHeader />

      <div className="content">
        <h1>Welcome to Aash Cart</h1>
        <p>Find the best products and brands here.</p>
      </div>
    </div>
  );
}

export default App;

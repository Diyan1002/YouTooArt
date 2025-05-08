import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './Pages/Login';
import OtpVerification from './components/OtpVerification';
import CreateAccount from './components/CreateAccount'; // Import the CreateAccount component

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/talent" element={<Home />} />
        <Route path="/login" element={<Login />} /> {/* Add this line */}
        <Route path="/verify-otp" element={<OtpVerification />} />
        <Route path="/create-account" element={<CreateAccount />} /> {/* Add this line */}

      </Routes>
    </Router>
  );
};

export default App;

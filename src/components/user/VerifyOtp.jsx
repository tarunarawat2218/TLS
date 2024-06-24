import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import axios from 'axios';
import Alert from '@mui/material/Alert'; // Import Alert from Material-UI

const VerifyOtp = () => {
  const [otp, setOtp] = useState('');
  const [showAlert, setShowAlert] = useState(false); // State to manage alert visibility
  const navigate = useNavigate(); // Get navigate function for redirection

  const handleChange = (e) => {
    setOtp(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/verify-otp', { otp });
      if (res.data.success) {
        setShowAlert(true); // Show success alert
        setTimeout(() => {
          navigate('/login'); // Redirect to login page after 2 seconds
        }, 2000);
      } else {
        alert(res.data.message); // Show error message
      }
    } catch (error) {
      console.error('Error during OTP verification', error);
    }
  };

  return (
    <div>
      <h2>Verify OTP</h2>
      {showAlert && (
        <Alert severity="success" onClose={() => setShowAlert(false)}>Registration successful</Alert>
      )}
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter OTP" onChange={handleChange} />
        <button type="submit">Verify</button>
      </form>
    </div>
  );
};

export default VerifyOtp;

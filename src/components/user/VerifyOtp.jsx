import React, { useState } from 'react';
import axios from 'axios';

const VerifyOtp = () => {
  const [otp, setOtp] = useState('');

  const handleChange = (e) => {
    setOtp(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/verify-otp', { otp });
      if (res.data.success) {
        alert('Registration successful');
        // Redirect to login or home page
      } else {
        alert(res.data.message);
      }
    } catch (error) {
      console.error('Error during OTP verification', error);
    }
  };

  return (
    <div>
      <h2>Verify OTP</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter OTP" onChange={handleChange} />
        <button type="submit">Verify</button>
      </form>
    </div>
  );
};

export default VerifyOtp;


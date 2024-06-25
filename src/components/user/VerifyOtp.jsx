import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Alert from '@mui/material/Alert';
import { Card, CardContent, Typography, TextField, Button, Box } from '@mui/material';

const VerifyOtp = () => {
  const [otp, setOtp] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setOtp(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/v1/auth/verify-otp', { otp });
      if (res.data.success) {
        setShowAlert(true);
        setTimeout(() => {
          navigate('/login');
        }, 2000);
      } else {
        setError(res.data.message);
      }
    } catch (error) {
      setError('Error during OTP verification');
    }
  };

  return (
    <Box style={{ position: 'relative', overflowY: 'hidden', backgroundColor: "#EEF7FF", minHeight: '100vh' }}>
      <Card style={{ maxWidth: 400, margin: 'auto', marginTop: 100, padding: 20 }}>
        <CardContent>
          <Typography variant="h5" align="center" gutterBottom>
            Verify OTP
          </Typography>
          {showAlert && <Alert severity="success">Registration successful</Alert>}
          {error && <Alert severity="error">{error}</Alert>}
          <form onSubmit={handleSubmit}>
            <TextField
              name="otp"
              type="text"
              label="Enter OTP"
              variant="outlined"
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <Button variant="contained" color="primary" type="submit" fullWidth>
              Verify
            </Button>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
};

export default VerifyOtp;

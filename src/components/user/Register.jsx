import React, { useState } from 'react';
import axios from 'axios';
import { styled } from '@mui/system';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { useSpring, animated } from '@react-spring/web';

import { Grid } from '@mui/material';

const StyledCard = styled(Card)({
  maxWidth: 400,
  margin: 'auto',
  marginBottom: '10rem', // Adjusted to reduce excessive margin
  marginTop: 100,
  padding: 20,
});

const StyledForm = styled('form')({
  display: 'flex',
  flexDirection: 'column',
  gap: 15, // Add gap between text fields
  marginTop: 50,
});

const Register = ({ setOtpPage }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/v1/auth/register', formData);
      if (res.data.success) {
        setOtpPage(true);
      } else {
        alert(res.data.message);
      }
    } catch (error) {
      console.error('Error during registration', error);
    }
  };

  const floatingAnimation1 = useSpring({
    loop: true,
    from: { transform: 'translateY(0px)' },
    to: [
      { transform: 'translateY(-10px)' },
      { transform: 'translateY(0px)' },
      { transform: 'translateY(10px)' },
      { transform: 'translateY(0px)' },
    ],
    config: { duration: 1000 },
  });

  const floatingAnimation2 = useSpring({
    loop: true,
    from: { transform: 'translateY(0px)' },
    to: [
      { transform: 'translateY(10px)' },
      { transform: 'translateY(0px)' },
      { transform: 'translateY(-10px)' },
      { transform: 'translateY(0px)' },
    ],
    config: { duration: 1000 },
  });

  const floatingAnimation3 = useSpring({
    loop: true,
    from: { transform: 'translateY(0px)' },
    to: [
      { transform: 'translateY(-15px)' },
      { transform: 'translateY(0px)' },
      { transform: 'translateY(15px)' },
      { transform: 'translateY(0px)' },
    ],
    config: { duration: 1000 },
  });

  const floatingAnimation4 = useSpring({
    loop: true,
    from: { transform: 'translateY(0px)' },
    to: [
      { transform: 'translateY(20px)' },
      { transform: 'translateY(0px)' },
      { transform: 'translateY(-20px)' },
      { transform: 'translateY(0px)' },
    ],
    config: { duration: 1000 },
  });

  const floatingAnimation5 = useSpring({
    loop: true,
    from: { transform: 'translateY(0px)' },
    to: [
      { transform: 'translateY(-25px)' },
      { transform: 'translateY(0px)' },
      { transform: 'translateY(25px)' },
      { transform: 'translateY(0px)' },
    ],
    config: { duration: 1000 },
  });
  return (
    <Box style={{ position: 'relative', overflowY : 'hidden', backgroundColor: "#EEF7FF", minHeight: '100vh' }}>
      
        
          <StyledCard>
            <CardContent>
              <Typography variant="h5" align="center" gutterBottom>
                Logo
              </Typography>
              <Typography variant="h6" align="center" gutterBottom>
                Welcome, create your account
              </Typography>
              <StyledForm onSubmit={handleSubmit}>
                <TextField
                  name="name"
                  type="text"
                  label="Name"
                  variant="outlined"
                  onChange={handleChange}
                />
                <TextField
                  name="phone"
                  type="text"
                  label="Phone Number"
                  variant="outlined"
                  onChange={handleChange}
                />
                <TextField
                  name="email"
                  type="email"
                  label="Email ID"
                  variant="outlined"
                  onChange={handleChange}
                />
                <TextField
                  name="address"
                  type="text"
                  label="Address"
                  variant="outlined"
                  onChange={handleChange}
                />
                <TextField
                  name="password"
                  type="password"
                  label="Password"
                  variant="outlined"
                  onChange={handleChange}
                />
                <Button variant="contained" color="primary" type="submit">
                  Register
                </Button>
              </StyledForm>
              <Typography variant="body2" color="textSecondary" style={{ marginTop: '2rem' }}>
                Already have an account? <Link href="/login">Login</Link>
              </Typography>
            </CardContent>
          </StyledCard>
       
          <animated.div
        style={{
          position: 'absolute',
          top: '15%',
          left: '10%',
          width: '60px',
          height: '60px',
          backgroundImage: 'url(https://data.themeim.com/html/tutorgo/assets/img/icons/dots-shapes.png)',
          backgroundSize: 'cover',
          ...floatingAnimation1,
        }}
      />
      <animated.div
        style={{
          position: 'absolute',
          top: '20%',
          right: '5%',
          width: '50px',
          height: '50px',
          backgroundImage: 'url(https://data.themeim.com/html/tutorgo/assets/img/icons/role-shape.png)',
          backgroundSize: 'cover',
          ...floatingAnimation2,
        }}
      />
      <animated.div
        style={{
          position: 'absolute',
          top: '70%',
          left: '97%',
          width: '50px',
          height: '50px',
          backgroundImage: 'url(https://data.themeim.com/html/tutorgo/assets/img/icons/lines-shape.png)',
          backgroundSize: 'cover',
          ...floatingAnimation3,
        }}
      />
      <animated.div
        style={{
          position: 'absolute',
          top: '5%',
          left: '50%',
          width: '60px',
          height: '60px',
          backgroundImage: 'url(https://data.themeim.com/html/tutorgo/assets/img/icons/book-shape.png)',
          backgroundSize: 'cover',
          ...floatingAnimation4,
        }}
      />
      <animated.div
        style={{
          position: 'absolute',
          top: '60%',
          right: '95%',
          width: '50px',
          height: '50px',
          backgroundImage: 'url(https://data.themeim.com/html/tutorgo/assets/img/icons/circle-shape.png)',
          backgroundSize: 'cover',
          ...floatingAnimation5,
        }}
      />

        
    </Box>
  );
};

export default Register;

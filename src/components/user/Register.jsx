import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/system';
import { Card, CardContent, Typography, TextField, Button, Box, Link } from '@mui/material';
import { registerUser } from '../../redux/slice/userSlice';
import { useSpring, animated } from '@react-spring/web';

const StyledCard = styled(Card)({
  maxWidth: 400,
  margin: 'auto',
  marginBottom: '10rem',
  marginTop: 100,
  padding: 20,
});

const StyledForm = styled('form')({
  display: 'flex',
  flexDirection: 'column',
  gap: 15,
  marginTop: 50,
});

const Register = ({ setOtpPage }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    address: '',
    answer: '',
  });

  
  
  // const { isLoading, error } = useSelector(state => state.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userStatus = useSelector((state) => state.user.status);
  const userError = useSelector((state) => state.user.error);
  // const { isLoading, error, isRegistered } = useSelector(state => state.user);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser(formData)).then(() => {
      navigate('/verify-otp');
    });
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
    <Box style={{ position: 'relative', overflowY: 'hidden', backgroundColor: "#EEF7FF", minHeight: '100vh' }}>
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
              name="email"
              type="email"
              label="Email ID"
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
            <TextField
              name="phone"
              type="text"
              label="Phone Number"
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
              name="answer"
              type="answer"
              label="Answer"
              variant="outlined"
              onChange={handleChange}
            />
            <Button variant="contained" color="primary" type="submit">
              Register
            </Button>
          </StyledForm>
          {userStatus === 'loading' && <Typography variant="body2" color="textSecondary" align="center">Registering...</Typography>}
          {userError && <Typography variant="body2" color="error" align="center">{userError}</Typography>}
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

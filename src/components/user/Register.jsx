import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../../redux/slice/userSlice'; // Adjust the path according to your project structure
import { TextField,Link, Button, Typography, Box } from '@mui/material';
import { styled } from '@mui/system';
import CircularProgress from '@mui/material/CircularProgress'; // Import CircularProgress for the preloader

const StyledCard = styled(Box)({
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
    phone: '',
    email: '',
    address: '',
    password: '',
  });

  const dispatch = useDispatch();
  const userStatus = useSelector((state) => state.user.status);
  const userError = useSelector((state) => state.user.error);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(registerUser(formData));
  };

  return (
    <Box style={{ position: 'relative', overflowY: 'hidden', backgroundColor: "#EEF7FF", minHeight: '100vh' }}>
      <StyledCard>
        <Typography variant="h5" align="center" gutterBottom>
          Logo
        </Typography>
        <Typography variant="h6" align="center" gutterBottom>
          Welcome, create your account
        </Typography>
        <StyledForm onSubmit={handleSubmit}>
          <TextField name="name" type="text" label="Name" variant="outlined" onChange={handleChange} />
          <TextField name="phone" type="text" label="Phone Number" variant="outlined" onChange={handleChange} />
          <TextField name="email" type="email" label="Email ID" variant="outlined" onChange={handleChange} />
          <TextField name="address" type="text" label="Address" variant="outlined" onChange={handleChange} />
          <TextField name="password" type="password" label="Password" variant="outlined" onChange={handleChange} />
          <TextField name="answer" type="answer" label="answer" variant="outlined" onChange={handleChange} />
          <Button variant="contained" color="primary" type="submit" disabled={userStatus === 'loading'}>
            {userStatus === 'loading' ? <CircularProgress size={24} /> : 'Register'}
          </Button>
        </StyledForm>
        {userStatus === 'loading' && <Typography variant="body2" color="textSecondary" align="center">Registering...</Typography>}
        {userError && <Typography variant="body2" color="error" align="center">{userError}</Typography>}
        <Typography variant="body2" color="textSecondary" style={{ marginTop: '2rem' }}>
          Already have an account? <Link href="/login">Login</Link>
        </Typography>
      </StyledCard>
    </Box>
  );
};

export default Register;

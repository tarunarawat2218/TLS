import React, { useState, useRef } from 'react';
import { AppBar, Toolbar, Snackbar, Alert, Typography, Button, Container, Box, Grid, TextField, MenuItem, Dialog, DialogContent, DialogActions, DialogTitle } from '@mui/material';
import { styled } from '@mui/system';
import Footer from '../footer/Footer';
import Navbar from '../header/Navbar';

const Banner = styled(Box)(({ theme }) => ({
  backgroundColor: '#003285',
  color: 'white',
  textAlign: 'center',
  padding: theme.spacing(20, 0),
}));

const Benefits = styled(Container)(({ theme }) => ({
  marginTop: theme.spacing(50),
  display: 'contents',
  justifyContent: 'center',
  gap: theme.spacing(2),
}));

const BenefitBox = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  padding: theme.spacing(2),
  boxShadow: '0px 4px 12px #F5DAD2',
  borderRadius: '8px',
  backgroundColor: 'white',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '200px', // Adjusted width
  height: '150px', // Adjusted height
}));

const FormContainer = styled(Container)(({ theme }) => ({
  marginTop: theme.spacing(10),
  padding: theme.spacing(4),
  backgroundColor: '#f5f5f5',
  borderRadius: '8px',
  boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
}));

const FormField = styled(TextField)(({ theme }) => ({
  margin: theme.spacing(1, 0),
}));

const benefits = [
  // {title:'Virtual Mode', icon:'👨🏻‍💻'},
  { title: 'Flexible Schedules', icon: '🕒' },
  { title: 'Industry Approach', icon: '🏭' },
  { title: 'Dedicated Mentor', icon: '👨‍🏫' },
  { title: 'Live Projects', icon: '📊' },
  { title: 'Multiple Technologies', icon: '💻' },
  { title: 'Dual Certification', icon: '📜' },
];

const domains = [
  'Artificial Intelligence',
  'Sales',
  'Full Stack Development',
  'Marketing',
  'Accountant',
  'Java Developer',
  'Project Manager',
  'Data Science',
  'Cyber Security',
];

const InternshipPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobileNumber: '',
    email: '',
    domain: '',
  });

  const [dialogOpen, setDialogOpen] = useState(false);
  const [alertOpen, setAlertOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  const formRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, mobileNumber, email, domain } = formData;

    if (!name || !mobileNumber || !email || !domain) {
      setAlertMessage('Please complete all fields');
      setAlertOpen(true);
    } else {
      setDialogOpen(true);
    }
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  const handleCloseAlert = () => {
    setAlertOpen(false);
  };

  const handleExploreClick = () => {
    formRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Box>
      <Navbar/>
      <Banner>
        <Typography variant="h3" fontWeight="bold">Internship Program 2024</Typography>
        <Typography variant="h5">"Embark on Your Career Journey: Where Opportunities and Ambitions Collide!"</Typography>
        <Button variant="contained" color="secondary" sx={{ marginTop: 2 }} onClick={handleExploreClick}>
          Explore Internships
        </Button>
      </Banner>

      <Benefits>
        <Typography variant="h4" align="center" fontWeight='bold'  marginTop='2rem' gutterBottom>Internship Benefits</Typography>
        <Grid container spacing={2} justifyContent="center" marginTop='2rem'>
          {benefits.map((benefit, index) => (
            <Grid item xs={12} sm={6} md={2} lg={2} key={index} display="flex" justifyContent="center">
              <BenefitBox>
                <Typography variant="h6">{benefit.icon}</Typography>
                <Typography variant="subtitle1">{benefit.title}</Typography>
              </BenefitBox>
            </Grid>
          ))}
        </Grid>
      </Benefits>

      <FormContainer ref={formRef} marginTop='10rem'>
        <Grid container spacing={4} >
          <Grid item xs={12} md={6}>
            <Typography variant="h4" align="center">Apply for Internship</Typography>
            <form noValidate autoComplete="off" onSubmit={handleSubmit}>
              <FormField
                fullWidth
                label="Name"
                variant="outlined"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              <FormField
                fullWidth
                label="Mobile Number"
                variant="outlined"
                name="mobileNumber"
                value={formData.mobileNumber}
                onChange={handleChange}
              />
              <FormField
                fullWidth
                label="Email ID"
                variant="outlined"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              <FormField
                fullWidth
                select
                label="Interested Domain"
                variant="outlined"
                name="domain"
                value={formData.domain}
                onChange={handleChange}
              >
                {domains.map((domain, index) => (
                  <MenuItem key={index} value={domain}>{domain}</MenuItem>
                ))}
              </FormField>
              <Box display="flex" justifyContent="center">
                <Button variant="contained" color="primary" type="submit">Submit</Button>
              </Box>
            </form>
          </Grid>
          <Grid item xs={12} md={6} display="flex" justifyContent="center" alignItems="center">
            <Box
              component="img"
              src="https://cdn.pixabay.com/photo/2021/09/07/20/28/woman-6604888_640.png"
              alt="Internship"
              sx={{ width: '100%', maxWidth: '400px', height: 'auto' }}
            />
          </Grid>
        </Grid>
      </FormContainer>

      <Dialog open={dialogOpen} onClose={handleCloseDialog}>
        <DialogTitle>Congratulations 🎉🎊</DialogTitle>
        <DialogContent>
          <Typography>Your form has been submitted!</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">Close</Button>
        </DialogActions>
      </Dialog>

      <Snackbar
        open={alertOpen}
        autoHideDuration={6000}
        onClose={handleCloseAlert}
      >
        <Alert onClose={handleCloseAlert} severity="error" sx={{ width: '100%' }}>
          {alertMessage}
        </Alert>
      </Snackbar>
      <Footer/>
    </Box>
  );
};

export default InternshipPage;

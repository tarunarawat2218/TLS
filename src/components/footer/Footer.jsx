// Footer.js
import React from 'react';
import { Container, Grid, Typography, IconButton, Box } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
// import Logo from './logo.png';
 // Ensure you have a logo.png in your src directory or update the path

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#EEF7FF', padding: '100px 0', marginTop: '40px' }}>
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item xs={12} sm={6} md={3}>
            <Box mb={2}>
              <img src="" alt="Logo" style={{ maxWidth: '100px' }} />
              <Typography variant='h4'>Logo</Typography>
              <p>Aut cum mollitia reprehenderit. Eos cumque dicta adipisci amet architecto culpa.</p>
            </Box>
            
            <Typography variant="h6" gutterBottom>
              Company
            </Typography>
            <Typography variant="body2">About Us</Typography>
            <Typography variant="body2">Careers</Typography>
            <Typography variant="body2">Press</Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Follow Us
            </Typography>
            <IconButton href="https://www.instagram.com" target="_blank" aria-label="Instagram" sx={{ color: '#E4405F' }}>
              <InstagramIcon />
            </IconButton>
            <IconButton href="https://www.facebook.com" target="_blank" aria-label="Facebook" sx={{ color: '#1877F2' }}>
              <FacebookIcon />
            </IconButton>
            <IconButton href="https://www.twitter.com" target="_blank" aria-label="Twitter" sx={{ color: '#1DA1F2' }}>
              <TwitterIcon />
            </IconButton>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Resources
            </Typography>
            <Typography variant="body2">Blog</Typography>
            <Typography variant="body2">Help Center</Typography>
            <Typography variant="body2">Contact Us</Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Legal
            </Typography>
            <Typography variant="body2">Privacy Policy</Typography>
            <Typography variant="body2">Terms of Service</Typography>
            <Typography variant="body2">Cookie Policy</Typography>
          </Grid>
          
        </Grid>
        <Typography variant="body2" color="textSecondary" align="center" style={{ marginTop: '20px' }}>
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;

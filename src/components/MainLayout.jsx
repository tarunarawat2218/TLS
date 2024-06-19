import React from 'react';
import { Box, CssBaseline } from '@mui/material';
import Navbar from './header/Header';
import Footer from './footer/Footer';
import CoursesGrid from './content/CoursesGrid';
import CollegesSlider from './content/CollegeSlider';
import BenefitSection from './content/Content';
// import Banner from './header/Banner';
import Partners from './header/Partners';
import Boxes from './header/Boxes'

const MainLayout = () => {
  return (
    <main style={{ fontFamily: "'Noto Serif', serif" }}>
      <Navbar />
      <Partners/>
      <Boxes/>
      <Box sx={{ marginTop:'2rem', width: '100%', minHeight: '100vh',  backgroundColor: '#EEF7FF' }}>
        <CssBaseline />
        <BenefitSection />
      </Box>
      <Box sx={{ width: '100%', backgroundColor: 'white', minHeight: '100vh', py: 8 }}>
        <CssBaseline />
        <CoursesGrid />
        <CollegesSlider />
      </Box>
      
      <Footer />
    </main>
  );
};

export default MainLayout;

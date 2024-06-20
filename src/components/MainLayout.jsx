import React from 'react';
import { Box, CssBaseline } from '@mui/material';
import Navbar from './header/Navbar';
import Footer from './footer/Footer';
import CoursesGrid from './content/CoursesGrid';
import CollegesSlider from './content/CollegeSlider';
import BenefitSection from './content/Content';
import Header from './header/Header';
import Partners from './header/Partners';
import Boxes from './header/Boxes'

const MainLayout = () => {
  return (
    <main style={{ fontFamily: "'Noto Serif', serif" }}>
      <Navbar />
     <Header/>
      <Partners/>
      <Boxes/>
      <Box sx={{ marginTop:'2rem', width: '100%', minHeight: '100vh',  backgroundColor: '#EEF7FF' }}>
        <CssBaseline />
        <BenefitSection />
      </Box>
      <Box sx={{ width: '100%', backgroundColor: 'white', minHeight: '50vh', py: 8 }}>
        <CssBaseline />
        {/* <CoursesGrid /> */}
        <CollegesSlider />
      </Box>
      
      <Footer />
    </main>
  );
};

export default MainLayout;

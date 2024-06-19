import React from 'react';
import { Box } from '@mui/material';
import UnderGraduateCard from './UnderGraduateCard';

const CollegeList = ({ colleges }) => {
  return (
    <Box>
      {colleges.map((college) => (
        <UnderGraduateCard key={college.id} college={college} />
      ))}
    </Box>
  );
};

export default CollegeList;

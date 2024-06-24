import React from 'react';
import { Slider, Typography, Box } from '@mui/material';

function Filters({ priceRange, setPriceRange, durationRange, setDurationRange }) {
  const handlePriceChange = (event, newValue) => {
    setPriceRange(newValue);
  };

  const handleDurationChange = (event, newValue) => {
    setDurationRange(newValue);
  };

  return (
    <Box mb={4}>
      <Typography variant="h6">Filter by Price</Typography>
      <Slider
        value={priceRange}
        onChange={handlePriceChange}
        valueLabelDisplay="auto"
        min={0}
        max={2000}
      />
      <Typography variant="h6" mt={4}>Filter by Duration (months)</Typography>
      <Slider
        value={durationRange}
        onChange={handleDurationChange}
        valueLabelDisplay="auto"
        min={1}
        max={6}
      />
    </Box>
  );
}

export default Filters;

import React from 'react';
import { Slider, Typography, Box } from '@mui/material';

function Filters({ priceRange, setPriceRange }) {
const handlePriceChange = (event, newValue) => {
setPriceRange(newValue);
};

return (
<Box mb={4}>
<Typography variant="h6">Filter by Price</Typography>
<Slider
     value={priceRange}
     onChange={handlePriceChange}
     valueLabelDisplay="auto"
     min={0}
     max={1000}
   />
</Box>
);
}

export default Filters;
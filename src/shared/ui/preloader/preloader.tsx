import { Box, LinearProgress } from '@mui/material';
import React from 'react';

const Preloader = () => {
  return (
    <Box sx={{position:'absolute', top: 0, left: 0, width: '100%'}}>
      <LinearProgress />
    </Box>
  );
};

export default Preloader;

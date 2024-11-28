import { Box, LinearProgress } from '@mui/material';

const Preloader = () => {
  return (
    <Box sx={{position:'absolute', top: 0, left: 0, width: '100%'}}>
      <LinearProgress />
    </Box>
  );
};

export default Preloader;

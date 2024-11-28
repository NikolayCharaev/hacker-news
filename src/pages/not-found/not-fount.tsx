import { Box, Stack, Typography, useTheme } from '@mui/material';
import cat from './assets/sad-cat.gif';

const NotFound = () => {
  const theme = useTheme()
  return (
    <Box
      sx={{ position: 'absolute', top: '10%', left: '50%', transform: 'translate(-50%,50%)' }}
      textAlign={'center'}>
      <Stack flexDirection={'column'} alignItems={'center'} spacing={3}>
        <Typography color={theme.palette.custom.white} variant="h6">Такой страницы нет...</Typography>
        <img src={cat} alt="грустный котик(" />
      </Stack>
    </Box>
  );
};

export default NotFound;

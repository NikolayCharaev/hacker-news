import { Box, Container, Stack, Typography, useTheme } from '@mui/material';
import logo from './assets/icons/logo.svg';
import { useNavigate } from 'react-router-dom';
const Header = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate('/');
  };

  const theme  = useTheme()
  return (
    <Container maxWidth="xl">
      <Stack
        marginTop={2}
        sx={{
          padding: '10px',
          backgroundColor: (theme) => theme.palette.custom.darkGrey,
          borderRadius: '15px',
        }}
        alignItems={'center'}
        flexDirection={'row'}
        justifyContent={'space-between'}>
        <Box sx={{ cursor: 'pointer' }} onClick={handleNavigate}>
          <img className="logo" src={logo} alt="logo" />
        </Box>
        <Box sx={{ cursor: 'pointer' }} onClick={handleNavigate}>
          <Typography
            variant="h5"
            color={theme.palette.custom.white}
            sx={{
              fontSize: {
                xs: '14px',
                sm: '16px',
                md: '17px',
                lg: '18px',
                xl: '20px',
              },
            }}>
            Hacker News
          </Typography>
        </Box>
      </Stack>
    </Container>
  );
};

export default Header;

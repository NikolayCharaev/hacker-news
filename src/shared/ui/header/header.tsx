import { Box, Container, Stack, Typography } from '@mui/material';
import logo from './assets/icons/logo.svg';
import { useNavigate } from 'react-router-dom';
const Header = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate('/');
  };
  return (
    <Container maxWidth="xl">
      <Stack marginTop={2} sx={{padding: '10px', backgroundColor: theme => theme.palette.custom.darkGrey, borderRadius:'15px'}} alignItems={'center'}  flexDirection={'row'} justifyContent={'space-between'}>
        <Box sx={{ cursor: 'pointer',  }} onClick={handleNavigate}>
          <img className="logo" src={logo} alt="logo" />
        </Box>
        <Box sx={{ cursor: 'pointer',  }} onClick={handleNavigate}>
            <Typography variant='h5'>Hacker News</Typography>
        </Box>
      </Stack>
    </Container>
  );
};

export default Header;

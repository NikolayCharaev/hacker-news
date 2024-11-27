import { Container, Box } from '@mui/material';
import Button from '@mui/material/Button';
const Home = () => {
  return (
    <Container maxWidth="xl">
      <Box marginTop={20}>
        <Button
          sx={{ backgroundColor: (theme) => theme.palette.secondary.main }}
          variant="contained">
          Hello world
        </Button>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt culpa animi a commodi maxime,
        exercitationem, quam aut temporibus architecto nihil molestias iste. Sed ea possimus
        voluptatibus aliquid, modi iusto tempora.



        тут будет таблица))
      </Box>
    </Container>
  );
};

export default Home;

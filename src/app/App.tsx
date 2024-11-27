import Button from '@mui/material/Button';
import { useGetPokemonByNameQuery } from '../libs/model/news/api/news.api';
function App() {
  const { data, error, isLoading } = useGetPokemonByNameQuery('bulbasaur')

  console.log(data)
  return (
    <>

    <Button sx={{backgroundColor: (theme => theme.palette.secondary.main)}} variant="contained">Hello world</Button>

    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt culpa animi a commodi maxime, exercitationem, quam aut temporibus architecto nihil molestias iste. Sed ea possimus voluptatibus aliquid, modi iusto tempora.
    </>
  )
}

export default App

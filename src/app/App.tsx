import { useGetPokemonByNameQuery } from '../libs/model/news/api/news.api';
// import { Header } from '../shared/ui/header/';
import Header from '../shared/ui/header/header';

function App() {
  const { data, error, isLoading } = useGetPokemonByNameQuery('bulbasaur');

  console.log(data);
  return (
   <>

   </>
  );
}

export default App;

import { useGetPokemonByNameQuery } from '../libs/model/news/api/news.api';


function App() {
  const { data, error, isLoading } = useGetPokemonByNameQuery('bulbasaur');

  console.log(data);
  return (
   <>
   
   </>
  );
}

export default App;

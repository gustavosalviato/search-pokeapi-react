import { useState } from 'react';
import './App.css';
import { Search } from './components/Search';
import { fetchPokemon } from './services/getPokemon';

export const App = () => {
  const [pokemon, setPokemon] = useState();
  const [loading, setLoading] = useState(false);

  const getPokemon = async (query) => {
    setLoading(true);
    const response = await fetchPokemon(query);
    const results = await response.json();
    setPokemon(results);
    console.log(results);
    setLoading(false);
  }

  return (
    <div className="App">
      <Search getPokemon={getPokemon} />
      {!loading && pokemon ? (
        <h1>{pokemon.name}</h1>
      ) : null
      }
    </div>
  );
}

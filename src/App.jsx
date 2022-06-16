import { useState } from 'react';
import './App.css';
import { Search } from './components/Search';
import { PokemonData } from './components/Search/PokemonData';
import { fetchPokemon } from './services/getPokemon';

export const App = () => {
  const [pokemon, setPokemon] = useState();
  const [loading, setLoading] = useState(false);

  const getPokemon = async (query) => {
    setLoading(true);
    const response = await fetchPokemon(query);
    const results = await response.json();
    console.log(results);
    console.log(results.weight);
    console.log(results.height);
    setPokemon(results);
    setLoading(false);
  }

  return (
    <div className="App">
      <Search getPokemon={getPokemon} />
      {!loading && pokemon ? (
        <PokemonData
          name={pokemon.name}
          sprite={pokemon.sprites.front_default}
          abilities={pokemon.abilities}
          types={pokemon.types}
          stats={pokemon.stats}
          weight={pokemon.weight}
          height={pokemon.height}
        />
      ) : null
      }
    </div>
  );
}

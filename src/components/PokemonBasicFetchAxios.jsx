import axios from "axios";
import { useEffect, useState } from "react";

const PokemonBasicFetchAxios = () => {
  const [pokemonData, setPokemonData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        // fetch data from api
        const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=10");
        setPokemonData(response.data.results);
        console.log(response);
        // handle data
      } catch (error) {
        // handle error
        console.error("Failted to fetch Pokemon:", error);
      } finally {
        // handle loading
        setLoading(false);
      }
    };
    // invoke function
    fetchPokemon();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1 className="font-bold">Pokémon List</h1>
      <ul>
        {pokemonData.map((pokemon, index) => (
          <li key={index}>{pokemon.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default PokemonBasicFetchAxios;

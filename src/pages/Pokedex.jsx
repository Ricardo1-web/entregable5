import PokemonList from "../components/pokedex/PokemonList";
import usePokedex from "../hooks/usePokedex";

const Pokedex = () => {
  const {
    handleChange,
    name,
    pokemonName,
    pokemonType,
    pokemonsByName,
    setPokemonName,
    setPokemonType,
  } = usePokedex();

  return (
    <main>
      <section>
        <p>
          <span>Wellcome{name}</span>
        </p>
        <form>
          <div>
            <input
              value={pokemonName}
              onChange={handleChange(setPokemonName)}
              placeholder="Search pokemon ..."
              type="text"
            />
          </div>

          <select value={pokemonType} onChange={handleChange(setPokemonType)}>
            <option value="">All pokemons</option>
            <option value="rock">Rock</option>
          </select>
        </form>
      </section>

      <PokemonList pokemons={pokemonsByName} />
    </main>
  );
};
export default Pokedex;

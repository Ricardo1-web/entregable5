import { useState } from "react";
import PokemonList from "../components/pokedex/PokemonList";
import usePokedex from "../hooks/usePokedex";
import { paginateData } from "../utils/pagination";
import Pagination from "../components/pokedex/Pagination";

const Pokedex = () => {
  const [currentPage, setcurrentPage] = useState(1);

  const {
    handleChange,
    name,
    pokemonName,
    pokemonType,
    pokemonsByName,
    setPokemonName,
    setPokemonType,
    types,
  } = usePokedex();

  const { itemsInCurrentPage, lastPage, pagesInCurrentBlock } = paginateData(
    pokemonsByName,
    currentPage
  );

  return (
    <main className="min-h-screen">
      <section className="left-0 translate-x-6">
        <p className="p-2">
          <span className="capitalize text-red-800 font-bold">
            Wellcome {name},{" "}
          </span>
          here you can find your favorite pokemon
          <img className="scale-1 w-[50px] float-right -translate-x-28 " src="/images/logout.jpeg" alt="" />
        </p>
      
        <form className="flex justify-center items-center">
          <div className="translate-x-2">
            <input
              className="w-50 p-2 px-4 my-4 shadow"
              value={pokemonName}
              onChange={handleChange(setPokemonName)}
              placeholder="Search pokemon ..."
              type="text"
            />
            <button className="bg-[#D93F3F] text-white p-2">Search</button>
            <select
              className="text-sm p-2 translate-x-2 shadow"
              value={pokemonType}
              onChange={handleChange(setPokemonType)}
            >
              <option value="">All pokemons</option>
              {types.map((type) => (
                <option
                  key={type.name}
                  value={type.name}
                  className="capitalize"
                >
                  {type.name}
                </option>
              ))}
            </select>
          </div>
        </form>
      </section>

      <Pagination
        lastPage={lastPage}
        pagesInCurrentBlock={pagesInCurrentBlock}
        setcurrentPage={setcurrentPage}
        currentPage={currentPage}
      />

      <PokemonList pokemons={itemsInCurrentPage} />
    </main>
  );
};
export default Pokedex;

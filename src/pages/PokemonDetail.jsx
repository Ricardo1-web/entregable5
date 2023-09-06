import { useParams } from "react-router-dom";
import { getPokemonById } from "../services/pokemons";
import { useEffect, useState } from "react";
import { StatBarList } from "../components/pokemonDetail/StatBarList";

const PokemonDetail = () => {
  const [pokemonData, setPokemonData] = useState(null);

  const { pokemonId } = useParams();

  useEffect(() => {
    getPokemonById(pokemonId)
      .then((data) => setPokemonData(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <main className="flex p-2 justify-center items-center">
      <article className="w-[min(100%,_400px)] rounded-md border-[5px] border-black-800 opacity-80">
        <header className="h-[80px] relative mb-8 bg-gradient-to-b from-[#7EC6C5] to-[#CAE099]">
          <div>
            <img className="w-[100px] mx-auto" src={pokemonData?.image} alt="" />
          </div>
        </header>
        <section>
          <span className="flex justify-center text-black-500 font-semibold">#{pokemonData?.id}</span>
          <StatBarList stats={pokemonData?.stats} />
        </section>
      </article>
    </main>
  );
};
export default PokemonDetail;

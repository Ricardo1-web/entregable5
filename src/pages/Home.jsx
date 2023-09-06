import { useDispatch } from "react-redux";
import FooterPokeball from "../components/layout/FooterPokeball";
import { loginTrainer } from "../store/slices/trainer.slice";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const nameTrainer = e.target.nameTrainer.value;
    dispatch(loginTrainer(nameTrainer));
    navigate("/pokedex");
  };

  return (
    <main className="text-center min-h-screen text-black grid grid-rows-[1fr_auto] justify-center ">
      <section>
        <article>
          <div>
            <img src="/images/banner.png" alt="" />
          </div>
          <h2 className="text-[#FE1936] text-2xl font-bold">Hello trainer!</h2>
          <p className="text-[#302F2F]">To star, give me your name</p>
          <form onSubmit={handleSubmit} className="border-6 p-4 ">
            <input
              autoComplete="off"
              id="nameTrainer"
              className="bg-gray-300 font-bold opacity-80 text-black p-2 capitalize font-roboto "
              placeholder="Your name..."
              type="text"
            />
            <button className="bg-[#D93F3F] text-white p-2 ">Star!</button>
          </form>
        </article>
        <div className="">
          <img src="/images/wellcometranier.jpeg" alt="" />
        </div>
      </section>
      <FooterPokeball />
    </main>
  );
};
export default Home;

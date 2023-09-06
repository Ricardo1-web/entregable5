import BarProgresStat from "./BarProgresStat";

export const StatBarList = ({ stats }) => {
  return (
    <section className="">
      <h2 className="text-black font-bold py-2 border-b border-slate-300 dark:border-slate-400/20 ">
        Stats
        <span></span>
      </h2>
      <section>
        {stats?.map((stat) => (
          <BarProgresStat key={stat.name} stat={stat} />
        ))}
      </section>
    </section>
  
  );
};

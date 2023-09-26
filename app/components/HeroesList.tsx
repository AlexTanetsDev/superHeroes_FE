import { IHero } from "../types/hero.types";
import HeroCard from "./HeroCard";

async function getHero() {
  const res = await fetch("http://localhost:8080/heroes");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

async function HeroesList() {
  const data = (await getHero()) as IHero[];
  return (
    <ul className=" w-[350px]">
      {data.map((hero: IHero) => (
        <HeroCard hero={hero} key={hero.hero_id} />
      ))}
    </ul>
  );
}

export default HeroesList;

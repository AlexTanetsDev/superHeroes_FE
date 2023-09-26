import Image from "next/image";
import { IHero } from "../types/hero.types";
import { IPhoto } from "../types/heroPhotos.types";
import { getPhotos } from "./HeroCard";

interface IProps {
  id: string;
}

async function getOneHero(id: number) {
  const res = await fetch(`http://localhost:8080/heroes/${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

async function HeroProfile({ id }: IProps) {
  const hero = (await getOneHero(Number(id))) as IHero;
  const photos = (await getPhotos(hero.hero_id)) as IPhoto[];

  return (
    <>
      <div>
        <p>Nickname: {hero.nickname}</p>
        <p>Real name: {hero.real_name}</p>
        <p>Origin description: {hero.origin_description}</p>
        <p>Superpowers: {hero.superpowers}</p>
        <p>Catch phrase: {hero.catch_phrase}</p>
      </div>
      <ul>
        {photos.map((photo) => {
          return (
            <li key={photo.url}>
              <Image
                alt="Hero photo"
                src={photo.url}
                width={100}
                height={100}
              />
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default HeroProfile;

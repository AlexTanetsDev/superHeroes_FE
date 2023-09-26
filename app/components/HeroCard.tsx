import Image from "next/image";
import { IHero } from "../types/hero.types";
import Link from "next/link";

interface IProps {
  hero: IHero;
}

export async function getPhotos(id: number) {
  const res = await fetch(`http://localhost:8080/hero-photos/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

async function HeroCard({ hero }: IProps) {
  const photos = await getPhotos(hero.hero_id);
  const path = `heroes/${hero.hero_id}`;
  return (
    <li className=" bg-slate-200  rounded-lg border-2 border-cyan-800">
      <Link href={path} className=" w-full px-2 py-1 flex justify-between">
        <div className="flex items-center">
          <p>Nickname: {hero.nickname}</p>
        </div>
        <div>
          <Image
            src={photos[0].url}
            width={70}
            height={70}
            alt="Hero photo"
            className=" rounded-full"
          />
        </div>
      </Link>
    </li>
  );
}

export default HeroCard;

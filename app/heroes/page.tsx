import HeroesList from "../components/HeroesList";

function HeroesPage() {
  return (
    <main
      className="flex min-h-screen 
    flex-col items-center justify-between p-24"
    >
      <HeroesList />
    </main>
  );
}

export default HeroesPage;

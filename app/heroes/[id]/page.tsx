import HeroProfile from "@/app/components/HeroProfile";
import React from "react";

function HeroPage({ params }: { params: { id: string } }) {
  return (
    <main
      className="flex min-h-screen 
    flex-col items-center justify-between p-24"
    >
      <HeroProfile id={params.id} />
    </main>
  );
}

export default HeroPage;

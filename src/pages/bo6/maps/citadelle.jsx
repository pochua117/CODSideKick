import Head from "next/head";

import CitadellePage from "../../components/maps_components/CitadellePage";
import MapPageContent from "@/components/MapPageContent";

export default function Citadelle() {
  return (
    <>
      <Head>
        <title>Citadelle des Morts Easter Egg - BO6 Zombies Puzzles Solvers</title>
        <meta
          name="description"
          content="Solve the Call of Duty Black Ops 6 Zombies Citadelle des Morts Easter Egg. Use this symbols puzzle solvers for Citadelle des Morts."
        />
      </Head>
      <MapPageContent mapName="Citadelle des Morts">
        <CitadellePage />
      </MapPageContent>
    </>
  );
}

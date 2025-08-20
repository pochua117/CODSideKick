import Head from "next/head";

import CitadellePage from "../../components/maps_components/CitadellePage";
import MapPageContent from "@/components/MapPageContent";

export default function Citadelle() {
  return (
    <>
      <Head>
        <title>Citadelle des Morts - Call of Duty Zombies</title>
        <meta
          name="description"
          content="Solve Citadelle des Morts puzzles with puzzle solvers."
        />
      </Head>
      <MapPageContent mapName="Citadelle des Morts">
        <CitadellePage />
      </MapPageContent>
    </>
  );
}

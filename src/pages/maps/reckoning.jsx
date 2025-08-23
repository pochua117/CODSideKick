import Head from "next/head"; 

import ReckoningPage from "../../components/maps_components/ReckoningPage"; 
import MapPageContent from "@/components/MapPageContent";

export default function Reckoning() {
  return (
    <>
      <Head>
        <title>Reckoning Easter Egg - BO6 Zombies Puzzles Solvers</title>
        <meta 
          name="description" 
          content="Solve the Call of Duty Black Ops 6 Zombies Reckoning Easter Egg. Use this folders computer code puzzle solver and periodic table door code puzzle for Reckoning."
        />
      </Head>

      <MapPageContent mapName="Reckoning">
        <ReckoningPage />
      </MapPageContent>
    </>
  );
}

import Head from "next/head"; 

import ReckoningPage from "../../components/maps_components/ReckoningPage"; 
import MapPageContent from "@/components/MapPageContent";

export default function Reckoning() {
  return (
    <>
      <Head>
        <title>Reckoning - Call of Duty Zombies</title>
        <meta 
          name="description" 
          content="Solve Reckoning puzzles with puzzle solvers."
        />
      </Head>

      <MapPageContent mapName="Reckoning">
        <ReckoningPage />
      </MapPageContent>
    </>
  );
}

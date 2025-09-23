import Head from "next/head";

import TerminusPage from "../../../components/maps_components/TerminusPage";
import MapPageContent from "@/components/MapPageContent";

export default function Terminus() {
  return (
    <>
      <Head>
        <title>Terminus Easter Egg - Zombies Puzzle Solver - BO6 Beam Smasher Calculator</title>
        <meta
          name="description"
          content="Solve the Terminus Easter Egg Beam Smahser puzzle in Call of Duty Black Ops 6 Zombies. Use this Beam Smasher calculator: enter the three symbols and instantly get the correct result."
        />
      </Head>
      <MapPageContent mapName="Terminus" game="bo6">
        <TerminusPage />
      </MapPageContent>
    </>
  );
}

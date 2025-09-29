import Head from "next/head";

import ShatteredPage from "../../../components/maps_components/ShatteredPage";
import MapPageContent from "@/components/MapPageContent";

export default function Citadelle() {
  return (
    <>
      <Head>
        <title>Shattered Veil Easter Egg - BO6 Zombies Puzzles Solvers</title>
        <meta
          name="description"
          content="Solve the Call of Duty Black Ops 6 Zombies Shattered Easter Egg. Use this MK2 board code puzzle solver for Shattered Veil."
        />
      </Head>
      <MapPageContent mapName="Shattered Veil" game="bo6">
        <ShatteredPage />
      </MapPageContent>
    </>
  );
}

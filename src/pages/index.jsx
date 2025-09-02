import Head from "next/head";
import MapCard from "../components/MapCard";
import { MAPS } from "../constants";
import AdsenseRefresh from "@/utils/Citadelle/Adsenserefresh";

export default function Home() {
  return (
    <>
      <Head>
        <title>Call Of Duty SideKick</title>
        <meta
          name="description"
          content="Solve Call of Duty Black Ops 6 Zombies Easter Egg puzzles with puzzle solvers"
        />
      </Head>

      <main className="App">
        <AdsenseRefresh />
        <header className="header">
          <h1 className="title">CODSideKick</h1>
          <h2 className="subtitle">Solve Call of Duty Black Ops 6 Zombies Easter Egg puzzles</h2>
        </header>
        <section className="map-list">
          {MAPS.map((map, index) => (
            <MapCard
              key={index}
              Name={map.Name}
              Image={map.Image}
              Link={map.Link}
            />
          ))}
        </section>
      </main>
    </>
  );
}

import Head from "next/head";
import MapCard from "../../components/MapCard";
import { MAPS } from "../../constants";

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
        <header className="header">
          <h1 className="title">Black Ops 6</h1>
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

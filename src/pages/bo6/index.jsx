import Link from "next/link";
import Head from "next/head";

import MapCard from "../../components/MapCard";
import { BO6MAPS } from "../../constants";

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
        <section className="game-navigation">
            <Link href={`/`} className="back-button">
                Back to all games
            </Link>
            <section className="map-list">
              {BO6MAPS.map((map, index) => (
                <MapCard
                  key={index}
                  Name={map.Name}
                  Image={map.Image}
                  Link={map.Link}
                  State={map.State}
                />
              ))}
            </section>
        </section>
      </main>
    </>
  );
}

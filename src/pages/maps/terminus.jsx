import Head from "next/head";

import TerminusPage from "../../components/maps_components/TerminusPage";
import MapPageContent from "@/components/MapPageContent";

export default function Terminus() {
  return (
    <>
      <Head>
        <title>Terminus - Call of Duty Zombies</title>
        <meta
          name="description"
          content="Terminus Beam Smasher calculator."
        />
      </Head>
      <MapPageContent mapName="Terminus">
        <TerminusPage />
      </MapPageContent>
    </>
  );
}

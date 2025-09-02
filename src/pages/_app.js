import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from '@vercel/speed-insights/next';
import "../styles/globals.css";
import AdsenseRefresh from "@/utils/Citadelle/Adsenserefresh";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
      <SpeedInsights />
      <AdsenseRefresh />
    </>
  );
}

"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function AdsenseRefresh() {
  const pathname = usePathname();

  useEffect(() => {
    try {
      const ads = document.querySelectorAll("ins.adsbygoogle");

      ads.forEach(ad => {
        // Remueve el anuncio antiguo
        if (ad.dataset.adsbygoogleDone) {
          ad.remove();
        }
      });

      // Luego fuerza recarga de anuncios automáticos
      if (window.adsbygoogle) {
        window.adsbygoogle.push({});
      }
    } catch (err) {
      console.error("Adsense refresh error:", err);
    }
  }, [pathname]);

  return null;
}

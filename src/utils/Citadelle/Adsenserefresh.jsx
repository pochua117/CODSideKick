"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function AdsenseRefresh() {
  const pathname = usePathname();

  useEffect(() => {
    try {
      const ads = document.querySelectorAll("ins.adsbygoogle");
      ads.forEach(ad => {
        if (!ad.dataset.adsbygoogleDone) {
          (window.adsbygoogle = window.adsbygoogle || []).push({});
          ad.dataset.adsbygoogleDone = "true"; // marcar como inicializado
        }
      });
    } catch (err) {
      console.error("Adsense refresh error:", err);
    }
  }, [pathname]);

  return null;
}

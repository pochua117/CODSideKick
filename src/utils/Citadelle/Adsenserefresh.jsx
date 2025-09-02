"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function AdsenseRefresh() {
  const pathname = usePathname();

  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.error("Adsense refresh error:", err);
    }
  }, [pathname]);

  return null; // Este componente solo fuerza el refresh
}

"use client";
import { useEffect, useRef } from "react";

export default function AdBanner({ adSlot, className="ad" }) {
  const adRef = useRef(null);

  useEffect(() => {
    try {
      if (adRef.current) {
        adRef.current.innerHTML = "";
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch (err) {
      console.error("Adsense error:", err);
    }
  }, []);

  return (
    <ins
      ref={adRef}
      className={`adsbygoogle ${className}`}
      style={{ display: "block" }}
      data-ad-client="ca-pub-5744019936036430"
      data-ad-slot={adSlot}
      data-full-width-responsive="true"
    ></ins>
  );
}

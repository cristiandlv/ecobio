
  
  "use client";

import { useEffect, useState } from "react";

export function WhatsAppButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href="https://wa.me/5492246460002"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className={`
        fixed z-50 bottom-5 right-5
        md:bottom-8 md:right-8
        transition-all duration-500 ease-out
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6 pointer-events-none"}
      `}
    >
      <div
        className="
          flex items-center justify-center
          w-14 h-14 md:w-16 md:h-16
          rounded-full
          bg-[#25D366]
          shadow-[0_12px_30px_rgba(37,211,102,0.35)]
          hover:scale-105
          transition-transform
        "
      >
        {/* Icono WhatsApp */}
        <svg
          viewBox="0 0 32 32"
          fill="white"
          className="w-7 h-7 md:w-8 md:h-8"
        >
          <path d="M16.02 3.2c-7.08 0-12.8 5.72-12.8 12.8 0 2.26.6 4.46 1.74 6.4L3.2 28.8l6.6-1.74a12.74 12.74 0 006.22 1.6c7.08 0 12.8-5.72 12.8-12.8S23.1 3.2 16.02 3.2zm0 22.8c-1.9 0-3.78-.5-5.42-1.46l-.38-.22-3.92 1.04 1.04-3.82-.24-.4a10.54 10.54 0 01-1.58-5.56c0-5.86 4.76-10.62 10.62-10.62 5.86 0 10.62 4.76 10.62 10.62 0 5.86-4.76 10.62-10.62 10.62z"/>
        </svg>
      </div>
    </a>
  );
}

import Image from "next/image";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-(--color-primary-soft) to-white">

      {/* atmósfera */}
      <div className="absolute -top-40 right-[-220px] w-[480px] h-[480px] bg-white rounded-full blur-3xl opacity-60" />
      <div className="absolute top-40 left-[-200px] w-[340px] h-[340px] bg-white rounded-full blur-3xl opacity-40" />

      {/* fade inferior */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-white to-transparent" />

      <div
        className="
          relative
          max-w-7xl
          mx-auto
          px-6
          pt-20
          pb-28
          md:pt-32
          md:pb-36
          grid
          grid-cols-1
          md:grid-cols-2
          gap-14
          items-center
        "
      >
        {/* ================= IMAGEN (primero en mobile) ================= */}
        <div className="relative order-1 md:order-2 hero-float">

          {/* marco editorial */}
          <div className="absolute -top-5 -left-5 w-full h-full rounded-[32px] border border-white/60 pointer-events-none" />

          <div className="relative rounded-[32px] overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.18)] hero-grain">
            <div className="hero-zoom">
              <Image
                src="/cuchara2.jpeg"
                alt="Blends artesanales Ecobio"
                width={720}
                height={520}
                priority
                className="object-cover"
              />
            </div>

            {/* overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-white/35" />
          </div>
        </div>

        {/* ================= TEXTO ================= */}
        <div className="relative order-2 md:order-1">

          <span className="block text-xs uppercase tracking-widest text-(--color-primary) font-medium animate-fade-in">
            Ecobio
          </span>

          <h1 className="mt-4 text-4xl md:text-5xl xl:text-6xl font-semibold leading-tight text-(--color-primary) animate-fade-in-up">
            Infusiones <br className="hidden md:block" />
            con propósito
          </h1>

          <p className="mt-6 text-lg text-(--color-muted) leading-relaxed max-w-xl animate-fade-in-up">
            Blends artesanales, <strong>toppings para mate, té en hebras
            y fitoterapia</strong>. Productos pensados para acompañar rituales reales,
            con intención, equilibrio y simpleza.
          </p>

          {/* línea editorial */}
          <div className="mt-7 w-20 h-[2px] bg-(--color-primary) animate-fade-in" />

          {/* valores */}
          <div className="mt-8 flex flex-wrap gap-3 animate-fade-in-up">
            {["Artesanal", "Natural", "Funcional", "Con intención"].map((tag) => (
              <span
                key={tag}
                className="
                  text-xs
                  px-4
                  py-2
                  rounded-full
                  bg-white
                  text-(--color-primary)
                  border border-neutral-100
                  shadow-sm
                "
              >
                {tag}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className="mt-10 flex flex-wrap gap-4 animate-fade-in-up">
            <a
              href="#productos"
              className="
                rounded-full
                bg-(--color-primary)
                px-8
                py-3
                text-white
                font-medium
                shadow-md
                hover:shadow-lg
                transition
              "
            >
              Explorar productos
            </a>

            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSf2WKWfqIfy-F0tNyD8aTXzzFWZqiIvHWY8V-7AMmBQgdRniA/viewform?usp=sf_link"
              target="_blank"
              rel="noopener noreferrer"
              className="
                rounded-full
                border
                border-(--color-primary)
                px-8
                py-3
                text-(--color-primary)
                font-medium
                hover:bg-white
                transition
              "
            >
              🌱 Consulta Fitoterapia
            </a>
          </div>
        </div>
      </div>

      {/* detalle cierre */}
      <div className="relative">
        <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-28 h-[2px] bg-(--color-primary)/20 rounded-full" />
      </div>
    </section>
  );
}

import Image from "next/image";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-(--color-primary-soft) to-white">

      {/* decoraciones suaves (más contenidas) */}
      <div className="absolute -top-24 right-[-120px] w-[360px] h-[360px] bg-white rounded-full blur-3xl opacity-50" />
      <div className="absolute top-24 left-[-140px] w-[280px] h-[280px] bg-white rounded-full blur-3xl opacity-40" />

      {/* degradé inferior */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent" />

      <div
        className="
          relative max-w-7xl mx-auto px-6
          pt-24 pb-32
          md:pt-28 md:pb-36
          grid md:grid-cols-2 gap-16 items-center
        "
      >
        {/* TEXTO */}
        <div>
          <span className="block text-xs uppercase tracking-widest text-(--color-primary) font-medium animate-fade-in">
            Ecobio
          </span>

          <h1 className="mt-4 text-4xl md:text-5xl font-semibold leading-tight text-(--color-primary) animate-fade-in-up">
            Infusiones con propósito
          </h1>

          <p className="mt-5 text-lg text-(--color-muted) leading-relaxed max-w-xl animate-fade-in-up">
            Blends artesanales, toppings para <strong>mate</strong>, té en hebras
            y fitoterapia. Productos pensados para acompañar rituales reales,
            sin alterar tu rutina.
          </p>

          {/* línea editorial */}
          <div className="mt-7 w-20 h-[2px] bg-(--color-primary) animate-fade-in" />

          {/* tags */}
          <div className="mt-7 flex flex-wrap gap-3 animate-fade-in-up">
            {["Artesanal", "Natural", "Funcional", "Con intención"].map((tag) => (
              <span
                key={tag}
                className="
                  text-xs px-4 py-2 rounded-full
                  bg-white text-(--color-primary)
                  shadow-sm border border-neutral-100
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
                rounded-full bg-(--color-primary)
                px-7 py-3 text-white font-medium
                shadow-md hover:shadow-lg transition
              "
            >
              Ver productos
            </a>

            <a
              href="https://forms.gle/sjHF8aTrCYVuTZiJ8"
              target="_blank"
              rel="noopener noreferrer"
              className="
                rounded-full border border-(--color-primary)
                px-7 py-3 text-(--color-primary)
                font-medium hover:bg-white transition
              "
            >
              🌱 Consulta Fitoterapia
            </a>
          </div>
        </div>

        {/* IMAGEN */}
        <div className="relative animate-fade-in">
          {/* marco sutil */}
          <div className="absolute -top-4 -left-4 w-full h-full rounded-3xl border border-white/60" />

          <div className="relative animate-fade-in">
            {/* marco sutil */}
            <div className="absolute -top-4 -left-4 w-full h-full rounded-3xl border border-white/60" />

            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <div className="animate-slow-zoom">
                <Image
                  src="/hero-infusion.webp"
                  alt="Infusiones Ecobio"
                  width={600}
                  height={440}
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

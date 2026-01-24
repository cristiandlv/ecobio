import Image from "next/image";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-(--color-primary-soft) to-white">

      {/* manchas suaves */}
      <div className="absolute -top-32 right-[-160px] w-[420px] h-[420px] bg-white rounded-full blur-3xl opacity-60" />
      <div className="absolute top-40 left-[-160px] w-[320px] h-[320px] bg-white rounded-full blur-3xl opacity-50" />

      {/* degradé inferior */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-white to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-40 md:pt-40 md:pb-48 grid md:grid-cols-2 gap-20 items-center">

        {/* TEXTO */}
        <div>
          <span className="block text-xs uppercase tracking-widest text-(--color-primary) font-medium animate-fade-in">
            Ecobio
          </span>

          <h1 className="mt-5 text-4xl md:text-5xl font-semibold leading-tight text-(--color-primary) animate-fade-in-up">
            Infusiones con propósito
          </h1>

          <p className="mt-6 text-lg text-(--color-muted) leading-relaxed max-w-xl animate-fade-in-up delay-1">
            Blends artesanales, toppings para <strong>mate</strong>, té en hebras
            y fitoterapia. Productos pensados para acompañar rituales reales,
            sin alterar tu rutina.
          </p>

          <div className="mt-8 w-24 h-[2px] bg-(--color-primary) animate-fade-in delay-2" />

          <div className="mt-8 flex flex-wrap gap-3 animate-fade-in-up delay-2">
            {["Artesanal", "Natural", "Funcional", "Con intención"].map((tag) => (
              <span
                key={tag}
                className="text-xs px-4 py-2 rounded-full bg-white text-(--color-primary) shadow-sm border border-neutral-100"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap gap-4 animate-fade-in-up delay-3">
            <a
              href="#productos"
              className="rounded-full bg-(--color-primary) px-7 py-3 text-white font-medium shadow-md hover:shadow-lg transition"
            >
              Ver productos
            </a>

            <a
              href="https://forms.gle/sjHF8aTrCYVuTZiJ8"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-(--color-primary) px-7 py-3 text-(--color-primary) font-medium hover:bg-white transition"
            >
              🌱 Consulta Fitoterapia
            </a>
          </div>
        </div>

        {/* IMAGEN */}
        <div className="relative animate-fade-in delay-2">
          <div className="absolute -top-6 -left-6 w-full h-full rounded-3xl border border-white/60" />
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/hero-infusion.webp"
              alt="Infusiones Ecobio"
              width={620}
              height={460}
              className="object-cover"
              priority
            />
          </div>
        </div>

      </div>
    </section>
  );
}

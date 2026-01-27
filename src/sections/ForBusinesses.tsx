import Image from "next/image";

export function ForBusinesses() {
  const whatsappMessage =
    "Hola, me interesaría ofrecer Ecobio blends en nuestra carta. ¿Podemos charlar?";

  return (
    <section
      id="locales"
      className="
        relative
        px-6
        py-14
        md:py-24
        bg-gradient-to-b
        from-white
        to-(--color-primary-soft)/50
        overflow-hidden
      "
    >
      {/* detalle ambiental */}
      <div className="absolute -top-24 right-[-120px] w-72 h-72 bg-(--color-primary-soft) rounded-full blur-3xl opacity-40" />

      <div className="relative max-w-6xl mx-auto grid gap-12 md:grid-cols-2 items-center">

        {/* TEXTO */}
        <div className="animate-fade-in-up">
          <span className="text-xs uppercase tracking-widest text-(--color-primary) font-medium">
            Para cafeterías y restaurantes
          </span>

          <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-(--color-primary)">
            Infusiones que elevan tu carta
          </h2>

          <p className="mt-4 text-sm md:text-base text-(--color-muted) leading-relaxed max-w-xl">
            Blends artesanales pensados para espacios gastronómicos que valoran
            la calidad, la coherencia y la experiencia.
          </p>

          <ul className="mt-5 space-y-1.5 text-sm text-neutral-700">
            <li>✔ Blends exclusivos y consistentes</li>
            <li>✔ Presentación cuidada</li>
            <li>✔ Acompañamiento personalizado</li>
          </ul>


          <a
            href={`https://wa.me/5492246460002?text=${encodeURIComponent(
              whatsappMessage
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex
              mt-6
              items-center
              gap-2
              rounded-full
              bg-(--color-primary)
              px-6
              py-3
              text-sm
              font-medium
              text-white
              shadow-md
              hover:shadow-lg
              transition
            "
          >
            Escribinos por WhatsApp
          </a>
        </div>

        {/* CARD */}
        <div className="relative animate-fade-in-up">
          <div
            className="
              rounded-3xl
              bg-white
              p-6
              md:p-8
              shadow-xl
              border
              border-neutral-100
            "
          >
            {/* Imagen */}
            <div className="flex justify-center">
              <div className="relative w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden border border-neutral-200 shadow-lg">
                <Image
                  src="/albaciocafe.jpg"
                  alt="Al Bacio Café utilizando infusiones Ecobio"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Texto */}
            <div className="mt-4 text-center">
              <span className="text-xs uppercase tracking-widest text-neutral-500">
                Dónde conseguir Ecobio
              </span>

              <p className="mt-2 text-base font-medium text-neutral-800">
                Al Bacio Café
              </p>

              <p className="mt-1 text-sm text-(--color-muted)">
                Lavalleja 1373, Palermo
              </p>

              <a
                href="https://www.instagram.com/albaciocafe/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex mt-3 text-sm text-(--color-primary) hover:underline"
              >
                Ver en Instagram →
              </a>
            </div>

            {/* MAPA solo desktop */}
            <div className="mt-5 hidden md:block">
              <div className="rounded-xl overflow-hidden border border-neutral-200">
                <iframe
                  title="Mapa Al Bacio Café"
                  src="https://www.google.com/maps?q=Lavalleja%201373%20Palermo&output=embed"
                  className="w-full h-32"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

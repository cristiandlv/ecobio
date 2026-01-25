import Image from "next/image";

export function ForBusinesses() {
  return (
    <section
      id="locales"
      className="relative px-6 py-24 md:py-28 bg-white overflow-hidden"
    >
      <div className="max-w-6xl mx-auto grid gap-16 md:grid-cols-2 items-center">

        {/* ================= TEXTO ================= */}
        <div className="animate-fade-in-up">
          <span className="text-xs uppercase tracking-widest text-(--color-primary) font-medium">
            Para cafeterías y restaurantes
          </span>

          <h2 className="mt-4 text-3xl md:text-4xl font-semibold text-(--color-primary) leading-tight">
            Infusiones que elevan tu carta
          </h2>

          <p className="mt-6 text-(--color-muted) leading-relaxed max-w-xl">
            Trabajamos con cafeterías y espacios gastronómicos que buscan ofrecer
            infusiones artesanales, consistentes y con identidad.
            Blends pensados para acompañar experiencias reales.
          </p>

          <ul className="mt-7 space-y-2 text-sm text-neutral-700">
            <li>✔ Blends exclusivos y perfilados</li>
            <li>✔ Presentación cuidada y profesional</li>
            <li>✔ Acompañamiento y asesoramiento</li>
            <li>✔ Producción artesanal y constante</li>
          </ul>

          <a
            href="https://www.instagram.com/tiendaecobio"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex mt-9 items-center rounded-full border border-(--color-primary) px-6 py-3 text-sm font-medium text-(--color-primary) hover:bg-(--color-primary-soft) transition"
          >
            Quiero ofrecer Ecobio en mi local
          </a>
        </div>

        {/* ================= CARD + MAPA ================= */}
        <div className="relative animate-fade-in-up">
          <div className="relative rounded-3xl bg-(--color-primary-soft) shadow-xl border border-neutral-100 overflow-hidden p-8 md:p-9">

            {/* Imagen */}
            <div className="relative flex justify-center">
              <div className="absolute inset-0 flex justify-center">
                <div className="w-64 h-64 bg-(--color-primary) rounded-full blur-3xl opacity-10" />
              </div>

              <div className="relative w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden border border-neutral-200 shadow-2xl bg-white">
                <Image
                  src="/albaciocafe.jpg"
                  alt="Al Bacio Café utilizando infusiones Ecobio"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </div>

            {/* Texto */}
            <div className="mt-6 text-center">
              <span className="text-xs uppercase tracking-widest text-neutral-500">
                Dónde conseguir Ecobio
              </span>

              <p className="mt-3 text-lg font-medium text-neutral-800">
                Al Bacio Café
              </p>

              <p className="mt-1 text-sm text-(--color-muted)">
                Lavalleja 1373, Palermo
              </p>

              <a
                href="https://www.instagram.com/albaciocafe/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex mt-4 items-center gap-2 text-sm text-(--color-primary) hover:underline"
              >
                Ver en Instagram →
              </a>
            </div>

            {/* MAPA */}
            <div className="mt-5">
              <p className="mb-2 text-xs uppercase tracking-widest text-neutral-500 text-center">
                Ubicación
              </p>

              <div className="rounded-xl overflow-hidden border border-neutral-200">
                <iframe
                  title="Mapa Al Bacio Café"
                  src="https://www.google.com/maps?q=Lavalleja%201373%20Palermo&output=embed"
                  className="w-full h-32 md:h-36"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* CTA MAPA */}
            <a
              href="https://www.google.com/maps/search/?api=1&query=Lavalleja+1373+Palermo"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex justify-center w-full rounded-full border border-(--color-primary) px-6 py-3 text-sm font-medium text-(--color-primary) hover:bg-white transition"
            >
              Cómo llegar
            </a>
          </div>

          {/* detalle decorativo */}
          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-(--color-primary-soft) rounded-full blur-3xl opacity-50" />
        </div>
      </div>
    </section>
  );
}

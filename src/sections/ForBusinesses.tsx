import Image from "next/image";

export function ForBusinesses() {
  return (
    <section
      id="locales"
      className="relative px-6 py-32 bg-white"
    >
      <div className="max-w-6xl mx-auto grid gap-20 md:grid-cols-2 items-center">

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

          <ul className="mt-8 space-y-3 text-sm text-neutral-700">
            <li>✔ Blends exclusivos y perfilados</li>
            <li>✔ Presentación cuidada y profesional</li>
            <li>✔ Acompañamiento y asesoramiento</li>
            <li>✔ Producción artesanal y constante</li>
          </ul>

          <a
            href="https://www.instagram.com/tiendaecobio"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex mt-10 items-center rounded-full border border-(--color-primary) px-7 py-3 text-sm font-medium text-(--color-primary) hover:bg-(--color-primary-soft) transition"
          >
            Quiero ofrecer Ecobio en mi local
          </a>
        </div>

        {/* ================= PRUEBA SOCIAL ================= */}
        <div className="relative animate-fade-in-up">

          {/* Card */}
          <div className="relative rounded-3xl bg-(--color-primary-soft) shadow-xl border border-neutral-100 overflow-hidden p-10">

            {/* Imagen */}
            <div className="relative flex justify-center">
              {/* halo */}
              <div className="absolute inset-0 flex justify-center">
                <div className="w-72 h-72 bg-(--color-primary) rounded-full blur-3xl opacity-10" />
              </div>

              <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden border border-neutral-200 shadow-2xl bg-white">
                <Image
                  src="/albaciocafe.jpg"
                  alt="Al Bacio Café utilizando infusiones Ecobio"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </div>

            {/* Texto debajo de imagen */}
            <div className="mt-8 text-center">
              <span className="text-xs uppercase tracking-widest text-neutral-500">
                Ya confían en Ecobio
              </span>

              <p className="mt-3 text-lg font-medium text-neutral-800">
                Al Bacio Café
              </p>

              <p className="mt-2 text-sm text-(--color-muted) max-w-sm mx-auto">
                Cafetería que integra infusiones Ecobio en su propuesta diaria,
                apostando por productos naturales y con identidad.
              </p>

              <a
                href="https://www.instagram.com/albaciocafe/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex mt-5 items-center gap-2 text-sm text-(--color-primary) hover:underline"
              >
                Ver en Instagram →
              </a>
            </div>
          </div>

          {/* detalle decorativo exterior */}
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-(--color-primary-soft) rounded-full blur-3xl opacity-50" />
        </div>
      </div>
    </section>
  );
}

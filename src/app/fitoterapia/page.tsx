import Link from "next/link";

export default function FitoterapiaPage() {
  return (
    <section className="px-4 py-24 md:py-28 max-w-5xl mx-auto">
      <header className="mb-20 text-center">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-(--color-primary)">
          Fitoterapia personalizada
        </h1>

        <p className="mt-4 text-lg text-(--color-muted) max-w-2xl mx-auto">
          Recetas herbales pensadas según tus necesidades. Un acompañamiento
          consciente, natural y personalizado.
        </p>

        {/* MENU */}
        <nav className="mt-8 flex justify-center gap-2 flex-wrap">
          <Link
            href="/toppings-mate"
            className="px-4 py-1.5 text-sm rounded-full border border-neutral-200 hover:bg-(--color-primary-soft)"
          >
            Toppings
          </Link>
          <Link
            href="/blends-te"
            className="px-4 py-1.5 text-sm rounded-full border border-neutral-200 hover:bg-(--color-primary-soft)"
          >
            Blends
          </Link>
          <span className="px-4 py-1.5 text-sm rounded-full bg-(--color-primary-soft)">
            Fitoterapia
          </span>
          <Link
            href="/infusores"
            className="px-4 py-1.5 text-sm rounded-full border border-neutral-200 hover:bg-(--color-primary-soft)"
          >
            Infusores
          </Link>
        </nav>

        <a
          href="https://forms.gle/sjHF8aTrCYVuTZiJ8"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-10 bg-(--color-primary) text-white px-8 py-3 rounded-full font-medium shadow hover:bg-(--color-primary-dark) transition"
        >
          Consultar ahora
        </a>
      </header>

      {/* BLOQUE INFORMATIVO */}
      <div className="max-w-2xl mx-auto text-center text-(--color-muted)">
        <p>
          Este servicio está orientado a quienes buscan un acompañamiento más
          profundo y consciente, combinando saber herbal y escucha personalizada.
        </p>
      </div>
    </section>
  );
}

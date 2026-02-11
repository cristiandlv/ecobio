import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white">
      <div className="max-w-6xl mx-auto px-6 py-14 md:py-20">

        {/* CONTENIDO */}
        <div className="grid gap-12 md:grid-cols-2 items-start">

          {/* Marca + contacto */}
          <div className="max-w-md">
            <p className="text-xl font-semibold tracking-tight text-(--color-primary)">
              Ecobio
            </p>

            <p className="mt-4 text-sm text-(--color-muted) leading-relaxed">
              Infusiones artesanales y blends funcionales pensados para acompañar
              rituales cotidianos con intención y simpleza.
            </p>

            {/* Contacto */}
            <div className="mt-5 space-y-3 text-sm">
              <a
                href="mailto:tiendanaturalecobio@gmail.com"
                className="flex items-center gap-2 text-(--color-muted) hover:text-(--color-primary) transition"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 4h16v16H4z" />
                  <path d="M22 6l-10 7L2 6" />
                </svg>
                tiendanaturalecobio@gmail.com
              </a>

              <a
                href="https://www.instagram.com/tiendaecobio"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-(--color-muted) hover:text-(--color-primary) transition"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8" />
                  <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
                </svg>
                @tiendaecobio
              </a>
            </div>
          </div>

          {/* Navegación */}
          <div className="grid gap-8 sm:grid-cols-2 text-sm">

            <div>
              <p className="text-xs uppercase tracking-widest text-neutral-500 mb-3">
                Secciones
              </p>
              <ul className="space-y-2 text-(--color-muted)">
                <li>
                  <Link href="/#productos" className="hover:text-(--color-primary)">
                    Productos
                  </Link>
                </li>
                <li>
                  <Link href="/#como-usar" className="hover:text-(--color-primary)">
                    Usos
                  </Link>
                </li>
                <li>
                  <Link href="/#locales" className="hover:text-(--color-primary)">
                    Para locales
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-xs uppercase tracking-widest text-neutral-500 mb-3">
                Catálogo
              </p>
              <ul className="space-y-2 text-(--color-muted)">
                <li>
                  <Link href="/toppings-mate" className="hover:text-(--color-primary)">
                    Toppings
                  </Link>
                </li>
                <li>
                  <Link href="/blends-te" className="hover:text-(--color-primary)">
                    Blends de té
                  </Link>
                </li>
                <li>
                  <Link href="/fitoterapia" className="hover:text-(--color-primary)">
                    Fitoterapia
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Legal */}
        <div className="mt-12 md:mt-20 border-t border-neutral-200 pt-5 text-center text-xs text-(--color-muted)">
          © {new Date().getFullYear()} Ecobio · Infusiones con propósito
        </div>
      </div>
    </footer>
  );
}

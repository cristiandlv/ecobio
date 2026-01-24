import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-32 border-t border-neutral-200 bg-white">
      {/* Contenido principal */}
      <div className="max-w-6xl mx-auto px-6 py-20 grid gap-16 md:grid-cols-2">

        {/* Marca */}
        <div className="max-w-md">
          <p className="text-xl font-semibold tracking-tight text-(--color-primary)">
            Ecobio
          </p>

          <p className="mt-5 text-sm text-(--color-muted) leading-relaxed">
            Infusiones artesanales, blends funcionales y toppings para mate.
            Productos pensados para acompañar rituales cotidianos con intención,
            simpleza y conciencia.
          </p>

          {/* Redes */}
          <div className="mt-6 flex items-center gap-4">
            <a
              href="https://www.instagram.com/tiendaecobio"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Ecobio"
              className="flex items-center gap-2 text-sm text-(--color-muted) hover:text-(--color-primary) transition"
            >
              {/* Icono Instagram */}
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
              </svg>
              @tiendaecobio
            </a>
          </div>
        </div>

        {/* Navegación */}
        <div className="grid gap-10 sm:grid-cols-2 text-sm">
          <div>
            <p className="text-xs uppercase tracking-widest text-neutral-500 mb-5">
              Secciones
            </p>
            <ul className="space-y-3 text-(--color-muted)">
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
            <p className="text-xs uppercase tracking-widest text-neutral-500 mb-5">
              Servicios
            </p>
            <ul className="space-y-3 text-(--color-muted)">
              <li>
                <Link href="/toppings-mate" className="hover:text-(--color-primary)">
                  Toppings para mate
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
      <div className="border-t border-neutral-200 py-6 text-center text-xs text-(--color-muted)">
        © {new Date().getFullYear()} Ecobio · Infusiones con propósito
      </div>
    </footer>
  );
}

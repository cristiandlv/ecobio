import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-32 border-t border-neutral-200 bg-white">
      <div className="max-w-6xl mx-auto px-6 py-20 grid gap-16 md:grid-cols-3">

        {/* Marca */}
        <div>
          <p className="text-xl font-semibold text-(--color-primary)">
            Ecobio
          </p>

          <p className="mt-4 text-sm text-(--color-muted) leading-relaxed">
            Infusiones artesanales y blends funcionales pensados para
            acompañar rituales cotidianos con simpleza y conciencia.
          </p>
        </div>

        {/* Navegación */}
        <div className="text-sm">
          <p className="text-xs uppercase tracking-widest text-neutral-500 mb-5">
            Navegación
          </p>
          <ul className="space-y-3 text-(--color-muted)">
            <li>
              <Link href="/#productos" className="hover:text-(--color-primary)">
                Productos
              </Link>
            </li>
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
            <li>
              <Link href="/infusores" className="hover:text-(--color-primary)">
                Infusores
              </Link>
            </li>
          </ul>
        </div>

        {/* Contacto */}
        <div className="text-sm">
          <p className="text-xs uppercase tracking-widest text-neutral-500 mb-5">
            Contacto
          </p>

          <ul className="space-y-4 text-(--color-muted)">
            <li className="flex items-center gap-3">
              {/* Mail icon */}
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="4" width="20" height="16" rx="3" />
                <path d="M22 6 12 13 2 6" />
              </svg>
              <a
                href="mailto:tiendaecobio@gmail.com"
                className="hover:text-(--color-primary)"
              >
                tiendaecobio@gmail.com
              </a>
            </li>

            <li className="flex items-center gap-3">
              {/* Instagram icon */}
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
              </svg>
              <a
                href="https://www.instagram.com/tiendaecobio"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-(--color-primary)"
              >
                @tiendaecobio
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Legal */}
      <div className="border-t border-neutral-200 py-6 text-center text-xs text-(--color-muted)">
        © {new Date().getFullYear()} Ecobio · Infusiones con propósito
      </div>
    </footer>
  );
}

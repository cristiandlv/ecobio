import Link from "next/link";
import ProductCard from "@/components/ProductCard";

interface articulo {
  name: string;
  descripcion: string;
  
  image: string;
}

const infusores: articulo[] = [
  {
    name: "Infusor para taza",
    descripcion: "Infusor de lienzo reutilizable para taza. Ecológico y práctico para tus infusiones.",
    
    image: "/infusorchico.jpeg",
  },
  {
    name: "Infusor para tisanas",
    descripcion: "Infusor de lienzo tipo embudo, reutilizable y ecológico.",
    
    image: "/infusorgrande.jpeg",
  },
 
];

const whatsappBase = "https://wa.me/5491123456789?text=";
const getWspLink = (item: articulo) =>
  whatsappBase +
  encodeURIComponent(`Hola! Quiero comprar el infusor: ${item.name}`);

export default function InfusoresPage() {
  return (
    <section className="px-4 py-24 md:py-28 max-w-6xl mx-auto">
      {/* HEADER */}
      <header className="mb-20 text-center">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-(--color-primary)">
          Accesorios
        </h1>
        <p className="mt-4 text-lg text-(--color-muted) max-w-2xl mx-auto">
          Accesorios ecológicos y prácticos para disfrutar al máximo de tus infusiones.
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
          <Link
            href="/fitoterapia"
            className="px-4 py-1.5 text-sm rounded-full border border-neutral-200 hover:bg-(--color-primary-soft)"
          >
            Fitoterapia
          </Link>
          <span className="px-4 py-1.5 text-sm rounded-full bg-(--color-primary-soft)">
            Infusores
          </span>
          
        </nav>
      </header>

      {/* GRID */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {infusores.map((t) => (
          <ProductCard
            key={t.name}
            title={t.name}
            image={t.image}
            imageAlt={t.name}
            className="p-5"
            action={
              <a
                href={getWspLink(t)}
                target="_blank"
                className="mt-1 inline-block bg-(--color-primary) text-white text-sm px-4 py-2 rounded-full"
              >
                Comprar
              </a>
            }
          >
            <div className="text-sm text-neutral-700">
                <p>{t.descripcion}</p>
            </div>
          </ProductCard>
        ))}
      </div>
    </section>
  );
}

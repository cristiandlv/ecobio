import Link from "next/link";
import ProductCard from "@/components/ProductCard";

const products = [
  {
    title: "Toppings para mate",
    description:
      "Hierbas, flores y especias seleccionadas para sumar aroma, sabor y propósito al mate cotidiano.",
    image: "/mock-mate.webp",
    href: "/toppings-mate",
  },
  {
    title: "Blends de té",
    description:
      "Blends de té en hebras y hierbas seleccionadas, pensados para distintos momentos del día.",
    image: "/mock-te.webp",
    href: "/blends-te",
  },
  {
    title: "Fitoterapia personalizada",
    description:
      "Recetas y blends funcionales creados según tus necesidades de bienestar.",
    image: "/infusion5.webp",
    href: "/fitoterapia",
  },
  {
    title: "Infusores",
    description:
      "Accesorios reutilizables y ecológicos para preparar tus infusiones de forma consciente.",
    image: "/infusorchico.jpeg",
    href: "/infusores",
  },
];

export function FeaturedProducts() {
  return (
    <section
      id="productos"
      className="
        relative
        px-6
        pt-5
        py-24
        pb-28
        bg-gradient-to-b
        from-(--color-primary-soft)/40
        to-white
      "
    >
      {/* Conector con sección anterior */}
      <div className="absolute top-0 left-0 w-full h-12 bg-gradient-to-b from-white to-transparent" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="mb-12 text-center max-w-2xl mx-auto">
          <span className="block text-xs uppercase tracking-widest text-(--color-primary) font-medium">
            Productos
          </span>

          <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-(--color-primary)">
            Nuestros productos
          </h2>

          <p className="mt-4 text-lg text-(--color-muted)">
            Distintas formas de acompañar tu ritual cotidiano.
          </p>
        </header>

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <Link
              key={product.title}
              href={product.href}
              className="
                group
                block
                cursor-pointer
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-(--color-primary)
                rounded-3xl
              "
            >
              <ProductCard
                title={product.title}
                image={product.image}
                imageAlt={`Imagen de ${product.title}`}
                disableImageModal
                className="
                  h-full
                  transition-all duration-300 ease-out
                  group-hover:-translate-y-1
                  group-hover:shadow-xl
                "
                action={
                  <span
                    className="
                      text-sm font-medium text-(--color-primary)
                      inline-flex items-center gap-1
                      transition-all duration-300
                      group-hover:gap-2
                    "
                  >
                    Ver más
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </span>
                }
              >
                <p className="text-sm text-(--color-muted)">
                  {product.description}
                </p>
              </ProductCard>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

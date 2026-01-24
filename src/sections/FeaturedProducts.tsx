import Link from "next/link";
import ProductCard from "@/components/ProductCard";

const products = [
  {
    title: "Toppings para mate",
    description:
      "Hierbas, flores y especias seleccionadas para sumar aroma, sabor y propósito al mate cotidiano.",
    image: "/mock-mate.webp",
    href: "/toppings-mate",
    tag: "Mate",
  },
  {
    title: "Blends de té",
    description:
      "Blends de té en hebras y hierbas seleccionadas, pensados para distintos momentos del día.",
    image: "/mock-te.webp",
    href: "/blends-te",
    tag: "Té",
  },
  {
    title: "Fitoterapia personalizada",
    description:
      "Recetas y blends funcionales creados según tus necesidades de bienestar.",
    image: "/mock-infusion.webp",
    href: "/fitoterapia",
    tag: "Fitoterapia",
  },
];

export function FeaturedProducts() {
  return (
    <section id="productos" className="px-6 py-28">
      <div className="max-w-7xl mx-auto">

        {/* Header sección */}
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-(--color-primary)">
            Nuestros productos
          </h2>
          <p className="mt-4 text-lg text-(--color-muted)">
            Distintas formas de acompañar tu ritual cotidiano.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {products.map((product) => (
            <ProductCard
              key={product.title}
              title={product.title}
              image={product.image}
              imageAlt={`Imagen de ${product.title}`}
              className="shadow-md hover:shadow-xl"
              action={
                <Link
                  href={product.href}
                  className="text-sm font-medium text-(--color-primary) hover:underline"
                >
                  Ver más →
                </Link>
              }
            >
              <p className="text-sm text-(--color-muted)">
                {product.description}
              </p>
            </ProductCard>
          ))}
        </div>

      </div>
    </section>
  );
}

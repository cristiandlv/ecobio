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
    image: "/infusion5.webp",
    href: "/fitoterapia",
    tag: "Fitoterapia",
  },
];

export function FeaturedProducts() {
  return (
    <section
      id="productos"
      className="relative px-6 pt-14 pb-24 md:pt-10 md:pb-24 bg-white overflow-hidden"
    >
      {/* anclaje visual con sección anterior (desktop-friendly) */}
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-20 h-[2px] bg-(--color-primary)/25 rounded-full hidden md:block" />

      <div className="max-w-7xl mx-auto">

        {/* Header sección */}
        <div className="mb-12 md:mb-10 text-center max-w-2xl mx-auto animate-fade-in-up">
          <span className="block text-xs uppercase tracking-widest text-(--color-primary) font-medium">
            Productos
          </span>

          <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-(--color-primary)">
            Nuestros productos
          </h2>

          <p className="mt-4 text-lg text-(--color-muted)">
            Distintas formas de acompañar tu ritual cotidiano.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-3 animate-fade-in-up delay-1">
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

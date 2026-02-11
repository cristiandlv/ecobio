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
    image: "/infusion5.webp",
    href: "/blends-te",
  },
  {
    title: "Fitoterapia",
    description:
      "Recetas y blends funcionales creados según tus necesidades de bienestar.",
    image: "/mock-ingredientes.webp",
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
        pt-16
        pb-16
        bg-gradient-to-b
        from-(--color-primary-soft)/40
        to-white
      "
    >
      {/* Conector superior */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <header className="mb-16 text-center max-w-2xl mx-auto animate-fade-in-up">
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
      </div>

      {/* ===== MOBILE SLIDER ===== */}
      <div className="relative md:hidden">
        {/* Fades laterales */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-10 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-10 bg-gradient-to-l from-white to-transparent z-10" />

        <div
          className="
            flex
            gap-6
            overflow-x-auto
            snap-x snap-mandatory
            no-scrollbar
            px-[calc(50vw-42.5%)]
            py-4
            mt-0
          "
        >
          {products.map((product) => (
            <div
              key={product.title}
              className="
                snap-center
                shrink-0
                w-[85%]
              "
            >
              <Link href={product.href} className="block h-full">
                <ProductCard
                  title={product.title}
                  image={product.image}
                  imageAlt={`Imagen de ${product.title}`}
                  disableImageModal
                  className="h-full"
                  action={
                    <span className="inline-flex items-center gap-1 text-sm font-medium text-(--color-primary)">
                      Ver más →
                    </span>
                  }
                >
                  <p className="text-sm text-(--color-muted)">
                    {product.description}
                  </p>
                </ProductCard>
              </Link>
            </div>
          ))}
        </div>

        <p className="mt-8 text-xs text-center text-(--color-muted)">
          Deslizá para explorar →
        </p>
      </div>

      {/* ===== DESKTOP GRID ===== */}
      <div className="hidden md:block max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <Link key={product.title} href={product.href} className="block h-full">
              <ProductCard
                title={product.title}
                image={product.image}
                imageAlt={`Imagen de ${product.title}`}
                disableImageModal
                className="h-full transition-all hover:-translate-y-1 hover:shadow-xl"
                action={
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-(--color-primary)">
                    Ver más →
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

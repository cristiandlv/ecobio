import Link from "next/link";
import ProductCard from "@/components/ProductCard";

interface Topping {
  name: string;
  descripcion: string;
  ingredientes: string[];
  beneficios: string;
  usos: string;
  image: string;
}

const toppings: Topping[] = [
  {
    name: "Sienna",
    descripcion: "Suave, floral y calmante",
    ingredientes: ["Manzanilla", "Pasionaria", "Canela"],
    beneficios: "Relajante, antiinflamatoria",
    usos: "Ideal para descanso y cierre del día",
    image: "/sienna.jpeg",
  },
  {
    name: "Cira",
    descripcion: "Herbal, fresco, estimulante",
    ingredientes: ["Romero", "Peperina", "Clavo", "Melisa", "Diente de león"],
    beneficios: "Digestiva, energizante suave",
    usos: "Después de comidas, sin cafeína",
    image: "/cira.jpeg",
  },
  {
    name: "Luma",
    descripcion: "Cálido y envolvente",
    ingredientes: ["Coco", "Cacao", "Canela"],
    beneficios: "Calmante, digestiva",
    usos: "Ritual nocturno",
    image: "/luma.jpeg",
  },
  {
    name: "Ayra",
    descripcion: "Cítrico y refrescante",
    ingredientes: ["Cedrón", "Manzanilla", "Rosa"],
    beneficios: "Digestiva, analgésica",
    usos: "Tensión corporal y acidez",
    image: "/ayra.jpeg",
  },
  {
    name: "Ruma",
    descripcion: "Intenso y herbal",
    ingredientes: ["Menta", "Jengibre", "Lemon Grass", "Peperina"],
    beneficios: "Descongestiva, digestiva",
    usos: "Cambios de clima",
    image: "/ruma.jpeg",
  },
  {
    name: "Zenda",
    descripcion: "Floral y depurativo",
    ingredientes: ["Caléndula", "Naranja"],
    beneficios: "Diurética, digestiva",
    usos: "Rutinas conscientes",
    image: "/zenda.jpeg",
  },
];

const whatsappBase = "https://wa.me/5491123456789?text=";
const getWspLink = (item: Topping) =>
  whatsappBase +
  encodeURIComponent(`Hola! Quiero comprar el topping: ${item.name}`);

export default function ToppingsMatePage() {
  return (
    <section className="px-4 py-24 md:py-28 max-w-6xl mx-auto">
      {/* HEADER */}
      <header className="mb-20 text-center">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-(--color-primary)">
          Toppings para mate
        </h1>
        <p className="mt-4 text-lg text-(--color-muted) max-w-2xl mx-auto">
          Hierbas, flores y especias para transformar tu ritual del mate con
          sabor, aroma y propósito.
        </p>

        {/* MENU */}
        <nav className="mt-8 flex justify-center gap-2 flex-wrap">
          <span className="px-4 py-1.5 text-sm rounded-full bg-(--color-primary-soft)">
            Toppings
          </span>
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
        </nav>
      </header>

      {/* GRID */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {toppings.map((t) => (
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
                className="mt-3 inline-block bg-(--color-primary) text-white text-sm px-4 py-2 rounded-full"
              >
                Comprar
              </a>
            }
          >
            <div className="space-y-2 text-sm text-neutral-700">
              <p>
                <strong>Perfil:</strong> {t.descripcion}
              </p>

              <div className="flex flex-wrap gap-1.5">
                {t.ingredientes.map((ing) => (
                  <span
                    key={ing}
                    className="bg-neutral-100 text-neutral-700 text-xs px-2 py-0.5 rounded-full"
                  >
                    {ing}
                  </span>
                ))}
              </div>

              <p className="text-xs text-neutral-500">
                {t.usos}
              </p>
            </div>
          </ProductCard>
        ))}
      </div>
    </section>
  );
}

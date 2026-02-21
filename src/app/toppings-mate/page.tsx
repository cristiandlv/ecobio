import Link from "next/link";
import ProductCard from "@/components/ProductCard";

interface Topping {
  name: string;
  descripcion: string;
  ingredientes: string[];
  beneficios: string;
  usos: string;
  image: string;
  empretienda?: string;
}

const toppings: Topping[] = [
  {
    name: "Sienna",
    descripcion: "Intenso y especiado",
    ingredientes: ["Coco", "Cascarilla de Cacao", "Canela"],
    beneficios: "Relajante, antiinflamatoria",
    usos: "Energezinate, digestivo. Quita la acidez estomacal",
    image: "/sienna.jpeg",
    empretienda: "https://ecobio.empretienda.com.ar/toppings-de-mate/sienna",
  },
  {
    name: "Cira",
    descripcion: "Floral, especiado y relajante",
    ingredientes: [
      "Manzanilla",
      "Pasionaria",
      "Canela",
    ],
    beneficios: "Antiinflamatoria, calmante y relajante",
    usos: "Descanso mental y físico. Antiinflamatoria miorelajante",
    image: "/cira.jpeg",
    empretienda: "https://ecobio.empretienda.com.ar/toppings-de-mate/cira",
  },
  {
    name: "Luma",
    descripcion: "Cálido y floral",
    ingredientes: ["Cedrón", "Manzanilla", "Pétalos de rosa"],
    beneficios: "Calmante, digestiva",
    usos: "Relajante, antiinflamatoria y digestiva.",
    image: "/luma.jpeg",
    empretienda: "https://ecobio.empretienda.com.ar/toppings-de-mate/luma",
  },
  {
    name: "Ayra",
    descripcion: "Cítrico, refrescante",
    ingredientes: [
      "Peperina",
      "Tomillo",
      "Diente de león",
      "Cedrón",
      "Naranja",
      "Caléndula",
    ],
    beneficios: "Digestiva, analgésica y antiespasmódica",
    usos: "Refrescante, espasmódica y digestiva. Quita la acidez estomacal",
    image: "/ayra.jpeg",
    empretienda: "https://ecobio.empretienda.com.ar/toppings-de-mate/ayra",
  },
  {
    name: "Ruma",
    descripcion: "Balanceado y herbal",
    ingredientes: [
      "Romero",
      "Peperina",
      "Clavo de olor",
      "Melisa",
      "Diente de león",
    ],
    beneficios: "Diuretica, antiinflamatoria y antiséptica",
    usos: "Depurativa, retención de líquidos y digestivo. Quita la acidez estomacal",
    image: "/ruma.jpeg",
    empretienda: "https://ecobio.empretienda.com.ar/toppings-de-mate/ruma",
  },
  {
    name: "Zenda",
    descripcion: "Intenso, aromático y envolvente",
    ingredientes: ["Menta", "Jengibre", "Limón"],
    beneficios: "Digestiva, espectorante y analgésica",
    usos: "Expetorante, analgésica y digestiva. Quita la acidez estomacal",
    image: "/zenda.jpeg",
    empretienda: "https://ecobio.empretienda.com.ar/toppings-de-mate/zenda",
  },
];

// ...existing code...

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
          <Link
            href="/infusores"
            className="px-4 py-1.5 text-sm rounded-full border border-neutral-200 hover:bg-(--color-primary-soft)"
          >
            Infusores
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
                href={t.empretienda}
                target="_blank"
                className="mt-3 inline-block bg-(--color-primary) text-white text-sm px-4 py-2 rounded-full shadow hover:opacity-90 transition"
              >
                Comprar en la tienda
              </a>
            }
          >
            <div className="space-y-2 text-sm text-neutral-700">
              <p>
                <strong>Perfil:</strong> {t.descripcion}
              </p>

              <div className="flex flex-wrap gap-1.5 justify-center">
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

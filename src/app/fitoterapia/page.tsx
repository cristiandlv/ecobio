import Link from "next/link";
import ProductCard from "@/components/ProductCard";

const recetas = [
  {
    name: "NERINA · Dolor menstrual",
    descripcion: "Suave, envolvente",
    ingredientes: ["Hierbabuena", "Melisa", "Canela"],
    beneficios:
      "Alivia dolores menstruales, espasmos uterinos y malestar digestivo asociado al ciclo.",
    image: "/nerina1.jpeg",
  },
  {
    name: "NUBIA · Insomnio",
    descripcion: "Floral, dulce y envolvente",
    ingredientes: ["Pasionaria", "Manzanilla", "Lavanda", "Melisa", "Naranja"],
    beneficios:
      "Acompaña las dificultades para conciliar el sueño, especialmente cuando el origen es nervioso o emocional.",
    image: "/nubia1.jpeg",
  },
  {
    name: "BERILO · Hígado",
    descripcion: "Suave y fresca",
    ingredientes: ["Boldo", "Cedrón", "Menta piperita", "Limón"],
    beneficios:
      "Acompaña la función hepática. Mejora la digestión y activa procesos depurativos.",
    image: "/berilo.jpeg",
  },
  {
    name: "PÁRAMO · Expectorante",
    descripcion: "Refrescante, picante e intensa",
    ingredientes: [
      "Tomillo",
      "Peperina",
      "Poleo",
      "Jengibre",
      "Clavo de olor",
      "Naranja",
    ],
    beneficios:
      "Acompaña procesos respiratorios leves, congestión, tos, sensación de frío corporal y defensas bajas.",
    image: "/paramo.jpeg",
  },
  {
    name: "ASTRA · Articulaciones",
    descripcion: "Intensa y aromática",
    ingredientes: [
      "Diente de León",
      "Cola de caballo",
      "Caléndula",
      "Naranja",
      "Romero",
    ],
    beneficios:
      "Alivia articulaciones, inflamación, rigidez y sensación de pesadez corporal.",
    image: "/astra.jpeg",
  },
  {
    name: "PAUZA · Ansiedad",
    descripcion: "Aromática, calmante",
    ingredientes: [
      "Pasionaria",
      "Manzanilla",
      "Cedrón",
      "Hierbabuena",
      "Poleo",
      "Romero",
    ],
    beneficios:
      "Reduce el nerviosismo, relaja el cuerpo y acompaña el equilibrio emocional.",
    image: "/mock-pauza.jpeg",
  },
  {
    name: "CÉFIRO · Digestivo",
    descripcion: "Aromático, suave y reconfortante",
    ingredientes: [
      "Hierbabuena",
      "Cedrón",
      "Manzanilla",
      "Poleo",
      "Anís",
    ],
    beneficios:
      "Reduce inflamación y sensación de pesadez. Acompaña la digestión y la expulsión de gases.",
    image: "/cefiro2.jpeg",
  },
  {
    name: "ATÁRA · Diurético",
    descripcion: "Fresco y suave",
    ingredientes: ["Hibiscus", "Té verde", "Boldo", "Menta", "Limón"],
    beneficios:
      "Acompaña procesos de depuración suave y drenaje de líquidos retenidos.",
    image: "/atara.jpeg",
  },
  {
    name: "DALIA · Menopausia",
    descripcion: "Dulce e intensa",
    ingredientes: [
      "Manzanilla",
      "Melisa",
      "Caléndula",
      "Jengibre",
      "Limón",
    ],
    beneficios:
      "Acompaña cambios físicos y emocionales propios de esta etapa.",
    image: "/dalia.jpeg",
  },
];


interface receta {
  name: string;
  descripcion: string;
  
  image: string;
}


const whatsappBase = "https://wa.me/5492246460002?text=";
const getWspLink = (item: receta) =>
  whatsappBase +
  encodeURIComponent(`Hola! Quiero comprar esta receta: ${item.name}`);

export default function FitoterapiaPage() {
  return (
    <section className="px-4 pt-24 pb-20 md:pt-28 max-w-6xl mx-auto">
      {/* ================= HEADER ================= */}
      <header className="mb-16 text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-(--color-primary)">
          Fitoterapia personalizada
        </h1>

        <p className="mt-4 text-lg text-(--color-muted)">
          Recetas herbales pensadas según tus necesidades. Un acompañamiento
          consciente, natural y respetuoso del ritmo de cada persona.
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
          <span className="px-4 py-1.5 text-sm rounded-full bg-(--color-primary-soft)">
            Fitoterapia
          </span>
          <Link
            href="/infusores"
            className="px-4 py-1.5 text-sm rounded-full border border-neutral-200 hover:bg-(--color-primary-soft)"
          >
            Infusores
          </Link>
        </nav>
      </header>

      {/* ================= GRID ================= */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {recetas.map((r) => (
          <ProductCard
            key={r.name}
            title={r.name}
            image={r.image}
            imageAlt={r.name}
            className="p-5"
            action={
              <a
                href={getWspLink(r)}
                target="_blank"
                className="mt-1 inline-block bg-(--color-primary) text-white text-sm px-4 py-2 rounded-full"
              >
                Consultar
              </a>
            }
          >
            <div className="text-sm text-neutral-700 space-y-2">
              <p className="italic text-(--color-muted)">
                {r.descripcion}
              </p>

              <div className="flex flex-wrap gap-1.5 justify-center">
                {r.ingredientes.map((ing) => (
                  <span
                    key={ing}
                    className="bg-neutral-100 text-neutral-700 text-xs px-2 py-0.5 rounded-full"
                  >
                    {ing}
                  </span>
                ))}
              </div>

              <p className="text-(--color-muted)">
                {r.beneficios}
              </p>
            </div>
          </ProductCard>
        ))}
      </div>

      {/* ================= CTA ================= */}
      <div className="mt-16 text-center">
        <p className="max-w-2xl mx-auto text-(--color-muted)">
          Si estas infusiones no son las 
          que buscas, podemos armarte la 
          que mejor vaya con vos, según 
          tus necesidades y preferencias.
        </p>

        <a
          href="https://forms.gle/GUXMFgbsD1fnAdVc8"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-8 bg-(--color-primary) text-white px-8 py-3 rounded-full font-medium shadow hover:bg-(--color-primary-dark) transition"
        >
          Consultar fitoterapia personalizada
        </a>
      </div>
    </section>
  );
}

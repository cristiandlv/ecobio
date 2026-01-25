import Image from "next/image";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { getSlug } from "@/data/products";

/* ======================
   DATA
====================== */

const blendsTeina = [
  {
    name: "Cumbre",
    perfil: "Especiado, intenso, reconfortante",
    gustos: "Canela y especias cálidas",
    ingredientes: [
      "Cardamomo",
      "Clavo de olor",
      "Anís estrellado",
      "Jengibre",
      "Pimienta",
      "Canela",
      "<strong>Té negro</strong>",
    ],
    ideal: "Climas fríos y después de las comidas",
    image: "/cumbre.jpeg",
  },
  {
    name: "Masala Chai",
    perfil: "Especiado, profundo",
    gustos: "Especias dulces y cuerpo intenso",
    ingredientes: [
      "Cardamomo",
      "Clavo de olor",
      "Canela",
      "Jengibre",
      "<strong>Té negro</strong>",
    ],
    ideal: "Momentos de activación y ritual",
    image: "/chai.jpeg",
  },
  {
    name: "Nativo",
    perfil: "Herbal, fresco",
    gustos: "Notas verdes y florales",
    ingredientes: [
      "Cedrón",
      "Pimienta rosa",
      "Lavanda",
      "<strong>Té verde</strong>",
    ],
    ideal: "Pausas conscientes",
    image: "/nativo.jpeg",
  },
];

const blendsSinTeina = [
  {
    name: "Sienna",
    perfil: "Suave, floral, calmante",
    gustos: "Dulce y envolvente",
    ingredientes: ["Manzanilla", "Pasionaria", "Canela"],
    beneficios: "Relajante, antiinflamatoria",
    usos: "Descanso, ansiedad leve, cierre del día",
    image: "/sienna.jpeg",
  },
  {
    name: "Cira",
    perfil: "Herbal, fresco, estimulante",
    gustos: "Verde y aromático",
    ingredientes: [
      "Romero",
      "Peperina",
      "Clavo de olor",
      "Melisa",
      "Diente de león",
    ],
    beneficios: "Digestiva, energizante suave",
    usos: "Después de comidas, activación sin cafeína",
    image: "/cira.jpeg",
  },
  {
    name: "Luma",
    perfil: "Cálido, envolvente",
    gustos: "Cacao suave y coco",
    ingredientes: ["Coco", "Cascarilla de cacao", "Canela"],
    beneficios: "Sedante, calmante",
    usos: "Ritual nocturno e introspección",
    image: "/luma.jpeg",
  },
  {
    name: "Ayra",
    perfil: "Cítrico, refrescante",
    gustos: "Fresco y floral",
    ingredientes: ["Cedrón", "Manzanilla", "Pétalos de rosa"],
    beneficios: "Digestiva, analgésica",
    usos: "Molestias digestivas leves y tensión corporal",
    image: "/ayra.jpeg",
  },
  {
    name: "Ruma",
    perfil: "Intenso, herbal",
    gustos: "Mentolado y especiado",
    ingredientes: [
      "Menta",
      "Jengibre",
      "Lemon Grass",
      "Limón",
      "Peperina",
      "Tomillo",
      "Diente de león",
      "Cedrón",
    ],
    beneficios: "Descongestiva, digestiva",
    usos: "Cambios de clima, respiración y digestión pesada",
    image: "/ruma.jpeg",
  },
  {
    name: "Zenda",
    perfil: "Floral, suave, depurativo",
    gustos: "Floral ligero y cítrico",
    ingredientes: ["Caléndula", "Naranja"],
    beneficios: "Diurética, antiséptica",
    usos: "Procesos depurativos y rutinas conscientes",
    image: "/zenda.jpeg",
  },
];

/* ======================
   HELPERS
====================== */

const whatsappBase = "https://wa.me/5491123456789?text=";

function getWspLink(blend: { name: string }) {
  return (
    whatsappBase +
    encodeURIComponent(`Hola! Quiero comprar el blend: ${blend.name}`)
  );
}

/* ======================
   PAGE
====================== */

export default function BlendsTePage() {
  return (
    <section className="px-4 py-24 md:py-28 max-w-6xl mx-auto">
      {/* HEADER */}
      <header className="mb-20 text-center">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-(--color-primary)">
          Blends de té e infusiones
        </h1>
        <p className="mt-4 text-lg text-(--color-muted) max-w-2xl mx-auto">
          Blends artesanales en hebras y sin teína, pensados para acompañar
          distintos momentos del día y rituales cotidianos.
        </p>

        {/* MENU */}
        <nav className="mt-8 flex justify-center gap-2 flex-wrap">
          <Link
            href="/toppings-mate"
            className="px-4 py-1.5 text-sm rounded-full border border-neutral-200 hover:bg-(--color-primary-soft)"
          >
            Toppings
          </Link>
          <span className="px-4 py-1.5 text-sm rounded-full bg-(--color-primary-soft)">
            Blends
          </span>
          <Link
            href="/fitoterapia"
            className="px-4 py-1.5 text-sm rounded-full border border-neutral-200 hover:bg-(--color-primary-soft)"
          >
            Fitoterapia
          </Link>
        </nav>
      </header>

      {/* CON TEÍNA */}
      <section className="mb-24">
        <h2 className="text-2xl font-semibold text-(--color-primary) mb-8">
          Con teína
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {blendsTeina.map((blend) => (
            <ProductCard
              key={blend.name}
              title={blend.name}
              image={blend.image}
              imageAlt={blend.name}
              className="p-5"
              action={
                <a
                  href={getWspLink(blend)}
                  target="_blank"
                  className="mt-3 inline-block bg-(--color-primary) text-white text-sm px-4 py-2 rounded-full"
                >
                  Comprar
                </a>
              }
            >
              <div className="space-y-2 text-sm text-neutral-700">
                <p><strong>Perfil:</strong> {blend.perfil}</p>
                <p><strong>Gustos:</strong> {blend.gustos}</p>

                <div className="flex flex-wrap gap-1.5">
                  {blend.ingredientes.map((ing) => (
                    <span
                      key={ing}
                      className="bg-neutral-100 text-neutral-700 text-xs px-2 py-0.5 rounded-full"
                      dangerouslySetInnerHTML={{ __html: ing }}
                    />
                  ))}
                </div>

                <p className="text-xs text-neutral-500">
                  Ideal para: {blend.ideal}
                </p>
              </div>
            </ProductCard>
          ))}
        </div>
      </section>

      {/* SIN TEÍNA */}
      <section>
        <h2 className="text-2xl font-semibold text-(--color-primary) mb-8">
          Sin teína
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {blendsSinTeina.map((blend) => (
            <ProductCard
              key={blend.name}
              title={blend.name}
              image={blend.image}
              imageAlt={blend.name}
              className="p-5"
              action={
                <a
                  href={getWspLink(blend)}
                  target="_blank"
                  className="mt-3 inline-block bg-(--color-primary) text-white text-sm px-4 py-2 rounded-full"
                >
                  Comprar
                </a>
              }
            >
              <div className="space-y-2 text-sm text-neutral-700">
                <p><strong>Perfil:</strong> {blend.perfil}</p>
                <p><strong>Gustos:</strong> {blend.gustos}</p>

                <div className="flex flex-wrap gap-1.5">
                  {blend.ingredientes.map((ing) => (
                    <span
                      key={ing}
                      className="bg-neutral-100 text-neutral-700 text-xs px-2 py-0.5 rounded-full"
                    >
                      {ing}
                    </span>
                  ))}
                </div>

                <p className="text-xs text-neutral-500">
                  {blend.usos}
                </p>
              </div>
            </ProductCard>
          ))}
        </div>
      </section>
    </section>
  );
}

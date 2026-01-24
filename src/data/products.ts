export interface Product {
  name: string;
  perfil?: string;
  descripcion?: string;
  ingredientes?: string[];
  propiedades?: string;
  ideal?: string;
  beneficios?: string;
  usos?: string;
  image?: string;
  category?: 'topping' | 'blend' | 'fitoterapia';
}

const whatsappBase = "https://wa.me/5491123456789?text=";

function slugify(name: string) {
  return name
    .toLowerCase()
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-');
}

export const blendsTeina: Product[] = [
  {
    name: "Cumbre",
    perfil: "Especiado, intenso, reconfortante",
    ingredientes: ["Cardamomo", "Clavo de olor", "Anís estrellado", "Jengibre", "Pimienta", "Canela", "Té negro"],
    propiedades: "Digestivo, antiinflamatorio, antiséptico, carminativo, depurativo",
    ideal: "Climas fríos, después de las comidas, momentos de activación",
    image: "/mock-te.webp",
    category: 'blend'
  },
  {
    name: "Masala Chai",
    perfil: "Especiado, intenso, reconfortante",
    ingredientes: ["Cardamomo", "Clavo de olor", "Anís estrellado", "Jengibre", "Pimienta", "Canela", "Té negro"],
    propiedades: "Digestivo, antiinflamatorio, antiséptico, carminativo, depurativo",
    ideal: "Climas fríos, después de las comidas, momentos de activación",
    image: "/mock-te.webp",
    category: 'blend'
  },
  {
    name: "Nativo",
    perfil: "Herbal, fresco, equilibrado",
    ingredientes: ["Cedrón", "Pimienta rosa", "Pétalos de rosa", "Lavanda", "Té verde"],
    propiedades: "Relajante, digestivo, antiinflamatorio, antioxidante",
    ideal: "Pausas conscientes, equilibrio mente-cuerpo",
    image: "/mock-te.webp",
    category: 'blend'
  },
  {
    name: "Otoño / Invierno – Primavera / Verano",
    perfil: "Blend estacional",
    ingredientes: ["Rosa mosqueta", "Hibiscus", "Clavo de olor", "Pétalos de rosa", "Naranja", "Té rojo"],
    propiedades: "Diurética, antiséptica, digestiva, relajante",
    ideal: "Acompañar cambios de estación y rutinas variables",
    image: "/mock-te.webp",
    category: 'blend'
  },
];

export const blendsSinTeina: Product[] = [
  {
    name: "Prado",
    perfil: "Cítrico, floral, suave",
    ingredientes: ["Mandarina", "Hibiscus", "Rooibos"],
    propiedades: "Sin cafeína, relajante, diurético, digestivo",
    ideal: "Tarde/noche, consumo cotidiano, personas sensibles a la cafeína",
    image: "/mock-te.webp",
    category: 'blend'
  },
  {
    name: "Sienna",
    perfil: "Suave, floral, calmante",
    ingredientes: ["Manzanilla", "Pasionaria", "Canela"],
    propiedades: "Relajante, antiinflamatoria",
    ideal: "Descanso, ansiedad leve, cierre del día",
    image: "/mock-infusion.webp",
    category: 'blend'
  },
  {
    name: "Cira",
    perfil: "Herbal, fresco, estimulante",
    ingredientes: ["Romero", "Peperina", "Clavo de olor", "Melisa", "Diente de león"],
    propiedades: "Reduce la acidez, digestiva, energizante suave",
    ideal: "Después de comidas, activación sin cafeína",
    image: "/mock-infusion.webp",
    category: 'blend'
  },
  {
    name: "Luma",
    perfil: "Cálido, envolvente",
    ingredientes: ["Coco", "Cascarilla de cacao", "Canela"],
    propiedades: "Sedante, calmante, digestiva",
    ideal: "Ritual nocturno, momentos de introspección",
    image: "/mock-infusion.webp",
    category: 'blend'
  },
  {
    name: "Ayra",
    perfil: "Cítrico, refrescante",
    ingredientes: ["Cedrón", "Manzanilla", "Pétalos de rosa"],
    propiedades: "Analgésica, antiespasmódica, digestiva, reduce la acidez",
    ideal: "Molestias digestivas leves y tensión corporal",
    image: "/mock-infusion.webp",
    category: 'blend'
  },
  {
    name: "Ruma",
    perfil: "Intenso, herbal",
    ingredientes: ["Menta", "Jengibre", "Lemon Grass", "Limón", "Peperina", "Tomillo", "Diente de león", "Cedrón"],
    propiedades: "Descongestiva, digestiva, reduce la acidez",
    ideal: "Cambios de clima, respiración, digestión pesada",
    image: "/mock-infusion.webp",
    category: 'blend'
  },
  {
    name: "Zenda",
    perfil: "Floral, suave, depurativo",
    ingredientes: ["Caléndula", "Naranja"],
    propiedades: "Diurética, antiséptica, digestiva",
    ideal: "Acompañar procesos depurativos y rutinas conscientes",
    image: "/mock-infusion.webp",
    category: 'blend'
  },
];

export const toppings: Product[] = [
  {
    name: "Sienna",
    descripcion: "Perfil: suave, floral, calmante",
    ingredientes: ["Manzanilla", "Pasionaria", "Canela"],
    beneficios: "Relajante, antiinflamatoria",
    usos: "Ideal para descanso, ansiedad leve, cierre del día",
    image: "/mock-infusion.webp",
    category: 'topping'
  },
  {
    name: "Cira",
    descripcion: "Perfil: herbal, fresco, estimulante",
    ingredientes: ["Romero", "Peperina", "Clavo de olor", "Melisa", "Diente de león"],
    beneficios: "Reduce la acidez, digestiva, energizante suave",
    usos: "Ideal después de comidas, activación sin cafeína",
    image: "/mock-infusion.webp",
    category: 'topping'
  },
  {
    name: "Luma",
    descripcion: "Perfil: cálido, envolvente",
    ingredientes: ["Coco", "Cascarilla de cacao", "Canela"],
    beneficios: "Sedante, calmante, digestiva",
    usos: "Ideal para ritual nocturno y momentos de introspección",
    image: "/mock-infusion.webp",
    category: 'topping'
  },
  {
    name: "Ayra",
    descripcion: "Perfil: cítrico, refrescante",
    ingredientes: ["Cedrón", "Manzanilla", "Pétalos de rosa"],
    beneficios: "Analgésica, antiespasmódica, digestiva, reduce la acidez",
    usos: "Ideal para molestias digestivas leves y tensión corporal",
    image: "/mock-infusion.webp",
    category: 'topping'
  },
  {
    name: "Ruma",
    descripcion: "Perfil: intenso, herbal",
    ingredientes: ["Menta", "Jengibre", "Lemon Grass", "Limón", "Peperina", "Tomillo", "Diente de león", "Cedrón"],
    beneficios: "Descongestiva, digestiva, reduce la acidez",
    usos: "Ideal para cambios de clima, respiración y digestión pesada",
    image: "/mock-infusion.webp",
    category: 'topping'
  },
  {
    name: "Zenda",
    descripcion: "Perfil: floral, suave, depurativo",
    ingredientes: ["Caléndula", "Naranja"],
    beneficios: "Diurética, antiséptica, digestiva",
    usos: "Ideal para acompañar procesos depurativos y rutinas conscientes",
    image: "/mock-infusion.webp",
    category: 'topping'
  },
];

const allProducts = [...blendsTeina, ...blendsSinTeina, ...toppings];

export function getProductBySlug(slug: string): Product | undefined {
  return allProducts.find((p) => slugify(p.name) === slug);
}

export function getAllSlugs(): string[] {
  return allProducts.map((p) => slugify(p.name));
}

export function getWspLink(product: Product): string {
  const msg = encodeURIComponent(`Hola! Quiero comprar: ${product.name}`);
  return whatsappBase + msg;
}

export function getSlug(name: string): string {
  return slugify(name);
}

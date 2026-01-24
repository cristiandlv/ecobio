import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getProductBySlug, getWspLink, getAllSlugs } from "@/data/products";

type Props = { params: { slug: string } };

export async function generateStaticParams(): Promise<Array<{ slug: string }>> {
  const slugs = getAllSlugs();
  return slugs.map((s) => ({ slug: s }));
}

export default function ProductPage({ params }: Props) {
  const product = getProductBySlug(params.slug);
  if (!product) return notFound();

  return (
    <section className="px-4 py-20 max-w-4xl mx-auto">
      <div className="mb-8 flex flex-col md:flex-row items-start gap-8">
        {product.image && (
          <div className="w-full md:w-48 h-48 rounded-xl overflow-hidden shadow-md">
            <Image src={product.image} alt={product.name} width={320} height={320} className="object-cover w-full h-full" />
          </div>
        )}
        <div className="flex-1">
          <h1 className="text-3xl font-extrabold text-(--color-primary) mb-3">{product.name}</h1>
          {product.perfil && <p className="text-sm text-(--color-muted) mb-3">{product.perfil}</p>}
          {product.descripcion && <p className="text-base text-neutral-700 mb-3">{product.descripcion}</p>}

          {product.ingredientes && (
            <div className="mb-3">
              <h3 className="text-sm font-semibold text-(--color-primary) mb-2">Ingredientes</h3>
              <div className="flex flex-wrap gap-2">
                {product.ingredientes.map((ing) => (
                  <span key={ing} className="inline-block bg-neutral-100 text-neutral-800 text-xs px-2 py-1 rounded-full">{ing}</span>
                ))}
              </div>
            </div>
          )}

          {product.propiedades && <p className="mb-2"><strong>Propiedades:</strong> {product.propiedades}</p>}
          {product.beneficios && <p className="mb-2"><strong>Beneficios:</strong> {product.beneficios}</p>}
          {product.ideal && <p className="mb-2"><strong>Ideal para:</strong> {product.ideal}</p>}

          <div className="mt-6 flex items-center gap-3">
            <a href={getWspLink(product)} target="_blank" rel="noopener noreferrer" className="bg-(--color-primary) text-white px-5 py-2 rounded-full shadow hover:bg-(--color-primary-dark) transition">Lo quiero</a>
            <Link href={product.category === 'topping' ? '/toppings-mate' : '/blends-te'} className="text-sm text-(--color-primary) underline">Volver al listado</Link>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <Link href="/" className="text-sm text-(--color-muted)">← Volver al inicio</Link>
      </div>
    </section>
  );
}

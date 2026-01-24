import Image from "next/image";
import Link from "next/link";

type ProductCardProps = {
  title: string;
  image?: string;
  imageAlt?: string;
  children?: React.ReactNode;
  action?: React.ReactNode;
  className?: string;
};

export default function ProductCard({
  title,
  image,
  imageAlt,
  children,
  action,
  className,
}: ProductCardProps) {
  return (
    <article
      className={`group bg-white rounded-3xl shadow-xl p-6 md:p-6 flex flex-col items-center text-center border border-neutral-100 hover:border-(--color-primary) hover:shadow-2xl transition-all duration-300 relative overflow-hidden ${className ?? ""}`}
      tabIndex={0}
      role="group"
    >
      {image && (
        <div className="w-20 h-20 md:w-28 md:h-28 mb-4 rounded-full overflow-hidden shadow-lg border-4 border-(--color-primary-soft) bg-neutral-50 flex items-center justify-center">
          <Image
            src={image}
            alt={imageAlt ?? title}
            width={180}
            height={180}
            className="object-cover object-center w-full h-full"
            priority={false}
          />
        </div>
      )}

      <h3 className="text-xl font-bold text-(--color-primary) mb-2">{title}</h3>

      <div className="w-full text-sm text-neutral-700 min-h-18">{children}</div>

      {action && <div className="mt-3 w-full flex justify-center">{action}</div>}
    </article>
  );
}

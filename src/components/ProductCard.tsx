import Image from "next/image";

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
      tabIndex={0}
      role="group"
      className={`
        relative group
        bg-white rounded-3xl
        border border-neutral-100
        p-6 md:p-6
        flex flex-col items-center text-center
        shadow-[0_10px_30px_rgba(0,0,0,0.06)]
        transition-all duration-300 ease-out
        hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)]
        hover:border-(--color-primary)
        focus-visible:outline-none
        focus-visible:ring-2 focus-visible:ring-(--color-primary)
        ${className ?? ""}
      `}
    >
      {/* IMAGEN */}
      {image && (
        <div
          className="
            relative
            w-20 h-20 md:w-28 md:h-28 mb-4
            rounded-full overflow-hidden
            border-4 border-(--color-primary-soft)
            bg-neutral-50
            shadow-md
            transition-all duration-300
          "
        >
          <Image
            src={image}
            alt={imageAlt ?? title}
            width={180}
            height={180}
            className="
              w-full h-full object-cover object-center
              transition-transform duration-500 ease-out
              group-hover:scale-110
              group-focus-visible:scale-110
              active:scale-110
            "
          />

          {/* glow suave */}
          <div
            className="
              pointer-events-none
              absolute inset-0
              rounded-full
              opacity-0 group-hover:opacity-100
              transition-opacity duration-300
              bg-gradient-to-tr
              from-white/40 to-transparent
            "
          />
        </div>
      )}

      {/* TITULO */}
      <h3 className="text-xl font-semibold text-(--color-primary) mb-2">
        {title}
      </h3>

      {/* CONTENIDO */}
      <div className="w-full text-sm text-neutral-700 min-h-18">
        {children}
      </div>

      {/* ACCIÓN */}
      {action && (
        <div className="mt-4 w-full flex justify-center">
          {action}
        </div>
      )}
    </article>
  );
}

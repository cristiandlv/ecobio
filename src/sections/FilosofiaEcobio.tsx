import Image from "next/image";

export function FilosofiaEcobio() {
  return (
    <section className="relative px-6 pt-24 pb-24 bg-white overflow-hidden">

      {/* Fondos suaves */}
      <div className="absolute top-10 left-[-120px] w-80 h-80 bg-(--color-primary-soft) rounded-full blur-3xl opacity-40" />
      <div className="absolute bottom-10 right-[-120px] w-72 h-72 bg-(--color-primary-soft) rounded-full blur-3xl opacity-30" />

      <div className="relative max-w-6xl mx-auto grid gap-16 md:grid-cols-2 items-start">

        {/* IMÁGENES */}
        <div className="
          order-2 md:order-1
          grid grid-cols-2 gap-6
          md:-mt-12
          animate-fade-in
        ">
          <div className="col-span-2 rounded-3xl overflow-hidden shadow-xl group">
            <Image
              src="/mock-filosofia.webp"
              alt="Ritual de infusión Ecobio"
              width={900}
              height={600}
              className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-[1.03]"
            />
          </div>

          <div className="rounded-2xl overflow-hidden shadow-lg group">
            <Image
              src="/mock-ingredientes.webp"
              alt="Ingredientes naturales Ecobio"
              width={400}
              height={300}
              className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-[1.05]"
            />
          </div>

          <div className="rounded-2xl overflow-hidden shadow-lg group">
            <Image
              src="/mock-ritual.webp"
              alt="Momento de bienestar"
              width={400}
              height={300}
              className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-[1.05]"
            />
          </div>
        </div>

        {/* TEXTO */}
        <div className="
          order-1 md:order-2
          animate-fade-in-up
          md:pt-8
        ">
          <span className="text-xs uppercase tracking-widest text-(--color-primary) font-medium">
            Filosofía Ecobio
          </span>

          <h2 className="mt-4 text-3xl md:text-4xl font-semibold text-(--color-primary)">
            Volver a lo simple.<br />
            Infusionar con intención.
          </h2>

          <p className="mt-6 text-(--color-muted) leading-relaxed">
            Ecobio nace del deseo de crear infusiones que acompañen la vida real:
            rituales cotidianos, pausas necesarias y momentos de conexión.
          </p>

          <p className="mt-4 text-(--color-muted) leading-relaxed">
            Trabajamos con ingredientes naturales, procesos artesanales y blends
            pensados para aportar bienestar sin alterar la rutina.
          </p>

          <p className="mt-6 text-sm font-medium text-(--color-primary)">
            Bienestar consciente, accesible y honesto.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            {[
              "Ingredientes naturales",
              "Producción artesanal",
              "Sin aditivos",
              "Rituales conscientes",
            ].map((label) => (
              <span
                key={label}
                className="
                  px-4 py-2
                  text-xs font-medium
                  rounded-full
                  bg-(--color-primary-soft)
                  text-(--color-primary)
                  tracking-wide
                "
              >
                {label}
              </span>
            ))}
          </div>

        </div>
        

      </div>
      
    </section>
  );
}

import Image from "next/image";

export function FilosofiaEcobio() {
  return (
    <section className="relative px-6 py-32 bg-white overflow-hidden">

      {/* fondos suaves */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-(--color-primary-soft) rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-0 -right-32 w-80 h-80 bg-(--color-primary-soft) rounded-full blur-3xl opacity-40" />

      <div className="relative max-w-6xl mx-auto grid gap-20 md:grid-cols-2 items-center">

        {/* TEXTO */}
        <div>
          <span className="text-xs uppercase tracking-widest text-(--color-primary) font-medium animate-fade-in">
            Filosofía Ecobio
          </span>

          <h2 className="mt-4 text-3xl md:text-4xl font-semibold text-(--color-primary) animate-fade-in-up">
            Volver a lo simple.<br />Infusionar con intención.
          </h2>

          <p className="mt-6 text-(--color-muted) leading-relaxed animate-fade-in-up delay-1">
            Ecobio nace del deseo de crear infusiones que acompañen la vida real:
            rituales cotidianos, pausas necesarias y momentos de conexión.
          </p>

          <p className="mt-4 text-(--color-muted) leading-relaxed animate-fade-in-up delay-2">
            Trabajamos con ingredientes naturales, procesos artesanales y blends
            pensados para aportar bienestar sin alterar la rutina.
          </p>

          <p className="mt-6 text-sm font-medium text-(--color-primary) animate-fade-in-up delay-3">
            Bienestar consciente, accesible y honesto.
          </p>
        </div>

        {/* IMÁGENES */}
        <div className="grid grid-cols-2 gap-6 animate-fade-in delay-2">
          <div className="col-span-2 rounded-3xl overflow-hidden shadow-xl">
            <Image
              src="/mock-filosofia.webp"
              alt="Ritual de infusión Ecobio"
              width={900}
              height={600}
              className="object-cover w-full h-full"
            />
          </div>

          <div className="rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/mock-ingredientes.webp"
              alt="Ingredientes naturales Ecobio"
              width={400}
              height={300}
              className="object-cover w-full h-full"
            />
          </div>

          <div className="rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/mock-ritual.webp"
              alt="Momento de bienestar"
              width={400}
              height={300}
              className="object-cover w-full h-full"
            />
          </div>
        </div>

      </div>
    </section>
  );
}

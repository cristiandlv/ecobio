export function Testimonials() {
  const testimonials = [
    {
      text: "Ahora sí puedo tomar mate. Antes me daba acidez y lo había dejado. Los toppings de Ecobio me cambiaron la experiencia.",
      author: "María",
      detail: "Cliente habitual",
    },
    {
      text: "Gracias a la fitoterapia y a estas infusiones duermo mejor. Es parte de mi rutina nocturna. Súper recomiendo.",
      author: "Lucía",
      detail: "Consulta personalizada",
    },
    {
      text: "No tomaba infusiones, pero me encantó lo cuidado del producto. Hoy nunca nos faltan en casa.",
      author: "Julián",
      detail: "Cliente",
    },
  ];

  return (
    <section className="relative px-6 py-24 md:py-28 bg-(--color-primary-soft)">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="text-center max-w-2xl mx-auto mb-14">
          <span className="block text-xs uppercase tracking-widest text-(--color-primary) font-medium">
            Testimonios
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-(--color-primary)">
            Experiencias reales con Ecobio
          </h2>
        </header>

        {/* Grid */}
        <div className="
          grid gap-6
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-3
        ">
          {testimonials.map((t, i) => (
            <blockquote
              key={i}
              className="
                bg-white
                rounded-3xl
                p-8
                border border-neutral-100
                shadow-[0_10px_30px_rgba(0,0,0,0.06)]
                flex flex-col
              "
            >
              <p className="text-sm text-neutral-700 leading-relaxed flex-grow">
                “{t.text}”
              </p>

              <footer className="mt-6">
                <p className="text-sm font-medium text-neutral-800">
                  {t.author}
                </p>
                <p className="text-xs text-(--color-muted)">
                  {t.detail}
                </p>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

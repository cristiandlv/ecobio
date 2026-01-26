export function Testimonials() {
  const testimonials = [
    {
      text: "Ahora sí puedo tomar mate. Antes me daba acidez y lo había dejado. Los toppings de Ecobio me cambiaron la experiencia.",
      author: "María",
      detail: "Cliente habitual",
    },
    {
      text: "Gracias a la fitoterapia y a estas infusiones duermo mejor. Es parte de mi rutina nocturna.",
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
    <section className="px-6 py-24 md:py-32 bg-(--color-primary-soft)">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto">
          <span className="text-xs uppercase tracking-widest text-(--color-primary)">
            Testimonios
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-semibold text-(--color-primary)">
            Experiencias reales
          </h2>
        </div>

        {/* Grid */}
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <blockquote
              key={i}
              className="
                bg-white
                rounded-3xl
                p-8
                border border-neutral-200
                flex flex-col
              "
            >
              <p className="text-sm text-neutral-700 leading-relaxed flex-grow">
                “{t.text}”
              </p>

              <footer className="mt-6 text-sm">
                <p className="font-medium text-neutral-800">
                  {t.author}
                </p>
                <p className="text-(--color-muted)">
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

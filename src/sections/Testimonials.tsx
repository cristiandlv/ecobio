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
    <section className="px-6 py-32 bg-(--color-primary-soft)">
      <div className="max-w-6xl mx-auto">

        <div className="text-center animate-fade-in-up">
          <span className="text-xs uppercase tracking-widest text-(--color-primary) font-medium">
            Testimonios
          </span>

          <h2 className="mt-4 text-3xl md:text-4xl font-semibold text-(--color-primary)">
            Experiencias reales con Ecobio
          </h2>
        </div>

        <div className="mt-20 grid gap-10 md:grid-cols-3 animate-fade-in-up">
          {testimonials.map((t, i) => (
            <blockquote
              key={i}
              className="bg-white rounded-3xl p-8 shadow-xl border border-neutral-100 flex flex-col"
            >
              <p className="text-neutral-700 leading-relaxed text-sm flex-grow">
                “{t.text}”
              </p>

              <footer className="mt-6 text-sm">
                <strong className="block text-neutral-800 font-medium">
                  {t.author}
                </strong>
                <span className="text-(--color-muted)">
                  {t.detail}
                </span>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

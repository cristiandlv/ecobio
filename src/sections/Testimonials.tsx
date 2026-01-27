export function Testimonials() {
  const testimonials = [
    {
      text: "Volví a tomar mate. Antes me daba acidez y lo había dejado. Hoy puedo disfrutarlo de nuevo.",
      author: "María",
      detail: "Cliente habitual",
    },
    {
      text: "Gracias a la fitoterapia y a estas infusiones duermo mejor. Es parte de mi ritual nocturno.",
      author: "Lucía",
      detail: "Consulta personalizada",
    },
    {
      text: "No tomaba infusiones, pero me encantó lo cuidado del producto. Hoy no faltan en casa.",
      author: "Julián",
      detail: "Cliente",
    },
  ];

  return (
    <section className="relative px-6 py-24 md:py-28 bg-(--color-primary-soft)">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="text-center max-w-2xl mx-auto mb-14 animate-fade-in-up">
          <span className="block text-xs uppercase tracking-widest text-(--color-primary) font-medium">
            Testimonios
          </span>

          <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-(--color-primary)">
            Experiencias reales con Ecobio
          </h2>
        </header>

        {/* SLIDER */}
        <div
          className="
            -mx-6 px-6
            flex gap-6
            overflow-x-auto
            snap-x snap-mandatory
            no-scrollbar
            md:mx-0 md:px-0
            md:grid md:grid-cols-3
            md:gap-8
            md:overflow-visible
          "
        >
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="
                snap-center
                flex-shrink-0
                w-[85%] sm:w-[70%]
                md:w-auto
              "
            >
              <blockquote
                className="
                  relative
                  bg-white
                  rounded-3xl
                  p-8
                  border border-neutral-100
                  shadow-[0_10px_30px_rgba(0,0,0,0.06)]
                  h-full
                "
              >
                {/* comilla */}
                <span className="absolute top-6 right-6 text-5xl text-(--color-primary-soft)">
                  “
                </span>

                <p className="text-sm text-neutral-700 leading-relaxed">
                  {t.text}
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
            </div>
          ))}
        </div>

        {/* hint */}
        <p className="mt-8 text-xs text-center text-(--color-muted) md:hidden">
          Deslizá para leer más →
        </p>
      </div>
    </section>
  );
}

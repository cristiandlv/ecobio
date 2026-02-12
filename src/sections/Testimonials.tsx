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
    <section className="relative px-6 py-16 md:py-20 bg-(--color-primary-soft)">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <header className="text-center max-w-2xl mx-auto mb-10">
          <span className="block text-[11px] uppercase tracking-widest text-(--color-primary) font-medium">
            Testimonios
          </span>

          <h2 className="mt-2 text-2xl md:text-3xl font-semibold text-(--color-primary)">
            Experiencias reales con Ecobio
          </h2>
        </header>
      
        {/* Slider */}
        <div
          className="
            -mx-6 px-6
            flex gap-5
            overflow-x-auto
            snap-x snap-mandatory
            no-scrollbar
            md:mx-0 md:px-0
            md:grid md:grid-cols-3
            md:gap-6
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
                  bg-white
                  rounded-2xl
                  p-6
                  border border-neutral-100
                  shadow-[0_8px_25px_rgba(0,0,0,0.05)]
                  h-full
                "
              >
                <p className="text-[15px] text-neutral-700 leading-relaxed">
                  {t.text}
                </p>

                <footer className="mt-4">
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

        <p className="mt-6 text-[12px] text-center text-(--color-muted) md:hidden">
          Deslizá para leer más →
        </p>

        {/* CTA refinado */}
        <div className="mt-12 text-center">
          
          <p className="text-xs uppercase tracking-widest text-(--color-primary) font-medium">
            Valoramos tu opinión
          </p>

          <p className="mt-3 text-base md:text-lg text-neutral-700 leading-relaxed">
            Si Ecobio forma parte de tus momentos cotidianos,
            nos ayuda mucho que compartas tu experiencia.
          </p>

          <a
            href="https://g.page/r/CdAc5fJRMk3uEBM/review"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex
              items-center
              gap-2
              mt-6
              bg-white
              text-(--color-primary)
              border border-(--color-primary)
              px-7
              py-3
              rounded-full
              text-sm
              font-medium
              shadow-[0_6px_18px_rgba(0,0,0,0.06)]
              hover:bg-(--color-primary)
              hover:text-white
              hover:shadow-[0_8px_24px_rgba(0,0,0,0.1)]
              transition
            "
          >
            <span className="text-base">★</span>
            Dejar una reseña en Google
          </a>
        </div>

      </div>
    </section>
  );
}

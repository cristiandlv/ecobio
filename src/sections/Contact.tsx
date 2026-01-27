export function Contact() {
  return (
    <section
      id="contacto"
      className="relative px-6 py-28 bg-white overflow-hidden"
    >
      {/* atmósfera */}
      <div className="absolute -top-24 left-[-140px] w-72 h-72 bg-(--color-primary-soft) rounded-full blur-3xl opacity-40" />

      <div className="relative max-w-5xl mx-auto text-center">

        <span className="block text-xs uppercase tracking-widest text-(--color-primary) font-medium">
          Contacto
        </span>

        <h2 className="mt-4 text-3xl md:text-4xl font-semibold text-(--color-primary)">
          Hablemos
        </h2>

        <p className="mt-6 text-lg text-(--color-muted) max-w-xl mx-auto leading-relaxed">
          Si tenés una consulta, querés ofrecer Ecobio en tu local
          o necesitás asesoramiento en fitoterapia,
          estamos para ayudarte.
        </p>

        {/* acciones */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">

          <a
            href="https://wa.me/549XXXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex justify-center items-center
              rounded-full
              bg-(--color-primary)
              px-8 py-3
              text-white font-medium
              shadow-md hover:shadow-lg
              transition
            "
          >
            💬 Escribinos por WhatsApp
          </a>

          <a
            href="mailto:tiendaecobio@gmail.com"
            className="
              inline-flex justify-center items-center
              rounded-full
              border border-(--color-primary)
              px-8 py-3
              text-(--color-primary)
              font-medium
              hover:bg-(--color-primary-soft)
              transition
            "
          >
            ✉️ tiendaecobio@gmail.com
          </a>
        </div>

        {/* microcopy */}
        <p className="mt-8 text-xs text-(--color-muted)">
          Respondemos personalmente · Sin bots · Sin spam
        </p>
      </div>
    </section>
  );
}

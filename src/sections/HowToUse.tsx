import Image from "next/image";

export function HowToUse() {
  return (
    <section
      id="como-usar"
      className="
        relative
        px-6
        py-20
        md:py-28
        bg-gradient-to-b
        from-white
        to-(--color-primary-soft)
        overflow-hidden
      "
    >
      {/* fondo orgánico sutil */}
      <div className="absolute -bottom-40 left-[-120px] w-72 h-72 bg-(--color-primary-soft) rounded-full blur-3xl opacity-40" />

      <div className="relative max-w-6xl mx-auto grid gap-12 md:gap-16 md:grid-cols-2 items-start">

        {/* TEXTO */}
        <div className="animate-fade-in-up">
          <span className="text-xs uppercase tracking-widest text-(--color-primary) font-medium">
            Usos
          </span>

          <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-(--color-primary)">
            Un ritual simple
            <br className="hidden md:block" /> todos los días
          </h2>

          <p className="mt-5 text-(--color-muted) leading-relaxed max-w-xl text-sm md:text-base">
            Los toppings Ecobio se integran de forma natural al mate.
            Pequeños gestos que transforman el momento, sin cambiar tu rutina.
          </p>

          {/* pasos */}
          <ul className="mt-7 space-y-4 text-sm text-neutral-700">
            <li className="flex items-start gap-3">
              <span className="text-xl leading-none">🧉</span>
              <p>
                Agregá una cucharadita en el fondo, donde apoyás la bombilla.
              </p>
            </li>

            <li className="flex items-start gap-3">
              <span className="text-xl leading-none">🌿</span>
              <p>
                Podés mezclarlo con la yerba o usarlo en capas.
              </p>
            </li>

            <li className="flex items-start gap-3">
              <span className="text-xl leading-none">💧</span>
              <p>
                Cebá como siempre y dejá que el sabor haga lo suyo.
              </p>
            </li>
          </ul>

          {/* cierre corto */}
          <p className="mt-6 text-sm text-(--color-muted)">
            Cada blend acompaña distintos momentos: energía, pausa o descanso.
          </p>
        </div>

        {/* TIP (más compacto en mobile) */}
        <div className="relative animate-fade-in-up">
          <div
            className="
              rounded-3xl
              bg-white
              p-6
              md:p-10
              shadow-lg
              border
              border-neutral-100
            "
          >
            <span className="text-xs uppercase tracking-widest text-(--color-primary) font-medium">
              Tip Ecobio
            </span>

            <p className="mt-3 text-base md:text-lg font-medium text-neutral-800 leading-relaxed">
              Combiná toppings según tu intención
            </p>

            <p className="mt-2 text-sm text-(--color-muted)">
              Energía a la mañana, pausa a la tarde o relajación al final del día.
            </p>
          </div>

          {/* detalle decorativo */}
          <div className="absolute -top-6 -right-6 w-20 h-20 bg-(--color-primary-soft) rounded-full blur-2xl opacity-50" />
        </div>
      </div>
    </section>
  );
}

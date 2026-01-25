import Image from "next/image";

export function HowToUse() {
  return (
    <section
      id="como-usar"
      className="relative px-6 py-28 bg-gradient-to-b from-white to-(--color-primary-soft) overflow-hidden"
    >
      {/* fondo orgánico */}
      <div className="absolute -bottom-32 left-[-120px] w-80 h-80 bg-(--color-primary-soft) rounded-full blur-3xl opacity-50" />

      <div className="relative max-w-6xl mx-auto grid gap-16 md:grid-cols-2 items-center">

        {/* TEXTO */}
        <div className="animate-fade-in-up">
          <span className="text-xs uppercase tracking-widest text-(--color-primary) font-medium">
            Usos
          </span>

          <h2 className="mt-4 text-3xl md:text-4xl font-semibold text-(--color-primary)">
            Un ritual simple,<br className="hidden md:block" /> todos los días
          </h2>

          <p className="mt-6 text-(--color-muted) leading-relaxed max-w-xl">
            Los toppings Ecobio están pensados para integrarse de forma natural
            a tu mate, sin cambiar tu rutina. Pequeños gestos que transforman
            el momento.
          </p>

          {/* pasos con iconos */}
          <ul className="mt-10 space-y-6 text-sm text-neutral-700">
            <li className="flex items-start gap-4">
              <span className="text-2xl leading-none">🧉</span>
              <p className="leading-relaxed">
                Agregá una cucharadita del topping en el fondo, justo en el agujerito donde colocas la bombilla para sentir sabor desde el primer Mate.
              </p>
            </li>

            <li className="flex items-start gap-4">
              <span className="text-2xl leading-none">🌿</span>
              <p className="leading-relaxed">
                Podés mezclarlo con la yerba también o usarlo en capas, según tu preferencia.
              </p>
            </li>

            <li className="flex items-start gap-4">
              <span className="text-2xl leading-none">💧</span>
              <p className="leading-relaxed">
                Cebá como siempre y dejá que el aroma y el sabor hagan lo suyo.
              </p>
            </li>
          </ul>

          <p className="mt-10 text-sm text-(--color-muted)">
            Cada blend está pensado para acompañar distintos momentos del día:
            energía, pausa o descanso.
          </p>
        </div>

        {/* TARJETA TIP */}
        <div className="relative animate-fade-in-up">
          <div className="rounded-3xl bg-white p-10 shadow-xl border border-neutral-100">
            <span className="text-xs uppercase tracking-widest text-(--color-primary) font-medium">
              Tip Ecobio
            </span>

            <p className="mt-4 text-lg font-medium text-neutral-800 leading-relaxed">
              Probá combinar toppings según tu intención
            </p>

            <p className="mt-2 text-sm text-(--color-muted)">
              Energía por la mañana, pausa a la tarde o relajación al final del día.
            </p>
          </div>

          {/* detalle */}
          <div className="absolute -top-6 -right-6 w-24 h-24 bg-(--color-primary-soft) rounded-full blur-2xl opacity-60" />
        </div>
      </div>
    </section>
  );
}

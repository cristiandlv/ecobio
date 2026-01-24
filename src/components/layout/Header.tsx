"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export function Header() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/#productos", label: "Productos" },
    { href: "/#como-usar", label: "Usos" },
    { href: "/#locales", label: "Para locales" },
    { href: "/#contacto", label: "Contacto" },
  ];

  return (
    <>
      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo.png" alt="Ecobio" width={44} height={44} priority />
            <span className="font-semibold text-lg text-(--color-primary)">
              Ecobio
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="
                  relative text-neutral-700 transition
                  hover:text-(--color-primary)
                  after:absolute after:left-0 after:-bottom-1
                  after:h-[2px] after:w-0 after:bg-(--color-primary)
                  after:transition-all hover:after:w-full
                "
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="https://ecobio.empretienda.com.ar/"
              className="rounded-full px-4 py-2 text-sm font-medium text-(--color-primary) hover:bg-(--color-primary-soft) transition"
            >
              Tienda
            </Link>

            <Link
              href="/toppings-mate"
              className="rounded-full bg-(--color-primary) px-5 py-2 text-sm font-medium text-white shadow hover:shadow-md transition"
            >
              Catálogo
            </Link>
          </div>

          {/* Mobile button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-full border border-neutral-300 hover:bg-neutral-100 transition"
            aria-label="Abrir menú"
          >
            <div className="flex flex-col gap-1">
              <span className="w-5 h-[2px] bg-neutral-800" />
              <span className="w-5 h-[2px] bg-neutral-800" />
              <span className="w-5 h-[2px] bg-neutral-800" />
            </div>
          </button>
        </div>
      </header>

      {/* MOBILE MENU */}
      {open && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm md:hidden"
            onClick={() => setOpen(false)}
          />

          {/* Sheet */}
          <div className="fixed top-24 left-4 right-4 z-50 md:hidden animate-fade-in-up">
            <div className="rounded-3xl bg-white shadow-2xl border border-neutral-200 p-6">

              {/* Links */}
              <nav className="flex flex-col gap-5 text-base">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="font-medium text-neutral-800 hover:text-(--color-primary)"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              {/* Divider */}
              <div className="my-6 h-px bg-neutral-200" />

              {/* CTAs */}
              <div className="flex flex-col gap-3">
                <Link
                  href="/toppings-mate"
                  onClick={() => setOpen(false)}
                  className="inline-flex justify-center rounded-full bg-(--color-primary) px-6 py-3 text-white font-medium shadow-md"
                >
                  Ver catálogo
                </Link>

                <Link
                  href="https://ecobio.empretienda.com.ar/"
                  onClick={() => setOpen(false)}
                  className="inline-flex justify-center rounded-full border border-(--color-primary) px-6 py-3 text-(--color-primary) font-medium hover:bg-(--color-primary-soft)"
                >
                  Ir a la tienda
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

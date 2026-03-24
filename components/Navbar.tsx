"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { WHATSAPP_CTA_URL } from "@/lib/whatsapp"

const navItems = [
  { href: "#casos-exito", label: "Casos de exito" },
  { href: "#como-funciona", label: "Como trabajamos" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  // Bloquear el scroll del body cuando el menú está abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  return (
    <>
      <header className="sticky top-0 z-50 pt-4 sm:pt-6">
        {/* Contenedor restaurado a sus clases originales sin márgenes extra */}
        <div className="rounded-full border border-[#d8deea]/80 bg-white/75 px-3 py-2 backdrop-blur-md shadow-[0_10px_24px_rgba(15,23,42,0.12)] transition-all duration-300">
          <div className="flex items-center justify-between gap-3">
            <Link href="/" className="flex shrink-0 items-center rounded-full px-2 py-1">
              <Image
                src="/logo.png"
                alt="Adinnov Carteleria Digital"
                width={168}
                height={30}
                className="h-6 w-auto sm:h-8"
                priority
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden items-center gap-10 text-sm font-medium text-[#4f5d78] lg:flex">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative pb-0.5 transition-colors duration-200 hover:text-[#3b82f6] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:rounded-full after:bg-gradient-to-r after:from-[#3b82f6] after:to-[#4f8dfd] after:transition-transform after:duration-300 hover:after:scale-x-100"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              {/* Botón Hamburguesa Mobile */}
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full text-[#4f5d78] hover:bg-[#eef2fb] lg:hidden"
                aria-label="Abrir menu"
                onClick={() => setIsOpen(true)}
              >
                <Menu className="size-5" />
              </Button>

              {/* Botón Contacto Desktop */}
              <Link
                href={WHATSAPP_CTA_URL}
                target="_blank"
                rel="noreferrer"
                className="relative hidden items-center justify-center group px-4 py-1 sm:px-5 sm:py-1.5 bg-gradient-to-r from-[#3b82f6] to-[#4f8dfd] text-white font-bold text-xs sm:text-sm rounded-xl shadow-lg hover:shadow-[#4f8dfd]/50 transition-all duration-300 will-change-transform sm:inline-flex"
              >
                <div className="absolute inset-0 rounded-xl overflow-hidden pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </div>
                <span className="relative z-10">Contacto</span>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Overlay oscuro para cerrar al hacer clic afuera */}
      <div
        className={`fixed inset-0 z-[60] bg-black/20 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      {/* Menú Lateral (Drawer) */}
      <div
        className={`fixed top-0 right-0 z-[70] h-[100dvh] w-[80%] max-w-sm bg-white shadow-2xl transition-transform duration-300 ease-in-out lg:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full p-6">
          <div className="flex items-center justify-between mb-8">
            <span className="text-lg font-bold text-[#4f5d78]">Menú</span>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="rounded-full text-[#4f5d78] hover:bg-[#eef2fb]"
              aria-label="Cerrar menu"
            >
              <X className="size-5" />
            </Button>
          </div>

          <nav className="flex flex-col gap-6 flex-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium text-[#4f5d78] hover:text-[#3b82f6] transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Botón Contacto Mobile dentro del menú */}
          <div className="mt-auto pt-6 border-t border-[#d8deea]/50">
            <Link
              href={WHATSAPP_CTA_URL}
              target="_blank"
              rel="noreferrer"
              onClick={() => setIsOpen(false)}
              className="flex w-full items-center justify-center px-5 py-3 bg-gradient-to-r from-[#3b82f6] to-[#4f8dfd] text-white font-bold text-base rounded-xl shadow-lg hover:shadow-[#4f8dfd]/50 transition-all duration-300"
            >
              Contacto
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
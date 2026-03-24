"use client"

import Image from "next/image"
import Link from "next/link"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { WHATSAPP_CTA_URL } from "@/lib/whatsapp"

const navItems = [
  { href: "#casos-exito", label: "Casos de exito" },
  { href: "#como-funciona", label: "Como trabajamos" },
]

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 pt-4 sm:pt-6">
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
            <Button
              variant="ghost"
              size="icon-sm"
              className="rounded-full text-[#4f5d78] hover:bg-[#eef2fb] lg:hidden"
              aria-label="Abrir menu"
            >
              <Menu className="size-5" />
            </Button>

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
  )
}

import Image from "next/image"
import Link from "next/link"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { WHATSAPP_CTA_URL } from "@/lib/whatsapp"

const navItems = [
    { href: "#beneficios", label: "Beneficios" },
    { href: "#como-funciona", label: "Como funciona" },
    { href: "#clientes", label: "Clientes" },
    { href: "#faq", label: "FAQ" },
]

export default function Navbar() {
    return (
        <header className="sticky top-0 z-50 pt-4 sm:pt-6">
            <div className="rounded-full border border-[#d8deea] bg-white px-3 py-2 shadow-[0_8px_18px_rgba(15,23,42,0.06)]">
                <div className="flex items-center justify-between gap-3">
                    <Link href="/" className="flex shrink-0 items-center rounded-full px-2 py-1">
                        <Image
                            src="/logo.png"
                            alt="Adinnov Carteleria Digital"
                            width={128}
                            height={30  }
                            className="h-6 w-auto sm:h-7"
                            priority
                        />
                    </Link>

                    <nav className="hidden items-center gap-10 text-sm font-medium text-[#4f5d78] lg:flex">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="transition-colors hover:text-[#1f2e4e]"
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

                        <Button asChild className="h-10 rounded-full bg-[#2f67ea] px-5 text-sm font-semibold text-white shadow-[0_10px_20px_rgba(47,103,234,0.26)] hover:bg-[#2459d4] sm:h-11 sm:px-7 sm:text-base">
                            <Link href={WHATSAPP_CTA_URL} target="_blank" rel="noreferrer">
                                Contacto
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    )
}

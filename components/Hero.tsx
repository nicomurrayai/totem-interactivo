"use client"

import Link from "next/link"
import { ArrowRight, BookOpenText, Camera, Gift, Gamepad2 } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { WHATSAPP_CTA_URL } from "@/lib/whatsapp"

const kpis = [
  { id: "events", value: "187+", label: "Eventos realizados" },
  { id: "resolution", value: "4K", label: "Resolucion ultra" },
  { id: "support", value: "24/7", label: "Soporte tecnico" },
]

const totemCards = [
  { id: "play", icon: Gamepad2, label: "Juegos" },
  { id: "photo", icon: Camera, label: "Foto" },
  { id: "catalog", icon: BookOpenText, label: "Catalogo" },
  { id: "gift", icon: Gift, label: "Promos" },
]

// --- Animaciones (Variants) ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Tiempo entre cada animación hija
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }, // Easing suave
  },
}

const totemContainerVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
      staggerChildren: 0.1,
      delayChildren: 0.4, // Empieza después de que el texto ya esté entrando
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
}

export default function Hero() {
  return (
    <section className="pb-10 pt-8 sm:pb-16 sm:pt-12 lg:pb-20 overflow-hidden">
      <div className="grid items-center gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-8">
        
        {/* LADO IZQUIERDO: Textos y Botones */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 rounded-full border border-[#bfdbff] bg-[#eaf3ff] px-4 py-2 text-xs font-bold uppercase tracking-[0.1em] text-[#4a8df1]">
            <span className="size-2 rounded-full bg-[#22c3ef]" aria-hidden />
            Nueva generacion 2026
          </motion.div>

          <motion.h1 variants={itemVariants} className="mt-6 max-w-[18ch] text-[clamp(1.65rem,3.6vw,3rem)] font-bold leading-[1.2] tracking-[-0.04em] text-[#0d1733]">
            Totems interactivos para experiencias{" "}
            <span className="text-[#4f8dfd]">que impactan.</span>
          </motion.h1>

          <motion.p variants={itemVariants} className="mt-6 max-w-[28ch] text-[clamp(0.95rem,1.4vw,1.25rem)] font-semibold leading-[1.22] text-[#364563]">
            Juegos, aplicaciones y desarrollos a medida para eventos y marcas.
          </motion.p>

          <motion.div variants={itemVariants} className="mt-8 flex flex-nowrap items-center gap-3 px-1 py-1">
            <Link
              href={WHATSAPP_CTA_URL}
              target="_blank"
              rel="noreferrer"
              className="relative cursor-pointer group px-5 py-2 sm:px-6 sm:py-2.5 bg-gradient-to-r from-[#3b82f6] to-[#4f8dfd] text-white font-bold text-sm rounded-xl shadow-lg hover:shadow-[#4f8dfd]/50 transition-all duration-300 hover:scale-105 active:scale-95 will-change-transform"
            >
              {/* Efecto de brillo + círculos (contenedor recortado) */}
              <div className="absolute inset-0 rounded-xl overflow-hidden pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                <div className="absolute top-0 left-0 w-12 h-12 bg-white/20 rounded-full -translate-x-1/2 -translate-y-1/2 group-hover:scale-150 transition-transform duration-500" />
                <div className="absolute bottom-0 right-0 w-12 h-12 bg-white/20 rounded-full translate-x-1/2 translate-y-1/2 group-hover:scale-150 transition-transform duration-500" />
              </div>
              {/* Contenido */}
              <span className="relative z-10 flex items-center gap-2">
                Solicitar presupuesto
                <ArrowRight className="size-5 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </Link>

            <Button
              asChild
              variant="outline"
              className="rounded-2xl border-[#dbe2ef] bg-white px-4 py-2 sm:px-6 sm:py-2.5 text-sm font-semibold text-[#1f2e4e] shadow-[0_8px_18px_rgba(15,23,42,0.06)] hover:bg-[#f8faff] whitespace-nowrap"
            >
              <Link href={WHATSAPP_CTA_URL} target="_blank" rel="noreferrer">
                Ver juegos y aplicaciones
              </Link>
            </Button>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-8 hidden flex-col gap-5 text-[#1f2e4e] sm:flex sm:flex-row sm:items-start sm:gap-0">
            {kpis.map((item, index) => (
              <div
                key={item.id}
                className={`sm:px-7 ${
                  index === 0 ? "sm:pl-0" : "sm:border-l sm:border-[#9aa7bf]"
                }`}
              >
                <p className="text-[1.6rem] font-bold leading-none tracking-[-0.03em] tabular-nums">
                  {item.value}
                </p>
                <p className="mt-1 text-sm font-semibold uppercase tracking-[0.12em] text-[#7182a0]">
                  {item.label}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* LADO DERECHO: 3D RENDER */}
        <motion.div 
          variants={totemContainerVariants}
          initial="hidden"
          animate="visible"
          className="mx-auto w-full max-w-[270px] lg:max-w-[290px]"
        >
          <div className="relative aspect-[9/15] rounded-[2.1rem] bg-gradient-to-b from-[#122444] via-[#081534] to-[#010613] p-3 shadow-[0_34px_60px_rgba(8,22,54,0.44)] ring-1 ring-[#2d4570]">
            <div className="h-full rounded-[1.7rem] border border-[#2f456d] bg-gradient-to-b from-[#0f203d] via-[#07132d] to-[#010715] p-4">
              <div className="rounded-[1.4rem] border-none bg-gradient-to-br from-[#11264a] to-[#091733] p-4">
                <div className="mb-4 flex items-center justify-between">
                  <div className="h-1.5 w-14 rounded-full bg-[#4f87ee]" />
                  <div className="h-1.5 w-5 rounded-full bg-[#3b5e98]" />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {totemCards.map(({ id, icon: Icon, label }) => (
                    <motion.div
                      key={id}
                      variants={cardVariants}
                      whileHover={{ scale: 1.05 }}
                      className="rounded-[1.2rem] border border-[#3e5a89] bg-[#1b3159]/65 px-3 py-4 cursor-pointer transition-colors"
                    >
                      <div className="mx-auto flex size-[3.25rem] items-center justify-center rounded-2xl bg-[#315897] text-white">
                        <Icon className="size-6" />
                      </div>
                      <div className="mx-auto mt-3 h-1.5 w-10 rounded-full bg-[#5b8fde]/70" />
                      <p className="mt-2 text-center text-xs font-medium text-[#9fb6dc]">
                        {label}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
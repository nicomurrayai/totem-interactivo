"use client"

import Link from "next/link"
import { ArrowRight, BookOpenText, Camera, Gift, Gamepad2 } from "lucide-react"
import { motion } from "framer-motion"

import CountUp from "@/components/CountUp"
import { Button } from "@/components/ui/button"
import { WHATSAPP_CTA_URL } from "@/lib/whatsapp"

type AnimatedKpi = {
  id: string
  label: string
  animated: true
  value: number
  suffix: string
}

type StaticKpi = {
  id: string
  label: string
  value: string
  animated?: false
}

const kpis: Array<AnimatedKpi | StaticKpi> = [
  { id: "events", value: 187, suffix: "+", label: "Eventos realizados", animated: true },
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

          <motion.div variants={itemVariants} className="mt-8 flex flex-wrap items-center gap-4">
            <Button
              asChild
              variant="cta"
              className="h-11 rounded-2xl px-6 text-sm font-semibold sm:px-7 sm:text-base group/button"
            >
              <Link href={WHATSAPP_CTA_URL} target="_blank" rel="noreferrer">
                Solicitar presupuesto
                <ArrowRight
                  data-icon="inline-end"
                  className="size-5 transition-transform duration-300 group-hover/button:translate-x-0.5 ml-2"
                />
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              className="h-11 rounded-2xl border-[#dbe2ef] bg-white px-5 text-sm font-semibold text-[#1f2e4e] shadow-[0_8px_18px_rgba(15,23,42,0.06)] hover:bg-[#f8faff] sm:px-7 sm:text-base"
            >
              <Link href={WHATSAPP_CTA_URL} target="_blank" rel="noreferrer">
                Ver juegos y aplicaciones
              </Link>
            </Button>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-8 flex flex-col gap-5 text-[#1f2e4e] sm:flex-row sm:items-start sm:gap-0">
            {kpis.map((item, index) => (
              <div
                key={item.id}
                className={`sm:px-7 ${
                  index === 0 ? "sm:pl-0" : "sm:border-l sm:border-[#9aa7bf]"
                }`}
              >
                <p className="text-[1.6rem] font-bold leading-none tracking-[-0.03em] tabular-nums">
                  {item.animated ? (
                    <CountUp to={item.value} suffix={item.suffix} durationMs={650} />
                  ) : (
                    item.value
                  )}
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
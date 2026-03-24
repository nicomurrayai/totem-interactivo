"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, BookOpenText, Camera, Gift, Gamepad2, X } from "lucide-react"
import { motion, AnimatePresence, type Variants } from "framer-motion"

import { Button } from "@/components/ui/button"
import { WHATSAPP_CTA_URL } from "@/lib/whatsapp"

const kpis = [
  { id: "events", value: "187+", label: "Eventos realizados" },
  { id: "resolution", value: "4K", label: "Resolución ultra" },
  { id: "support", value: "24/7", label: "Soporte tecnico" },
]

const SAMPLE_VIDEO = "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4"

const totemCards = [
  { id: "play", icon: Gamepad2, label: "Juegos", videoUrl: SAMPLE_VIDEO },
  { id: "photo", icon: Camera, label: "Fotos", videoUrl: SAMPLE_VIDEO },
  { id: "catalog", icon: BookOpenText, label: "Marcas", videoUrl: SAMPLE_VIDEO },
  { id: "gift", icon: Gift, label: "Eventos", videoUrl: SAMPLE_VIDEO },
]

// --- Animaciones (Variants) ---
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
  },
}

const totemContainerVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] as const,
      staggerChildren: 0.1,
      delayChildren: 0.4,
    },
  },
}

const cardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
}

export default function Hero() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null)

  return (
    <section className="pb-10 pt-8 sm:pb-16 sm:pt-12 lg:pb-20 overflow-hidden">
      <div className="grid items-center gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-8">

        {/* LADO IZQUIERDO: Textos y Botones */}
        {/* Agregado flex-col, items-center y text-center para mobile, regresando a start/left en lg */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center lg:items-start lg:text-left px-4 sm:px-0"
        >
          {/* BADGE PREMIUM ACTUALIZADO */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-1.5 rounded-full border border-[#cbdff8] bg-gradient-to-br from-white to-[#eff6ff]/70 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] shadow-sm shadow-[#4a8df1]/10 backdrop-blur-sm text-[#1e3a8a] sm:gap-2.5 sm:px-5 sm:py-2.5 sm:text-xs sm:tracking-widest"
          >
            <span className="relative flex h-1.5 w-1.5 sm:h-2 sm:w-2">
              <span className="relative inline-flex size-1.5 rounded-full bg-[#3b82f6] sm:size-2"></span>
              <span className="absolute inline-flex h-full w-full rounded-full bg-[#60a5fa] opacity-75 blur-[1px]"></span>
            </span>
            <span>Nueva generación 2026</span>
            <span className="opacity-40">|</span>
            <span className="font-bold text-[#3b82f6]">4K</span>
          </motion.div>

          <motion.h1 variants={itemVariants} className="mt-6  text-[clamp(1.65rem,3.6vw,3rem)] font-bold leading-[1.2] tracking-[-0.04em] text-[#0d1733]">
            Totems interactivos para  <span className="text-[#4f8dfd]">experiencias</span>{" "} que
            <span className="text-[#4f8dfd]"> impactan.</span>
          </motion.h1>

          <motion.p variants={itemVariants} className="mt-6  text-[clamp(0.95rem,1.4vw,1.25rem)] font-semibold leading-[1.22] text-[#364563]">
            Juegos y aplicaciones a medida para eventos y marcas.
          </motion.p>


          <motion.div variants={itemVariants} className="mt-8 flex w-full flex-col sm:w-auto sm:flex-row items-center justify-center lg:justify-start gap-4">
            <Link
              href={WHATSAPP_CTA_URL}
              target="_blank"
              rel="noreferrer"
              className="relative w-full sm:w-auto flex items-center justify-center group px-6 py-3 bg-gradient-to-r from-[#3b82f6] to-[#4f8dfd] text-white font-bold text-sm rounded-xl shadow-lg hover:shadow-[#4f8dfd]/50 transition-all duration-300 will-change-transform"
            >
              <div className="absolute inset-0 rounded-xl overflow-hidden pointer-events-none">
                {/* Dejamos solo el efecto de brillo (shine) y eliminamos los círculos que causaban el corte visual */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </div>
              <span className="relative z-10 flex items-center justify-center gap-2">
                Solicitar presupuesto
                <ArrowRight className="size-5 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </Link>

            <Button
              asChild
              variant="outline"
              className="w-full sm:w-auto flex items-center justify-center h-auto px-6 py-3 rounded-xl border-[#dbe2ef] bg-white text-sm font-semibold text-[#1f2e4e] shadow-[0_8px_18px_rgba(15,23,42,0.06)] hover:bg-[#f8faff] whitespace-nowrap transition-all duration-300"
            >
              <Link href={WHATSAPP_CTA_URL} target="_blank" rel="noreferrer">
                Ver juegos y aplicaciones
              </Link>
            </Button>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-10 hidden flex-col gap-5 text-[#1f2e4e] sm:flex sm:flex-row sm:items-start sm:gap-0">
            {kpis.map((item, index) => (
              <div
                key={item.id}
                className={`sm:px-7 ${index === 0 ? "sm:pl-0" : "sm:border-l sm:border-[#9aa7bf]"
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
          className="mx-auto flex justify-center w-full max-w-[270px] lg:max-w-[290px]"
        >
          <div className="relative w-full aspect-[9/15] rounded-[2.1rem] bg-gradient-to-b from-[#122444] via-[#081534] to-[#010613] p-3 shadow-[0_34px_60px_rgba(8,22,54,0.44)] ring-1 ring-[#2d4570]">
            <div className="relative h-full rounded-[1.7rem] border border-[#2f456d] bg-gradient-to-b from-[#0f203d] via-[#07132d] to-[#010715] p-4 overflow-hidden">

              {/* Video overlay */}
              <AnimatePresence>
                {activeVideo && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 z-10 flex items-center justify-center rounded-[1.7rem] bg-black"
                  >
                    <video
                      src={activeVideo}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="h-full w-full rounded-[1.7rem] object-cover"
                    />
                    <button
                      onClick={() => setActiveVideo(null)}
                      className="absolute right-2 top-2 z-20 flex size-7 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-sm transition-colors hover:bg-black/80"
                    >
                      <X className="size-4" />
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="rounded-[1.4rem] border-none bg-gradient-to-br from-[#11264a] to-[#091733] p-4">
                <div className="mb-4 flex items-center justify-between">
                  <div className="h-1.5 w-14 rounded-full bg-[#4f87ee]" />
                  <div className="h-1.5 w-5 rounded-full bg-[#3b5e98]" />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {totemCards.map(({ id, icon: Icon, label, videoUrl }) => (
                    <motion.div
                      key={id}
                      variants={cardVariants}
                      whileHover={{ scale: 1.05 }}
                      onClick={() => setActiveVideo(videoUrl)}
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
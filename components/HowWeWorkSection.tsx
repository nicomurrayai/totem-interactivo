"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, CheckCircle2, PencilRuler, Rocket, SearchCheck } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"

import { cn } from "@/lib/utils"
import { type HowWeWorkStep, howWeWorkSteps } from "@/lib/howWeWorkSteps"
import { WHATSAPP_CTA_URL } from "@/lib/whatsapp"

const iconMap = {
  discovery: SearchCheck,
  experience: PencilRuler,
  delivery: Rocket,
} satisfies Record<HowWeWorkStep["visual"], typeof SearchCheck>

export default function HowWeWorkSection() {
  const [activeId, setActiveId] = useState(howWeWorkSteps[0].id)

  const activeStep = howWeWorkSteps.find((step) => step.id === activeId) ?? howWeWorkSteps[0]
  const activeIndex = howWeWorkSteps.findIndex((step) => step.id === activeStep.id)

  return (
    <section
      id="como-funciona"
      aria-labelledby="how-we-work-title"
      className="scroll-mt-28 pb-16 sm:pb-20 lg:pb-28"
    >
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="relative overflow-hidden rounded-[2rem] bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(234,243,255,0.9))] px-5 py-8 shadow-[0_28px_72px_rgba(33,78,152,0.10)]sm:px-8 sm:py-10 lg:px-10 lg:py-12"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(96,165,250,0.15),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(56,189,248,0.12),transparent_28%)]" />
        <div className="pointer-events-none absolute inset-x-12 top-0 h-px bg-linear-to-r from-transparent via-white to-transparent opacity-90" />

        <div className="relative mx-auto max-w-[780px] text-center">
          <p className="text-[0.64rem] font-semibold uppercase tracking-[0.34em] text-[#6d83a8]">
            Como trabajamos
          </p>
          <h2
            id="how-we-work-title"
            className="mt-4 text-[clamp(1.8rem,3.3vw,3rem)] font-semibold tracking-[-0.05em] text-[#10213d]"
          >
            De la idea inicial a una experiencia lista para activar.
          </h2>
          <p className="mx-auto mt-4 max-w-[650px] text-sm leading-7 text-[#526785] sm:text-base">
            Te mostramos el recorrido de forma simple: entendemos el concepto, lo convertimos
            en experiencia y lo llevamos a una entrega final cuidada en cada detalle.
          </p>
        </div>

        <div className="relative mt-10 grid gap-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-stretch">
          <div className="relative rounded-[1.7rem] border border-[#d8e6f8] bg-white/76 p-3 shadow-[0_18px_40px_rgba(26,64,122,0.06)] backdrop-blur-sm sm:p-4">
            <div className="absolute bottom-8 left-[1.65rem] top-8 w-px bg-[#d7e6fb] sm:left-[1.9rem]" />
            <div
              className="absolute left-[1.65rem] top-8 w-px rounded-full bg-gradient-to-b from-[#3b82f6] to-[#7dd3fc] transition-all duration-500 sm:left-[1.9rem]"
              style={{ height: `${((activeIndex + 1) / howWeWorkSteps.length) * 100 - 8}%` }}
            />

            <div className="relative space-y-3">
              {howWeWorkSteps.map((step) => {
                const isActive = step.id === activeStep.id
                const Icon = iconMap[step.visual]

                return (
                  <motion.button
                    key={step.id}
                    type="button"
                    onMouseEnter={() => setActiveId(step.id)}
                    onFocus={() => setActiveId(step.id)}
                    onClick={() => setActiveId(step.id)}
                    whileTap={{ scale: 0.985 }}
                    className={cn(
                      "relative flex w-full items-start gap-4 rounded-[1.35rem] border px-4 py-4 text-left transition-all duration-300 sm:px-5 sm:py-5",
                      isActive
                        ? "border-[#c4dbff] bg-[linear-gradient(135deg,rgba(239,246,255,0.95),rgba(255,255,255,0.98))] shadow-[0_18px_34px_rgba(59,130,246,0.12)]"
                        : "border-transparent bg-white/50 hover:border-[#d8e6f8] hover:bg-white/82"
                    )}
                  >
                    <div
                      className={cn(
                        "relative z-10 mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-full border text-xs font-semibold transition-all duration-300",
                        isActive
                          ? "border-[#8ec5ff] bg-gradient-to-br from-[#3b82f6] to-[#6cc8ff] text-white shadow-[0_10px_20px_rgba(59,130,246,0.28)]"
                          : "border-[#d7e5f8] bg-white text-[#6680a6]"
                      )}
                    >
                      {step.stepNumber}
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <Icon className={cn("size-4", isActive ? "text-[#3b82f6]" : "text-[#7f93b2]")} />
                        <span className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-[#7f93b2]">
                          {step.accentLabel}
                        </span>
                      </div>
                      <h3 className="mt-2 text-base font-semibold tracking-[-0.03em] text-[#10213d] sm:text-lg">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-[#5a6f8f]">{step.summary}</p>
                    </div>
                  </motion.button>
                )
              })}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[1.8rem] border border-[#d9e6f8] bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(241,247,255,0.9))] p-5 shadow-[0_18px_40px_rgba(26,64,122,0.08)] sm:p-6">
            <div className="absolute inset-x-6 top-6 flex gap-2">
              {howWeWorkSteps.map((step, index) => (
                <div
                  key={step.id}
                  className={cn(
                    "h-1.5 flex-1 rounded-full transition-all duration-500",
                    index <= activeIndex
                      ? "bg-gradient-to-r from-[#3b82f6] to-[#73c6ff]"
                      : "bg-[#dbe7f8]"
                  )}
                />
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep.id}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="relative pt-8"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="rounded-full border border-[#d7e5fa] bg-white/85 px-3 py-1 text-[0.66rem] font-semibold uppercase tracking-[0.2em] text-[#5877a2] shadow-[0_8px_18px_rgba(37,99,235,0.08)]">
                    Paso {activeStep.stepNumber}
                  </span>
                  <span className="rounded-full border border-[#d7e9ff] bg-[#eef6ff] px-3 py-1 text-xs font-medium text-[#4d6c96]">
                    {activeStep.accentLabel}
                  </span>
                </div>

                <div className="mt-5 grid gap-6 xl:grid-cols-[0.95fr_1.05fr] xl:items-center">
                  <div>
                    <h3 className="text-[1.45rem] font-semibold tracking-[-0.04em] text-[#10213d] sm:text-[1.8rem]">
                      {activeStep.title}
                    </h3>
                    <p className="mt-3 max-w-[34rem] text-sm leading-7 text-[#526785] sm:text-[0.98rem]">
                      {activeStep.summary}
                    </p>

                    <div className="mt-6 space-y-3">
                      {activeStep.details.map((detail) => (
                        <div
                          key={detail}
                          className="flex items-start gap-3 rounded-[1rem] border border-[#dfebfb] bg-white/76 px-4 py-3"
                        >
                          <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-[#3b82f6]" />
                          <p className="text-sm leading-6 text-[#526785]">{detail}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <HowWeWorkVisual step={activeStep} />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="relative mt-8 rounded-[1.5rem] border border-[#d8e5f8] bg-white/72 px-5 py-5 shadow-[0_16px_32px_rgba(26,64,122,0.06)] backdrop-blur-sm sm:px-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold tracking-[0.08em] text-[#7085a7] uppercase">
                Listo para avanzar
              </p>
              <p className="mt-2 max-w-[38rem] text-sm leading-7 text-[#526785] sm:text-[0.96rem]">
                Si ya tenes una idea, la podemos convertir en una experiencia interactiva clara,
                atractiva y lista para mostrar.
              </p>
            </div>

            <Link
              href={WHATSAPP_CTA_URL}
              target="_blank"
              rel="noreferrer"
              className="group relative inline-flex h-11 shrink-0 items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-[#3b82f6] to-[#4f8dfd] px-5 text-sm font-bold text-white shadow-lg transition-all duration-300 will-change-transform hover:shadow-[#4f8dfd]/50"
            >
              <div className="absolute inset-0 rounded-xl overflow-hidden pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 -translate-x-full transition-transform duration-1000 group-hover:translate-x-full" />
              </div>
              <span className="relative z-10">Hablemos de tu idea</span>
              <ArrowRight className="relative z-10 size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

function HowWeWorkVisual({ step }: { step: HowWeWorkStep }) {
  if (step.visual === "discovery") {
    return (
      <div className="relative mx-auto aspect-[1/1] w-full max-w-[360px] overflow-hidden rounded-[1.7rem] border border-[#d7e6fb] bg-[radial-gradient(circle_at_top_left,rgba(96,165,250,0.28),transparent_32%),linear-gradient(145deg,#f7fbff_0%,#dbeafe_55%,#eff6ff_100%)] p-5">
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 5.2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="absolute left-6 top-8 h-24 w-24 rounded-[1.4rem] border border-white/70 bg-white/72 shadow-[0_18px_34px_rgba(59,130,246,0.12)] backdrop-blur-sm"
        />
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 4.8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.3 }}
          className="absolute right-8 top-14 h-18 w-28 rounded-[1.4rem] border border-white/70 bg-[#edf5ff]/90 shadow-[0_18px_34px_rgba(59,130,246,0.10)]"
        />
        <motion.div
          animate={{ scale: [1, 1.04, 1] }}
          transition={{ duration: 4.6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="absolute bottom-8 left-1/2 w-[78%] -translate-x-1/2 rounded-[1.5rem] border border-[#dbe8fb] bg-white/85 p-5 shadow-[0_20px_40px_rgba(26,64,122,0.10)]"
        >
          <div className="flex items-center justify-between">
            <div className="h-2 w-18 rounded-full bg-[#9cc7ff]" />
            <div className="h-2 w-10 rounded-full bg-[#d6e6ff]" />
          </div>
          <div className="mt-4 grid grid-cols-2 gap-3">
            <div className="rounded-[1rem] bg-[linear-gradient(160deg,#3b82f6,#8bd6ff)] p-4" />
            <div className="rounded-[1rem] border border-[#dbe8fb] bg-[#f6faff] p-4" />
            <div className="col-span-2 rounded-[1rem] border border-[#dbe8fb] bg-white p-4">
              <div className="h-2 w-28 rounded-full bg-[#c1dafe]" />
              <div className="mt-3 h-2 w-full rounded-full bg-[#e0edff]" />
              <div className="mt-2 h-2 w-4/5 rounded-full bg-[#e6f0ff]" />
            </div>
          </div>
        </motion.div>
      </div>
    )
  }

  if (step.visual === "experience") {
    return (
      <div className="relative mx-auto aspect-[1/1] w-full max-w-[360px] overflow-hidden rounded-[1.7rem] border border-[#d7e6fb] bg-[radial-gradient(circle_at_top_right,rgba(125,211,252,0.24),transparent_30%),linear-gradient(145deg,#f8fbff_0%,#e0edff_55%,#f2f8ff_100%)] p-5">
        <motion.div
          animate={{ rotate: [0, 1.5, 0, -1.5, 0] }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="absolute left-1/2 top-1/2 w-[76%] -translate-x-1/2 -translate-y-1/2 rounded-[1.7rem] border border-[#d8e5fa] bg-white/88 p-5 shadow-[0_24px_46px_rgba(26,64,122,0.10)]"
        >
          <div className="grid grid-cols-[0.85fr_1.15fr] gap-3">
            <div className="space-y-3">
              <div className="rounded-[1rem] bg-[linear-gradient(150deg,#1f56c9,#7fc8ff)] p-4" />
              <div className="rounded-[1rem] border border-[#dbe8fb] bg-[#f8fbff] p-4" />
            </div>
            <div className="rounded-[1rem] border border-[#dbe8fb] bg-white p-4">
              <div className="h-2 w-22 rounded-full bg-[#b8d6ff]" />
              <div className="mt-3 h-2 w-full rounded-full bg-[#dfebff]" />
              <div className="mt-2 h-2 w-5/6 rounded-full bg-[#e7f1ff]" />
              <div className="mt-5 grid grid-cols-2 gap-2">
                <div className="h-16 rounded-[0.95rem] bg-[#eef5ff]" />
                <div className="h-16 rounded-[0.95rem] bg-[linear-gradient(150deg,#4f8dfd,#d1e6ff)]" />
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          animate={{ x: [0, 10, 0] }}
          transition={{ duration: 4.4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="absolute bottom-8 left-7 h-16 w-16 rounded-[1.2rem] border border-white/70 bg-white/70 shadow-[0_18px_32px_rgba(59,130,246,0.12)]"
        />
        <motion.div
          animate={{ x: [0, -8, 0], y: [0, -6, 0] }}
          transition={{ duration: 4.9, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="absolute right-7 top-8 h-20 w-20 rounded-full bg-[radial-gradient(circle,#9fd4ff_0%,rgba(159,212,255,0)_72%)]"
        />
      </div>
    )
  }

  return (
    <div className="relative mx-auto aspect-[1/1] w-full max-w-[360px] overflow-hidden rounded-[1.7rem] border border-[#d7e6fb] bg-[radial-gradient(circle_at_top_left,rgba(96,165,250,0.22),transparent_30%),linear-gradient(145deg,#f7fbff_0%,#dbeafe_48%,#f3f8ff_100%)] p-5">
      <motion.div
        animate={{ scale: [1, 1.03, 1] }}
        transition={{ duration: 4.8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        className="absolute left-1/2 top-1/2 w-[72%] -translate-x-1/2 -translate-y-1/2 rounded-[1.8rem] bg-[linear-gradient(180deg,#122444_0%,#071534_100%)] p-4 shadow-[0_28px_46px_rgba(8,22,54,0.28)]"
      >
        <div className="rounded-[1.35rem] border border-[#2f456d] bg-[linear-gradient(180deg,#0f203d_0%,#07132d_100%)] p-4">
          <div className="mb-4 flex items-center justify-between">
            <div className="h-1.5 w-14 rounded-full bg-[#4f87ee]" />
            <div className="h-1.5 w-5 rounded-full bg-[#3b5e98]" />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <motion.div
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 3.2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              className="rounded-[1rem] border border-[#3e5a89] bg-[#1b3159]/80 px-3 py-4"
            >
              <div className="mx-auto size-11 rounded-2xl bg-[#315897]" />
              <div className="mx-auto mt-3 h-1.5 w-10 rounded-full bg-[#5b8fde]/70" />
            </motion.div>
            <motion.div
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 3.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.4 }}
              className="rounded-[1rem] border border-[#3e5a89] bg-[#1b3159]/80 px-3 py-4"
            >
              <div className="mx-auto size-11 rounded-2xl bg-[#3d6ab5]" />
              <div className="mx-auto mt-3 h-1.5 w-10 rounded-full bg-[#5b8fde]/70" />
            </motion.div>
          </div>
          <div className="mt-5 rounded-[1rem] bg-white/8 p-3">
            <div className="h-2 w-24 rounded-full bg-[#7fa8e8]" />
            <div className="mt-3 h-2 w-full rounded-full bg-[#27497c]" />
            <div className="mt-2 h-2 w-4/5 rounded-full bg-[#34588e]" />
          </div>
        </div>
      </motion.div>
      <motion.div
        animate={{ opacity: [0.35, 0.7, 0.35], scale: [0.96, 1.04, 0.96] }}
        transition={{ duration: 4.4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        className="absolute inset-10 rounded-[1.8rem] border border-[#9cc7ff]/45"
      />
    </div>
  )
}

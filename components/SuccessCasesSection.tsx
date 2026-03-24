import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

import { successCases } from "@/lib/successCases"

export default function SuccessCasesSection() {
  return (
    <section
      id="casos-exito"
      aria-labelledby="success-cases-title"
      className="scroll-mt-28 pb-16 sm:pb-20 lg:pb-24"
    >
      <div className="relative overflow-hidden rounded-[2rem] bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(239,246,255,0.84))] px-5 py-8 shadow-[0_28px_70px_rgba(40,76,140,0.10)] sm:px-8 sm:py-10 lg:px-10 lg:py-12">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(96,165,250,0.18),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(125,211,252,0.14),transparent_28%)]" />
        <div className="pointer-events-none absolute inset-x-12 top-0 h-px bg-linear-to-r from-transparent via-white to-transparent opacity-90" />

        <div className="relative mx-auto max-w-[760px] text-center">
          <p className="text-[0.64rem] font-semibold uppercase tracking-[0.34em] text-[#6d83a8]">
            Casos de exito
          </p>
          <h2
            id="success-cases-title"
            className="mt-4 text-[clamp(1.8rem,3.3vw,3rem)] font-semibold tracking-[-0.05em] text-[#10213d]"
          >
            Trabajos pensados para destacar marcas, experiencias y resultados.
          </h2>
          <p className="mx-auto mt-4 max-w-[620px] text-sm leading-7 text-[#526785] sm:text-base">
            Una seleccion de experiencias interactivas con foco en diseno, performance y presencia
            visual. Cada activacion combina tecnologia, narrativa y ejecucion cuidada.
          </p>
        </div>

        <div className="relative mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {successCases.map((project) => (
            <article
              key={project.id}
              className="group flex h-full flex-col overflow-hidden rounded-[1.7rem] border border-[#d7e4f8] bg-white/88 shadow-[0_18px_40px_rgba(26,64,122,0.08)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_56px_rgba(26,64,122,0.14)]"
            >
              <div className="relative aspect-[4/3] overflow-hidden border-b border-[#e6eefb] bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.18),transparent_34%),linear-gradient(135deg,#eff6ff_0%,#dbeafe_55%,#f8fbff_100%)]">
                <Image
                  src={project.imageSrc}
                  alt={`Mockup editorial del proyecto ${project.title}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-x-5 top-5 flex items-center justify-between gap-3">
                  <span className="rounded-full border border-white/70 bg-white/80 px-3 py-1 text-[0.66rem] font-semibold uppercase tracking-[0.2em] text-[#42628f] shadow-[0_8px_18px_rgba(37,99,235,0.10)] backdrop-blur-sm">
                    {project.client}
                  </span>
                  <span className="rounded-full border border-[#cfe1ff] bg-[#eef5ff]/90 px-3 py-1 text-[0.7rem] font-medium text-[#3f5f8b]">
                    Demo
                  </span>
                </div>
              </div>

              <div className="flex flex-1 flex-col px-5 py-5 sm:px-6">
                <h3 className="text-xl font-semibold leading-tight tracking-[-0.03em] text-[#10213d]">
                  {project.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#5a6e8e] sm:text-[0.96rem]">
                  {project.summary}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.highlights.map((highlight) => (
                    <span
                      key={highlight}
                      className="rounded-full border border-[#d6e5fb] bg-[#f6faff] px-3 py-1.5 text-xs font-medium tracking-[0.02em] text-[#4b668e]"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex-1" />

                <Link
                  href={project.projectUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="group relative inline-flex h-11 w-full items-center justify-center gap-2 overflow-hidden rounded-[1rem] bg-gradient-to-r from-[#3b82f6] to-[#4f8dfd] px-4 text-sm font-bold text-white shadow-lg transition-all duration-300 will-change-transform hover:shadow-[#4f8dfd]/50"
                >
                  <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-[1rem]">
                    <div className="absolute inset-0 -translate-x-full skew-x-12 bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
                  </div>
                  <span className="relative z-10">{project.buttonLabel}</span>
                  <ArrowUpRight className="relative z-10 size-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

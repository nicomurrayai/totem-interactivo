import Image from "next/image"

const brands = [
  { name: "3nStar", src: "/brands/3nStar.png" },
  { name: "ATOS", src: "/brands/ATOS.png" },
  { name: "AVIXA", src: "/brands/avixa-member-logo.png" },
  { name: "Coca-Cola", src: "/brands/Coca-Cola.png" },
  { name: "Dahua", src: "/brands/Dahua.png" },
  { name: "Elo", src: "/brands/Elo.jpg.jpeg" },
  { name: "FILA", src: "/brands/FILA.png" },
  { name: "Hikvision", src: "/brands/Hikvision.png" },
  { name: "Hospital Italiano", src: "/brands/Hospital_Italiano.png" },
  { name: "Hotel Sheraton", src: "/brands/Hotel-Sheraton.png" },
  { name: "i3connect", src: "/brands/i3connect.png" },
  { name: "Intel", src: "/brands/intel.png" },
  { name: "Kinderland", src: "/brands/Kinderland.jpeg" },
  { name: "LG", src: "/brands/lg.png" },
  { name: "Logitech", src: "/brands/logitech.png" },
  { name: "Mean Well", src: "/brands/meanwell.png" },
  { name: "Mercado Libre", src: "/brands/mercadolibre.png" },
  { name: "Miro", src: "/brands/Miro.jpg.jpeg" },
  { name: "Netflix", src: "/brands/Netflix.png" },
  { name: "Neverland", src: "/brands/Neverland.jpg.jpeg" },
  { name: "NovaStar", src: "/brands/NovaStar.png" },
  { name: "OSDE", src: "/brands/osde.png" },
  { name: "Pampa Films", src: "/brands/Pampa-Films.png" },
  { name: "Philips", src: "/brands/Philips.png" },
  { name: "REMAX", src: "/brands/REMAX.png" },
  { name: "Renault", src: "/brands/Renault.jpg.jpeg" },
  { name: "Roche", src: "/brands/Roche.png" },
  { name: "Samsung", src: "/brands/SAMSUNG.png" },
  { name: "Sarkany", src: "/brands/Sarkany.jpg.jpeg" },
  { name: "Sport Club", src: "/brands/Sport-Club.png" },
  { name: "Techint", src: "/brands/Techint.png" },
  { name: "ViewSonic", src: "/brands/Viewsonic.jpg.jpeg" },
  { name: "YouTube", src: "/brands/Youtube.jpg.jpeg" },
  { name: "YPF", src: "/brands/YPF.jpg.jpeg" },
  { name: "Zurich", src: "/brands/Zurich.png" },
]

const marqueeBrands = [...brands, ...brands]

export default function BrandsMarquee() {
  return (
    <section aria-labelledby="brands-title" className="pb-16 sm:pb-20 lg:pb-24">
      <div className="relative overflow-hidden rounded-[2.2rem] border border-white/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.82),rgba(255,255,255,0.58))] py-7 shadow-[0_20px_50px_rgba(15,23,42,0.05)] ring-1 ring-white/55 backdrop-blur-md sm:py-9">
        <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-linear-to-r from-transparent via-white to-transparent opacity-80" />
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-linear-to-r from-[#f4f6fb] via-[#f4f6fb]/94 to-transparent sm:w-28" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-linear-to-l from-[#f4f6fb] via-[#f4f6fb]/94 to-transparent sm:w-28" />

        <div className="px-6 pb-6 text-center sm:px-10 sm:pb-7">
          <p className="text-[0.64rem] font-semibold uppercase tracking-[0.34em] text-[#8390ab]">
            Marcas con las que trabajamos
          </p>
          <h2 id="brands-title" className="hidden sm:block mt-2 text-sm font-medium tracking-[0.04em] text-[#31405f] sm:text-[0.98rem]">
            Una seleccion de clientes y partners que ya activaron experiencias con nosotros.
          </h2>
        </div>

        <div className="brands-marquee">
          <div className="brands-marquee-track flex w-max items-center gap-14 px-6 sm:gap-20 sm:px-10 lg:gap-24">
            {marqueeBrands.map((brand, index) => {
              const isDuplicate = index >= brands.length

              return (
                <div
                  key={`${brand.src}-${index}`}
                  aria-hidden={isDuplicate || undefined}
                  className="group relative flex h-9 w-26 shrink-0 items-center justify-center sm:h-11 sm:w-32 lg:w-36"
                >
                  <Image
                    src={brand.src}
                    alt={isDuplicate ? "" : `Logo de ${brand.name}`}
                    fill
                    sizes="(max-width: 620px) 118px, (max-width: 1000px) 150px, 156px"
                    className="object-contain opacity-45 grayscale saturate-0 contrast-[1.12] transition duration-500 ease-out group-hover:-translate-y-0.5 group-hover:opacity-100 group-hover:grayscale-0 group-hover:saturate-100"
                  />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
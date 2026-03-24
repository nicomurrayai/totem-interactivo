export type SuccessCase = {
  id: string
  client: string
  title: string
  summary: string
  highlights: string[]
  imageSrc: string
  projectUrl: string
  buttonLabel: string
}

export const successCases: SuccessCase[] = [
  {
    id: "launch-experience",
    client: "Automotriz Premium",
    title: "Activacion inmersiva para lanzamiento de producto",
    summary:
      "Totem interactivo con contenidos dinamicos, recorrido guiado y captura de leads para una presentacion de alto impacto.",
    highlights: ["UI a medida", "Captura de datos", "Experiencia 4K"],
    imageSrc: "/success-cases/launch-experience.svg",
    projectUrl: "https://example.com/case-launch-experience",
    buttonLabel: "Ver trabajo",
  },
  {
    id: "retail-showcase",
    client: "Retail & Lifestyle",
    title: "Showroom digital para eventos y espacios de marca",
    summary:
      "Una experiencia visual pensada para exhibir catalogos, colecciones y beneficios con navegacion tactil fluida y elegante.",
    highlights: ["Catalogo interactivo", "Navegacion tactil", "Branding premium"],
    imageSrc: "/success-cases/retail-showcase.svg",
    projectUrl: "https://example.com/case-retail-showcase",
    buttonLabel: "Ver trabajo",
  },
  {
    id: "event-gamification",
    client: "Eventos Corporativos",
    title: "Gamificacion para aumentar participacion en stands",
    summary:
      "Desarrollo de dinamicas ludicas para generar interaccion, permanencia y recuerdo de marca durante activaciones presenciales.",
    highlights: ["Juego interactivo", "Mayor engagement", "Implementacion onsite"],
    imageSrc: "/success-cases/event-gamification.svg",
    projectUrl: "https://example.com/case-event-gamification",
    buttonLabel: "Ver trabajo",
  },
]

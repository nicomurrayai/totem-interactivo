export type HowWeWorkVisual = "discovery" | "experience" | "delivery"

export type HowWeWorkStep = {
  id: string
  stepNumber: string
  title: string
  summary: string
  details: string[]
  accentLabel: string
  visual: HowWeWorkVisual
}

export const howWeWorkSteps: HowWeWorkStep[] = [
  {
    id: "discovery",
    stepNumber: "01",
    title: "Entendemos la idea",
    summary:
      "Traducimos tu objetivo en una propuesta clara, simple y lista para convertirse en experiencia.",
    details: [
      "Escuchamos el concepto, el contexto del evento y lo que queres lograr.",
      "Definimos alcance, flujo de uso y puntos de impacto para la marca.",
      "Alineamos tiempos, tecnologia y formato antes de empezar a producir.",
    ],
    accentLabel: "Brief y objetivos",
    visual: "discovery",
  },
  {
    id: "experience",
    stepNumber: "02",
    title: "Disenamos la experiencia",
    summary:
      "Convertimos la idea en una interfaz atractiva, intuitiva y pensada para generar participacion.",
    details: [
      "Armamos la narrativa visual, pantallas y dinamica de interaccion.",
      "Prototipamos la experiencia para validar ritmo, claridad y presencia de marca.",
      "Cuidamos que cada decision se vea premium y funcione de forma natural.",
    ],
    accentLabel: "UX, UI y prototipo",
    visual: "experience",
  },
  {
    id: "delivery",
    stepNumber: "03",
    title: "Desarrollamos y activamos",
    summary:
      "Llevamos el concepto a una solucion final lista para mostrarse, medirse y operar en el evento.",
    details: [
      "Desarrollamos la aplicacion, cargamos contenido y preparamos cada detalle tecnico.",
      "Probamos rendimiento, resolucion y estabilidad antes de la salida.",
      "Entregamos una experiencia lista para activar con soporte y puesta en escena.",
    ],
    accentLabel: "Build y despliegue",
    visual: "delivery",
  },
]

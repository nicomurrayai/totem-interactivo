"use client"

import * as React from "react"

type CountUpProps = {
  to: number
  from?: number
  durationMs?: number
  prefix?: string
  suffix?: string
  className?: string
}

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3)
}

export default function CountUp({
  to,
  from = 0,
  durationMs = 650,
  prefix = "",
  suffix = "",
  className,
}: CountUpProps) {
  const [value, setValue] = React.useState(from)
  const startedRef = React.useRef(false)

  React.useEffect(() => {
    if (startedRef.current) return
    startedRef.current = true

    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches

    if (reduceMotion || durationMs <= 0 || from === to) {
      setValue(to)
      return
    }

    const start = performance.now()
    let rafId = 0

    const tick = (now: number) => {
      const elapsed = now - start
      const t = Math.min(1, elapsed / durationMs)
      const eased = easeOutCubic(t)
      const next = Math.round(from + (to - from) * eased)
      setValue(next)

      if (t < 1) rafId = requestAnimationFrame(tick)
    }

    rafId = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafId)
  }, [durationMs, from, to])

  return (
    <span className={className}>
      {prefix}
      {value}
      {suffix}
    </span>
  )
}


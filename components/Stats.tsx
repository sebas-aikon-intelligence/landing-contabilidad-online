'use client'

import { useEffect, useRef, useState } from 'react'

const stats = [
  { value: 95, suffix: '%', label: 'Reducción de errores', desc: 'comparado con digitación manual', bar: 95 },
  { value: 5, suffix: 's', label: 'Por factura causada', desc: 'tiempo promedio con IA activa', bar: 85 },
  { value: 1000, suffix: '+', label: 'Empresas en Colombia', desc: 'confían su causación a la IA', bar: 70 },
  { value: 80, suffix: '%', label: 'Menos tiempo de cierre', desc: 'recuperado cada mes', bar: 80 },
]

function useCountUp(target: number, duration = 1600, started: boolean) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!started) return
    let startTime: number | null = null
    const step = (ts: number) => {
      if (!startTime) startTime = ts
      const progress = Math.min((ts - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [target, duration, started])
  return count
}

function StatCard({
  value,
  suffix,
  label,
  desc,
  bar,
  delay,
}: {
  value: number
  suffix: string
  label: string
  desc: string
  bar: number
  delay: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [started, setStarted] = useState(false)
  const count = useCountUp(value, 1600, started)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true)
          obs.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className="reveal bg-white border border-slate-100 rounded-2xl p-6 card-hover group relative overflow-hidden"
      style={{ transitionDelay: `${delay}s` }}
    >
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-brand-orange/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Spinning ring decoration */}
      <div className="relative inline-block mb-1">
        <div
          className="absolute -inset-3 rounded-full border border-dashed border-orange-200 spin-slow pointer-events-none"
          style={{ borderRadius: '50%' }}
        />
        <div className="font-jakarta font-extrabold text-4xl sm:text-5xl tracking-tight relative">
          <span className="gradient-text tabular-nums">
            {count.toLocaleString('es-CO')}
          </span>
          <span className="text-brand-orange">{suffix}</span>
        </div>
      </div>
      <p className="font-jakarta font-bold text-slate-800 text-base mb-0.5">{label}</p>
      <p className="text-slate-500 text-sm mb-4">{desc}</p>

      {/* Progress bar */}
      <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-brand-orange to-brand-amber rounded-full transition-all duration-[1600ms] ease-out"
          style={{ width: started ? `${bar}%` : '0%' }}
        />
      </div>
    </div>
  )
}

export default function Stats() {
  return (
    <section className="py-24 relative overflow-hidden bg-orange-50">
      {/* Subtle pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,107,0,0.06) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-reveal">
        <div className="text-center mb-12">
          <div className="badge-orange inline-flex mb-4">Resultados reales</div>
          <h2 className="reveal font-jakarta font-extrabold text-3xl sm:text-4xl text-slate-900 mb-3 tracking-tight">
            Números que hablan{' '}
            <span className="gradient-text">por sí solos</span>
          </h2>
          <p className="reveal reveal-delay-1 text-slate-500 text-lg max-w-lg mx-auto">
            Datos reales de nuestra plataforma en producción con clientes colombianos.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((s, i) => (
            <StatCard key={s.label} {...s} delay={i * 0.08} />
          ))}
        </div>
      </div>
    </section>
  )
}

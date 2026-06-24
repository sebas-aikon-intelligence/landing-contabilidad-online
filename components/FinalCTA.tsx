'use client'

import { ArrowRight, Calendar, Clock, Shield, Sparkles } from 'lucide-react'
import { useMetaEvent } from './useMetaEvent'

const WA_URL =
  'https://api.whatsapp.com/send/?phone=573024695956&text=Hola.+Quiero+informaci%C3%B3n+de+los+planes&type=phone_number&app_absent=0'

const perks = [
  { icon: Calendar, text: 'Demo de 30 minutos, sin compromiso' },
  { icon: Clock, text: 'Configuración en menos de 5 minutos' },
  { icon: Shield, text: 'Sin tarjeta de crédito requerida' },
]

export default function FinalCTA() {
  const { track } = useMetaEvent()

  return (
    <section className="py-20 sm:py-28 relative overflow-hidden bg-slate-900">
      {/* Background texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,107,0,0.06) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />
      {/* Animated floating orbs */}
      <div className="float-orb w-72 h-72 top-10 left-10 bg-orange-500/10" />
      <div className="float-orb float-orb-2 w-56 h-56 bottom-10 right-20 bg-amber-400/8" />
      <div className="float-orb float-orb-3 w-40 h-40 top-1/2 right-1/3 bg-orange-600/6" />
      {/* Center glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(255,107,0,0.12) 0%, transparent 65%)',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center scroll-reveal">
        {/* Badge */}
        <div className="inline-flex items-center gap-1.5 bg-brand-orange/15 border border-brand-orange/25 text-brand-orange-light text-xs font-bold px-4 py-2 rounded-full mb-7">
          <Sparkles size={12} />
          Acceso anticipado — Cupos limitados
        </div>

        {/* Headline */}
        <h2 className="reveal font-jakarta font-extrabold text-4xl sm:text-5xl lg:text-[56px] text-white tracking-tight leading-[1.06] mb-6">
          La IA trabaja.{' '}
          <span className="gradient-text-animate">Tú cierras temprano.</span>
        </h2>

        <p className="reveal reveal-delay-1 text-white/60 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
          En 30 minutos te mostramos cómo conectar la DIAN con tu software contable
          y hacer que la IA cause tus facturas automáticamente — con Siigo, Alegra,
          World Office o el que uses. Empezamos hoy.
        </p>

        {/* Perks */}
        <div className="reveal reveal-delay-2 flex flex-wrap justify-center gap-5 mb-10">
          {perks.map((perk) => {
            const Icon = perk.icon
            return (
              <div
                key={perk.text}
                className="flex items-center gap-2 text-white/50 text-sm font-medium"
              >
                <Icon size={14} className="text-brand-orange/70 flex-shrink-0" />
                {perk.text}
              </div>
            )
          })}
        </div>

        {/* CTA */}
        <div className="reveal reveal-delay-3 px-4 sm:px-0">
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => track('Lead', { customData: { content_name: 'final_cta' } })}
            className="btn-cta flex sm:inline-flex items-center justify-center gap-3 px-6 py-4 sm:px-9 sm:py-5 text-base sm:text-lg text-white"
          >
            <span className="flex items-center gap-3">
              Agenda tu Demo Gratis Ahora
              <ArrowRight size={20} />
            </span>
          </a>
        </div>

        <p className="reveal reveal-delay-4 text-white/30 text-sm mt-5 font-medium">
          Respuesta garantizada en menos de 2 horas · Soporte en español colombiano
        </p>
      </div>
    </section>
  )
}

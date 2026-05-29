import { ArrowRight, Calendar, Clock, Shield, Sparkles } from 'lucide-react'

const WA_URL =
  'https://api.whatsapp.com/send/?phone=573244614444&text=Hola.+Quiero+informaci%C3%B3n+de+los+planes&type=phone_number&app_absent=0'

const perks = [
  { icon: Calendar, text: 'Demo de 30 minutos, sin compromiso' },
  { icon: Clock, text: 'Configuración en menos de 5 minutos' },
  { icon: Shield, text: 'Sin tarjeta de crédito requerida' },
]

export default function FinalCTA() {
  return (
    <section className="py-28 relative overflow-hidden bg-slate-900">
      {/* Background texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,107,0,0.06) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />
      {/* Glow */}
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
          ¿Listo para{' '}
          <span className="gradient-text-animate">automatizar</span>
          <br />
          tu causación?
        </h2>

        <p className="reveal reveal-delay-1 text-white/60 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
          Agenda una demo de 30 minutos y te mostramos cómo tu firma puede causar el doble
          de facturas en la mitad del tiempo, empezando hoy.
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
        <div className="reveal reveal-delay-3">
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cta inline-flex items-center gap-3 px-9 py-5 text-lg text-white"
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

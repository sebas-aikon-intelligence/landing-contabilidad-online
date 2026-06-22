'use client'

import { Star, ArrowRight } from 'lucide-react'

const WA_URL =
  'https://api.whatsapp.com/send/?phone=573024695956&text=Hola.+Quiero+informaci%C3%B3n+de+los+planes&type=phone_number&app_absent=0'

const testimonials = [
  {
    name: 'Valentina Morales',
    role: 'Contadora Pública · Firma de Outsourcing',
    city: 'Bogotá D.C.',
    stars: 5,
    quote:
      'Manejamos 45 empresas clientes y la causación manual nos quitaba 3 días al mes. Con Contabilidad Online lo automatizamos todo en una tarde. Es literalmente otro nivel.',
    initials: 'VM',
    bg: 'from-orange-400 to-orange-500',
  },
  {
    name: 'Carlos Andrés Ruiz',
    role: 'Gerente Administrativo · Grupo Empresarial',
    city: 'Medellín, Antioquia',
    stars: 5,
    quote:
      'Lo que más valoro es que cuando tengo una duda, me responde una persona real que conoce el negocio contable colombiano. No un ticket, no un bot. Eso no tiene precio.',
    initials: 'CA',
    bg: 'from-amber-400 to-orange-400',
  },
  {
    name: 'Diana Patricia López',
    role: 'Contadora Independiente',
    city: 'Cali, Valle del Cauca',
    stars: 5,
    quote:
      'Empecé con la prueba gratis y a los dos días ya tenía todo funcionando. La integración con Siigo fue más sencilla de lo que pensaba. Ahora proceso 200 facturas en el tiempo que antes tardaba 10.',
    initials: 'DP',
    bg: 'from-orange-500 to-amber-400',
  },
]

export default function Testimonials() {
  return (
    <section className="py-16 sm:py-24 relative overflow-hidden bg-white">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-reveal">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="badge-orange inline-flex mb-4">Testimonios</div>
          <h2 className="reveal font-jakarta font-extrabold text-3xl sm:text-4xl text-slate-900 mb-4 tracking-tight">
            Lo que dicen nuestros{' '}
            <span className="gradient-text">clientes</span>
          </h2>
          <p className="reveal reveal-delay-1 text-slate-500 text-lg max-w-xl mx-auto">
            Contadores y firmas reales en Colombia que ya automatizaron su causación.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`reveal reveal-delay-${i + 1} bg-white border border-slate-100 rounded-2xl p-6 card-hover flex flex-col relative overflow-hidden group`}
            >
              {/* Hover top line */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-orange to-brand-amber scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.stars }).map((_, si) => (
                  <Star key={si} size={13} className="text-brand-amber fill-brand-amber" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-slate-600 text-sm leading-relaxed flex-grow mb-5">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                <div
                  className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.bg} flex items-center justify-center flex-shrink-0 shadow-orange-sm`}
                >
                  <span className="text-white font-jakarta font-bold text-xs">{t.initials}</span>
                </div>
                <div>
                  <p className="font-jakarta font-bold text-sm text-slate-800">{t.name}</p>
                  <p className="text-slate-500 text-xs">{t.role}</p>
                  <p className="text-brand-orange font-semibold text-xs mt-0.5">{t.city}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="reveal text-center">
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cta inline-flex items-center gap-2 px-7 py-4 text-base text-white"
          >
            <span className="flex items-center gap-2">
              Agenda tu Demo Gratis — Solo 30 min
              <ArrowRight size={16} />
            </span>
          </a>
          <p className="text-slate-400 text-sm mt-3 font-medium">Sin tarjeta de crédito · Sin compromisos</p>
        </div>
      </div>
    </section>
  )
}

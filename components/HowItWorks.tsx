'use client'

import { useState } from 'react'
import { Link2, Cpu, CheckCircle2, ArrowRight } from 'lucide-react'

const WA_URL =
  'https://api.whatsapp.com/send/?phone=573244614444&text=Hola.+Quiero+informaci%C3%B3n+de+los+planes&type=phone_number&app_absent=0'

const steps = [
  {
    num: '01',
    icon: Link2,
    title: 'Conecta la DIAN',
    desc: 'Vincula la recepción de facturas electrónicas en segundos. Nuestro sistema lee los XML directo del portal DIAN sin importar el volumen.',
    detail: 'Configuración en 3 minutos',
    image: '/images/163846.png',
    url: 'app.contabilidadonline.co/integracion',
  },
  {
    num: '02',
    icon: Cpu,
    title: 'La IA lee, clasifica y aprende',
    desc: 'El motor IA interpreta cada factura — IVA, retenciones, descripción — y sugiere las cuentas exactas de tu PUC. Con el tiempo, aprende de tus ajustes y mejora solo.',
    detail: '99.8% de precisión',
    image: '/images/164037.png',
    url: 'app.contabilidadonline.co/facturas',
  },
  {
    num: '03',
    icon: CheckCircle2,
    title: 'Envía a tu software contable',
    desc: 'Con un clic (o en automático), las facturas causadas se sincronizan con Siigo, Alegra, World Office, Helisa o el software que uses — con tercero, cuenta y centro de costo.',
    detail: 'Sincronización instantánea',
    image: '/images/165623.png',
    url: 'app.contabilidadonline.co/dashboard',
  },
]

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0)
  const current = steps[activeStep]

  return (
    <section id="how-it-works" className="py-24 relative overflow-hidden bg-slate-50">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-reveal">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="badge-orange inline-flex mb-4">Cómo funciona</div>
          <h2 className="reveal font-jakarta font-extrabold text-3xl sm:text-4xl lg:text-[44px] text-slate-900 mb-4 tracking-tight leading-tight">
            Tres pasos.{' '}
            <span className="gradient-text">Tus facturas causadas.</span>
          </h2>
          <p className="reveal reveal-delay-1 text-slate-500 text-lg max-w-xl mx-auto">
            Sin instalaciones. Sin migraciones. La IA se adapta a tu software contable actual y empieza a trabajar desde el día uno.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-start">
          {/* Left: Step cards */}
          <div className="lg:col-span-5 space-y-4 relative">
            <div className="absolute left-[31px] top-10 bottom-10 w-px border-l-2 border-dashed border-orange-200 hidden sm:block" />

            {steps.map((step, i) => {
              const Icon = step.icon
              const isActive = i === activeStep
              return (
                <div
                  key={step.num}
                  onMouseEnter={() => setActiveStep(i)}
                  className={`flex gap-4 items-start p-5 rounded-2xl relative group cursor-pointer transition-all duration-300 ${isActive
                      ? 'bg-slate-900 border border-slate-700 shadow-[0_12px_32px_rgba(0,0,0,0.15)]'
                      : 'bg-white border border-slate-100 hover:border-orange-200'
                    }`}
                >
                  {/* Active left accent */}
                  {isActive && (
                    <div className="absolute left-0 top-4 bottom-4 w-0.5 bg-gradient-to-b from-brand-orange to-amber-400 rounded-full" />
                  )}

                  <div
                    className={`step-number z-10 flex-shrink-0 transition-all duration-300 ${isActive ? 'shadow-[0_0_18px_rgba(255,107,0,0.5)]' : ''
                      }`}
                  >
                    {step.num}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <h3 className={`font-jakarta font-bold text-base leading-tight transition-colors duration-300 ${isActive ? 'text-white' : 'text-slate-800'}`}>
                        {step.title}
                      </h3>
                      <div className={`w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${isActive ? 'bg-orange-500/20 border border-orange-500/30' : 'bg-orange-50 border border-orange-100'}`}>
                        <Icon size={15} className="text-brand-orange" />
                      </div>
                    </div>
                    <p className={`text-sm leading-relaxed transition-colors duration-300 ${isActive ? 'text-slate-300' : 'text-slate-500'}`}>
                      {step.desc}
                    </p>
                    <div className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 mt-2.5 transition-colors duration-300 ${isActive ? 'bg-orange-500/15 border border-orange-500/20' : 'bg-orange-50 border border-orange-100'}`}>
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
                      <span className={`text-[11px] font-semibold transition-colors duration-300 ${isActive ? 'text-orange-400' : 'text-orange-600'}`}>
                        {step.detail}
                      </span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Right: Interactive image panel */}
          <div className="reveal reveal-delay-2 lg:col-span-7">
            <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.07)]">
              {/* Browser bar */}
              <div className="bg-slate-50 border-b border-slate-100 px-4 py-3 flex items-center gap-3">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-400 block" />
                  <span className="w-3 h-3 rounded-full bg-amber-400 block" />
                  <span className="w-3 h-3 rounded-full bg-green-400 block" />
                </div>
                <div className="flex-1 bg-white border border-slate-200 rounded-lg py-1.5 px-3 text-[10px] text-slate-400 font-mono text-center max-w-[260px] mx-auto transition-all duration-300">
                  {current.url}
                </div>
                {/* Step indicator pills */}
                <div className="flex gap-1 flex-shrink-0">
                  {steps.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveStep(i)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${i === activeStep ? 'bg-brand-orange w-5' : 'bg-slate-200 hover:bg-slate-300'
                        }`}
                    />
                  ))}
                </div>
              </div>

              {/* Image viewport with crossfade */}
              <div className="relative bg-slate-50 aspect-[16/10] overflow-hidden">
                {/* Step label overlay */}
                <div className="absolute top-3 left-3 z-20 flex items-center gap-2">
                  <span className="bg-slate-900/80 backdrop-blur-sm text-white text-[11px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-pulse" />
                    Paso {activeStep + 1} de {steps.length}
                  </span>
                  <span className="bg-white/90 backdrop-blur-sm text-slate-600 text-[11px] font-semibold px-2.5 py-1 rounded-full border border-slate-100">
                    {current.title}
                  </span>
                </div>

                {steps.map((step, i) => (
                  <div
                    key={step.num}
                    className={`absolute inset-0 transition-all duration-500 ease-in-out ${i === activeStep ? 'opacity-100 scale-100' : 'opacity-0 scale-[1.02]'
                      }`}
                  >
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-cover object-top"
                    />
                    {/* Subtle gradient overlay at bottom */}
                    <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white/30 to-transparent pointer-events-none" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="reveal reveal-delay-4 text-center mt-12">
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

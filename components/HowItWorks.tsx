'use client'

import { Link2, Cpu, CheckCircle2, ArrowRight, FileText, Database, Zap } from 'lucide-react'

const WA_URL =
  'https://api.whatsapp.com/send/?phone=573244614444&text=Hola.+Quiero+informaci%C3%B3n+de+los+planes&type=phone_number&app_absent=0'

const steps = [
  {
    num: '01',
    icon: Link2,
    title: 'Conecta la DIAN',
    desc: 'Vincula la recepción de facturas electrónicas en segundos. Nuestro sistema lee los XML directo del portal DIAN sin importar el volumen.',
    detail: 'Configuración en 3 minutos',
  },
  {
    num: '02',
    icon: Cpu,
    title: 'La IA lee, clasifica y aprende',
    desc: 'El motor IA interpreta cada factura — IVA, retenciones, descripción — y sugiere las cuentas exactas de tu PUC. Con el tiempo, aprende de tus ajustes y mejora solo.',
    detail: '99.8% de precisión',
  },
  {
    num: '03',
    icon: CheckCircle2,
    title: 'Envía a tu software contable',
    desc: 'Con un clic (o en automático), las facturas causadas se sincronizan con Siigo, Alegra, World Office, Helisa o el software que uses — con tercero, cuenta y centro de costo.',
    detail: 'Sincronización instantánea',
  },
]

export default function HowItWorks() {
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
              return (
                <div
                  key={step.num}
                  className={`reveal reveal-delay-${i + 1} flex gap-4 items-start bg-white border border-slate-100 p-5 rounded-2xl card-hover relative group`}
                >
                  <div className="step-number z-10 flex-shrink-0">{step.num}</div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <h3 className="font-jakarta font-bold text-slate-800 text-base leading-tight">{step.title}</h3>
                      <div className="w-8 h-8 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center flex-shrink-0">
                        <Icon size={15} className="text-brand-orange" />
                      </div>
                    </div>
                    <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
                    <div className="inline-flex items-center gap-1.5 bg-orange-50 border border-orange-100 rounded-full px-2.5 py-1 mt-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
                      <span className="text-[11px] font-semibold text-orange-600">{step.detail}</span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Right: Integration flow mockup */}
          <div className="reveal reveal-delay-2 lg:col-span-7">
            <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.07)]">
              {/* Browser bar */}
              <div className="bg-slate-50 border-b border-slate-100 px-4 py-3 flex items-center gap-3">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-400 block" />
                  <span className="w-3 h-3 rounded-full bg-amber-400 block" />
                  <span className="w-3 h-3 rounded-full bg-green-400 block" />
                </div>
                <div className="flex-1 bg-white border border-slate-200 rounded-lg py-1.5 px-3 text-[10px] text-slate-400 font-mono text-center max-w-[260px] mx-auto">
                  app.contabilidadonline.co/integracion
                </div>
              </div>

              {/* Integration diagram */}
              <div className="p-6">
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-5">
                  Flujo de procesamiento en tiempo real
                </p>

                {/* Flow boxes */}
                <div className="flex items-center gap-2 mb-6">
                  {/* DIAN box */}
                  <div className="flex-1 bg-blue-50 border border-blue-100 rounded-xl p-4 text-center">
                    <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-2">
                      <FileText size={18} className="text-blue-600" />
                    </div>
                    <p className="text-xs font-bold text-blue-700">Portal DIAN</p>
                    <p className="text-[10px] text-blue-500 mt-0.5">Facturas XML</p>
                    <div className="mt-2 text-[11px] font-extrabold text-blue-700">127</div>
                    <div className="text-[9px] text-blue-400">facturas del mes</div>
                  </div>

                  {/* Arrow 1 */}
                  <div className="flex flex-col items-center gap-1 flex-shrink-0">
                    <div className="flex items-center gap-0.5">
                      {[0, 1, 2].map((d) => (
                        <span
                          key={d}
                          className="w-1.5 h-1.5 rounded-full bg-brand-orange"
                          style={{ animation: `pulse-soft 1.4s ease-in-out ${d * 0.3}s infinite` }}
                        />
                      ))}
                    </div>
                    <ArrowRight size={14} className="text-brand-orange" />
                  </div>

                  {/* AI Engine box */}
                  <div className="flex-1 bg-orange-50 border-2 border-orange-200 rounded-xl p-4 text-center relative overflow-visible">
                    <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-orange via-amber-400 to-brand-orange" style={{ animation: 'gradient-shift 2s linear infinite' }} />
                    {/* Spinning ring around icon */}
                    <div className="relative w-10 h-10 mx-auto mb-2">
                      <div
                        className="absolute inset-0 rounded-xl border-2 border-dashed border-orange-300 spin-slow"
                        style={{ borderRadius: '10px' }}
                      />
                      <div className="w-10 h-10 bg-brand-orange rounded-xl flex items-center justify-center relative z-10" style={{ animation: 'ai-pulse 2s ease-in-out infinite' }}>
                        <Zap size={18} className="text-white" fill="white" />
                      </div>
                    </div>
                    <p className="text-xs font-bold text-orange-700">Motor IA</p>
                    <p className="text-[10px] text-orange-500 mt-0.5">Causación Auto.</p>
                    <div className="mt-2 text-[11px] font-extrabold text-orange-700">99.8%</div>
                    <div className="text-[9px] text-orange-400">precisión</div>
                  </div>

                  {/* Arrow 2 */}
                  <div className="flex flex-col items-center gap-1 flex-shrink-0">
                    <div className="flex items-center gap-0.5">
                      {[0, 1, 2].map((d) => (
                        <span
                          key={d}
                          className="w-1.5 h-1.5 rounded-full bg-emerald-500"
                          style={{ animation: `pulse-soft 1.4s ease-in-out ${d * 0.3 + 0.6}s infinite` }}
                        />
                      ))}
                    </div>
                    <ArrowRight size={14} className="text-emerald-500" />
                  </div>

                  {/* Software box */}
                  <div className="flex-1 bg-emerald-50 border border-emerald-100 rounded-xl p-4 text-center">
                    <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center mx-auto mb-2">
                      <Database size={18} className="text-emerald-600" />
                    </div>
                    <p className="text-xs font-bold text-emerald-700">Tu Software</p>
                    <p className="text-[10px] text-emerald-500 mt-0.5">Siigo, Alegra y más</p>
                    <div className="mt-2 text-[11px] font-extrabold text-emerald-700">108</div>
                    <div className="text-[9px] text-emerald-400">causadas ✓</div>
                  </div>
                </div>

                {/* Log-style processing view */}
                <div className="bg-slate-900 rounded-xl p-4 font-mono text-[10px] leading-relaxed">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-slate-400">Procesando en vivo</span>
                  </div>
                  {[
                    { t: '09:14:01', msg: 'Factura SURA-2024-00481 recibida', color: 'text-slate-300' },
                    { t: '09:14:01', msg: 'Analizando XML — NIT 890.903.938-8', color: 'text-slate-300' },
                    { t: '09:14:02', msg: 'PUC sugerido: 620500 (Seguros)', color: 'text-emerald-400' },
                    { t: '09:14:02', msg: 'Retención fuente 11% calculada', color: 'text-emerald-400' },
                    { t: '09:14:02', msg: '✓ Causada en software contable — ID #48291', color: 'text-brand-orange' },
                  ].map((log, i) => (
                    <div
                      key={i}
                      className="flex gap-3 mock-row"
                      style={{ animationDelay: `${0.4 + i * 0.35}s` }}
                    >
                      <span className="text-slate-600 flex-shrink-0">{log.t}</span>
                      <span className={log.color}>{log.msg}</span>
                    </div>
                  ))}
                  <div className="flex items-center gap-1.5 mt-2">
                    <span className="text-slate-600">09:14:03</span>
                    <span className="w-2 h-3 bg-slate-500 animate-pulse" />
                  </div>
                </div>
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

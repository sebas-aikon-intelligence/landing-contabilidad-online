'use client'

import { useEffect } from 'react'
import { ArrowRight, CheckCircle, Sparkles, TrendingUp, Cpu } from 'lucide-react'

const WA_URL =
  'https://api.whatsapp.com/send/?phone=573244614444&text=Hola.+Quiero+informaci%C3%B3n+de+los+planes&type=phone_number&app_absent=0'

const softwareNames = [
  'Siigo', 'Alegra', 'World Office', 'Helisa', 'ContaPlus',
  'Aspel', 'Monica', 'SAP', 'Oracle', 'Siigo Nube',
]
const tickerItems = [...softwareNames, ...softwareNames]

const invoices = [
  { name: 'Sura Seguros S.A.', value: '$2.450.000', status: 'done', puc: '620500' },
  { name: 'Claro Colombia', value: '$189.900', status: 'done', puc: '671500' },
  { name: 'Amazon AWS Inc.', value: '$87.300', status: 'processing', puc: null },
  { name: 'Alkosto SAS', value: '$345.000', status: 'pending', puc: null },
  { name: 'Google Workspace', value: '$79.900', status: 'done', puc: '671100' },
]

export default function Hero() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.08 }
    )
    els.forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-28 pb-20">
      {/* Subtle background blobs */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(255,107,0,0.07) 0%, transparent 65%)',
          transform: 'translate(30%, -30%)',
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(245,158,11,0.05) 0%, transparent 65%)',
          transform: 'translate(-30%, 30%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-6 items-center">
          {/* Left: copy */}
          <div className="text-center lg:text-left lg:col-span-6">
            {/* Badge */}
            <div className="reveal inline-flex items-center gap-1.5 badge-orange mb-6">
              <Cpu size={12} className="text-brand-orange" />
              IA Contable · Compatible con cualquier software
            </div>

            {/* Headline */}
            <h1 className="reveal reveal-delay-1 font-jakarta font-extrabold text-4xl sm:text-5xl xl:text-[52px] leading-[1.08] tracking-tight mb-5 text-slate-900">
              Causa el doble{' '}
              <span className="gradient-text">de facturas.</span>
              <br />
              Trabaja la{' '}
              <span className="relative inline-block">
                mitad.
                <svg
                  className="absolute -bottom-1 left-0 w-full"
                  height="6"
                  viewBox="0 0 100 6"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0 5 Q25 1 50 4 Q75 7 100 3"
                    stroke="#FF6B00"
                    strokeWidth="2.5"
                    fill="none"
                    strokeLinecap="round"
                    className="reveal reveal-delay-3"
                  />
                </svg>
              </span>
            </h1>

            {/* Sub */}
            <p className="reveal reveal-delay-2 text-slate-500 text-lg leading-relaxed mb-5 max-w-lg mx-auto lg:mx-0">
              Conecta la <span className="text-slate-800 font-semibold">DIAN con tu software contable</span> en
              minutos. Nuestra IA lee cada factura electrónica, asocia las cuentas del PUC y
              las causa automáticamente. <span className="text-slate-800 font-semibold">Cero digitación.</span>
            </p>

            {/* Software compatibility ticker */}
            <div className="reveal reveal-delay-2 overflow-hidden relative mb-6 max-w-lg mx-auto lg:mx-0">
              <div className="absolute left-0 top-0 bottom-0 w-10 z-10 bg-gradient-to-r from-white to-transparent pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-10 z-10 bg-gradient-to-l from-white to-transparent pointer-events-none" />
              <div className="software-ticker gap-0">
                {tickerItems.map((sw, i) => (
                  <span key={i} className="flex-shrink-0 inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400 px-3 border-r border-slate-100 last:border-r-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
                    {sw}
                  </span>
                ))}
              </div>
            </div>

            {/* Trust bullets */}
            <ul className="reveal reveal-delay-2 grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8 text-sm text-slate-600 max-w-md mx-auto lg:mx-0">
              {[
                'Compatible con Siigo, Alegra, World Office y más',
                'La IA aprende tu plan de cuentas (PUC)',
                'Ahorra hasta 3 días de trabajo al mes',
                'Evita errores y sanciones de la DIAN',
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-brand-orange flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="reveal reveal-delay-3 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cta inline-flex items-center justify-center gap-2 px-7 py-4 text-base text-white"
              >
                <span className="flex items-center gap-2">
                  Agenda tu Demo — Solo 30 min
                  <ArrowRight size={16} />
                </span>
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 text-base text-slate-600 hover:text-slate-900 bg-slate-50 hover:bg-slate-100 rounded-full transition-all duration-200 font-semibold cursor-pointer"
              >
                Ver cómo funciona
              </a>
            </div>

            {/* Live badge */}
            <div className="reveal reveal-delay-4 mt-5 flex items-center gap-2.5 justify-center lg:justify-start">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-orange opacity-60" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-orange" />
              </span>
              <p className="text-sm font-semibold text-slate-500">
                Cupos limitados — Acceso anticipado para firmas contables
              </p>
            </div>
          </div>

          {/* Right: Coded dashboard mockup */}
          <div className="reveal reveal-delay-2 lg:col-span-6 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Orbiting dashed rings */}
              <div
                className="absolute pointer-events-none spin-slow"
                style={{ inset: '-28px', borderRadius: '28px', border: '1.5px dashed rgba(255,107,0,0.18)' }}
              />
              <div
                className="absolute pointer-events-none spin-reverse"
                style={{ inset: '-48px', borderRadius: '36px', border: '1px dashed rgba(255,107,0,0.09)' }}
              />
              {/* Glow behind mockup */}
              <div
                className="absolute -inset-6 rounded-3xl pointer-events-none"
                style={{
                  background:
                    'radial-gradient(ellipse at center, rgba(255,107,0,0.1) 0%, transparent 70%)',
                }}
              />

              {/* Browser frame */}
              <div className="bg-white rounded-2xl border border-slate-200 shadow-[0_20px_60px_rgba(0,0,0,0.1)] overflow-hidden relative">
                {/* Browser top bar */}
                <div className="bg-slate-50 border-b border-slate-100 px-4 py-3 flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-red-400 block" />
                    <span className="w-3 h-3 rounded-full bg-amber-400 block" />
                    <span className="w-3 h-3 rounded-full bg-green-400 block" />
                  </div>
                  <div className="flex-1 bg-white border border-slate-200 rounded-lg py-1.5 px-3 text-[10px] text-slate-400 font-mono text-center max-w-[260px] mx-auto">
                    app.contabilidadonline.co/facturas
                  </div>
                </div>

                {/* App nav bar */}
                <div className="bg-white border-b border-slate-100 px-4 py-2 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-md bg-brand-orange flex items-center justify-center">
                      <span className="text-white text-[8px] font-bold leading-none">CO</span>
                    </div>
                    <span className="text-[11px] font-bold text-slate-700">Contabilidad Online</span>
                  </div>
                  <div className="flex items-center gap-1">
                    {['Inicio', 'Facturas', 'Reportes'].map((t, i) => (
                      <span
                        key={t}
                        className={`text-[10px] px-2 py-1 rounded-lg font-medium cursor-pointer ${
                          i === 1
                            ? 'bg-orange-50 text-orange-600'
                            : 'text-slate-400 hover:text-slate-600'
                        }`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Stats mini row */}
                <div className="grid grid-cols-3 gap-2 px-4 py-3 bg-slate-50/60 border-b border-slate-100">
                  {[
                    { label: 'Total mes', value: '127', color: 'text-slate-700' },
                    { label: 'Causadas', value: '108', color: 'text-emerald-600' },
                    { label: 'Pendientes', value: '19', color: 'text-brand-orange' },
                  ].map((s) => (
                    <div key={s.label} className="bg-white rounded-xl px-3 py-2 border border-slate-100">
                      <div className={`text-base font-extrabold ${s.color} leading-none`}>{s.value}</div>
                      <div className="text-[9px] text-slate-400 mt-0.5 font-medium">{s.label}</div>
                    </div>
                  ))}
                </div>

                {/* Invoice table */}
                <div className="px-4 py-2">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[11px] font-bold text-slate-700">Facturas Recibidas</span>
                    <span className="text-[10px] text-slate-400">Nov 2024</span>
                  </div>
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-slate-100">
                        {['Proveedor', 'Valor', 'Estado', 'PUC'].map((h) => (
                          <th
                            key={h}
                            className={`text-[9px] font-semibold text-slate-400 pb-1.5 ${
                              h === 'Proveedor' ? 'text-left' : 'text-right'
                            } ${h === 'Estado' ? 'text-center' : ''}`}
                          >
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {invoices.map((inv, i) => (
                        <tr
                          key={i}
                          className={`border-b border-slate-50 mock-row mock-row-${i + 1}`}
                        >
                          <td className="py-1.5 text-[10px] font-medium text-slate-700 pr-2 max-w-[100px] truncate">
                            {inv.name}
                          </td>
                          <td className="py-1.5 text-[10px] text-slate-600 text-right font-medium tabular-nums">
                            {inv.value}
                          </td>
                          <td className="py-1.5 text-center px-1">
                            {inv.status === 'done' && (
                              <span className="inline-flex items-center gap-0.5 bg-emerald-50 text-emerald-600 text-[9px] font-semibold px-1.5 py-0.5 rounded-full">
                                ✓ Causada
                              </span>
                            )}
                            {inv.status === 'processing' && (
                              <span className="inline-flex items-center gap-0.5 bg-orange-50 text-orange-500 text-[9px] font-semibold px-1.5 py-0.5 rounded-full animate-processing">
                                ⟳ IA...
                              </span>
                            )}
                            {inv.status === 'pending' && (
                              <span className="inline-flex items-center gap-0.5 bg-slate-50 text-slate-400 text-[9px] px-1.5 py-0.5 rounded-full">
                                Pendiente
                              </span>
                            )}
                          </td>
                          <td className="py-1.5 text-[10px] font-mono text-slate-500 text-right">
                            {inv.puc ?? '—'}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Action bar */}
                <div className="px-4 py-2.5 bg-orange-50 border-t border-orange-100 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-60" />
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-orange-500" />
                    </span>
                    <span className="text-[10px] text-orange-700 font-semibold">
                      19 facturas pendientes
                    </span>
                  </div>
                  <button className="bg-brand-orange text-white text-[10px] font-bold px-3 py-1.5 rounded-full flex items-center gap-1 cursor-pointer hover:bg-brand-orange-light transition-colors">
                    Procesar con IA
                    <ArrowRight size={9} />
                  </button>
                </div>
              </div>

              {/* Floating badges */}
              {/* Badge top-right: tiempo ahorrado */}
              <div
                className="absolute -top-4 -right-4 bg-white rounded-2xl px-3.5 py-2.5 shadow-card border border-slate-100 flex items-center gap-2"
                style={{ animation: 'float 5s ease-in-out infinite' }}
              >
                <div className="w-7 h-7 bg-emerald-50 rounded-xl flex items-center justify-center">
                  <TrendingUp size={13} className="text-emerald-500" />
                </div>
                <div>
                  <p className="text-[9px] text-slate-400 font-semibold uppercase tracking-wider leading-none mb-0.5">
                    Tiempo ahorrado
                  </p>
                  <p className="text-xs font-extrabold text-slate-800">3 días / mes</p>
                </div>
              </div>

              {/* Badge bottom-left: velocidad IA */}
              <div
                className="absolute -bottom-4 -left-4 bg-white rounded-2xl px-3.5 py-2.5 shadow-card border border-slate-100 flex items-center gap-2"
                style={{ animation: 'float 6s ease-in-out 1.5s infinite' }}
              >
                <div className="relative w-7 h-7 bg-orange-50 rounded-xl flex items-center justify-center">
                  <Sparkles size={13} className="text-brand-orange" />
                </div>
                <div>
                  <p className="text-[9px] text-slate-400 font-semibold uppercase tracking-wider leading-none mb-0.5">
                    IA activa
                  </p>
                  <p className="text-xs font-extrabold text-slate-800">5s / factura</p>
                </div>
              </div>

              {/* Badge right-center: software compat */}
              <div
                className="absolute top-1/2 -right-5 -translate-y-1/2 bg-white rounded-xl px-2.5 py-2 shadow-card border border-slate-100 flex flex-col items-center gap-1"
                style={{ animation: 'float 7s ease-in-out 3s infinite' }}
              >
                <div className="flex flex-col gap-1">
                  {['S', 'A', 'W'].map((l, i) => (
                    <div key={l} className="w-5 h-5 rounded-md bg-orange-50 border border-orange-100 flex items-center justify-center">
                      <span className="text-[8px] font-extrabold text-brand-orange">{l}</span>
                    </div>
                  ))}
                </div>
                <p className="text-[8px] text-slate-400 font-semibold">+7 más</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-30">
        <div className="w-px h-10 bg-gradient-to-b from-transparent via-slate-400 to-transparent animate-pulse" />
      </div>
    </section>
  )
}

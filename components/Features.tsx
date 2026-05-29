'use client'

import { Brain, ShieldCheck, Zap, BarChart3, Users } from 'lucide-react'

const features = [
  {
    icon: Brain,
    title: 'Mapeo Inteligente de Cuentas (PUC)',
    desc: 'La IA interpreta el concepto de cada factura (papelería, arriendos, honorarios) y sugiere la cuenta del Plan Único de Cuentas correcta.',
    tag: 'Sugerencia PUC',
    col: 'lg:col-span-2',
  },
  {
    icon: ShieldCheck,
    title: 'Detección de Retenciones e IVA',
    desc: 'Identifica automáticamente retención en la fuente, IVA e ICA según la parametrización de tu empresa.',
    tag: 'Liquidación de Impuestos',
    col: 'lg:col-span-1',
  },
  {
    icon: Zap,
    title: 'Velocidad de Causación',
    desc: 'Procesa lotes completos de facturas en segundos. Menos de 5 segundos por documento contable.',
    tag: 'Procesamiento en Lote',
    col: 'lg:col-span-1',
  },
  {
    icon: BarChart3,
    title: 'Prevención de Errores y Glosas',
    desc: 'Verifica la validez del XML frente a la DIAN antes de subirlo a Siigo. Si hay un error, el sistema te alerta al instante.',
    tag: 'Filtro Antierrores',
    col: 'lg:col-span-1',
  },
  {
    icon: Users,
    title: 'Soporte Local Experto',
    desc: 'Ingenieros y contadores en Colombia que conocen la normativa tributaria local. Soporte 100% en vivo, sin bots.',
    tag: 'Soporte 100% Humano',
    col: 'lg:col-span-2',
  },
]

const mockData = [
  { provider: 'Sura Seguros S.A.', nit: '890.903.938-8', concept: 'Póliza Todo Riesgo', value: '$2.450.000', rete: '$245.000', puc: '620500', pucLabel: 'Seguros', status: 'done' },
  { provider: 'Claro Colombia', nit: '800.153.993-2', concept: 'Servicio Telefonía', value: '$189.900', rete: '$7.596', puc: '671500', pucLabel: 'Comunicaciones', status: 'done' },
  { provider: 'Google Workspace', nit: 'NIT-EXT', concept: 'Licencias Software', value: '$79.900', rete: '$3.196', puc: '671100', pucLabel: 'Software', status: 'done' },
  { provider: 'Alkosto SAS', nit: '900.225.680-6', concept: 'Compra de Equipos', value: '$345.000', rete: '$34.500', puc: '—', pucLabel: 'Revisión', status: 'review' },
  { provider: 'Amazon AWS Inc.', nit: 'NIT-EXT', concept: 'Servicios Cloud', value: '$210.000', rete: '$0', puc: '—', pucLabel: 'Procesando', status: 'ai' },
]

export default function Features() {
  return (
    <section id="features" className="py-24 relative overflow-hidden bg-white">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-reveal">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="badge-orange inline-flex mb-4">Características</div>
          <h2 className="reveal font-jakarta font-extrabold text-3xl sm:text-4xl lg:text-[44px] text-slate-900 mb-4 tracking-tight leading-tight">
            Todo lo que necesitas para{' '}
            <span className="gradient-text">automatizar tu causación</span>
          </h2>
          <p className="reveal reveal-delay-1 text-slate-500 text-lg max-w-2xl mx-auto">
            Diseñado específicamente para contadores colombianos y firmas de outsourcing.
          </p>
        </div>

        {/* Features bento grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {features.map((feat, i) => {
            const Icon = feat.icon
            return (
              <div
                key={feat.title}
                className={`reveal reveal-delay-${(i % 3) + 1} bg-white border border-slate-100 rounded-2xl p-6 card-hover group ${feat.col}`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-11 h-11 rounded-2xl bg-orange-50 border border-orange-100 flex items-center justify-center group-hover:shadow-orange-sm transition-shadow">
                    <Icon size={20} className="text-brand-orange" />
                  </div>
                  <span className="badge-orange text-[10px]">{feat.tag}</span>
                </div>
                <h3 className="font-jakarta font-bold text-slate-800 text-base mb-1.5">{feat.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{feat.desc}</p>
              </div>
            )
          })}
        </div>

        {/* Big mockup: Invoice causation table */}
        <div className="reveal">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-[0_8px_30px_rgba(0,0,0,0.07)] overflow-hidden">
            {/* Header */}
            <div className="px-6 py-4 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h3 className="font-jakarta font-bold text-slate-800 text-lg">
                  Vista del Producto — Causación con IA
                </h3>
                <p className="text-slate-500 text-sm mt-0.5">
                  Así luce el panel de causación automática para tu firma contable
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 bg-emerald-50 border border-emerald-100 text-emerald-600 text-xs font-semibold px-3 py-1.5 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  IA activa
                </span>
                <button className="btn-cta px-4 py-2 text-white text-xs">
                  <span>Exportar</span>
                </button>
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px]">
                <thead className="bg-slate-50 border-b border-slate-100">
                  <tr>
                    {['Proveedor / NIT', 'Concepto', 'Valor', 'Retención', 'Cuenta PUC', 'Estado'].map((h) => (
                      <th
                        key={h}
                        className={`px-4 py-3 text-[11px] font-semibold text-slate-400 uppercase tracking-wider ${
                          h === 'Proveedor / NIT' || h === 'Concepto' ? 'text-left' : 'text-right'
                        } ${h === 'Estado' ? 'text-center' : ''}`}
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {mockData.map((row, i) => (
                    <tr
                      key={i}
                      className={`border-b border-slate-50 mock-row hover:bg-slate-50/70 transition-colors`}
                      style={{ animationDelay: `${0.1 + i * 0.15}s` }}
                    >
                      <td className="px-4 py-3.5">
                        <div className="font-semibold text-slate-800 text-sm">{row.provider}</div>
                        <div className="text-xs text-slate-400 font-mono">{row.nit}</div>
                      </td>
                      <td className="px-4 py-3.5 text-sm text-slate-600">{row.concept}</td>
                      <td className="px-4 py-3.5 text-sm font-semibold text-slate-800 text-right tabular-nums">{row.value}</td>
                      <td className="px-4 py-3.5 text-sm text-slate-600 text-right tabular-nums">{row.rete}</td>
                      <td className="px-4 py-3.5 text-right">
                        {row.status !== 'review' && row.status !== 'ai' ? (
                          <div>
                            <span className="text-sm font-mono font-bold text-slate-800">{row.puc}</span>
                            <span className="ml-1.5 text-[10px] text-slate-400">{row.pucLabel}</span>
                          </div>
                        ) : row.status === 'ai' ? (
                          <span className="text-[11px] text-orange-500 font-semibold animate-processing">
                            ⟳ Analizando...
                          </span>
                        ) : (
                          <span className="text-[11px] text-amber-500 font-semibold">⚠ Revisar</span>
                        )}
                      </td>
                      <td className="px-4 py-3.5 text-center">
                        {row.status === 'done' && (
                          <span className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-600 text-[10px] font-semibold px-2.5 py-1 rounded-full">
                            ✓ Causada
                          </span>
                        )}
                        {row.status === 'ai' && (
                          <span className="inline-flex items-center gap-1 bg-orange-50 text-orange-500 text-[10px] font-semibold px-2.5 py-1 rounded-full animate-processing">
                            IA Procesando
                          </span>
                        )}
                        {row.status === 'review' && (
                          <span className="inline-flex items-center gap-1 bg-amber-50 text-amber-600 text-[10px] font-semibold px-2.5 py-1 rounded-full">
                            Revisión
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Footer bar */}
            <div className="px-6 py-3 bg-slate-50 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
              <p className="text-xs text-slate-500 font-medium">
                Mostrando <span className="font-bold text-slate-700">5 de 127</span> facturas del período
              </p>
              <div className="flex items-center gap-4 text-xs font-semibold">
                <span className="text-emerald-600">✓ 3 causadas</span>
                <span className="text-orange-500">⟳ 1 procesando</span>
                <span className="text-amber-600">⚠ 1 en revisión</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

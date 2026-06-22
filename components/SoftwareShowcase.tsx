'use client'

import { useState } from 'react'
import { Receipt, Boxes, Users, BookOpen, BarChart3, CheckCircle2, ArrowRight } from 'lucide-react'

const WA_URL =
  'https://api.whatsapp.com/send/?phone=573024695956&text=Hola.+Quiero+informaci%C3%B3n+de+los+planes&type=phone_number&app_absent=0'

const modules = [
  {
    id: 'facturacion',
    title: 'Facturación Electrónica DIAN',
    tabLabel: 'Facturación',
    icon: Receipt,
    desc: 'Genera, transmite y recibe tus facturas electrónicas directamente autorizadas por la DIAN. Mantén el control total de tus ventas, clientes y saldos pendientes sin esfuerzo.',
    bullets: [
      'Emisión directa a la DIAN en segundos.',
      'Control automático de cartera y cuentas por cobrar.',
      'Envío por correo electrónico automatizado a tus clientes.',
    ],
    image: '/images/163846.png',
    url: 'app.contabilidadonline.co/facturacion',
  },
  {
    id: 'inventarios',
    title: 'Control de Inventarios y Compras',
    tabLabel: 'Inventarios',
    icon: Boxes,
    desc: 'Gestiona existencias de productos en tiempo real, valoriza tu mercancía con Kárdex y organiza tus bodegas de manera integrada con cada venta o compra que realices.',
    bullets: [
      'Movimientos de inventario actualizados al instante.',
      'Valorización bajo promedio ponderado (Kárdex).',
      'Control de compras y órdenes de pago a proveedores.',
    ],
    image: '/images/164037.png',
    url: 'app.contabilidadonline.co/inventarios',
  },
  {
    id: 'nomina',
    title: 'Nómina Electrónica Integrada',
    tabLabel: 'Nómina',
    icon: Users,
    desc: 'Liquida la nómina de tus empleados de forma ágil. Calcula sueldos, horas extra, recargos nocturnos, seguridad social, provisiones y prestaciones de ley automáticamente.',
    bullets: [
      'Emisión directa del documento soporte de nómina a la DIAN.',
      'Cálculo automático de devengados y deducciones.',
      'Comprobantes de pago enviados por correo al personal.',
    ],
    image: '/images/165623.png',
    url: 'app.contabilidadonline.co/nomina',
  },
  {
    id: 'contabilidad',
    title: 'Contabilidad General Automática',
    tabLabel: 'Contabilidad',
    icon: BookOpen,
    desc: '¡Adiós a las causaciones manuales! Cada factura, compra o nómina genera el asiento contable correspondiente en tu PUC de forma automática, dejando tus estados financieros listos en tiempo real.',
    bullets: [
      'Generación automática de asientos de debito y crédito.',
      'Balances generales y estado de pérdidas y ganancias al día.',
      'Auxiliares contables descargables y listos para revisiones.',
    ],
    image: '/images/165715.png',
    url: 'app.contabilidadonline.co/contabilidad',
  },
  {
    id: 'reportes',
    title: 'Más de 100 Reportes en un Clic',
    tabLabel: 'Reportes',
    icon: BarChart3,
    desc: 'Accede a un completo módulo de reportes financieros, de inventario, de ventas y tributarios. Exporta toda la información filtrada a Excel con facilidad y toma decisiones inteligentes.',
    bullets: [
      'Más de 100 tipos de reportes descargables en Excel.',
      'Análisis financiero integrado para controlar tu flujo de caja.',
      'Reportes listos para la declaración de impuestos e IVA.',
    ],
    image: '/images/165855.png',
    url: 'app.contabilidadonline.co/reportes',
  },
]

export default function SoftwareShowcase() {
  const [activeIdx, setActiveIdx] = useState(0)
  const current = modules[activeIdx]

  return (
    <section id="software-showcase" className="py-16 sm:py-24 relative overflow-hidden bg-white border-t border-slate-100">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-reveal">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="badge-orange inline-flex mb-4">MÁS QUE UNA IA CONTABLE</div>
          <h2 className="font-jakarta font-extrabold text-3xl sm:text-4xl lg:text-[42px] text-slate-900 mb-4 tracking-tight leading-tight">
            Un Software Contable <span className="gradient-text">Completo y Moderno</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Lleva toda la operación de tu negocio o la de tus clientes en una única plataforma en la nube. Sin instalaciones y con todo lo necesario para cumplir con la DIAN.
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex justify-start md:justify-center overflow-x-auto pb-4 mb-12 scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0">
          <div className="flex bg-slate-50 p-1.5 rounded-2xl border border-slate-100 min-w-max">
            {modules.map((mod, idx) => {
              const Icon = mod.icon
              const isActive = idx === activeIdx
              return (
                <button
                  key={mod.id}
                  onClick={() => setActiveIdx(idx)}
                  className={`flex items-center gap-2 px-5 py-3 rounded-xl font-jakarta font-bold text-sm transition-all duration-300 ${
                    isActive
                      ? 'bg-slate-900 text-white shadow-md'
                      : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100/50'
                  }`}
                >
                  <Icon size={16} />
                  <span>{mod.tabLabel}</span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Showcase Grid */}
        <div className="grid lg:grid-cols-12 gap-10 items-center min-h-[500px]">
          {/* Left Side: Info */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <span className="text-brand-orange text-xs font-bold uppercase tracking-wider mb-2 block">
              Módulo de {current.tabLabel}
            </span>
            <h3 className="font-jakarta font-extrabold text-2xl sm:text-3xl text-slate-900 mb-4 leading-tight">
              {current.title}
            </h3>
            <p className="text-slate-500 text-base leading-relaxed mb-6">
              {current.desc}
            </p>

            <ul className="space-y-3 mb-8">
              {current.bullets.map((bullet, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <CheckCircle2 size={18} className="text-brand-orange mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700 text-sm font-medium">{bullet}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cta inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm text-white"
              >
                <span>Prueba 2 Meses GRATIS</span>
                <ArrowRight size={14} />
              </a>
            </div>
          </div>

          {/* Right Side: Mockup Image */}
          <div className="lg:col-span-7">
            <div className="bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.08)] relative">
              {/* Browser bar */}
              <div className="bg-slate-50 border-b border-slate-200 px-4 py-3 flex items-center gap-3">
                <div className="flex gap-1.5 flex-shrink-0">
                  <span className="w-3 h-3 rounded-full bg-red-400 block" />
                  <span className="w-3 h-3 rounded-full bg-amber-400 block" />
                  <span className="w-3 h-3 rounded-full bg-green-400 block" />
                </div>
                <div className="flex-1 bg-white border border-slate-200 rounded-lg py-1 px-3 text-[10px] text-slate-400 font-mono text-center max-w-[280px] mx-auto select-none">
                  {current.url}
                </div>
              </div>

              {/* Screen Area with image inside */}
              <div className="relative bg-white aspect-[2.4] overflow-hidden flex items-center justify-center">
                {modules.map((mod, idx) => (
                  <div
                    key={mod.id}
                    className={`absolute inset-0 transition-opacity duration-500 ease-in-out flex items-center justify-center p-2 bg-slate-100/50 ${
                      idx === activeIdx ? 'opacity-100 z-10' : 'opacity-0 z-0'
                    }`}
                  >
                    <img
                      src={mod.image}
                      alt={mod.title}
                      className="w-full h-full object-contain rounded shadow-sm hover:scale-[1.02] transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

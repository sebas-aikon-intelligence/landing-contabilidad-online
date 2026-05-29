import { Clock, AlertTriangle, RefreshCcw, TrendingDown } from 'lucide-react'

const pains = [
  {
    icon: Clock,
    title: 'Cierres de mes eternos',
    desc: 'Tu equipo digitando facturas a mano, una por una, hasta altas horas de la noche.',
    iconBg: 'bg-red-50',
    iconColor: 'text-red-500',
    border: 'hover:border-red-200',
  },
  {
    icon: AlertTriangle,
    title: 'Errores de digitación',
    desc: 'Un NIT incorrecto o una cuenta mal clasificada daña tu balance y toca reprocesar todo.',
    iconBg: 'bg-amber-50',
    iconColor: 'text-amber-500',
    border: 'hover:border-amber-200',
  },
  {
    icon: RefreshCcw,
    title: 'Sanciones e IVA inexacto',
    desc: 'Clasificar mal las retenciones o el IVA descontable te expone a sanciones de la DIAN.',
    iconBg: 'bg-orange-50',
    iconColor: 'text-brand-orange',
    border: 'hover:border-orange-200',
  },
  {
    icon: TrendingDown,
    title: 'Imposible escalar',
    desc: 'Con causación manual, crecer está limitado por el número de digitadores que puedas pagar.',
    iconBg: 'bg-rose-50',
    iconColor: 'text-rose-500',
    border: 'hover:border-rose-200',
  },
]

export default function ProblemSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-white">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-reveal">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="badge-orange inline-flex mb-4">El reto diario</div>
          <h2 className="reveal font-jakarta font-extrabold text-3xl sm:text-4xl lg:text-[44px] text-slate-900 mb-4 tracking-tight leading-tight">
            ¿Sigues causando{' '}
            <span className="gradient-text">facturas a mano?</span>
          </h2>
          <p className="reveal reveal-delay-1 text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">
            Los contadores y firmas en Colombia pierden hasta el{' '}
            <span className="text-slate-800 font-semibold">70% de su tiempo</span>{' '}
            en digitación repetitiva que frena su crecimiento.
          </p>
        </div>

        {/* Pain cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {pains.map((pain, i) => {
            const Icon = pain.icon
            return (
              <div
                key={pain.title}
                className={`reveal reveal-delay-${i + 1} bg-white border border-slate-100 rounded-2xl p-6 card-hover ${pain.border} transition-all duration-200`}
              >
                <div className={`w-11 h-11 rounded-2xl ${pain.iconBg} flex items-center justify-center mb-4`}>
                  <Icon size={20} className={pain.iconColor} />
                </div>
                <h3 className="font-jakarta font-bold text-slate-800 text-base mb-2">{pain.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{pain.desc}</p>
              </div>
            )
          })}
        </div>

        {/* Transition callout */}
        <div className="reveal">
          <div className="bg-gradient-to-r from-orange-50 via-amber-50 to-orange-50 rounded-2xl border border-orange-100 p-8 max-w-3xl mx-auto text-center relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-px bg-gradient-to-r from-transparent via-brand-orange to-transparent" />
            <p className="font-jakarta font-extrabold text-xl sm:text-2xl text-slate-800">
              Ya no tiene que ser así.{' '}
              <span className="gradient-text">La IA hace la causación por ti.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

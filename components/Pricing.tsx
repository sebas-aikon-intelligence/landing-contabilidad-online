import { CheckCircle2, ArrowRight, Sparkles, Zap } from 'lucide-react'

const WA_URL =
  'https://api.whatsapp.com/send/?phone=573024695956&text=Hola.+Quiero+informaci%C3%B3n+de+los+planes&type=phone_number&app_absent=0'

const plans = [
  {
    name: 'Plan Emprendedor',
    tag: 'Ideal para crecer',
    price: '$129.000',
    period: '/ mes',
    desc: 'Perfecto para emprendedores y pequeños negocios que quieren automatizar su contabilidad.',
    features: [
      '2 Meses de servicio sin costo',
      '2 Usuarios de acceso operativos',
      'Facturación Electrónica',
      'Nómina Electrónica',
      'Inventarios',
      'Soporte 1:1',
      'Análisis financiero con IA',
      'Cargue automático facturas con IA',
      '50 Folios electrónicos',
      'Diagnóstico financiero fiscal',
      '2 Meses de asesoría contable y tributaria',
    ],
    cta: 'Prueba 2 Meses GRATIS',
    highlight: false,
  },
  {
    name: 'Plan Empresa',
    tag: 'Más popular',
    price: '$180.000',
    period: '/ mes',
    desc: 'Para empresas en crecimiento que requieren mayor capacidad y asesoría continua.',
    features: [
      '2 Meses de servicio sin costo',
      '2 Usuarios de acceso operativos',
      'Facturación Electrónica',
      'Nómina Electrónica',
      'Soporte 1:1',
      'Análisis financiero con IA',
      'Cargue automático factura de compra con IA',
      '100 Folios electrónicos',
      'Diagnóstico financiero fiscal',
      '2 Meses de asesoría contable y tributaria',
    ],
    cta: 'Prueba 2 Meses GRATIS',
    highlight: true,
  },
  {
    name: 'Plan Contador',
    tag: 'Para profesionales',
    price: '$129.000',
    period: ' + cargo por comprobantes',
    desc: 'Especial para contadores que manejan múltiples clientes y necesitan flexibilidad total.',
    features: [
      '2 Meses de servicio sin costo',
      'Usuarios Ilimitados',
      'Facturación Electrónica',
      'Nómina Electrónica',
      'Soporte 1:1',
      'Cargue automático factura de compra con IA',
      'Diagnóstico financiero fiscal',
      'Hasta 100 comprobantes sin costo adicional',
    ],
    cta: 'Prueba 2 Meses GRATIS',
    highlight: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-16 sm:py-24 relative overflow-hidden bg-slate-50">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-reveal">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="badge-orange inline-flex mb-4">Precios</div>
          <h2 className="reveal font-jakarta font-extrabold text-3xl sm:text-4xl text-slate-900 mb-4 tracking-tight">
            Planes que crecen{' '}
            <span className="gradient-text">contigo</span>
          </h2>
          <p className="reveal reveal-delay-1 text-slate-500 text-lg max-w-xl mx-auto">
            Escoge el plan que se adapta a tu firma hoy. Sin permanencia mínima.
          </p>
        </div>

        {/* Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan, i) => (
            <div
              key={plan.name}
              className={`reveal reveal-delay-${i + 1} rounded-2xl p-7 flex flex-col relative overflow-hidden transition-all duration-300 ${
                plan.highlight
                  ? 'bg-slate-900 text-white shadow-[0_20px_50px_rgba(0,0,0,0.18)]'
                  : 'bg-white border border-slate-100 card-hover'
              }`}
            >
              {/* Top line for highlighted */}
              {plan.highlight && (
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-orange via-brand-amber to-brand-orange" />
              )}

              {/* Tag */}
              <div className="mb-5">
                {plan.highlight ? (
                  <span className="inline-flex items-center gap-1.5 bg-brand-orange text-white text-xs font-bold px-3 py-1.5 rounded-full">
                    <Zap size={11} fill="white" />
                    {plan.tag}
                  </span>
                ) : (
                  <span className="badge-orange">{plan.tag}</span>
                )}
              </div>

              <h3
                className={`font-jakarta font-extrabold text-2xl mb-1 ${
                  plan.highlight ? 'text-white' : 'text-slate-800'
                }`}
              >
                {plan.name}
              </h3>

              <div className="flex items-baseline gap-1 mb-3">
                <span className="font-jakarta font-extrabold text-3xl gradient-text">{plan.price}</span>
                {plan.period && (
                  <span className={`text-sm font-semibold ${plan.highlight ? 'text-white/50' : 'text-slate-400'}`}>
                    {plan.period}
                  </span>
                )}
              </div>

              <p
                className={`text-sm mb-6 leading-relaxed ${
                  plan.highlight ? 'text-white/60' : 'text-slate-500'
                }`}
              >
                {plan.desc}
              </p>

              {/* Features */}
              <ul className="space-y-2.5 flex-grow mb-7">
                {plan.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-2.5">
                    <CheckCircle2
                      size={14}
                      className={`flex-shrink-0 mt-0.5 ${
                        plan.highlight ? 'text-brand-orange' : 'text-brand-orange/70'
                      }`}
                    />
                    <span
                      className={`text-sm font-medium ${
                        plan.highlight ? 'text-white/80' : 'text-slate-700'
                      }`}
                    >
                      {feat}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center gap-2 py-3.5 rounded-xl font-jakarta font-bold text-sm transition-all duration-200 cursor-pointer ${
                  plan.highlight
                    ? 'btn-cta text-white'
                    : 'bg-slate-50 border border-slate-200 text-slate-700 hover:border-brand-orange hover:text-brand-orange hover:bg-orange-50'
                }`}
              >
                <span>{plan.cta}</span>
                <ArrowRight size={14} />
              </a>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="reveal reveal-delay-4 text-center mt-10">
          <p className="text-slate-400 text-sm font-medium flex items-center justify-center gap-2">
            <Sparkles size={13} className="text-brand-orange/60" />
            Todos los planes incluyen dos (2) meses de prueba gratis. Sin tarjeta de crédito.
          </p>
        </div>
      </div>
    </section>
  )
}

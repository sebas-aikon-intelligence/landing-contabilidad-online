const logos = [
  { name: 'Siigo', tag: 'ERP #1 Colombia' },
  { name: 'DIAN', tag: 'Integración oficial' },
  { name: 'Bancolombia', tag: 'Pagos integrados' },
  { name: 'Nequi', tag: 'Pagos móviles' },
  { name: 'PSE', tag: 'Pagos en línea' },
  { name: 'Alegra', tag: 'Compatible' },
  { name: 'Google', tag: 'Workspace' },
  { name: 'Microsoft', tag: 'Azure Cloud' },
]

const doubled = [...logos, ...logos]

export default function SocialProofBar() {
  return (
    <section className="py-14 bg-slate-50 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-8">
        <p className="text-xs text-slate-400 font-semibold uppercase tracking-widest">
          Compatible con las plataformas líderes de Colombia y el mundo
        </p>
      </div>

      {/* Infinite carousel */}
      <div className="relative overflow-hidden">
        {/* Gradient masks */}
        <div className="absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-slate-50 to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-slate-50 to-transparent pointer-events-none" />

        <div className="logos-track gap-4 px-4">
          {doubled.map((logo, i) => (
            <LogoChip key={i} name={logo.name} tag={logo.tag} />
          ))}
        </div>
      </div>
    </section>
  )
}

function LogoChip({ name, tag }: { name: string; tag: string }) {
  return (
    <div className="flex-shrink-0 bg-white border border-slate-200 rounded-xl px-4 py-3 flex items-center gap-3 hover:border-orange-200 hover:shadow-sm transition-all duration-200 cursor-default">
      <div className="w-8 h-8 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center">
        <span className="text-brand-orange font-extrabold text-xs">{name[0]}</span>
      </div>
      <div>
        <p className="font-bold text-slate-700 text-sm leading-none">{name}</p>
        <p className="text-slate-400 text-[10px] mt-0.5 font-medium">{tag}</p>
      </div>
    </div>
  )
}

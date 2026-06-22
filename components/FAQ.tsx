'use client'

import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    q: '¿Necesito cambiar de versión de Siigo o instalar algo?',
    a: 'No. La integración funciona con tu cuenta de Siigo existente, independientemente del plan que tengas. No requieres instalar ningún software adicional ni migrar datos. Solo vinculas tu cuenta con Contabilidad Online y el sistema empieza a trabajar.',
  },
  {
    q: '¿Qué tan seguro es conectar mis credenciales de Siigo?',
    a: 'Usamos OAuth 2.0 y encriptación AES-256 para todas las credenciales. Nunca almacenamos tus contraseñas en texto plano. La conexión cumple los estándares de seguridad bancaria y está auditada regularmente. Tus datos nunca se comparten con terceros.',
  },
  {
    q: '¿El sistema causa 100% de las facturas sin revisión humana?',
    a: 'El motor IA causa automáticamente las facturas con alta confianza. Las que tienen ambigüedad o son de nuevos proveedores se marcan para revisión manual. Puedes ajustar el umbral de confianza según tu preferencia. Con el tiempo, el sistema aprende de tus correcciones y mejora continuamente.',
  },
  {
    q: '¿Funciona con todos los tipos de empresas — personas naturales, SAS, LTDA?',
    a: 'Sí. El sistema funciona para cualquier tipo de empresa colombiana registrada en la DIAN que reciba facturas electrónicas. Ya sea tu empresa propia o las empresas de tus clientes de outsourcing.',
  },
  {
    q: '¿Qué pasa si la DIAN cambia el formato de las facturas electrónicas?',
    a: 'Nuestro equipo técnico monitorea continuamente las resoluciones y actualizaciones de la DIAN. Cuando hay cambios normativos, actualizamos el sistema automáticamente. Tú no tienes que hacer nada.',
  },
  {
    q: '¿Puedo usar Contabilidad Online con otro software diferente a Siigo?',
    a: 'Actualmente la causación automática funciona principalmente con Siigo, el ERP #1 de Colombia. Si usas otro ERP, escríbenos — estamos evaluando integraciones adicionales con otros sistemas contables.',
  },
]

function FAQItem({ q, a, idx }: { q: string; a: string; idx: number }) {
  const [open, setOpen] = useState(false)

  return (
    <div
      className={`reveal reveal-delay-${(idx % 3) + 1} border rounded-2xl overflow-hidden transition-all duration-200 ${
        open
          ? 'border-orange-200 bg-orange-50/50 shadow-sm'
          : 'border-slate-100 bg-white hover:border-slate-200'
      }`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between gap-4 p-5 text-left group cursor-pointer"
        aria-expanded={open}
      >
        <span
          className={`font-jakarta font-semibold text-sm sm:text-base leading-snug transition-colors ${
            open ? 'text-brand-orange' : 'text-slate-800 group-hover:text-slate-900'
          }`}
        >
          {q}
        </span>
        <div
          className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 ${
            open
              ? 'bg-brand-orange text-white'
              : 'bg-slate-100 text-slate-500 group-hover:bg-orange-50 group-hover:text-brand-orange'
          }`}
        >
          {open ? <Minus size={14} /> : <Plus size={14} />}
        </div>
      </button>

      <div className={`accordion-content ${open ? 'open' : ''}`}>
        <p className="px-5 pb-5 text-slate-600 text-sm leading-relaxed border-t border-orange-100 pt-4">
          {a}
        </p>
      </div>
    </div>
  )
}

export default function FAQ() {
  return (
    <section id="faq" className="py-16 sm:py-24 relative overflow-hidden bg-white">
      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 scroll-reveal">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="badge-orange inline-flex mb-4">Preguntas frecuentes</div>
          <h2 className="reveal font-jakarta font-extrabold text-3xl sm:text-4xl text-slate-900 mb-4 tracking-tight">
            Todo lo que necesitas{' '}
            <span className="gradient-text">saber</span>
          </h2>
          <p className="reveal reveal-delay-1 text-slate-500 text-lg">
            ¿Aún tienes dudas? Escríbenos por WhatsApp y te respondemos en minutos.
          </p>
        </div>

        {/* FAQ items */}
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <FAQItem key={faq.q} q={faq.q} a={faq.a} idx={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

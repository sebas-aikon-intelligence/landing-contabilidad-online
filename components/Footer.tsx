import { Zap, Mail, Phone, MapPin } from 'lucide-react'

const WA_URL =
  'https://api.whatsapp.com/send/?phone=573244614444&text=Hola.+Quiero+informaci%C3%B3n+de+los+planes&type=phone_number&app_absent=0'

const productLinks = [
  { label: 'Causación Automática IA', href: '#features' },
  { label: 'Integración Siigo', href: '#how-it-works' },
  { label: 'Facturación Electrónica', href: '#' },
  { label: 'Nómina Electrónica', href: '#' },
  { label: 'Inventarios', href: '#' },
  { label: 'Reportes NIIF', href: '#' },
]

const companyLinks = [
  { label: 'Nosotros', href: '#' },
  { label: 'Blog Contable', href: '#' },
  { label: 'Centro de Ayuda', href: '#' },
  { label: 'Términos de Servicio', href: '#' },
  { label: 'Política de Privacidad', href: '#' },
]

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-slate-900 border-t border-slate-800">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-4 cursor-pointer">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-brand-orange to-brand-orange-light flex items-center justify-center shadow-orange-sm">
                <Zap size={15} className="text-white" fill="white" />
              </div>
              <span className="font-jakarta font-extrabold text-sm text-white leading-none">
                Contabilidad<span className="text-brand-orange">Online</span>
              </span>
            </a>
            <p className="text-slate-400 text-sm leading-relaxed mb-5">
              El software contable colombiano en la nube para contadores modernos. +8 años, +1.000 clientes, soporte humano real.
            </p>

            <div className="space-y-2.5">
              <a
                href="tel:+573244614444"
                className="flex items-center gap-2.5 text-slate-400 hover:text-brand-orange transition-colors text-sm font-medium cursor-pointer"
              >
                <Phone size={13} className="text-brand-orange flex-shrink-0" />
                +57 324 461 4444
              </a>
              <a
                href="mailto:info@contabilidadonline.co"
                className="flex items-center gap-2.5 text-slate-400 hover:text-brand-orange transition-colors text-sm font-medium cursor-pointer"
              >
                <Mail size={13} className="text-brand-orange flex-shrink-0" />
                info@contabilidadonline.co
              </a>
              <span className="flex items-center gap-2.5 text-slate-400 text-sm font-medium">
                <MapPin size={13} className="text-brand-orange flex-shrink-0" />
                Colombia — Servicio 100% en la nube
              </span>
            </div>
          </div>

          {/* Product */}
          <div>
            <p className="font-jakarta font-bold text-slate-400 text-xs mb-4 uppercase tracking-widest">
              Producto
            </p>
            <ul className="space-y-2.5">
              {productLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-slate-500 hover:text-white text-sm font-medium transition-colors cursor-pointer"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="font-jakarta font-bold text-slate-400 text-xs mb-4 uppercase tracking-widest">
              Empresa
            </p>
            <ul className="space-y-2.5">
              {companyLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-slate-500 hover:text-white text-sm font-medium transition-colors cursor-pointer"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA box */}
          <div>
            <div className="bg-slate-800 rounded-2xl p-5 border border-slate-700">
              <p className="font-jakarta font-extrabold text-white text-base mb-1.5">
                ¿Listo para automatizar?
              </p>
              <p className="text-slate-400 text-xs mb-5 leading-relaxed">
                Agenda una demo gratis de 30 minutos. Sin compromiso.
              </p>
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cta block text-center py-3 text-sm text-white font-jakarta font-bold"
              >
                <span>Agenda tu Demo</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-xs font-medium text-center sm:text-left">
            © {new Date().getFullYear()} Contabilidad Online S.A.S. · NIT: 900.XXX.XXX-X · Todos los derechos reservados.
          </p>
          <p className="text-slate-500 text-xs font-medium">
            Hecho con amor en Colombia 🇨🇴
          </p>
        </div>
      </div>
    </footer>
  )
}

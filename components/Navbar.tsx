'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Zap } from 'lucide-react'

const WA_URL =
  'https://api.whatsapp.com/send/?phone=573024695956&text=Hola.+Quiero+informaci%C3%B3n+de+los+planes&type=phone_number&app_absent=0'

const links = [
  { label: 'Características', href: '#features' },
  { label: 'Cómo funciona', href: '#how-it-works' },
  { label: 'Precios', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <nav
          className={`flex items-center justify-between h-14 px-5 rounded-2xl transition-all duration-300 ${scrolled
            ? 'bg-white/90 backdrop-blur-xl border border-slate-200/80 shadow-sm'
            : 'bg-white/70 backdrop-blur-md border border-slate-200/50'
            }`}
        >
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group cursor-pointer">

            {/* Imagen que reemplaza al div con el ícono Zap */}
            <img
              src="/images/LogoCO.png"
              alt="Logo"
              className="w-14 h-14 object-contain rounded-xl shadow-orange-sm"
            />

            {/* El texto original se mantiene igual */}
            <span className="font-jakarta font-700 text-sm text-slate-900 leading-none tracking-tight">
              Contabilidad<span className="text-brand-orange">Online</span>
            </span>

          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-sm text-slate-500 hover:text-slate-900 hover:bg-slate-50 transition-all duration-150 font-medium px-3.5 py-2 rounded-xl cursor-pointer"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex btn-cta px-5 py-2.5 text-sm text-white cursor-pointer"
          >
            <span>Agenda tu Demo</span>
          </a>

          {/* Mobile hamburger */}
          <button
            className="md:hidden w-9 h-9 flex items-center justify-center rounded-xl text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer"
            onClick={() => setOpen(!open)}
            aria-label="Menú"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>

        {/* Mobile overlay */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${open ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
            }`}
        >
          <div className="bg-white/95 backdrop-blur-xl border border-slate-200/80 rounded-2xl mt-2 px-3 py-3 shadow-sm">
            <ul className="space-y-0.5 mb-3">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block py-2.5 px-4 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-all font-medium text-sm cursor-pointer"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cta block text-center py-3 text-white font-jakarta font-bold text-sm"
            >
              <span>Agenda tu Demo Gratis</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

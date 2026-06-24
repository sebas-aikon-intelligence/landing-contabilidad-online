'use client'

import { useEffect, useState } from 'react'
import { MessageCircle } from 'lucide-react'
import { useMetaEvent } from './useMetaEvent'

const WA_URL =
  'https://api.whatsapp.com/send/?phone=573024695956&text=Hola.+Quiero+informaci%C3%B3n+de+los+planes&type=phone_number&app_absent=0'

export default function StickyMobileCTA() {
  const [visible, setVisible] = useState(false)
  const { track } = useMetaEvent()

  useEffect(() => {
    const handler = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <div
      className={`fixed bottom-5 left-4 right-4 z-50 md:hidden transition-all duration-300 ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'
      }`}
    >
      <a
        href={WA_URL}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => track('Lead', { customData: { content_name: 'sticky_cta_mobile' } })}
        className="btn-cta flex items-center justify-center gap-2.5 py-4 text-white text-sm font-jakarta font-bold rounded-2xl shadow-orange-lg"
      >
        <span className="flex items-center gap-2.5">
          <MessageCircle size={18} />
          Agenda tu Demo Gratis — Solo 30 min
        </span>
      </a>
    </div>
  )
}

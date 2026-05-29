import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Automatiza tu Causación con IA | Contabilidad Online',
  description:
    'Conecta Siigo con la DIAN y automatiza la causación de facturas electrónicas usando inteligencia artificial. Ahorra horas de trabajo. Cero errores.',
  keywords: [
    'causación facturas electrónicas',
    'integración Siigo DIAN',
    'automatización contable Colombia',
    'software contable IA',
    'Contabilidad Online',
  ],
  openGraph: {
    title: 'Causa el doble. Trabaja la mitad. | Contabilidad Online',
    description:
      'Automatiza la causación de facturas electrónicas con IA. Conecta Siigo con la DIAN en minutos.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${jakarta.variable} bg-white text-slate-900 antialiased font-jakarta overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  )
}

import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import Script from 'next/script'
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
    <html lang="es" className="scroll-smooth overflow-x-hidden">
      <head>
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NHRKMLWQ');`,
          }}
        />
      </head>
      <body
        className={`${jakarta.variable} bg-white text-slate-900 antialiased font-jakarta overflow-x-hidden`}
      >
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NHRKMLWQ"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {children}
      </body>
    </html>
  )
}

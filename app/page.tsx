import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import SocialProofBar from '@/components/SocialProofBar'
import ProblemSection from '@/components/ProblemSection'
import HowItWorks from '@/components/HowItWorks'
import Features from '@/components/Features'
import SoftwareShowcase from '@/components/SoftwareShowcase'
import Stats from '@/components/Stats'
import Testimonials from '@/components/Testimonials'
import Pricing from '@/components/Pricing'
import FAQ from '@/components/FAQ'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'
import StickyMobileCTA from '@/components/StickyMobileCTA'
import ScrollRevealInit from '@/components/ScrollRevealInit'

export default function Home() {
  return (
    <>
      <ScrollRevealInit />
      <Navbar />
      <main>
        <Hero />
        <SocialProofBar />
        <ProblemSection />
        <HowItWorks />
        <Features />
        <SoftwareShowcase />
        <Stats />
        <Testimonials />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  )
}

import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import HeroSection from '@/components/home/HeroSection'
import AboutSection from '@/components/home/AboutSection'
import PortfolioSection from '@/components/home/PortfolioSection'
import ArticlesTeaser from '@/components/home/ArticlesTeaser'
import ContactSection from '@/components/home/ContactSection'

export const dynamic = 'force-static'

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <PortfolioSection />
        <ArticlesTeaser />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}

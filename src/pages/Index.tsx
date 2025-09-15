import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import TrustSection from '@/components/TrustSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import ThemeCustomizer from '@/components/ThemeCustomizer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <TrustSection />
        <ContactSection />
      </main>
      <Footer />
      <ThemeCustomizer />
    </div>
  );
};

export default Index;

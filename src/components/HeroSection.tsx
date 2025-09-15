import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Shield, MapPin } from 'lucide-react';
import heroImage from '@/assets/hero-property.jpg';

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Luxury Alberta short-term rental property"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          {/* Trust Badge */}
          <div className="animate-fade-in mb-6">
            <Badge variant="secondary" className="bg-white/10 text-white border-white/20 backdrop-blur-sm">
              <Shield className="h-4 w-4 mr-2" />
              Fully Licensed & Compliant
            </Badge>
          </div>

          {/* Main Headline */}
          <h1 className="animate-slide-up text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Professional Short-Term Rental Management in
            <span className="block text-accent"> Alberta</span>
          </h1>

          {/* Subheadline */}
          <p className="animate-slide-up text-xl text-white/90 mb-8 leading-relaxed max-w-2xl">
            We handle all regulatory requirements so you don't have to. Focus on your investments while we ensure full compliance with Alberta's evolving STR regulations.
          </p>

          {/* Key Benefits */}
          <div className="animate-slide-up mb-8 space-y-3">
            {[
              'Tourism Levy Management & Remittance',
              'Municipal License Applications & Renewals',
              'Fire Safety Plan Development & Compliance',
              '24/7 Property Management & Guest Support'
            ].map((benefit, index) => (
              <div key={index} className="flex items-center text-white">
                <CheckCircle className="h-5 w-5 mr-3 text-accent flex-shrink-0" />
                <span className="text-white/90">{benefit}</span>
              </div>
            ))}
          </div>

          {/* Service Areas */}
          <div className="animate-slide-up mb-8">
            <div className="flex items-center text-white/80 mb-3">
              <MapPin className="h-5 w-5 mr-2" />
              <span className="font-medium">Service Areas:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {['Calgary', 'Edmonton', 'Canmore', 'Jasper', 'Banff'].map((city) => (
                <Badge key={city} variant="outline" className="bg-white/10 text-white border-white/30 backdrop-blur-sm">
                  {city}
                </Badge>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="animate-slide-up flex flex-col sm:flex-row gap-4">
            <Button variant="cta" size="xl" className="min-w-[200px]">
              Get Free Consultation
            </Button>
            <Button variant="professional" size="xl" className="min-w-[200px]">
              Learn More
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
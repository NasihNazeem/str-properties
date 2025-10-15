import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Shield, MapPin } from "lucide-react";

const HeroSection = () => {
  const handleEmailClick = () => {
    window.location.href = "mailto:team@kravenproperties.com?subject=Free Consultation Request";
  };

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="/hero-background.jpg"
          alt="Alberta property investment"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          {/* Main Headline */}
          <h1 className="animate-slide-up text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Professional Property Consultants in
            <span className="block text-accent">Alberta</span>
          </h1>

          {/* Subheadline */}
          <p className="animate-slide-up text-xl text-white/90 mb-8 leading-relaxed max-w-2xl">
            {/* Navigate Alberta's property regulations with confidence. We provide
            expert guidance and support to help you stay compliant and maximize
            your property investment success. 
             */}
            Providing clear, dependable support to help you manage compliance,
            permitting, and strategic property planning.
          </p>

          {/* Key Benefits */}
          <div className="animate-slide-up mb-8 space-y-3">
            {[
              "Regulatory Compliance Strategy & Guidance",
              "License & Permit Application Support",
              "Property Safety Planning & Documentation",
              "Listing Strategy & Optimization",
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
              {["Calgary", "Edmonton", "Canmore", "Jasper", "Banff"].map(
                (city) => (
                  <Badge
                    key={city}
                    variant="outline"
                    className="bg-white/10 text-white border-white/30 backdrop-blur-sm"
                  >
                    {city}
                  </Badge>
                )
              )}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="animate-slide-up flex flex-col sm:flex-row gap-4">
            <Button
              variant="cta"
              size="xl"
              className="min-w-[200px]"
              onClick={handleEmailClick}
            >
              Get Free Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

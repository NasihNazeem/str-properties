import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  FileCheck,
  Users,
  Calculator,
  Shield,
  ClipboardList,
  Headphones,
  TrendingUp,
  Building,
  Network,
  Target
} from 'lucide-react';

const ServicesSection = () => {
  const complianceServices = [
    {
      icon: FileCheck,
      title: 'License & Permit Support',
      description: 'Expert guidance through municipal licensing, permits, and renewal processes'
    },
    {
      icon: Calculator,
      title: 'Regulatory Compliance Advisory',
      description: 'Strategic guidance for navigating Alberta property regulations and requirements'
    },
    {
      icon: Shield,
      title: 'Safety & Code Planning',
      description: 'Consultation on safety plans, building codes, and regulatory documentation'
    },
    {
      icon: ClipboardList,
      title: 'Insurance & Risk Advisory',
      description: 'Guidance on proper coverage, liability protection, and risk management'
    }
  ];

  const consultingServices = [
    {
      icon: Building,
      title: 'Property Investment Strategy',
      description: 'Strategic consultation for property acquisition, setup, and optimization'
    },
    {
      icon: Users,
      title: 'Property Operations Consulting',
      description: 'Expert advice on management best practices and operational efficiency'
    },
    {
      icon: Network,
      title: 'Service Provider Network',
      description: 'Vetted referrals to trusted contractors, plumbers, HVAC technicians, and marketing specialists'
    },
    {
      icon: Target,
      title: 'Listing Optimization Coaching',
      description: 'Personalized coaching on enhancing property listings, pricing strategy, and market positioning'
    },
    {
      icon: Headphones,
      title: 'Ongoing Advisory Support',
      description: 'Dedicated support for compliance, operational, and strategic questions'
    },
    {
      icon: TrendingUp,
      title: 'Performance & ROI Analysis',
      description: 'Insights and recommendations for maximizing property value and returns'
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold gradient-text mb-4">
            Expert Property Consulting Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From compliance strategy to investment optimization, we provide expert guidance
            to help you successfully navigate Alberta's property landscape.
          </p>
        </div>

        {/* Compliance Services */}
        <div className="mb-16">
          <div className="max-w-4xl mx-auto">
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-6 text-center">
                Compliance & Regulatory Consulting
              </h3>
              <p className="text-lg text-muted-foreground mb-8 text-center">
                Navigate Alberta's complex property regulations with expert guidance. We help you
                understand and meet all municipal requirements for successful property ownership and operation.
              </p>

              <div className="grid gap-4">
                {complianceServices.map((service, index) => (
                  <Card key={index} className="shadow-card transition-smooth hover:shadow-lg border-0">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="bg-primary/10 p-3 rounded-lg">
                          <service.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">{service.title}</h4>
                          <p className="text-sm text-muted-foreground">{service.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Consulting Services */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Strategic Property Consulting
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Maximize your success with expert guidance on investment strategy, operations,
              and optimization for your property portfolio.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {consultingServices.map((service, index) => (
              <Card key={index} className="shadow-card transition-smooth hover:shadow-lg hover:scale-105 border-0 bg-white">
                <CardContent className="p-6 text-center">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-3">{service.title}</h4>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="hero" size="xl">
            Explore All Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
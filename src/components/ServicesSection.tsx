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
  Building
} from 'lucide-react';
import complianceIcon from '@/assets/compliance-icon.jpg';

const ServicesSection = () => {
  const complianceServices = [
    {
      icon: FileCheck,
      title: 'Business License Management',
      description: 'Complete application and renewal process for all municipal requirements'
    },
    {
      icon: Calculator,
      title: 'Tourism Levy Automation',
      description: 'Automated calculation and remittance of Alberta\'s 4% tourism levy'
    },
    {
      icon: Shield,
      title: 'Fire Safety Compliance',
      description: 'Development and maintenance of required fire safety plans and documentation'
    },
    {
      icon: ClipboardList,
      title: 'Insurance Coordination',
      description: 'Ensuring proper coverage and compliance with municipal insurance requirements'
    }
  ];

  const managementServices = [
    {
      icon: Building,
      title: 'Listing Optimization',
      description: 'Professional listings across all major platforms with dynamic pricing'
    },
    {
      icon: Users,
      title: 'Guest Management',
      description: 'Complete guest communication, check-in/out, and experience management'
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      description: 'Round-the-clock support for both property owners and guests'
    },
    {
      icon: TrendingUp,
      title: 'Performance Analytics',
      description: 'Detailed reporting on bookings, revenue, and compliance status'
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold gradient-text mb-4">
            Complete STR Management Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From regulatory compliance to guest management, we provide comprehensive services 
            that let you focus on growing your short-term rental portfolio.
          </p>
        </div>

        {/* Compliance Services */}
        <div className="mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-6">
                Compliance & Regulatory Management
              </h3>
              <p className="text-lg text-muted-foreground mb-8">
                Navigate Alberta's complex STR regulations with confidence. We stay up-to-date 
                on all municipal requirements so your properties remain compliant.
              </p>
              
              <div className="grid gap-4">
                {complianceServices.map((service, index) => (
                  <Card key={index} className="shadow-card transition-smooth hover:shadow-lg border-0">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="bg-secondary/10 p-3 rounded-lg">
                          <service.icon className="h-6 w-6 text-secondary" />
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
            
            <div className="lg:pl-8">
              <img
                src={complianceIcon}
                alt="Compliance and regulatory management"
                className="w-full h-auto rounded-lg shadow-card"
              />
            </div>
          </div>
        </div>

        {/* Management Services */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Full-Service Property Management
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Maximize your revenue and minimize your stress with our comprehensive 
              property management services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {managementServices.map((service, index) => (
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
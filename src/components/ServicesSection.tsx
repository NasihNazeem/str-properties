import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
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
  Target,
} from "lucide-react";

const ServicesSection = () => {
  const complianceServices = [
    // {
    //   icon: FileCheck,
    //   title: "License Application Guidance",
    //   description:
    //     "Expert guidance through municipal licensing and renewal processes",
    // },
    // {
    //   icon: Calculator,
    //   title: "Regulatory Compliance Advisory",
    //   description:
    //     "Strategic guidance for navigating Alberta property regulations and requirements",
    // },
  ];

  const consultingServices = [
    {
      icon: FileCheck,
      title: "Licensing and Compliance Advisory",
      description:
        "Guidance through municipal licensing and renewal processes, while meeting property regulations and requirements",
    },
    {
      icon: Building,
      title: "Property Setup Strategy",
      description: "Strategic consultation for property setup and optimization",
    },
    {
      icon: Users,
      title: "Property Operations Consulting",
      description: "Consultation on best practices and operational efficiency",
    },
    {
      icon: Network,
      title: "Service Provider Network",
      description:
        "Network of trusted contractors and specialists delivering quality results while optimizing costs",
    },
    {
      icon: Target,
      title: "Listing Optimization Coaching",
      description:
        "Personalized coaching on enhancing property listings, pricing strategy, and market positioning",
    },
    {
      icon: Headphones,
      title: "24/7 Ongoing Advisory Support",
      description:
        "Dedicated support for compliance, operational, and strategic questions",
    },
    {
      icon: TrendingUp,
      title: "Performance & ROI Analysis",
      description:
        "Insights and recommendations for maximizing property value and returns",
    },
    {
      icon: Shield,
      title: "Safety & Code Compliance",
      description:
        "Consultation on safety plans, building codes, and regulatory documentation with 24/7 emergency support",
    },
    {
      icon: ClipboardList,
      title: "Insurance & Risk Advisory",
      description:
        "Guidance on proper coverage, liability protection, and risk management",
    },
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold gradient-text mb-4">
            Property Consulting Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From compliance strategy to investment optimization, we deliver
            professional guidance to help you optimize your property listings
            and improve operational efficiency in Alberta’s rental market.
          </p>
        </div>

        {/* Consulting Services */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Compliance & Strategic Property Consulting
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Maximize your success with knowledgeable guidance on property
              operations and optimization for your portfolio.
            </p>
            <br />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We also provide comprehensive support for municipal licensing and
              permits, strategic advisory on regulatory compliance, consultation
              on safety and building code planning, and expert advice on
              insurance and risk management.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {consultingServices.map((service, index) => (
              <Card
                key={index}
                className="shadow-card transition-smooth hover:shadow-lg hover:scale-105 border-0 bg-white"
              >
                <CardContent className="p-6 text-center">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-3">
                    {service.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

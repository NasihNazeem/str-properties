import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Award, 
  Users, 
  DollarSign, 
  CheckCircle, 
  Star,
  Building2
} from 'lucide-react';

const TrustSection = () => {
  const stats = [
    {
      icon: Building2,
      value: '50+',
      label: 'Properties Consulted',
      description: 'Successfully guided'
    },
    {
      icon: Users,
      value: '100%',
      label: 'Client Satisfaction',
      description: 'Rated excellent'
    },
    {
      icon: Award,
      value: '100%',
      label: 'Compliance Success',
      description: 'All clients approved'
    },
    {
      icon: DollarSign,
      value: '$200K+',
      label: 'Client Revenue Impact',
      description: 'Through optimization'
    }
  ];

  const certifications = [
    {
      title: 'Registered Business',
      subtitle: 'Alberta Corporate Registry',
      verified: true
    },
    {
      title: 'Tourism Industry Member',
      subtitle: 'Travel Alberta Network',
      verified: true
    },
    {
      title: 'Insured Consulting',
      subtitle: '$2M Liability Coverage',
      verified: true
    },
    {
      title: 'Fire Safety Expertise',
      subtitle: 'Alberta Fire Code Specialists',
      verified: true
    }
  ];

  return (
    <section className="py-20 gradient-hero">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="bg-white/20 text-white border-white/30 backdrop-blur-sm mb-4">
            <Star className="h-4 w-4 mr-2" />
            Trusted by Alberta Property Owners
          </Badge>
          <h2 className="text-4xl font-bold text-white mb-4">
            Your Success is Our Mission
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            We've built our reputation on delivering expert guidance that helps property owners
            achieve 100% regulatory compliance and maximize their short-term rental success.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-white/10 border-white/20 backdrop-blur-sm transition-smooth hover:bg-white/20">
              <CardContent className="p-6 text-center">
                <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-white/80" />
                </div>
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-white font-medium mb-2">{stat.label}</div>
                <div className="text-white/70 text-sm">{stat.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Registered & Insured Professionals
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="bg-white/10 border-white/20 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <div className="bg-white/20 p-2 rounded-full mt-1">
                      <CheckCircle className="h-5 w-5 text-white/80" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">{cert.title}</h4>
                      <p className="text-white/70 text-sm">{cert.subtitle}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Users, TrendingUp, Shield } from "lucide-react";

const About = () => {
  const scrollToContact = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    window.location.href = "/#contact";
  };

  const values = [
    {
      icon: Award,
      title: "20+ Years Experience",
      description: "Combined industry knowledge driving success",
    },
    {
      icon: Users,
      title: "Client-Focused",
      description: "Your interests are always front and center",
    },
    {
      icon: TrendingUp,
      title: "Market Expertise",
      description: "Current with trends and regulatory changes",
    },
    {
      icon: Shield,
      title: "Professional Standards",
      description: "Accountability and clear communication",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-primary to-primary/80 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[url('/hero-background.jpeg')] bg-cover bg-center"></div>
          </div>
          <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-slide-up">
              About Kraven Properties
            </h1>
            <p className="text-xl text-white/90 animate-slide-up">
              Locally owned. Professionally driven. Committed to your success.
            </p>
          </div>
        </section>

        {/* Main Content Section */}
        <section className="py-20 bg-background">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-foreground/90 leading-relaxed mb-6">
                Kraven Properties is a locally owned Calgary-based firm
                specializing in property consulting across the city and
                surrounding regions. Built on a foundation of experience,
                integrity, and insight, we bring over 15 years of combined
                industry knowledge to help clients make confident, informed
                property decisions.
              </p>

              <p className="text-lg text-foreground/90 leading-relaxed mb-6">
                Whether you're managing a portfolio, investing in real estate,
                or developing new projects, our team delivers customized
                strategies that align with your goals. We understand that every
                property and every client is different — so we take a hands-on,
                consultative approach to ensure your interests are always front
                and center.
              </p>

              <p className="text-lg text-foreground/90 leading-relaxed mb-6">
                Our consultants are seasoned professionals who stay current with
                industry developments, regulatory changes, and market trends. We
                place a strong emphasis on continued learning and professional
                development to ensure we're providing up-to-date,
                forward-thinking advice that drives results.
              </p>

              <p className="text-lg text-foreground/90 leading-relaxed mb-8">
                At Kraven Properties, we take pride in our work and stand by the
                quality of our service. Professionalism, accountability, and
                clear communication are at the heart of everything we do —
                because we know your property decisions matter.
              </p>
            </div>

            {/* Values Grid */}
            <div className="grid md:grid-cols-2 gap-6 mt-16 mb-12">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-card border border-border hover:shadow-lg transition-smooth"
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <value.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-foreground mb-2">
                        {value.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-12 text-center shadow-xl mt-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Work Together?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Let's discuss how Kraven Properties can help you achieve your
                property goals with expert guidance and personalized service.
              </p>
              <Button
                variant="cta"
                size="xl"
                className="bg-white text-primary hover:bg-white/90 shadow-lg"
                onClick={scrollToContact}
              >
                Get Your Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    properties: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent Successfully!",
        description:
          "We'll get back to you within 24 hours to discuss your property consulting needs.",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        properties: "",
        message: "",
      });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      detail: "(403) 555-0123",
      subdtail: "Consulting line",
    },
    {
      icon: Mail,
      title: "Email",
      detail: "team@kravenproperties.com",
      subdtail: "Responds quickly",
    },
    {
      icon: MapPin,
      title: "Office",
      detail: "Calgary",
      subdtail: "Serving all of Alberta",
    },
    {
      icon: Clock,
      title: "Business Hours",
      detail: "Mon-Fri: 8AM-6PM",
      subdtail: "Support available",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold gradient-text mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Let's discuss how we can help you maximize your property investment
            success while ensuring full regulatory compliance.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-card border-0">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground">
                  Get Your Free Consultation
                </CardTitle>
                <p className="text-muted-foreground">
                  Tell us about your properties and we'll provide a custom
                  consulting proposal.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="mt-1"
                        placeholder="(403) 555-0123"
                      />
                    </div>
                    <div>
                      <Label htmlFor="properties">Number of Properties</Label>
                      <Input
                        id="properties"
                        name="properties"
                        value={formData.properties}
                        onChange={handleInputChange}
                        className="mt-1"
                        placeholder="e.g., 1-3 properties"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message">
                      Tell us about your properties
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="mt-1"
                      rows={4}
                      placeholder="Location, property type, current challenges, etc."
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="hero"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="h-5 w-5 mr-2" />
                        Get Free Consultation
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div>
            <div className="space-y-6">
              <Card className="shadow-card border-0">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-foreground">
                    Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <info.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">
                          {info.title}
                        </h4>
                        <p className="text-foreground">{info.detail}</p>
                        <p className="text-sm text-muted-foreground">
                          {info.subdtail}
                        </p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="shadow-card border-0 bg-muted">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-foreground">
                    Expert Advisory
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Need immediate guidance on compliance or property matters?
                    Our expert consultants are here to help.
                  </p>
                  <Button variant="hero" className="w-full">
                    Call Emergency Line
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

import { Button } from "@/components/ui/button";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    "Licensing and Compliance Advisory",
    "Property Setup Strategy",
    "Property Operations Consulting",
    "Service Provider Network",
    "Listing Optimization Coaching",
    "24/7 Ongoing Advisory Support",
    "Performance & ROI Analysis",
    "Safety & Code Compliance",
    "Insurance & Risk Advisory",
  ];

  const resources = [
    "Calgary Property Requirements",
    "Edmonton Property Guide",
    "Regulatory Compliance Guide",
    "Safety Planning Checklist",
    "Owner Resources",
    "Regulatory Updates",
  ];

  const socialLinks = [
    // { icon: Facebook, href: "#", label: "Facebook" },
    // { icon: Twitter, href: "#", label: "Twitter" },
    // { icon: Linkedin, href: "#", label: "LinkedIn" },
    // { icon: Instagram, href: "#", label: "Instagram" },
  ];

  return (
    <footer className="bg-primary text-white">
      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col md:flex-row md:justify-between gap-12">
          {/* Company Info */}
          <div className="md:max-w-md">
            <div className="flex items-center space-x-3 mb-4">
              <img
                src="/kraven-logo-2.png"
                alt="Kraven Properties Logo"
                className="h-10 w-auto brightness-0 invert"
              />
              <h3 className="text-2xl font-bold">Kraven Properties</h3>
            </div>
            <p className="text-white/80 mb-6 leading-relaxed">
              Providing clear, dependable support to help you manage compliance,
              permitting, and strategic property planning.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-accent" />
                <span className="text-white/90">(587) 325-5253</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-accent" />
                <span className="text-white/90">team@kravenproperties.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-accent" />
                <span className="text-white/90">Calgary, AB</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="md:max-w-md">
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index} className="text-white/80">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          {/* <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 mb-6">
              {resources.map((resource, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-white/80 hover:text-accent transition-smooth"
                  >
                    {resource}
                  </a>
                </li>
              ))}
            </ul> */}

          {/* Newsletter Signup */}
          {/* <div>
              <h5 className="font-semibold mb-2">Stay Updated</h5>
              <p className="text-white/80 text-sm mb-3">
                Get regulatory updates and industry insights.
              </p>
              <Button variant="cta" size="sm" className="w-full">
                Subscribe to Newsletter
              </Button>
            </div>
          </div> */}
        </div>

        {/* Social Links */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-4 mb-4 md:mb-0">
              <div>© {currentYear} Kraven Properties. All rights reserved.</div>
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-white/80 hover:text-accent transition-smooth p-2"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>

            <div className="text-white/80 text-sm">
              Follow us for property insights and consulting tips
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      {/* <div className="border-t border-white/20 bg-primary/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-white/70"></div>
        </div>
      </div> */}
    </footer>
  );
};

export default Footer;

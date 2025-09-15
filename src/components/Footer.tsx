import { Button } from '@/components/ui/button';
import { 
  Phone, 
  Mail, 
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Services', href: '#services' },
    { name: 'About Us', href: '#about' },
    { name: 'Compliance Hub', href: '#compliance' },
    { name: 'Owner Portal', href: '#portal' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' }
  ];

  const services = [
    'License Management',
    'Tourism Levy Automation',
    'Fire Safety Compliance',
    'Property Management',
    '24/7 Guest Support',
    'Revenue Optimization'
  ];

  const resources = [
    'Calgary STR Requirements',
    'Edmonton STR Guide',
    'Tourism Levy Calculator',
    'Fire Safety Checklist',
    'Owner Resources',
    'Regulatory Updates'
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' }
  ];

  return (
    <footer className="bg-primary text-white">
      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-4">
              Alberta STR Management
            </h3>
            <p className="text-white/80 mb-6 leading-relaxed">
              Professional short-term rental management with complete regulatory compliance 
              for property owners across Alberta.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-accent" />
                <span className="text-white/90">(403) 555-0123</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-accent" />
                <span className="text-white/90">info@albertastrmanagement.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-accent" />
                <span className="text-white/90">Calgary & Edmonton, AB</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-white/80 hover:text-accent transition-smooth"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
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
          <div>
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
            </ul>

            {/* Newsletter Signup */}
            <div>
              <h5 className="font-semibold mb-2">Stay Updated</h5>
              <p className="text-white/80 text-sm mb-3">
                Get regulatory updates and industry insights.
              </p>
              <Button variant="cta" size="sm" className="w-full">
                Subscribe to Newsletter
              </Button>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-4 mb-4 md:mb-0">
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
              Follow us for the latest STR industry updates
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20 bg-primary/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-white/70">
            <div>
              © {currentYear} Alberta STR Management. All rights reserved.
            </div>
            <div className="flex space-x-6 mt-2 md:mt-0">
              <a href="#" className="hover:text-accent transition-smooth">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-accent transition-smooth">
                Terms of Service
              </a>
              <a href="#" className="hover:text-accent transition-smooth">
                Regulatory Compliance
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
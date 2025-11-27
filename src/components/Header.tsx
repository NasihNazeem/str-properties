import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Handle hash scrolling when component mounts or hash changes
  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      // Small delay to ensure the page has rendered
      setTimeout(() => {
        const element = document.getElementById(hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, [location]);

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    } else {
      // If not on home page, navigate to home page with hash
      navigate("/#contact");
    }
    setIsMenuOpen(false);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();

    // Check if it's a hash link (starts with # or ./#)
    if (href.startsWith("#") || href.startsWith("./#")) {
      const hash = href.replace("./", "");
      const sectionId = hash.substring(1);
      const element = document.getElementById(sectionId);

      if (element) {
        // Already on the page, just scroll
        element.scrollIntoView({ behavior: "smooth" });
      } else {
        // Navigate to home page with hash
        navigate(`/${hash}`);
      }
    } else {
      // Regular navigation
      navigate(href);
    }

    setIsMenuOpen(false);
  };

  const navigation = [
    { name: "Services", href: "./#services" },
    { name: "About", href: "/about" },
    { name: "Listings", href: "/listings" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "./#contact" },
  ];

  return (
    <header className="bg-white shadow-card sticky top-0 z-50">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a
            href="/"
            className="flex-shrink-0 flex items-center space-x-3 hover:opacity-80 transition-smooth"
          >
            <img
              src="/kraven-logo-2.png"
              alt="Kraven Properties Logo"
              className="h-10 w-auto"
            />
            <h1 className="text-2xl font-bold text-primary">
              Kraven Properties
            </h1>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-smooth"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center text-sm text-muted-foreground">
              <Phone className="h-4 w-4 mr-2" />
              <span>(587) 325-5253</span>
            </div>
            <Button variant="hero" size="sm" onClick={scrollToContact}>
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foreground hover:text-primary p-2"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium transition-smooth"
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4 pb-2">
                <Button
                  variant="hero"
                  className="w-full"
                  onClick={scrollToContact}
                >
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;

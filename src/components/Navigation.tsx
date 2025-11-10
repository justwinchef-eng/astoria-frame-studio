import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/services", label: "Services" },
    { path: "/gallery", label: "Gallery" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex flex-col">
            <span className="text-2xl font-bold font-playfair text-red-600 tracking-tight">
              Astoria Art & Framing
            </span>
            <span className="text-xs tracking-[0.3em] text-muted-foreground uppercase">
              New York
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm tracking-wider uppercase transition-colors ${
                  isActive(link.path)
                    ? "text-primary font-medium"
                    : "text-foreground/70 hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a href="tel:1-718-204-7555">
              <Button
                size="sm"
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                <Phone className="w-4 h-4 mr-2" />
                Call Us
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-6 space-y-4 border-t border-border">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block py-2 text-sm tracking-wider uppercase transition-colors ${
                  isActive(link.path)
                    ? "text-primary font-medium"
                    : "text-foreground/70 hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a href="tel:1-718-204-7555" className="block pt-4">
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                <Phone className="w-4 h-4 mr-2" />
                Call Us: 1-718-204-7555
              </Button>
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;

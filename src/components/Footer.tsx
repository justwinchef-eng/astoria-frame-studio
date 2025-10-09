const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold font-playfair mb-4">
                Astoria Art & Framing
              </h3>
              <p className="text-background/80 leading-relaxed">
                Premier custom framing and art gallery serving New York City since 1985.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-background/80">
                <li><a href="#services" className="hover:text-accent transition-smooth">Services</a></li>
                <li><a href="#gallery" className="hover:text-accent transition-smooth">Gallery</a></li>
                <li><a href="#contact" className="hover:text-accent transition-smooth">Contact</a></li>
                <li><a href="tel:1-718-204-7555" className="hover:text-accent transition-smooth">1-718-204-7555</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Location</h4>
              <p className="text-background/80 leading-relaxed">
                34-84 30th Avenue<br />
                Astoria, NY 11103<br />
                Minutes from Manhattan
              </p>
            </div>
          </div>
          
          <div className="border-t border-background/20 pt-8 text-center">
            <p className="text-background/70 text-sm">
              © {new Date().getFullYear()} Astoria Art & Custom Framing NYC. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { MapPin, Phone, Clock, Tag } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Map from "@/components/Map";
import WhatsAppButton from "@/components/WhatsAppButton";

const Contact = () => {
  return (
    <section className="py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Visit Us Today
          </h2>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            Located in the heart of Astoria, easily accessible from Manhattan, Brooklyn, 
            Queens, and New Jersey
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto mb-16">
          <Card className="bg-primary-foreground/10 border-primary-foreground/20 backdrop-blur-sm animate-fade-in">
            <CardContent className="p-8 text-center">
              <div className="w-14 h-14 bg-accent rounded-lg flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-7 h-7 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Location</h3>
              <p className="text-primary-foreground/90 leading-relaxed">
                34-84 30th Avenue<br />
                Between 34th & 35th Streets<br />
                Astoria, NY 11103
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-primary-foreground/10 border-primary-foreground/20 backdrop-blur-sm animate-fade-in" style={{ animationDelay: '100ms' }}>
            <CardContent className="p-8 text-center">
              <div className="w-14 h-14 bg-accent rounded-lg flex items-center justify-center mx-auto mb-4">
                <Phone className="w-7 h-7 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Call Us</h3>
              <a 
                href="tel:1-718-204-7555"
                className="text-primary-foreground/90 hover:text-accent transition-smooth text-lg font-medium"
              >
                1-718-204-7555
              </a>
              <p className="text-primary-foreground/80 mt-2 text-sm">
                Call for appointments or inquiries
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-primary-foreground/10 border-primary-foreground/20 backdrop-blur-sm animate-fade-in" style={{ animationDelay: '200ms' }}>
            <CardContent className="p-8 text-center">
              <div className="w-14 h-14 bg-accent rounded-lg flex items-center justify-center mx-auto mb-4">
                <Clock className="w-7 h-7 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Hours</h3>
              <p className="text-primary-foreground/90 leading-relaxed">
                Monday - Saturday<br />
                9:00 AM - 6:00 PM<br />
                Sunday: By Appointment
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-primary-foreground/10 border-primary-foreground/20 backdrop-blur-sm animate-fade-in" style={{ animationDelay: '300ms' }}>
            <CardContent className="p-8 text-center">
              <div className="w-14 h-14 bg-accent rounded-lg flex items-center justify-center mx-auto mb-4">
                <Tag className="w-7 h-7 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Special Offer</h3>
              <p className="text-primary-foreground/90 leading-relaxed">
                15% Off<br />
                All Custom Framing<br />
                <span className="text-accent font-medium">Mention this website!</span>
              </p>
            </CardContent>
          </Card>
        </div>
        
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Map Section */}
          <div className="animate-fade-in">
            <h3 className="text-3xl font-semibold mb-6 text-center">Find Us</h3>
            <Map />
          </div>

          {/* Contact Options */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-primary-foreground/10 border-primary-foreground/20 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4">Free Estimates Available</h3>
                <p className="text-primary-foreground/90 leading-relaxed mb-6">
                  Our pricing is based on the size and complexity of your project. We offer special 
                  discount rates for large orders. Visit us for a personalized consultation and 
                  free estimate on your custom framing needs.
                </p>
                <p className="text-primary-foreground/80 text-sm mb-6">
                  Serving Manhattan, Brooklyn, Queens, Bronx, and all of New York City
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="tel:1-718-204-7555" className="flex-1">
                    <button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-6 py-3 rounded-md shadow-elegant transition-smooth flex items-center justify-center gap-2">
                      <Phone className="w-5 h-5" />
                      Call Now
                    </button>
                  </a>
                  <WhatsAppButton className="flex-1" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-primary-foreground/10 border-primary-foreground/20 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4">Get Directions</h3>
                <div className="space-y-4 mb-6">
                  <div>
                    <p className="text-primary-foreground/70 text-sm mb-1">Address</p>
                    <p className="text-primary-foreground font-medium">
                      34-84 30th Avenue<br />
                      Between 34th & 35th Streets<br />
                      Astoria, NY 11103
                    </p>
                  </div>
                  <div>
                    <p className="text-primary-foreground/70 text-sm mb-1">Transit</p>
                    <p className="text-primary-foreground font-medium">
                      N/W Train to 30th Avenue<br />
                      Just minutes from Manhattan
                    </p>
                  </div>
                </div>
                <a 
                  href="https://www.google.com/maps/dir/?api=1&destination=40.7644,-73.9215"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full"
                >
                  <button className="w-full bg-primary-foreground/20 hover:bg-primary-foreground/30 border border-primary-foreground/40 text-primary-foreground font-semibold px-6 py-3 rounded-md transition-smooth flex items-center justify-center gap-2">
                    <MapPin className="w-5 h-5" />
                    Open in Google Maps
                  </button>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

import { MapPin, Phone, Clock, Tag } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

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
        
        <div className="max-w-4xl mx-auto">
          <Card className="bg-primary-foreground/10 border-primary-foreground/20 backdrop-blur-sm">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-4 text-center">Free Estimates Available</h3>
              <p className="text-primary-foreground/90 text-center leading-relaxed mb-6">
                Our pricing is based on the size and complexity of your project. We offer special 
                discount rates for large orders. Visit us for a personalized consultation and 
                free estimate on your custom framing needs.
              </p>
              <div className="text-center">
                <p className="text-primary-foreground/80 text-sm">
                  Serving Manhattan, Brooklyn, Queens, Bronx, and all of New York City
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;

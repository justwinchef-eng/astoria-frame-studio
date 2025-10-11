import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { MapPin, Phone, Clock, Tag } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Map from "@/components/Map";
import WhatsAppButton from "@/components/WhatsAppButton";

const ContactPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm tracking-[0.3em] text-muted-foreground uppercase mb-4">
            Get In Touch
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-playfair text-primary mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed">
            Visit our gallery or reach out for a free estimate on your custom framing project
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold font-playfair mb-3">Location</h3>
                <p className="text-foreground/70 leading-relaxed">
                  34-04 30th Ave.<br />
                  Astoria, NY 11103
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold font-playfair mb-3">Call Us</h3>
                <a 
                  href="tel:1-718-204-7555"
                  className="text-primary hover:text-primary/80 transition-smooth text-lg font-medium"
                >
                  1-718-204-7555
                </a>
                <p className="text-foreground/70 mt-2 text-sm">
                  Call for appointments or inquiries
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold font-playfair mb-3">Hours</h3>
                <p className="text-foreground/70 leading-relaxed">
                  Monday - Saturday<br />
                  9:00 AM - 6:00 PM<br />
                  Sunday: By Appointment
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Tag className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold font-playfair mb-3">Special Offer</h3>
                <p className="text-foreground/70 leading-relaxed">
                  15% Off<br />
                  All Custom Framing<br />
                  <span className="text-primary font-medium">Mention this website!</span>
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold font-playfair text-primary mb-6">
                Find Us
              </h2>
              <p className="text-lg text-foreground/70">
                Located in the heart of Astoria, easily accessible from Manhattan, Brooklyn, Queens, and New Jersey
              </p>
            </div>
            <Map />
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold font-playfair text-primary mb-4">
                  Free Estimates Available
                </h3>
                <p className="text-foreground/80 leading-relaxed mb-6">
                  Our pricing is based on the size and complexity of your project. We offer special 
                  discount rates for large orders. Visit us for a personalized consultation and 
                  free estimate on your custom framing needs.
                </p>
                <p className="text-foreground/70 text-sm mb-6">
                  Serving Manhattan, Brooklyn, Queens, Bronx, and all of New York City
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="tel:1-718-204-7555" className="flex-1">
                    <button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 py-3 rounded-md shadow-lg transition-smooth flex items-center justify-center gap-2">
                      <Phone className="w-5 h-5" />
                      Call Now
                    </button>
                  </a>
                  <WhatsAppButton className="flex-1" />
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold font-playfair text-primary mb-4">
                  Get Directions
                </h3>
                <div className="space-y-4 mb-6">
                  <div>
                    <p className="text-foreground/70 text-sm mb-1">Address</p>
                    <p className="text-foreground font-medium">
                      34-04 30th Ave.<br />
                      Astoria, NY 11103
                    </p>
                  </div>
                  <div>
                    <p className="text-foreground/70 text-sm mb-1">Transit</p>
                    <p className="text-foreground font-medium">
                      N/W Train to 30th Avenue<br />
                      Just minutes from Manhattan
                    </p>
                  </div>
                </div>
                <a 
                  href="https://www.google.com/maps/dir/?api=1&destination=34-04+30th+Ave+Astoria+NY+11103"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full"
                >
                  <button className="w-full bg-muted hover:bg-muted/80 border border-border text-foreground font-semibold px-6 py-3 rounded-md transition-smooth flex items-center justify-center gap-2">
                    <MapPin className="w-5 h-5" />
                    Open in Google Maps
                  </button>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;

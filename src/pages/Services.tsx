import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PromoPopup from "@/components/PromoPopup";
import { Frame, Palette, Award, Sparkles, Image, Maximize2, Home, Calendar, Briefcase, Star, Layers, Box } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Link } from "react-router-dom";
import Autoplay from "embla-carousel-autoplay";
import framesSelection1 from "@/assets/frames-selection-1.jpg";
import framesSelection2 from "@/assets/frames-selection-2.jpg";
import corporateFraming1 from "@/assets/corporate-framing-1.jpg";
import corporateFraming2 from "@/assets/corporate-framing-2.jpg";
import corporateFraming3 from "@/assets/corporate-framing-3.jpg";
import corporateFraming4 from "@/assets/corporate-framing-4.jpg";
import corporateFraming5 from "@/assets/corporate-framing-5.jpg";
import corporateFraming6 from "@/assets/corporate-framing-6.jpg";
import corporateFraming7 from "@/assets/corporate-framing-7.jpg";
import corporateFraming8 from "@/assets/corporate-framing-8.jpg";
import corporateFraming9 from "@/assets/corporate-framing-9.jpg";
import corporateFraming10 from "@/assets/corporate-framing-10.jpg";
import customMirror1 from "@/assets/custom-framed-mirrors-1.jpg";
import customMirror2 from "@/assets/custom-framed-mirrors-2.jpg";
import consultationService from "@/assets/consultation-service.jpg";

const services = [
  {
    icon: Frame,
    title: "Custom Framing",
    description: "Expert framing performed on-site with over 1,500 mouldings, fillets and liners to choose from. Free estimates on all projects.",
    details: "All custom framing projects are executed on the premises by our expert framers. Our pricing is based on the size and complexity of your project.",
    path: "/services/custom-framing"
  },
  {
    icon: Sparkles,
    title: "Archival Matting",
    description: "Museum-quality archival materials and special matting techniques.",
    details: "We exclusively use state-of-the-art archival materials to preserve your artwork for generations.",
    path: "/services/archival-matting"
  },
  {
    icon: Image,
    title: "Diploma & Certificate Framing",
    description: "Professional framing for diplomas, certificates, Ketubahs, photographs, and posters.",
    details: "Perfect presentation for your important documents and achievements.",
    path: "/services/diploma-framing"
  },
  {
    icon: Layers,
    title: "Large Custom Framing",
    description: "Specialized services for oversized artwork and large-scale framing projects.",
    details: "We handle projects of any size with precision and care.",
    path: "/services/large-framing"
  },
  {
    icon: Box,
    title: "Custom Shadowboxes",
    description: "Custom-made shadowboxes with spacer separation for inlaid projects and memorabilia.",
    details: "Perfect for three-dimensional objects, medals, and special keepsakes.",
    path: "/services/shadowboxes"
  },
  {
    icon: Maximize2,
    title: "Beveled Mirrors",
    description: "Custom beveled mirrors designed and crafted to your specifications.",
    details: "High-quality mirror work for residential and commercial spaces.",
    path: "/services/beveled-mirrors"
  },
  {
    icon: Star,
    title: "Needlepoint & Fabric",
    description: "Expert needlepoint framing with fabric wrapping and French lining options.",
    details: "Specialized techniques to showcase textile art beautifully.",
    path: "/services/needlepoint-framing"
  },
  {
    icon: Calendar,
    title: "Same Day Service",
    description: "Same day custom framing service available for urgent projects.",
    details: "When you need it fast, we deliver without compromising quality.",
    path: "/services/same-day-service"
  },
  {
    icon: Briefcase,
    title: "Corporate Services",
    description: "Professional on-site consultation and corporate framing services.",
    details: "Serving Marriott Hotels, NBC Studios, and major NYC corporations with comprehensive framing solutions.",
    path: "/services/corporate-services"
  }
];

const Services = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm tracking-[0.3em] text-muted-foreground uppercase mb-4">
            Expert Craftsmanship
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-playfair text-primary mb-6">
            Our Services
          </h1>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed">
            One-on-one assistance prioritizing your personal style and vision. 
            All projects executed on the premises by our expert craftsmen.
          </p>
        </div>
      </section>

      {/* Bringing Your Vision to Life */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="rounded-lg overflow-hidden">
                <img 
                  src={consultationService} 
                  alt="Personal consultation and framing service" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div>
                <h2 className="text-4xl md:text-5xl font-bold font-playfair text-primary mb-6">
                  Bringing Your Vision to Life
                </h2>
                <div className="space-y-4 text-lg text-foreground/80 leading-relaxed">
                  <p>
                    Our dedicated team works closely with you to understand your unique vision 
                    and bring it to life with expert craftsmanship and personalized attention.
                  </p>
                  <p>
                    From selecting the perfect frame to choosing archival materials, we guide 
                    you through every step of the creative process to ensure your artwork is 
                    beautifully presented and protected for generations.
                  </p>
                  <p>
                    Experience the difference of one-on-one consultation where your style, 
                    preferences, and space are our top priorities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <Link to={service.path} key={index}>
                <Card 
                  className="border-0 bg-card hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer h-full"
                >
                  <CardContent className="p-8">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                      <service.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold font-playfair text-primary mb-3">
                      {service.title}
                    </h3>
                    <p className="text-foreground/80 leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <p className="text-sm text-foreground/60 leading-relaxed">
                      {service.details}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Framing Gallery */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-sm tracking-[0.3em] text-muted-foreground uppercase mb-4">
                Professional Solutions
              </p>
              <h2 className="text-4xl md:text-5xl font-bold font-playfair text-primary mb-6">
                Corporate Framing
              </h2>
              <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                Serving major corporations including Marriott Hotels, NBC Studios, and NYC's finest businesses
              </p>
            </div>
            
            <Carousel
              plugins={[
                Autoplay({
                  delay: 3000,
                }),
              ]}
              className="w-full"
            >
              <CarouselContent>
                {[
                  corporateFraming1,
                  corporateFraming2,
                  corporateFraming3,
                  corporateFraming4,
                  corporateFraming5,
                  corporateFraming6,
                  corporateFraming7,
                  corporateFraming8,
                  corporateFraming9,
                  corporateFraming10,
                ].map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="rounded-lg overflow-hidden">
                      <img
                        src={image}
                        alt={`Corporate framing example ${index + 1}`}
                        className="w-full h-[600px] object-cover"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-4" />
              <CarouselNext className="right-4" />
            </Carousel>
          </div>
        </div>
      </section>

      {/* Custom Framed Mirrors */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-sm tracking-[0.3em] text-muted-foreground uppercase mb-4">
                Elegant Reflections
              </p>
              <h2 className="text-4xl md:text-5xl font-bold font-playfair text-primary mb-6">
                Custom Framed Mirrors
              </h2>
              <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                Transform any space with our beautifully crafted custom framed mirrors, designed to your specifications
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="rounded-lg overflow-hidden">
                <img 
                  src={customMirror1} 
                  alt="Custom framed decorative mirror" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="rounded-lg overflow-hidden">
                <img 
                  src={customMirror2} 
                  alt="Ornate custom mirror frame detail" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Frame Selection Gallery */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-sm tracking-[0.3em] text-muted-foreground uppercase mb-4">
                Over 1,500 Options
              </p>
              <h2 className="text-4xl md:text-5xl font-bold font-playfair text-primary mb-6">
                Frame Selection
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="rounded-lg overflow-hidden">
                <img 
                  src={framesSelection1} 
                  alt="Custom frame selection" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="rounded-lg overflow-hidden">
                <img 
                  src={framesSelection2} 
                  alt="Frame mouldings collection" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-playfair mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Visit us for a free estimate and personalized consultation. 
            We extend special discount rates for large orders.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:1-718-204-7555">
              <button className="px-8 py-4 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold rounded-md transition-smooth">
                Call: 1-718-204-7555
              </button>
            </a>
            <a href="/contact">
              <button className="px-8 py-4 bg-primary-foreground/10 hover:bg-primary-foreground/20 border border-primary-foreground/40 text-primary-foreground font-semibold rounded-md transition-smooth">
                Visit Us
              </button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <PromoPopup />
    </div>
  );
};

export default Services;

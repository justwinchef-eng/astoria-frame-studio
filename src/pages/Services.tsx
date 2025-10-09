import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Frame, Palette, Award, Sparkles, Image, Maximize2, Home, Calendar, Briefcase, Star, Layers, Box } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import framesSelection1 from "@/assets/frames-selection-1.jpg";
import framesSelection2 from "@/assets/frames-selection-2.jpg";

const services = [
  {
    icon: Frame,
    title: "Custom Framing",
    description: "Expert framing performed on-site with over 1,500 mouldings, fillets and liners to choose from. Free estimates on all projects.",
    details: "All custom framing projects are executed on the premises by our expert framers. Our pricing is based on the size and complexity of your project."
  },
  {
    icon: Award,
    title: "Frame Restoration",
    description: "Professional restoration of antique and damaged frames to their original beauty.",
    details: "We carefully restore antique frames using traditional techniques and materials to preserve their historical integrity."
  },
  {
    icon: Palette,
    title: "Oil Restoration",
    description: "Expert restoration services for oil paintings and valuable artwork.",
    details: "Our specialists handle delicate restoration work on oil paintings, preserving the artist's original vision."
  },
  {
    icon: Sparkles,
    title: "Archival Matting",
    description: "Museum-quality archival materials and special matting techniques.",
    details: "We exclusively use state-of-the-art archival materials to preserve your artwork for generations."
  },
  {
    icon: Image,
    title: "Diploma & Certificate Framing",
    description: "Professional framing for diplomas, certificates, Ketubahs, photographs, and posters.",
    details: "Perfect presentation for your important documents and achievements."
  },
  {
    icon: Layers,
    title: "Large Custom Framing",
    description: "Specialized services for oversized artwork and large-scale framing projects.",
    details: "We handle projects of any size with precision and care."
  },
  {
    icon: Box,
    title: "Custom Shadowboxes",
    description: "Custom-made shadowboxes with spacer separation for inlaid projects and memorabilia.",
    details: "Perfect for three-dimensional objects, medals, and special keepsakes."
  },
  {
    icon: Maximize2,
    title: "Beveled Mirrors",
    description: "Custom beveled mirrors designed and crafted to your specifications.",
    details: "High-quality mirror work for residential and commercial spaces."
  },
  {
    icon: Star,
    title: "Needlepoint & Fabric",
    description: "Expert needlepoint framing with fabric wrapping and French lining options.",
    details: "Specialized techniques to showcase textile art beautifully."
  },
  {
    icon: Home,
    title: "Antique Furniture Restoration",
    description: "Professional restoration services for antique furniture and ornamental plaster mouldings.",
    details: "Complete restoration services including architectural plaster mouldings for interior design."
  },
  {
    icon: Calendar,
    title: "Same Day Service",
    description: "Same day custom framing service available for urgent projects.",
    details: "When you need it fast, we deliver without compromising quality."
  },
  {
    icon: Briefcase,
    title: "Corporate Services",
    description: "Professional on-site consultation and corporate framing services.",
    details: "Serving Marriott Hotels, NBC Studios, and major NYC corporations with comprehensive framing solutions."
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

      {/* Services Grid */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <Card 
                key={index}
                className="border-0 bg-card hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
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
            ))}
          </div>
        </div>
      </section>

      {/* Frame Selection Gallery */}
      <section className="py-20 bg-background">
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
    </div>
  );
};

export default Services;

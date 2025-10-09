import { Frame, Palette, Award, Sparkles, Image, Maximize2, Home, Calendar, Briefcase, Star, Layers, Box } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import framesSelection1 from "@/assets/frames-selection-1.jpg";
import framesSelection2 from "@/assets/frames-selection-2.jpg";

const services = [
  {
    icon: Frame,
    title: "Custom Framing",
    description: "Expert framing performed on-site with over 1,500 mouldings, fillets and liners to choose from. Free estimates on all projects."
  },
  {
    icon: Award,
    title: "Frame Restoration",
    description: "Professional restoration of antique and damaged frames to their original beauty."
  },
  {
    icon: Palette,
    title: "Oil Restoration",
    description: "Expert restoration services for oil paintings and valuable artwork."
  },
  {
    icon: Sparkles,
    title: "Archival Matting & Special Matting",
    description: "Museum-quality archival materials and special matting techniques to preserve your artwork for generations."
  },
  {
    icon: Image,
    title: "Diploma & Certificate Framing",
    description: "Professional framing for diplomas, certificates, Ketubahs, photographs, and posters."
  },
  {
    icon: Layers,
    title: "Large Custom Framing",
    description: "Specialized services for oversized artwork and large-scale framing projects."
  },
  {
    icon: Box,
    title: "Custom Shadowboxes",
    description: "Custom-made shadowboxes with spacer separation for inlaid projects and memorabilia."
  },
  {
    icon: Maximize2,
    title: "Beveled Mirrors",
    description: "Custom beveled mirrors designed and crafted to your specifications."
  },
  {
    icon: Star,
    title: "Needlepoint & Fabric",
    description: "Expert needlepoint framing with fabric wrapping and French lining options."
  },
  {
    icon: Home,
    title: "Antique Furniture Restoration",
    description: "Professional restoration services for antique furniture and ornamental plaster mouldings."
  },
  {
    icon: Calendar,
    title: "Same Day Service",
    description: "Same day custom framing service available for urgent projects."
  },
  {
    icon: Briefcase,
    title: "Home & Office Consultation",
    description: "Professional on-site consultation services at your home or office."
  }
];

const Services = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Our Services
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            One-on-one assistance prioritizing your personal style and vision
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Link to="/services" key={index}>
              <Card 
                className="border-0 shadow-elegant hover:shadow-xl transition-smooth hover:-translate-y-1 bg-card animate-fade-in cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-gradient-elegant rounded-lg flex items-center justify-center mb-6">
                    <service.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-semibold text-primary mb-3">
                    {service.title}
                  </h3>
                  <p className="text-foreground/70 leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
        
        <div className="mt-16">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="rounded-lg overflow-hidden shadow-elegant">
                <img 
                  src={framesSelection1} 
                  alt="Custom frame selection" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-elegant">
                <img 
                  src={framesSelection2} 
                  alt="Frame mouldings collection" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="text-center p-8 bg-card rounded-lg shadow-elegant">
              <h3 className="text-2xl font-semibold text-primary mb-4">
                Additional Specialty Services
              </h3>
              <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                Ornamental and architectural plaster mouldings for interior design, fillet enhancement, 
                fabric wrapping, French lining, and spacer separation for inlaid projects.
              </p>
              <div className="grid md:grid-cols-3 gap-6 text-left">
                <div className="p-4 bg-muted/50 rounded-lg">
                  <p className="font-semibold text-primary mb-2">📦 Corporate Framing</p>
                  <p className="text-sm text-foreground/70">Serving Marriott Hotels, NBC Studios, and major NYC corporations</p>
                </div>
                <div className="p-4 bg-muted/50 rounded-lg">
                  <p className="font-semibold text-primary mb-2">🎨 Custom Artwork Orders</p>
                  <p className="text-sm text-foreground/70">We can order specific artwork from our catalogs and websites</p>
                </div>
                <div className="p-4 bg-muted/50 rounded-lg">
                  <p className="font-semibold text-primary mb-2">📞 Call for Consultation</p>
                  <p className="text-sm text-foreground/70">Contact Claude at 1-718-204-7555 for estimates</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

import { Frame, Palette, Award, Sparkles, Image, Maximize2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Frame,
    title: "Custom Framing",
    description: "Expert framing performed on-site by master craftsmen. Free estimates on all projects."
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
    title: "Archival Matting",
    description: "Museum-quality archival materials to preserve your artwork for generations."
  },
  {
    icon: Image,
    title: "Diploma & Certificate Framing",
    description: "Professional framing for diplomas, certificates, photographs, and needlepoint."
  },
  {
    icon: Maximize2,
    title: "Specialty Services",
    description: "Beveled mirrors, shadowboxes, fabric wrapping, French lining, and architectural mouldings."
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
            <Card 
              key={index}
              className="border-0 shadow-elegant hover:shadow-xl transition-smooth hover:-translate-y-1 bg-card animate-fade-in"
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
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-block p-8 bg-card rounded-lg shadow-elegant max-w-3xl">
            <h3 className="text-2xl font-semibold text-primary mb-4">
              Additional Services Include:
            </h3>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Antique furniture restoration, ornamental and architectural plaster mouldings for 
              interior design, special matting, fillet enhancement, and much more. Visit us for 
              a personalized consultation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

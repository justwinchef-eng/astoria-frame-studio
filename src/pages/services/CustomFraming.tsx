import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const CustomFraming = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <Link to="/services">
            <Button variant="ghost" className="mb-8">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Services
            </Button>
          </Link>

          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Custom Framing
            </h1>
            
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-foreground/80 text-lg leading-relaxed mb-6">
                Our custom framing service is performed entirely on-site with over 1,500 mouldings, 
                fillets, and liners to choose from. We provide free estimates on all projects and 
                work one-on-one with you to bring your vision to life.
              </p>
              
              <h2 className="text-3xl font-semibold text-primary mt-8 mb-4">
                What We Offer
              </h2>
              <ul className="text-foreground/80 space-y-2 mb-6">
                <li>Over 1,500 frame moulding options</li>
                <li>On-site custom framing services</li>
                <li>Free estimates and consultations</li>
                <li>Expert guidance on frame selection</li>
                <li>Personalized design assistance</li>
                <li>Quality craftsmanship guaranteed</li>
              </ul>

              <h2 className="text-3xl font-semibold text-primary mt-8 mb-4">
                The Process
              </h2>
              <p className="text-foreground/80 text-lg leading-relaxed mb-6">
                Our framing process begins with a consultation where we discuss your vision, 
                style preferences, and budget. We'll help you select the perfect frame, matting, 
                and glass options to enhance and protect your artwork. Every project receives 
                the same attention to detail and quality craftsmanship, whether it's a family 
                photo or a valuable piece of art.
              </p>
            </div>

            <div className="bg-muted/50 rounded-lg p-8 mb-12">
              <h3 className="text-2xl font-semibold text-primary mb-4">
                Gallery
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-muted rounded-lg aspect-square flex items-center justify-center">
                  <p className="text-muted-foreground">Image placeholder 1</p>
                </div>
                <div className="bg-muted rounded-lg aspect-square flex items-center justify-center">
                  <p className="text-muted-foreground">Image placeholder 2</p>
                </div>
                <div className="bg-muted rounded-lg aspect-square flex items-center justify-center">
                  <p className="text-muted-foreground">Image placeholder 3</p>
                </div>
                <div className="bg-muted rounded-lg aspect-square flex items-center justify-center">
                  <p className="text-muted-foreground">Image placeholder 4</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-semibold text-primary mb-4">
                Ready to Get Started?
              </h3>
              <p className="text-foreground/80 mb-6">
                Contact us today for a free estimate on your custom framing project.
              </p>
              <Link to="/contact">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CustomFraming;
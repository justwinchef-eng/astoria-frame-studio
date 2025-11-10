import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const CorporateServices = () => {
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
              Corporate & Consultation Services
            </h1>
            
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-foreground/80 text-lg leading-relaxed mb-6">
                Professional on-site consultation services at your home or office. We've worked 
                with major corporations including Marriott Hotels, NBC Studios, and numerous NYC 
                businesses to provide comprehensive framing and art solutions.
              </p>
              
              <h2 className="text-3xl font-semibold text-primary mt-8 mb-4">
                Services for Businesses
              </h2>
              <ul className="text-foreground/80 space-y-2 mb-6">
                <li>On-site consultations at your location</li>
                <li>Large-scale corporate framing projects</li>
                <li>Custom artwork procurement and framing</li>
                <li>Hotel and hospitality framing solutions</li>
                <li>Office art curation and installation</li>
                <li>Volume pricing for multiple pieces</li>
              </ul>

              <h2 className="text-3xl font-semibold text-primary mt-8 mb-4">
                Our Approach
              </h2>
              <p className="text-foreground/80 text-lg leading-relaxed mb-6">
                We understand that corporate projects require professionalism, reliability, and 
                efficiency. Our team works with you to understand your vision and budget, then 
                provides comprehensive solutions from artwork selection to final installation. 
                We've successfully completed projects for hotels, studios, corporate offices, 
                and other commercial spaces throughout New York City.
              </p>

              <div className="bg-accent/20 border border-accent rounded-lg p-6 my-8">
                <p className="text-foreground/90 font-semibold mb-2">
                  🏢 Trusted by Major Corporations
                </p>
                <p className="text-foreground/80">
                  We've provided framing services for Marriott Hotels, NBC Studios, and numerous 
                  other businesses throughout NYC.
                </p>
              </div>
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
                Contact us to schedule a consultation for your corporate framing needs.
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

export default CorporateServices;
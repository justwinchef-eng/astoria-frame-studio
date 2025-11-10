import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const LargeFraming = () => {
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
              Large Custom Framing
            </h1>
            
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-foreground/80 text-lg leading-relaxed mb-6">
                Specialized services for oversized artwork and large-scale framing projects. 
                We have the expertise and equipment to handle even the largest pieces, ensuring 
                professional results that protect and showcase your investment.
              </p>
              
              <h2 className="text-3xl font-semibold text-primary mt-8 mb-4">
                What We Offer
              </h2>
              <ul className="text-foreground/80 space-y-2 mb-6">
                <li>Framing for oversized artwork and prints</li>
                <li>Large canvas stretching and mounting</li>
                <li>Custom solutions for unusual dimensions</li>
                <li>Heavy-duty hanging hardware installation</li>
                <li>On-site consultation and installation services</li>
                <li>Professional handling of valuable large pieces</li>
              </ul>

              <h2 className="text-3xl font-semibold text-primary mt-8 mb-4">
                Our Expertise
              </h2>
              <p className="text-foreground/80 text-lg leading-relaxed mb-6">
                Large-scale framing requires specialized knowledge and equipment. Our experienced 
                team can handle pieces of any size, from oversized paintings to architectural 
                drawings and commercial displays. We ensure proper support, protection, and 
                presentation for your large artwork, with options for both residential and 
                commercial installations.
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
                Contact us to discuss your large-scale framing project.
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

export default LargeFraming;
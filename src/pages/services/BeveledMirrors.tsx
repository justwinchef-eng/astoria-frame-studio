import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const BeveledMirrors = () => {
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
              Beveled Mirrors
            </h1>
            
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-foreground/80 text-lg leading-relaxed mb-6">
                Custom beveled mirrors designed and crafted to your specifications. Our mirrors 
                add elegance and light to any space, with beveled edges that create beautiful 
                reflections and visual interest.
              </p>
              
              <h2 className="text-3xl font-semibold text-primary mt-8 mb-4">
                What We Offer
              </h2>
              <ul className="text-foreground/80 space-y-2 mb-6">
                <li>Custom-sized beveled mirrors</li>
                <li>Various bevel widths available</li>
                <li>Multiple frame style options</li>
                <li>Frameless beveled mirror options</li>
                <li>Custom shapes and designs</li>
                <li>Professional installation services</li>
              </ul>

              <h2 className="text-3xl font-semibold text-primary mt-8 mb-4">
                Design Possibilities
              </h2>
              <p className="text-foreground/80 text-lg leading-relaxed mb-6">
                Whether you need a statement piece for your entryway, a functional mirror for 
                your bathroom, or an elegant accent for your living space, we can create the 
                perfect mirror for you. Choose from various frame styles or opt for a frameless 
                beveled mirror that showcases the beautiful edge work. We can also create custom 
                shapes and sizes to fit any space perfectly.
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
                Contact us to discuss your custom mirror needs.
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

export default BeveledMirrors;
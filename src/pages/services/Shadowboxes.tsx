import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Shadowboxes = () => {
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
              Custom Shadowboxes
            </h1>
            
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-foreground/80 text-lg leading-relaxed mb-6">
                Custom-made shadowboxes with spacer separation for inlaid projects and memorabilia. 
                Perfect for displaying three-dimensional objects, medals, collectibles, and cherished 
                keepsakes in a professional and protective manner.
              </p>
              
              <h2 className="text-3xl font-semibold text-primary mt-8 mb-4">
                What We Can Frame
              </h2>
              <ul className="text-foreground/80 space-y-2 mb-6">
                <li>Military medals and insignia</li>
                <li>Sports jerseys and memorabilia</li>
                <li>Wedding and special occasion keepsakes</li>
                <li>Collectibles and artifacts</li>
                <li>Baby memorabilia</li>
                <li>Three-dimensional artwork</li>
              </ul>

              <h2 className="text-3xl font-semibold text-primary mt-8 mb-4">
                Custom Design Process
              </h2>
              <p className="text-foreground/80 text-lg leading-relaxed mb-6">
                Every shadowbox is custom-designed to perfectly fit your items and tell your story. 
                We work with you to determine the optimal depth, layout, and mounting methods for 
                your objects. Our shadowboxes feature UV-protective glass and archival materials 
                to keep your treasured items safe from damage while creating a stunning display.
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
                Bring in your items for a custom shadowbox consultation.
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

export default Shadowboxes;
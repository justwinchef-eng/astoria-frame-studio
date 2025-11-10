import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const DiplomaFraming = () => {
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
              Diploma & Certificate Framing
            </h1>
            
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-foreground/80 text-lg leading-relaxed mb-6">
                Professional framing for diplomas, certificates, Ketubahs, photographs, and posters. 
                We understand the importance of preserving your achievements and special documents, 
                and we provide elegant framing solutions that showcase them beautifully.
              </p>
              
              <h2 className="text-3xl font-semibold text-primary mt-8 mb-4">
                What We Frame
              </h2>
              <ul className="text-foreground/80 space-y-2 mb-6">
                <li>College and university diplomas</li>
                <li>Professional certificates and licenses</li>
                <li>Ketubahs and religious documents</li>
                <li>Award certificates</li>
                <li>Photographs and prints</li>
                <li>Posters and artwork</li>
              </ul>

              <h2 className="text-3xl font-semibold text-primary mt-8 mb-4">
                Our Approach
              </h2>
              <p className="text-foreground/80 text-lg leading-relaxed mb-6">
                We offer a wide selection of frame styles and matting options to complement your 
                document. Whether you prefer traditional elegance or modern simplicity, we'll help 
                you create a presentation that reflects the significance of your achievement. All 
                documents are handled with care and framed using archival materials to ensure 
                long-term preservation.
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
                Bring in your diploma or certificate for a free framing consultation.
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

export default DiplomaFraming;
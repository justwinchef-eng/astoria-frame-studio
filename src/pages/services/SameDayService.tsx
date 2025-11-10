import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const SameDayService = () => {
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
              Same Day Service
            </h1>
            
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-foreground/80 text-lg leading-relaxed mb-6">
                Same day custom framing service available for urgent projects. When you need 
                your framing completed quickly without compromising on quality, our same day 
                service ensures your project is ready when you need it.
              </p>
              
              <h2 className="text-3xl font-semibold text-primary mt-8 mb-4">
                What We Offer
              </h2>
              <ul className="text-foreground/80 space-y-2 mb-6">
                <li>Fast turnaround on custom framing</li>
                <li>Same quality craftsmanship as standard service</li>
                <li>Available for most framing projects</li>
                <li>Convenient for last-minute gifts</li>
                <li>Perfect for urgent business needs</li>
                <li>Morning drop-off, afternoon pickup options</li>
              </ul>

              <h2 className="text-3xl font-semibold text-primary mt-8 mb-4">
                How It Works
              </h2>
              <p className="text-foreground/80 text-lg leading-relaxed mb-6">
                Our same day service is perfect for when you're working with tight deadlines. 
                Simply bring in your item in the morning, and we'll have it ready for pickup 
                the same day. While availability may vary depending on project complexity and 
                current workload, we do our best to accommodate urgent requests. Call ahead to 
                ensure same day service is available for your specific project.
              </p>

              <div className="bg-accent/20 border border-accent rounded-lg p-6 my-8">
                <p className="text-foreground/90 font-semibold mb-2">
                  📞 Call Ahead for Same Day Service
                </p>
                <p className="text-foreground/80">
                  Contact us at 1-718-204-7555 to confirm same day service availability 
                  for your project before visiting.
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
                Call us to check same day service availability for your project.
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

export default SameDayService;
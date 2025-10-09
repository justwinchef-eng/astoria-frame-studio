import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gabrielPerici from "@/assets/gabriel-perici-art.jpg";
import galleryInterior from "@/assets/gallery-interior.jpg";
import artistGabriel from "@/assets/artist-gabriel-perici.jpg";
import galleryArtPiece from "@/assets/gallery-art-piece.jpg";

const GalleryPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm tracking-[0.3em] text-muted-foreground uppercase mb-4">
            Fine Art Collection
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-playfair text-primary mb-6">
            Art Gallery
          </h1>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed">
            Explore our curated collection of oil paintings, giclées, lithographs, 
            posters, and photographs from talented artists.
          </p>
        </div>
      </section>

      {/* Featured Artist */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-sm tracking-[0.3em] text-muted-foreground uppercase mb-4">
                Featured Artist
              </p>
              <h2 className="text-4xl md:text-5xl font-bold font-playfair text-primary mb-6">
                Gabriel Perici
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <img 
                  src={artistGabriel} 
                  alt="Gabriel Perici painting in his studio" 
                  className="rounded-lg w-full h-auto"
                />
                <img 
                  src={gabrielPerici} 
                  alt="Gabriel Perici original painting" 
                  className="rounded-lg w-full h-auto"
                />
              </div>
              
              <div className="space-y-6">
                <p className="text-lg text-foreground/80 leading-relaxed">
                  Gabriel Perici was born on August 31st, 1965 in New York City, 
                  but spent most of his youth in Italy. He received his degree from 
                  Rome University for contemporary painting and restoration.
                </p>
                <p className="text-lg text-foreground/80 leading-relaxed">
                  He returned to the United States and attended Miami Dade University. 
                  Inspired by the vibrant art scene, his work captures emotion and 
                  movement through stunning detail and masterful technique.
                </p>
                <p className="text-lg text-foreground/80 leading-relaxed">
                  Stop by our gallery anytime to explore his beautiful collection of 
                  original paintings and prints.
                </p>
                <Button 
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground mt-4"
                >
                  View Collection
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold font-playfair text-primary mb-6">
                Our Collection
              </h2>
              <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                Each piece carefully selected to bring beauty and inspiration to your space
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-8">
                <div className="rounded-lg overflow-hidden">
                  <img 
                    src={gallery1} 
                    alt="Framed artwork in gallery" 
                    className="w-full h-auto hover:scale-105 transition-transform duration-500"
                  />
                  <div className="mt-4">
                    <h3 className="text-xl font-semibold font-playfair text-primary">Custom Framed Art</h3>
                    <p className="text-foreground/70">Professional framing enhances every piece</p>
                  </div>
                </div>
                
                <div className="rounded-lg overflow-hidden">
                  <img 
                    src={galleryInterior} 
                    alt="Gallery interior" 
                    className="w-full h-auto hover:scale-105 transition-transform duration-500"
                  />
                  <div className="mt-4">
                    <h3 className="text-xl font-semibold font-playfair text-primary">Gallery Space</h3>
                    <p className="text-foreground/70">Visit our elegant showroom</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-8 md:mt-16">
                <div className="rounded-lg overflow-hidden">
                  <img 
                    src={gallery2} 
                    alt="Custom framed art pieces" 
                    className="w-full h-auto hover:scale-105 transition-transform duration-500"
                  />
                  <div className="mt-4">
                    <h3 className="text-xl font-semibold font-playfair text-primary">Fine Art Selection</h3>
                    <p className="text-foreground/70">Oil paintings, giclées, and lithographs</p>
                  </div>
                </div>
                
                <div className="rounded-lg overflow-hidden">
                  <img 
                    src={galleryArtPiece} 
                    alt="Beautifully framed artwork" 
                    className="w-full h-auto hover:scale-105 transition-transform duration-500"
                  />
                  <div className="mt-4">
                    <h3 className="text-xl font-semibold font-playfair text-primary">Expert Framing</h3>
                    <p className="text-foreground/70">Showcasing art with precision and care</p>
                  </div>
                </div>
                
                <div className="p-8 bg-accent/10 rounded-lg border border-accent/20">
                  <h3 className="text-2xl font-semibold font-playfair text-primary mb-4">
                    Custom Orders Available
                  </h3>
                  <p className="text-foreground/80 leading-relaxed mb-6">
                    We can order specific artwork from our extensive catalogs and partner galleries. 
                    Let us help you find the perfect piece for your space.
                  </p>
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    Inquire About Custom Orders
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visit CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-playfair mb-6">
            Visit Our Gallery Today
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            34-84 30th Avenue, Astoria, NY 11103<br />
            Minutes from Manhattan
          </p>
          <Button 
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6"
          >
            Get Directions
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GalleryPage;

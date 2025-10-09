import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gabrielPerici from "@/assets/gabriel-perici-art.jpg";
import galleryInterior from "@/assets/gallery-interior.jpg";
import artistGabriel from "@/assets/artist-gabriel-perici.jpg";
import galleryArtPiece from "@/assets/gallery-art-piece.jpg";
import storefront from "@/assets/custom-framing-storefront.png";
import galleryWallDisplay from "@/assets/gallery-wall-display.jpg";

const GalleryPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center">
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
          </div>
        </div>
      </section>

      {/* Featured Artist */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-sm tracking-[0.3em] text-muted-foreground uppercase mb-4 animate-fade-in">
                Featured Artist
              </p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-playfair text-primary mb-4 animate-fade-in">
                Gabriel Perici
              </h2>
              <div className="w-24 h-1 bg-primary/20 mx-auto"></div>
            </div>
            
            <div className="grid lg:grid-cols-5 gap-8 items-start">
              <div className="lg:col-span-2 space-y-6">
                <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <img 
                    src={artistGabriel} 
                    alt="Gabriel Perici painting in his studio" 
                    className="w-full h-auto hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <img 
                    src={gabrielPerici} 
                    alt="Gabriel Perici original painting" 
                    className="w-full h-auto hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              
              <div className="lg:col-span-3 space-y-8">
                <div className="bg-background/60 backdrop-blur-sm rounded-xl p-8 shadow-md border border-border/50">
                  <h3 className="text-2xl font-semibold font-playfair text-primary mb-6">About the Artist</h3>
                  <div className="space-y-4">
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
                  </div>
                </div>
                
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="bg-background/60 backdrop-blur-sm rounded-xl p-6 border border-border/50">
                    <h4 className="text-lg font-semibold font-playfair text-primary mb-2">Education</h4>
                    <p className="text-foreground/70">Rome University - Contemporary Painting & Restoration</p>
                  </div>
                  <div className="bg-background/60 backdrop-blur-sm rounded-xl p-6 border border-border/50">
                    <h4 className="text-lg font-semibold font-playfair text-primary mb-2">Style</h4>
                    <p className="text-foreground/70">Contemporary with Classical Technique</p>
                  </div>
                </div>
                
                <Button 
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground w-full sm:w-auto px-12"
                >
                  View Collection
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-sm tracking-[0.3em] text-muted-foreground uppercase mb-4">
                Browse Our Work
              </p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-playfair text-primary mb-6">
                Our Collection
              </h2>
              <p className="text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
                Each piece carefully selected to bring beauty and inspiration to your space
              </p>
              <div className="w-24 h-1 bg-primary/20 mx-auto mt-6"></div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="group relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="overflow-hidden">
                  <img 
                    src={gallery1} 
                    alt="Framed artwork in gallery" 
                    className="w-full h-[400px] object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-2xl font-semibold font-playfair mb-2">Custom Framed Art</h3>
                  <p className="text-white/90">Professional framing enhances every piece</p>
                </div>
              </div>
              
              <div className="group relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="overflow-hidden">
                  <img 
                    src={galleryInterior} 
                    alt="Gallery interior" 
                    className="w-full h-[400px] object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-2xl font-semibold font-playfair mb-2">Gallery Space</h3>
                  <p className="text-white/90">Visit our elegant showroom</p>
                </div>
              </div>
              
              <div className="group relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="overflow-hidden">
                  <img 
                    src={gallery2} 
                    alt="Custom framed art pieces" 
                    className="w-full h-[400px] object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-2xl font-semibold font-playfair mb-2">Fine Art Selection</h3>
                  <p className="text-white/90">Oil paintings, giclées, and lithographs</p>
                </div>
              </div>
              
              <div className="group relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="overflow-hidden">
                  <img 
                    src={galleryArtPiece} 
                    alt="Beautifully framed artwork" 
                    className="w-full h-[400px] object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-2xl font-semibold font-playfair mb-2">Expert Framing</h3>
                  <p className="text-white/90">Showcasing art with precision and care</p>
                </div>
              </div>
              
              <div className="group relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="overflow-hidden">
                  <img 
                    src={galleryWallDisplay} 
                    alt="Art gallery wall display with diverse framed artwork" 
                    className="w-full h-[400px] object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-2xl font-semibold font-playfair mb-2">Curated Collection</h3>
                  <p className="text-white/90">Diverse selection for every taste</p>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl p-8 border-2 border-primary/20 hover:border-primary/40 transition-colors duration-300 flex flex-col justify-center">
                <h3 className="text-3xl font-semibold font-playfair text-primary mb-4">
                  Custom Orders Available
                </h3>
                <p className="text-foreground/80 leading-relaxed mb-6 text-lg">
                  We can order specific artwork from our extensive catalogs and partner galleries. 
                  Let us help you find the perfect piece for your space.
                </p>
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground w-full">
                  Inquire About Custom Orders
                </Button>
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

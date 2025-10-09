import { Button } from "@/components/ui/button";
import galleryInterior from "@/assets/gallery-interior.jpg";

const Gallery = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                Art Gallery
              </h2>
              <div className="space-y-4 text-lg text-foreground/80 leading-relaxed mb-8">
                <p>
                  Explore our curated collection of fine art including oil paintings, giclées, 
                  lithographs, posters, and photographs. Our gallery showcases both classic and 
                  contemporary works from talented artists.
                </p>
                <p>
                  We proudly feature the beautiful paintings of <span className="font-semibold text-primary">Gabriel Perici</span>, 
                  whose work captures the essence of artistic expression with stunning detail and emotion.
                </p>
                <p>
                  Each piece in our collection is carefully selected to bring beauty and inspiration 
                  to your home or office. Visit our gallery to discover artwork that speaks to you.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg"
                  className="gradient-elegant text-primary-foreground hover:opacity-90 font-semibold px-8 shadow-elegant transition-smooth"
                >
                  Visit Our Gallery
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-8 transition-smooth"
                >
                  Artist Collections
                </Button>
              </div>
            </div>
            
            <div className="animate-fade-in">
              <img 
                src={galleryInterior} 
                alt="Art gallery interior" 
                className="rounded-lg shadow-elegant w-full h-auto"
              />
              <div className="mt-6 p-6 bg-gradient-gold rounded-lg text-accent-foreground">
                <p className="text-lg font-semibold mb-2">
                  🎨 Featured Artist: Gabriel Perici
                </p>
                <p className="text-base">
                  Stop by anytime to explore the stunning collection of original paintings and prints.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;

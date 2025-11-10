import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import artistPhoto from "@/assets/artist-gabriel-perici.jpg";
import artwork1 from "@/assets/gabriel-perici-art.jpg";
import artwork2 from "@/assets/gallery-art-piece.jpg";
import artwork3 from "@/assets/gallery-1.jpg";
import artwork4 from "@/assets/gallery-2.jpg";

const Artists = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Featured Artists
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover exceptional artwork from talented artists. Each piece tells a unique story and brings beauty to any space.
          </p>
        </div>
      </section>

      {/* Featured Artist */}
      <section className="py-12 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <img
                src={artistPhoto}
                alt="Gabriel Perici"
                className="w-full h-[500px] object-cover rounded-lg shadow-elegant"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Gabriel Perici
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Gabriel Perici is a contemporary artist whose work explores the intersection of 
                light, color, and emotion. With over 15 years of experience, his pieces have been 
                featured in galleries across New York and beyond.
              </p>
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-foreground">Education</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>BFA in Fine Arts, School of Visual Arts</li>
                  <li>MFA in Painting, Pratt Institute</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-foreground">Style</h3>
                <p className="text-muted-foreground">
                  Known for vibrant abstract compositions and masterful use of light and shadow. 
                  Each piece invites viewers into a contemplative space where color and form dance together.
                </p>
              </div>
              <Button size="lg" className="mt-4">
                View Full Collection
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Artwork Gallery */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Featured Artwork
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { img: artwork1, title: "Abstract Expression", artist: "Gabriel Perici" },
              { img: artwork2, title: "Urban Dreams", artist: "Gabriel Perici" },
              { img: artwork3, title: "Color Symphony", artist: "Gabriel Perici" },
              { img: artwork4, title: "Light Studies", artist: "Gabriel Perici" },
              { img: artwork1, title: "Reflections", artist: "Gabriel Perici" },
              { img: artwork2, title: "Evening Glow", artist: "Gabriel Perici" },
            ].map((item, index) => (
              <Card key={index} className="overflow-hidden group cursor-pointer hover:shadow-elegant transition-smooth">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.artist}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 px-4 bg-primary/5">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold text-foreground">
            Interested in a Piece?
          </h2>
          <p className="text-muted-foreground text-lg">
            Visit our gallery to see these works in person or contact us to discuss custom commissions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <a href="/contact">Contact Us</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="/gallery">Visit Gallery</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Artists;

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import frameDetail from "@/assets/frame-detail.jpg";
import storefrontImage from "@/assets/custom-framing-storefront.png";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm tracking-[0.3em] text-muted-foreground uppercase mb-4">
            Since 2000
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-playfair text-primary mb-6">
            About Us
          </h1>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed">
            Four decades of excellence in custom framing and fine art
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold font-playfair text-primary">
                Our Story
              </h2>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Welcome to <span className="font-semibold text-primary">Astoria Art & Framing</span>, 
                established in 2000 in the heart of Astoria, just minutes from Manhattan, New York City. 
                For over two decades, we have been committed to providing each and every client with 
                personal, creative, and valuable solutions to their framing and decorating needs.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Our family-owned business has built its reputation on exceptional craftsmanship, 
                attention to detail, and unwavering dedication to customer satisfaction. What started 
                as a small frame shop has grown into one of the most trusted names in custom framing 
                throughout New York City.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                We take pride in serving a diverse clientele, from individual art collectors to major 
                corporations including Marriott Hotels, NBC Studios, and prominent NYC institutions.
              </p>
            </div>
            
            <div className="rounded-lg overflow-hidden">
              <img 
                src={storefrontImage} 
                alt="Astoria Art & Framing storefront" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Craftsmanship Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="rounded-lg overflow-hidden order-2 md:order-1">
              <img 
                src={frameDetail} 
                alt="Custom frame detail" 
                className="w-full h-auto"
              />
            </div>
            
            <div className="space-y-6 order-1 md:order-2">
              <h2 className="text-4xl md:text-5xl font-bold font-playfair text-primary">
                Expert Craftsmanship
              </h2>
              <p className="text-lg text-foreground/80 leading-relaxed">
                All our custom framing is performed on-site by master craftsmen with decades 
                of combined experience. We believe that exceptional framing is both an art 
                and a science, requiring technical skill and creative vision.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Our team will work closely with you to select the perfect frame from our 
                collection of over 1,500 mouldings, ensuring that your artwork is enhanced 
                and protected for generations to come.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                We exclusively use museum-quality archival materials and professional framing 
                procedures to preserve the integrity and value of your precious artwork, 
                photographs, and memorabilia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold font-playfair text-primary mb-6">
              Our Values
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <span className="text-3xl">✨</span>
              </div>
              <h3 className="text-xl font-semibold font-playfair text-primary">
                Quality
              </h3>
              <p className="text-foreground/70 leading-relaxed">
                We never compromise on materials or craftsmanship. Every project receives 
                the same meticulous attention to detail.
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <span className="text-3xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold font-playfair text-primary">
                Service
              </h3>
              <p className="text-foreground/70 leading-relaxed">
                One-on-one consultations ensure your vision is realized. We're here to 
                guide you through every decision.
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <span className="text-3xl">💎</span>
              </div>
              <h3 className="text-xl font-semibold font-playfair text-primary">
                Value
              </h3>
              <p className="text-foreground/70 leading-relaxed">
                Fair pricing, free estimates, and special discounts for large orders make 
                quality framing accessible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-playfair mb-6">
            Visit Us Today
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Experience the difference that four decades of expertise makes. 
            Stop by for a free consultation and estimate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:1-718-204-7555">
              <button className="px-8 py-4 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold rounded-md transition-smooth">
                Call: 1-718-204-7555
              </button>
            </a>
            <a href="/contact">
              <button className="px-8 py-4 bg-primary-foreground/10 hover:bg-primary-foreground/20 border border-primary-foreground/40 text-primary-foreground font-semibold rounded-md transition-smooth">
                Get Directions
              </button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;

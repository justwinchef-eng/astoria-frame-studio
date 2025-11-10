import frameDetail from "@/assets/frame-detail.jpg";
import ownerPhoto from "@/assets/owner-photo.jpg";

const About = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="order-2 md:order-1 animate-fade-in space-y-6">
            <img 
              src={ownerPhoto} 
              alt="Meet the owner of Astoria Art & Framing" 
              className="rounded-lg shadow-elegant w-full h-auto"
            />
            <img 
              src={frameDetail} 
              alt="Custom frame detail" 
              className="rounded-lg shadow-elegant w-full h-auto"
            />
          </div>
          
          <div className="order-1 md:order-2 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Expert Craftsmanship Since 2000
            </h2>
            <div className="space-y-4 text-lg text-foreground/80 leading-relaxed">
              <p>
                Welcome to <span className="font-semibold text-primary">Astoria Art & Framing</span>, 
                located in the heart of Astoria, minutes from Manhattan, New York City. We are committed 
                to providing each and every client with personal, creative, and valuable solutions to 
                their framing and decorating needs.
              </p>
              <p>
                We offer expert and original custom framing performed on the premises by our master 
                craftsmen. We will be delighted to assist you in choosing the proper frame, ensuring 
                that the final choice will enhance your art piece and fit perfectly in the environment 
                where it will be displayed.
              </p>
              <p>
                Visit us and discover our large selection of oil paintings, giclées, lithographs, 
                posters, and photographs. In our gallery, we exclusively use state-of-the-art archival 
                materials and professional framing procedures to preserve your artwork for generations.
              </p>
            </div>
            
            <div className="mt-8 p-6 bg-muted rounded-lg border-l-4 border-accent">
              <p className="text-lg font-medium text-primary">
                "Stop by anytime and explore the beautiful paintings of Gabriel Perici"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

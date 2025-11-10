import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import { Link } from "react-router-dom";
import storefrontExterior from "@/assets/storefront-exterior.jpg";
import heroImage from "@/assets/hero-framing.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import galleryInterior from "@/assets/gallery-interior.jpg";
import frameDetail from "@/assets/frame-detail.jpg";
import gabrielPericiArt from "@/assets/gabriel-perici-art.jpg";

const Hero = () => {
  const plugin = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: false })
  );

  const slides = [
    {
      image: storefrontExterior,
      title: "Astoria Art & Custom Framing",
      subtitle: "Quality Custom Framing & Fine Art Since 1986"
    },
    {
      image: heroImage,
      title: "Custom Framing Excellence",
      subtitle: "Preserving Your Memories with Artistry"
    },
    {
      image: gallery1,
      title: "Fine Art Gallery",
      subtitle: "Curated Collections & Local Artists"
    },
    {
      image: galleryInterior,
      title: "Expert Restoration",
      subtitle: "Bringing Art Back to Life"
    },
    {
      image: frameDetail,
      title: "Handcrafted Frames",
      subtitle: "Quality Materials & Craftsmanship"
    },
    {
      image: gabrielPericiArt,
      title: "Featured Artists",
      subtitle: "Gabriel Perici & More"
    }
  ];

  return (
    <section className="relative h-screen">
      <Carousel
        plugins={[plugin.current]}
        className="w-full h-full"
        opts={{
          loop: true,
        }}
      >
        <CarouselContent className="h-screen">
          {slides.map((slide, index) => (
            <CarouselItem key={index} className="relative h-screen">
              <div className="absolute inset-0">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
              </div>
              
              <div className="relative h-full flex items-center justify-center">
                <div className="text-center text-white px-4 max-w-4xl mx-auto animate-fade-in">
                  <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                    {slide.title}
                  </h1>
                  <p className="text-xl md:text-2xl mb-8 text-white/90">
                    {slide.subtitle}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link to="/gallery">
                      <Button size="lg" variant="outline" className="text-lg px-8 bg-white/10 text-white border-white/20 hover:bg-white/20">
                        View Gallery
                      </Button>
                    </Link>
                    <a 
                      href="https://www.google.com/maps/dir/?api=1&destination=34-04+30th+Ave+Astoria+NY+11103"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button size="lg" variant="outline" className="text-lg px-8 bg-white/10 text-white border-white/20 hover:bg-white/20">
                        Get Directions
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4" />
        <CarouselNext className="right-4" />
      </Carousel>
    </section>
  );
};

export default Hero;

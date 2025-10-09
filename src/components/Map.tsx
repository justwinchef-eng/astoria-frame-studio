import { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const Map = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const marker = useRef<mapboxgl.Marker | null>(null);
  const [mapboxToken, setMapboxToken] = useState<string>('');
  const [tokenInput, setTokenInput] = useState<string>('');
  const [isTokenSet, setIsTokenSet] = useState(false);
  const { toast } = useToast();

  // Astoria Art & Framing location
  const storeLat = 40.7644;
  const storeLng = -73.9215;

  const initializeMap = (token: string) => {
    if (!mapContainer.current) return;

    try {
      mapboxgl.accessToken = token;
      
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v12',
        center: [storeLng, storeLat],
        zoom: 15,
      });

      // Add navigation controls
      map.current.addControl(
        new mapboxgl.NavigationControl(),
        'top-right'
      );

      // Add marker for the store
      marker.current = new mapboxgl.Marker({ color: '#8B1538' })
        .setLngLat([storeLng, storeLat])
        .setPopup(
          new mapboxgl.Popup({ offset: 25 })
            .setHTML(
              '<h3 style="font-weight: bold; margin-bottom: 8px;">Astoria Art & Custom Framing</h3>' +
              '<p style="margin: 4px 0;">34-84 30th Avenue</p>' +
              '<p style="margin: 4px 0;">Astoria, NY 11103</p>' +
              '<p style="margin: 8px 0;"><a href="tel:1-718-204-7555" style="color: #8B1538; font-weight: 600;">1-718-204-7555</a></p>' +
              '<a href="https://www.google.com/maps/dir/?api=1&destination=40.7644,-73.9215" target="_blank" style="color: #8B1538; text-decoration: underline;">Get Directions</a>'
            )
        )
        .addTo(map.current);

      // Show popup by default
      marker.current.togglePopup();

      setIsTokenSet(true);
      localStorage.setItem('mapbox_token', token);
      
      toast({
        title: "Map Loaded",
        description: "Mapbox map initialized successfully",
      });
    } catch (error) {
      console.error('Error initializing map:', error);
      toast({
        title: "Error",
        description: "Failed to initialize map. Please check your Mapbox token.",
        variant: "destructive",
      });
    }
  };

  useEffect(() => {
    // Check if token exists in localStorage
    const savedToken = localStorage.getItem('mapbox_token');
    if (savedToken) {
      setMapboxToken(savedToken);
      initializeMap(savedToken);
    }

    return () => {
      map.current?.remove();
    };
  }, []);

  const handleSetToken = (e: React.FormEvent) => {
    e.preventDefault();
    if (tokenInput.trim()) {
      setMapboxToken(tokenInput);
      initializeMap(tokenInput);
    }
  };

  if (!isTokenSet) {
    return (
      <div className="w-full h-[500px] flex items-center justify-center bg-muted rounded-lg">
        <div className="max-w-md p-8 bg-card rounded-lg shadow-elegant">
          <h3 className="text-xl font-semibold text-primary mb-4">
            Mapbox Token Required
          </h3>
          <p className="text-sm text-foreground/70 mb-4">
            To display the interactive map, please enter your Mapbox public token. 
            Get your free token at{' '}
            <a 
              href="https://mapbox.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary underline"
            >
              mapbox.com
            </a>
          </p>
          <form onSubmit={handleSetToken} className="space-y-4">
            <Input
              type="text"
              value={tokenInput}
              onChange={(e) => setTokenInput(e.target.value)}
              placeholder="pk.eyJ1..."
              className="w-full"
            />
            <Button type="submit" className="w-full gradient-elegant text-primary-foreground">
              Load Map
            </Button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-[500px] rounded-lg overflow-hidden shadow-elegant">
      <div ref={mapContainer} className="absolute inset-0" />
    </div>
  );
};

export default Map;

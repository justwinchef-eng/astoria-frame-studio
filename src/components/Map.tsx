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
  const MAPBOX_TOKEN = 'pk.eyJ1Ijoic3dlcnZlc2t6IiwiYSI6ImNtY2loOXY2aDA1bjEya3ExNnpmc3c2dWkifQ.W5VDbnQW7s8gDD61BAn7Eg';
  const { toast } = useToast();

  // Astoria Art & Framing location - 34-04 30th Ave., Astoria, NY 11103
  const storeLat = 40.7661;
  const storeLng = -73.9187;

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
              '<p style="margin: 4px 0;">34-04 30th Ave.</p>' +
              '<p style="margin: 4px 0;">Astoria, NY 11103</p>' +
              '<p style="margin: 8px 0;"><a href="tel:1-718-204-7555" style="color: #8B1538; font-weight: 600;">1-718-204-7555</a></p>' +
              '<a href="https://www.google.com/maps/dir/?api=1&destination=40.7661,-73.9187" target="_blank" style="color: #8B1538; text-decoration: underline;">Get Directions</a>'
            )
        )
        .addTo(map.current);

      // Show popup by default
      marker.current.togglePopup();

    } catch (error) {
      console.error('Error initializing map:', error);
      toast({
        title: "Error",
        description: "Failed to initialize map. Please check your connection.",
        variant: "destructive",
      });
    }
  };

  useEffect(() => {
    // Initialize map with the public token
    initializeMap(MAPBOX_TOKEN);

    return () => {
      map.current?.remove();
    };
  }, []);

  return (
    <div className="relative w-full h-[500px] rounded-lg overflow-hidden shadow-elegant">
      <div ref={mapContainer} className="absolute inset-0" />
    </div>
  );
};

export default Map;

import { useState, useEffect } from "react";
import { X, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";

const PromoPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosed, setIsClosed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setIsClosed(true);
  };

  if (isClosed) return null;

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ${
        isVisible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
      }`}
    >
      <div className="bg-gradient-to-br from-primary to-primary/90 text-primary-foreground rounded-lg shadow-2xl p-6 max-w-sm relative animate-pulse-subtle">
        <Button
          variant="ghost"
          size="sm"
          onClick={handleClose}
          className="absolute top-2 right-2 text-primary-foreground hover:bg-primary-foreground/20"
        >
          <X className="w-4 h-4" />
        </Button>
        
        <div className="flex items-start gap-3">
          <div className="bg-primary-foreground/20 rounded-full p-2 mt-1">
            <Tag className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-bold text-lg mb-2">
              Special Offer!
            </h3>
            <p className="text-primary-foreground/90 mb-3">
              Use code <span className="font-bold text-xl bg-primary-foreground/20 px-2 py-1 rounded">WINTER</span>
            </p>
            <p className="text-sm text-primary-foreground/80">
              Get 15% off at checkout in store
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromoPopup;

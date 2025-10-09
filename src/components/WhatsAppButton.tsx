import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface WhatsAppButtonProps {
  phoneNumber?: string;
  message?: string;
  className?: string;
}

const WhatsAppButton = ({ 
  phoneNumber = "17182047555", // 1-718-204-7555 formatted for WhatsApp
  message = "Hi! I'm interested in custom framing services at Astoria Art & Framing.",
  className = ""
}: WhatsAppButtonProps) => {
  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <Button
      onClick={handleWhatsAppClick}
      className={`bg-[#25D366] hover:bg-[#20BA5A] text-white font-semibold shadow-elegant transition-smooth ${className}`}
      size="lg"
    >
      <MessageCircle className="w-5 h-5 mr-2" />
      Chat on WhatsApp
    </Button>
  );
};

export default WhatsAppButton;

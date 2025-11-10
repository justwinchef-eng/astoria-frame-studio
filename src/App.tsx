import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Services from "./pages/Services";
import GalleryPage from "./pages/GalleryPage";
import Artists from "./pages/Artists";
import About from "./pages/About";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";
import CustomFraming from "./pages/services/CustomFraming";
import ArchivalMatting from "./pages/services/ArchivalMatting";
import DiplomaFraming from "./pages/services/DiplomaFraming";
import LargeFraming from "./pages/services/LargeFraming";
import Shadowboxes from "./pages/services/Shadowboxes";
import BeveledMirrors from "./pages/services/BeveledMirrors";
import NeedlepointFraming from "./pages/services/NeedlepointFraming";
import SameDayService from "./pages/services/SameDayService";
import CorporateServices from "./pages/services/CorporateServices";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/custom-framing" element={<CustomFraming />} />
          <Route path="/services/archival-matting" element={<ArchivalMatting />} />
          <Route path="/services/diploma-framing" element={<DiplomaFraming />} />
          <Route path="/services/large-framing" element={<LargeFraming />} />
          <Route path="/services/shadowboxes" element={<Shadowboxes />} />
          <Route path="/services/beveled-mirrors" element={<BeveledMirrors />} />
          <Route path="/services/needlepoint-framing" element={<NeedlepointFraming />} />
          <Route path="/services/same-day-service" element={<SameDayService />} />
          <Route path="/services/corporate-services" element={<CorporateServices />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/artists" element={<Artists />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

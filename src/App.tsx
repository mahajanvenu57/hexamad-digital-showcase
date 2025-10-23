import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";
import ModernWebDevelopment from "./pages/case-studies/ModernWebDevelopment";
import SocialMediaCampaign from "./pages/case-studies/SocialMediaCampaign";
import EcommerceSeo from "./pages/case-studies/EcommerceSeo";
import PpcRoi from "./pages/case-studies/PpcRoi";
import ContentStrategy from "./pages/case-studies/ContentStrategy";
import LocalSeo from "./pages/case-studies/LocalSeo";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/modern-web-development" element={<ModernWebDevelopment />} />
          <Route path="/portfolio/social-media-campaign" element={<SocialMediaCampaign />} />
          <Route path="/portfolio/e-commerce-seo" element={<EcommerceSeo />} />
          <Route path="/portfolio/ppc-roi" element={<PpcRoi />} />
          <Route path="/portfolio/content-strategy" element={<ContentStrategy />} />
          <Route path="/portfolio/local-seo" element={<LocalSeo />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

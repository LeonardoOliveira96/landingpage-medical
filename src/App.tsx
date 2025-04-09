import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Success from "./pages/Success";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* Redirecionar para página inicial com hash para as respectivas seções */}
          <Route path="/sobre" element={<Navigate replace to="/#sobre" />} />
          <Route path="/servicos" element={<Navigate replace to="/#servicos" />} />
          <Route path="/depoimentos" element={<Navigate replace to="/#depoimentos" />} />
          <Route path="/contato" element={<Navigate replace to="/#contato" />} />
          {/* Success page for form submission */}
          <Route path="/obrigado" element={<Success />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

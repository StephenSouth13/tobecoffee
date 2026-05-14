import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ProtectedAdminRoute } from "@/components/ProtectedAdminRoute";
import Index from "./pages/Index";
import Story from "./pages/Story";
import Product from "./pages/Product";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/admin/Dashboard";
import HomepageAdmin from "./pages/admin/HomepageAdmin";
import AboutAdmin from "./pages/admin/AboutAdmin";
import ProductsAdmin from "./pages/admin/ProductsAdmin";
import BlogAdmin from "./pages/admin/BlogAdmin";
import ContactAdmin from "./pages/admin/ContactAdmin";
import AdminLogin from "./pages/admin/AdminLogin";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/story" element={<Story />} />
          <Route path="/product" element={<Product />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin" element={<ProtectedAdminRoute><Dashboard /></ProtectedAdminRoute>} />
          <Route path="/admin/homepage" element={<ProtectedAdminRoute><HomepageAdmin /></ProtectedAdminRoute>} />
          <Route path="/admin/about" element={<ProtectedAdminRoute><AboutAdmin /></ProtectedAdminRoute>} />
          <Route path="/admin/products" element={<ProtectedAdminRoute><ProductsAdmin /></ProtectedAdminRoute>} />
          <Route path="/admin/blog" element={<ProtectedAdminRoute><BlogAdmin /></ProtectedAdminRoute>} />
          <Route path="/admin/contact" element={<ProtectedAdminRoute><ContactAdmin /></ProtectedAdminRoute>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

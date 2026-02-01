import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Home/Index";
import ProductDetail from "./pages/ProductDetail";
import SearchResults from "./pages/SearchResults";
import Cart from "./pages/Cart";
import TopupCategory from "./pages/TopupCategory";
import PulsaTopup from "./pages/PulsaTopup";
import UserDashboard from "./pages/UserDashboard";
import RiwayatSaldo from "./pages/RiwayatSaldo";
import DaftarTransaksi from "./pages/DaftarTransaksi";
import ResellerPage from "./pages/ResellerPage";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import {store} from "./config/reudx.store";
import { Provider } from "react-redux";
import Checkout from "./pages/Checkout";
const queryClient = new QueryClient();

const App = () => (
  <Provider store={store}>
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/checkout/:sessionId" element={<Checkout />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/topup" element={<TopupCategory />} />
          <Route path="/topup/pulsa" element={<PulsaTopup />} />
          <Route path="/dashboard" element={<UserDashboard />} />
          <Route path="/riwayat-saldo" element={<RiwayatSaldo />} />
          <Route path="/daftar-transaksi" element={<DaftarTransaksi />} />
          <Route path="/reseller" element={<ResellerPage />} />
          <Route path="/register" element={<Register />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
  </Provider>
);

export default App;

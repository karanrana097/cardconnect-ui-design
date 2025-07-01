
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import BiometricSetup from "./pages/BiometricSetup";
import TransactionDetail from "./pages/TransactionDetail";
import Wallet from "./pages/Wallet";
import KYCVerification from "./pages/KYCVerification";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/biometric-setup" element={<BiometricSetup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/transaction/:id" element={<TransactionDetail />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/kyc" element={<KYCVerification />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

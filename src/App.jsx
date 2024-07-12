import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Home as HomeIcon, Car as CarIcon, User as UserIcon, CreditCard as CreditCardIcon, Info as InfoIcon, Shield as ShieldIcon, LogIn as LogInIcon, UserPlus as UserPlusIcon } from "lucide-react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./layouts/sidebar"; // Change to sidebar layout
import Index from "./pages/Index.jsx";
import HomePage from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Profile from "./pages/Profile.jsx";
import RideUpdates from "./pages/RideUpdates.jsx";
import ProfileCreation from "./pages/ProfileCreation.jsx";
import Payment from "./pages/Payment.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import Insurance from "./pages/Insurance.jsx";

const queryClient = new QueryClient();

export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <HomeIcon className="h-4 w-4" />,
  },
  {
    title: "Profile",
    to: "/profile/1", // Assuming user ID is 1 for now
    icon: <UserIcon className="h-4 w-4" />,
  },
  {
    title: "Payment",
    to: "/payment",
    icon: <CreditCardIcon className="h-4 w-4" />,
  },
  {
    title: "About Us",
    to: "/about-us",
    icon: <InfoIcon className="h-4 w-4" />,
  },
  {
    title: "Insurance",
    to: "/insurance",
    icon: <ShieldIcon className="h-4 w-4" />,
  },
  {
    title: "Ride Updates",
    to: "/ride-updates",
    icon: <CarIcon className="h-4 w-4" />,
  },
  {
    title: "Login",
    to: "/login",
    icon: <LogInIcon className="h-4 w-4" />,
  },
  {
    title: "Profile Creation",
    to: "/profile-creation",
    icon: <UserPlusIcon className="h-4 w-4" />,
  },
];

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Index />} />
              <Route path="home" element={<HomePage />} />
              <Route path="login" element={<Login />} />
              <Route path="profile/:userId" element={<Profile />} />
              <Route path="ride-updates" element={<RideUpdates />} />
              <Route path="profile-creation" element={<ProfileCreation />} />
              <Route path="payment" element={<Payment />} />
              <Route path="about-us" element={<AboutUs />} />
              <Route path="insurance" element={<Insurance />} />
              {/* Add more routes here as needed */}
            </Route>
          </Routes>
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
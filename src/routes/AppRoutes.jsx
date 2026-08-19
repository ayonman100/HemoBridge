import { BrowserRouter, Routes, Route } from "react-router-dom";

// Public Pages
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Hospitals from "../pages/Hospitals";
import NotFound from "../pages/NotFound";
import MainLayout from "../layouts/MainLayout";
import AuthLayout from "../layouts/AuthLayout";
import DashboardLayout from "../layouts/DashboardLayout";
import Subscription from "../pages/subscription/Subscription";
import Checkout from "../pages/subscription/Checkout";
import SubscriptionSuccess from "../pages/subscription/SubscriptionSuccess";
import Terms from "../pages/Terms";
import Privacy from "../pages/Privacy";

// Auth Pages
import Splash from "../pages/auth/Splash";
import Onboarding1 from "../pages/auth/Onboarding1";
import Onboarding2 from "../pages/auth/Onboarding2";
import Onboarding3 from "../pages/auth/Onboarding3";
import SelectRole from "../pages/auth/SelectRole";
import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";
import VerifyAccount from "../pages/auth/VerifyAccount";
import PendingVerification from "../pages/auth/PendingVerification";
import ForgotPassword from "../pages/auth/ForgotPassword";
import ResetPassword from "../pages/auth/ResetPassword";

//Donor page
import DonorDashboard from "../pages/donor/Dashboard";
import DonorRequests from "../pages/donor/Requests";
import RequestDetails from "../pages/donor/RequestDetails";
import NearbyCentres from "../pages/donor/NearbyCentres";
import DonorProfile from "../pages/donor/Profile";
import DonationHistory from "../pages/donor/DonationHistory";

//hospital page
import HospitalDashboard from "../pages/hospital/Dashboard";
import RequestBlood from "../pages/hospital/RequestBlood";
import SearchBlood from "../pages/hospital/SearchBlood";
import HospitalRequests from "../pages/hospital/Requests";
import RequestHistory from "../pages/hospital/RequestHistory";
import HospitalProfile from "../pages/hospital/Profile";

//bloodbank page
import BloodBankDashboard from "../pages/bloodbank/Dashboard";
import BloodBankInventory from "../pages/bloodbank/Inventory";
import BloodBankRequests from "../pages/bloodbank/Requests";
import BloodBankProfile from "../pages/bloodbank/Profile";

//admin page
import AdminDashboard from "../pages/admin/Dashboard";
import AdminUsers from "../pages/admin/Users";
import AdminHospitals from "../pages/admin/Hospitals";
import AdminBloodBanks from "../pages/admin/BloodBanks";
import AdminDonors from "../pages/admin/Donors";
import AdminRequests from "../pages/admin/Requests";
import AdminVerification from "../pages/admin/Verification";
import AdminUpdate from "../pages/admin/Updates";
import AdminReports from "../pages/admin/Reports";

function AppRoutes() {

  return (

    <BrowserRouter>

      <Routes>

        {/* Public Routes */}
        <Route path="/" element={<Splash/>} />
         <Route path="/subscription" element={<Subscription />} />
        <Route path="/subscription/checkout" element={<Checkout />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/subscription/success" element={<SubscriptionSuccess />} />
        <Route element={<MainLayout />}>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/hospitals" element={<Hospitals />} />
        </Route>

        {/* Authentication Routes */}
        <Route element={<AuthLayout />}>
        <Route path="/onboarding/1" element={<Onboarding1 />} />
        <Route path="/onboarding/2" element={<Onboarding2 />} />
        <Route path="/onboarding/3" element={<Onboarding3 />} />
        <Route path="/select-role" element={<SelectRole />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/verify-account" element={<VerifyAccount />} />
        <Route path="/pending-verification" element={<PendingVerification />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        </Route>
{/* =========================
    Dashboard Routes
========================= */}

<Route element={<DashboardLayout />}>

  {/* Donor Routes */}
  <Route path="/donor/dashboard" element={<DonorDashboard />} />
  <Route path="/donor/requests" element={<DonorRequests />} />
  <Route path="/donor/requests/:id" element={<RequestDetails />} />
  <Route path="/donor/nearby-centres" element={<NearbyCentres />} />
  <Route path="/donor/profile" element={<DonorProfile />} />
  <Route path="/donor/donation-history" element={<DonationHistory />} />

  {/* Hospital Routes */}
  <Route path="/hospital/dashboard" element={<HospitalDashboard />} />
  <Route path="/hospital/request-blood" element={<RequestBlood />} />
  <Route path="/hospital/search-blood" element={<SearchBlood />} />
  <Route path="/hospital/requests" element={<HospitalRequests />} />
  <Route path="/hospital/request-history" element={<RequestHistory />} />
  <Route path="/hospital/profile" element={<HospitalProfile />} />

  {/* Blood Bank Routes */}
  <Route path="/bloodbank/dashboard" element={<BloodBankDashboard />} />
  <Route path="/bloodbank/inventory" element={<BloodBankInventory />} />
  <Route path="/bloodbank/requests" element={<BloodBankRequests />} />
  <Route path="/bloodbank/profile" element={<BloodBankProfile />} />

  {/* Admin Routes */}
  <Route path="/admin/dashboard" element={<AdminDashboard />} />
  <Route path="/admin/users" element={<AdminUsers />} />
  <Route path="/admin/hospitals" element={<AdminHospitals />} />
  <Route path="/admin/blood-banks" element={<AdminBloodBanks />} />
  <Route path="/admin/donors" element={<AdminDonors />} />
  <Route path="/admin/requests" element={<AdminRequests />} />
  <Route path="/admin/verification" element={<AdminVerification />} />
  <Route path="/admin/updates" element={<AdminUpdate />} />
  <Route path="/admin/reports" element={<AdminReports />} />

</Route> 
        {/* 404 Page */}
       <Route path="*" element={<NotFound />} />
      </Routes>

    </BrowserRouter>

  );

}


export default AppRoutes;
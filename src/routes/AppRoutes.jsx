import { BrowserRouter, Routes, Route } from "react-router-dom";

// Public Pages
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";

// Auth Pages
import Splash from "../pages/auth/Splash";
import Onboarding1 from "../pages/auth/Onboarding1";
import Onboarding2 from "../pages/auth/Onboarding2";
import Onboarding3 from "../pages/auth/Onboarding3";
import SelectRole from "../pages/auth/SelectRole";
import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";

//Donor page
import DonorDashboard from "../pages/donor/Dashboard";

function AppRoutes() {

  return (

    <BrowserRouter>

      <Routes>

        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />


        {/* Authentication Routes */}
        <Route path="/splash" element={<Splash />} />
        <Route path="/onboarding/1" element={<Onboarding1 />} />
        <Route path="/onboarding/2" element={<Onboarding2 />} />
        <Route path="/onboarding/3" element={<Onboarding3 />} />
        <Route path="/select-role" element={<SelectRole />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/*donor page*/}
        <Route path="/donor/dashboard" element={<DonorDashboard />} />

        {/* 404 Page */}
        <Route path="*" element={<NotFound />} />

      </Routes>

    </BrowserRouter>

  );

}


export default AppRoutes;
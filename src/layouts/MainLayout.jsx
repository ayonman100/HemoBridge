import { Outlet } from "react-router-dom";
import Navbar from "../components/landing/Navbar";

function MainLayout() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main>
        <Outlet />
      </main>

      <footer className="border-t border-gray-200 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h2 className="text-lg font-bold text-gray-900">
                HemoBridge
              </h2>

              <p className="text-sm text-gray-500 mt-1">
                Connecting Blood. Saving Lives.
              </p>
            </div>

            <p className="text-sm text-gray-500">
              © 2026 HemoBridge. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default MainLayout;
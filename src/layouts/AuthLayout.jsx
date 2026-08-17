import { Outlet } from "react-router-dom";

function AuthLayout() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default AuthLayout;
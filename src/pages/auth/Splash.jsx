import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Splash() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/onboarding/1");
    }, 2500);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      <div className="text-center">


        <h1 className="text-5xl font-bold text-red-600">
          Hem🩸Bridge
        </h1>

        <p className="mt-3 text-gray-600">
          Connecting Blood. Saving Lives.
        </p>

        <div className="mt-8 flex justify-center gap-2">
          <span className="w-2 h-2 rounded-full bg-red-600"></span>
          <span className="w-2 h-2 rounded-full bg-red-300"></span>
          <span className="w-2 h-2 rounded-full bg-red-300"></span>
        </div>

      </div>
    </div>
  );
}

export default Splash;
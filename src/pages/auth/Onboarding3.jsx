import { useNavigate } from "react-router-dom";

function Onboarding3() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white flex flex-col">

      {/* Top */}
      <div className="flex justify-end px-6 py-6">
        <button
          onClick={() => navigate("/select-role")}
          className="text-gray-500 font-medium hover:text-gray-900"
        >
          Skip
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">

        {/* Illustration */}
        <div className="w-72 h-72 bg-red-50 rounded-full flex items-center justify-center mb-10">
          <span className="text-8xl">🚑</span>
        </div>

        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
          Respond Faster During Emergencies
        </h1>

        {/* Description */}
        <p className="mt-5 max-w-md text-gray-600 leading-relaxed">
          HemoBridge helps healthcare teams quickly identify available blood
          and connect with the right blood source when every minute matters.
        </p>

      </div>

      {/* Bottom */}
      <div className="px-6 pb-8">

        {/* Progress */}
        <div className="flex justify-center gap-2 mb-6">
          <span className="w-2 h-2 rounded-full bg-gray-300"></span>

          <span className="w-2 h-2 rounded-full bg-gray-300"></span>

          <span className="w-8 h-2 rounded-full bg-red-600"></span>
        </div>

        {/* Get Started Button */}
        <button
          onClick={() => navigate("/select-role")}
          className="w-full max-w-md mx-auto block bg-red-600 text-white py-4 rounded-xl font-semibold hover:bg-red-700 transition"
        >
          Get Started
        </button>

      </div>

    </div>
  );
}

export default Onboarding3;
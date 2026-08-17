import { useNavigate } from "react-router-dom";
import { Hospital } from "lucide-react";

function Onboarding2() {
  const navigate = useNavigate();

  return (
    <main className="onboarding-page">
      {/* Top */}
      <div className="onboarding-top">
        <button
          type="button"
          onClick={() => navigate("/home")}
          className="onboarding-skip"
        >
          Skip
        </button>
      </div>

      {/* Main Content */}
      <div className="onboarding-content">
        {/* Illustration */}
        <div className="onboarding-illustration onboarding-illustration-blue">
          <Hospital
            size={100}
            strokeWidth={1.5}
            className="onboarding-icon onboarding-icon-blue"
          />
        </div>

        {/* Heading */}
        <h1 className="onboarding-title">
          Connect With Verified Blood Sources
        </h1>

        {/* Description */}
        <p className="onboarding-description">
          HemoBridge helps hospitals find verified blood banks and available
          blood supplies through a connected healthcare network.
        </p>
      </div>

      {/* Bottom */}
      <div className="onboarding-bottom">
        {/* Progress */}
        <div className="onboarding-progress">
          <span></span>
          <span className="onboarding-progress-active"></span>
          <span></span>
        </div>

        {/* Next Button */}
        <button
          type="button"
          onClick={() => navigate("/onboarding/3")}
          className="onboarding-next"
        >
          Next
        </button>
      </div>
    </main>
  );
}

export default Onboarding2;
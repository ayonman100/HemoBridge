import { useNavigate } from "react-router-dom";
import { Droplet } from "lucide-react";

function Onboarding1() {
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
        <div className="onboarding-illustration">
          <Droplet
            size={100}
            strokeWidth={1.5}
            className="onboarding-icon"
          />
        </div>

        {/* Heading */}
        <h1 className="onboarding-title">
          Find Blood When It Matters Most
        </h1>

        {/* Description */}
        <p className="onboarding-description">
          HemoBridge connects hospitals, blood banks, and donors to help
          people find compatible blood faster during emergencies.
        </p>
      </div>

      {/* Bottom */}
      <div className="onboarding-bottom">
        {/* Progress */}
        <div className="onboarding-progress">
          <span className="onboarding-progress-active"></span>
          <span></span>
          <span></span>
        </div>

        {/* Next Button */}
        <button
          type="button"
          onClick={() => navigate("/onboarding/2")}
          className="onboarding-next"
        >
          Next
        </button>
      </div>
    </main>
  );
}

export default Onboarding1;
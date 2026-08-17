import { useNavigate } from "react-router-dom";
import { Siren } from "lucide-react";

function Onboarding3() {
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
          <Siren
            size={100}
            strokeWidth={1.5}
            className="onboarding-icon"
          />
        </div>

        {/* Heading */}
        <h1 className="onboarding-title">
          Respond Faster During Emergencies
        </h1>

        {/* Description */}
        <p className="onboarding-description">
          HemoBridge helps healthcare teams quickly identify available blood
          and connect with the right blood source when every minute matters.
        </p>
      </div>

      {/* Bottom */}
      <div className="onboarding-bottom">
        {/* Progress */}
        <div className="onboarding-progress">
          <span></span>
          <span></span>
          <span className="onboarding-progress-active"></span>
        </div>

        {/* Get Started Button */}
        <button
          type="button"
          onClick={() => navigate("/home")}
          className="onboarding-next"
        >
          Get Started
        </button>
      </div>
    </main>
  );
}

export default Onboarding3;
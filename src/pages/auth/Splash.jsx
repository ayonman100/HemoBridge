import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logos/hemobridge logo.jpeg";
import splashImage from "../../assets/images/splash-onboarding page image.jpeg";

function Splash() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/onboarding/1");
    }, 2500);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <main className="splash-page">
      <div className="splash-image">
        <img
          src={splashImage}
          alt="HemoBridge blood donation"
        />
      </div>

      <div className="splash-content">
        <img
          src={logo}
          alt="HemoBridge"
          className="splash-logo"
        />

        <p className="splash-tagline">
          Connecting Blood. Saving Lives.
        </p>

        <div className="splash-loader" aria-label="Loading">
          <span className="splash-dot splash-dot-active"></span>
          <span className="splash-dot"></span>
          <span className="splash-dot"></span>
        </div>
      </div>
    </main>
  );
}

export default Splash;
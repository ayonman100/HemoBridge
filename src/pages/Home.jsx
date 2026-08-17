import { Link } from "react-router-dom";
import { Droplet, ArrowRight } from "lucide-react";

import BloodCard from "../components/landing/BloodCard";
import Stats from "../components/landing/Stats";
import ProcessCard from "../components/landing/ProcessCard";

import homeImage from "../assets/images/home-landing page image.jpeg";

function Home() {
  return (
    <div className="home-page">

      {/* Hero Section */}
      <section className="home-hero">
        <div className="home-container home-hero-grid">

          {/* Text Side */}
          <div className="home-hero-content">
            <p className="home-eyebrow">
              Emergency Blood Access Platform
            </p>

            <h1 className="home-hero-title">
              Connecting Blood.
              <span> Saving Lives.</span>
            </h1>

            <p className="home-hero-description">
              HemoBridge connects hospitals and blood banks through a
              real-time network, helping medical teams find compatible
              blood faster during emergencies.
            </p>

            <div className="home-hero-actions">
              <Link
                to="/login"
                className="home-primary-button"
              >
                Find Blood Now
                <ArrowRight size={18} />
              </Link>

              <Link
                to="/about"
                className="home-secondary-button"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Hero Image */}
          <div className="home-hero-image-wrapper">
            <div className="home-hero-image-card">
              <img
                src={homeImage}
                alt="Nigerian healthcare professionals and blood donation"
                className="home-hero-image"
              />

              <div className="home-image-badge">
                <Droplet size={18} />
                <span>Saving lives together</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Blood Availability Section */}
      <section className="home-availability">
        <div className="home-container">

          <div className="home-section-heading">
            <h2>Live Blood Availability</h2>

            <p>
              Real-time blood inventory from verified hospitals and blood banks
            </p>
          </div>

          <div className="home-blood-grid">

            <BloodCard
              type="O+"
              units="24"
              status="Available"
            />

            <BloodCard
              type="A+"
              units="12"
              status="Available"
            />

            <BloodCard
              type="B-"
              units="5"
              status="Low Stock"
            />

            <BloodCard
              type="AB+"
              units="8"
              status="Available"
            />

          </div>
        </div>
      </section>

      {/* Statistics */}
      <Stats />

      {/* How HemoBridge Works */}
      <section
        id="how-it-works"
        className="home-process"
      >
        <div className="home-container">

          <div className="home-section-heading">
            <h2>How HemoBridge Works</h2>

            <p>
              From emergency request to blood delivery in minutes
            </p>
          </div>

          <div className="home-process-grid">

            <ProcessCard
              number="1"
              title="Emergency Request"
              description="Doctor submits blood requirements during a critical situation."
            />

            <ProcessCard
              number="2"
              title="Blood Matching"
              description="HemoBridge searches verified inventory for compatible blood."
            />

            <ProcessCard
              number="3"
              title="Blood Bank Connection"
              description="The nearest available blood source receives the request."
            />

            <ProcessCard
              number="4"
              title="Fast Delivery"
              description="Blood reaches the hospital quickly for the patient."
            />

          </div>
        </div>
      </section>

    </div>
  );
}

export default Home;
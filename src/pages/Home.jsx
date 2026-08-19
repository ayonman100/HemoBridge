import { Link } from "react-router-dom";
import {
  ArrowRight,
  Droplet,
  ShieldCheck,
  Hospital,
  Activity,
  Users,
  Mail,
  ChevronRight,
} from "lucide-react";

import homeImage from "../assets/images/home-landing page image.jpeg";

import "./Home.css";

function Home() {
  return (
    <div className="home-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="home-hero">

        <div className="home-container home-hero-grid">

          {/* Hero Content */}

          <div className="home-hero-content">

            <div className="home-hero-label">
              <span className="home-live-dot"></span>

              Emergency blood coordination platform
            </div>

            <h1 className="home-hero-title">
              When every second matters,
              <span> find blood faster.</span>
            </h1>

            <p className="home-hero-description">
              HemoBridge connects hospitals, blood banks and donors through
              one coordinated network, helping healthcare teams find the
              blood they need when it matters most.
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
                Discover HemoBridge
              </Link>

            </div>


            {/* Trust Indicators */}

            <div className="home-trust-row">

              <div className="home-trust-item">

                <div className="home-trust-icon">
                  <ShieldCheck size={17} />
                </div>

                <span>
                  Verified network
                </span>

              </div>

              <div className="home-trust-divider"></div>

              <div className="home-trust-item">

                <div className="home-trust-icon">
                  <Activity size={17} />
                </div>

                <span>
                  Emergency focused
                </span>

              </div>

              <div className="home-trust-divider"></div>

              <div className="home-trust-item">

                <div className="home-trust-icon">
                  <Users size={17} />
                </div>

                <span>
                  Connected care
                </span>

              </div>

            </div>

          </div>


          {/* Hero Visual */}

          <div className="home-hero-visual">

            <div className="home-visual-glow"></div>

            <div className="home-image-wrapper">

              <img
                src={homeImage}
                alt="Healthcare professionals working together"
                className="home-hero-image"
              />

              {/* Floating status */}

              <div className="home-floating-status">

                <div className="home-floating-icon">
                  <Droplet size={19} />
                </div>

                <div>
                  <span className="home-floating-label">
                    Blood coordination
                  </span>

                  <strong>
                    Connected
                  </strong>
                </div>

                <span className="home-floating-check">
                  ✓
                </span>

              </div>

            </div>


            {/* Network decoration */}

            <div className="home-network-card home-network-card-one">

              <div className="home-network-icon">
                <Hospital size={17} />
              </div>

              <div>
                <strong>Hospital</strong>
                <span>Request sent</span>
              </div>

            </div>


            <div className="home-network-card home-network-card-two">

              <div className="home-network-icon">
                <Droplet size={17} />
              </div>

              <div>
                <strong>Blood Bank</strong>
                <span>Compatible match</span>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          INTRODUCTION
      ===================================================== */}

      <section className="home-introduction">

        <div className="home-container">

          <div className="home-introduction-grid">

            <div>

              <p className="home-section-label">
                THE HEMOBRIDGE NETWORK
              </p>

              <h2>
                Bringing the right
                <span> people and resources together.</span>
              </h2>

            </div>

            <div>

              <p className="home-introduction-text">
                Blood shortages are not always caused by a lack of blood.
                Sometimes the challenge is knowing where available blood is,
                whether it is compatible, and how quickly it can reach the
                patient.
              </p>

              <p className="home-introduction-text">
                HemoBridge is designed to close that gap by creating a
                coordinated digital connection between the people and
                organizations involved in blood availability.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          NETWORK FEATURES
      ===================================================== */}

      <section className="home-network">

        <div className="home-container">

          <div className="home-section-heading home-section-heading-left">

            <p className="home-section-label">
              ONE CONNECTED SYSTEM
            </p>

            <h2>
              Built around the
              <span> blood journey.</span>
            </h2>

            <p>
              HemoBridge brings the key parts of blood coordination into one
              connected platform.
            </p>

          </div>


          <div className="home-network-grid">

            {/* Hospital */}

            <div className="home-network-feature">

              <div className="home-feature-number">
                01
              </div>

              <div className="home-feature-icon">
                <Hospital size={25} />
              </div>

              <h3>
                Hospitals
              </h3>

              <p>
                Submit blood requests and quickly identify available,
                compatible blood sources.
              </p>

              <Link to="/about">
                Learn more
                <ChevronRight size={16} />
              </Link>

            </div>


            {/* Blood Banks */}

            <div className="home-network-feature">

              <div className="home-feature-number">
                02
              </div>

              <div className="home-feature-icon">
                <Droplet size={25} />
              </div>

              <h3>
                Blood Banks
              </h3>

              <p>
                Manage inventory and respond to requests from hospitals
                through a coordinated network.
              </p>

              <Link to="/about">
                Learn more
                <ChevronRight size={16} />
              </Link>

            </div>


            {/* Donors */}

            <div className="home-network-feature">

              <div className="home-feature-number">
                03
              </div>

              <div className="home-feature-icon">
                <Users size={25} />
              </div>

              <h3>
                Donors
              </h3>

              <p>
                Help strengthen the blood supply by connecting donors with
                opportunities to give.
              </p>

              <Link to="/about">
                Learn more
                <ChevronRight size={16} />
              </Link>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          HOW IT WORKS
      ===================================================== */}

      <section className="home-process">

        <div className="home-container">

          <div className="home-section-heading">

            <p className="home-section-label">
              HOW IT WORKS
            </p>

            <h2>
              From request to
              <span> connection.</span>
            </h2>

            <p>
              A simple workflow designed for situations where time matters.
            </p>

          </div>


          <div className="home-process-line"></div>


          <div className="home-process-grid">

            <div className="home-process-step">

              <div className="home-process-number">
                1
              </div>

              <h3>
                Request
              </h3>

              <p>
                A hospital submits the required blood type and quantity.
              </p>

            </div>


            <div className="home-process-step">

              <div className="home-process-number">
                2
              </div>

              <h3>
                Match
              </h3>

              <p>
                HemoBridge searches connected inventory for compatible blood.
              </p>

            </div>


            <div className="home-process-step">

              <div className="home-process-number">
                3
              </div>

              <h3>
                Connect
              </h3>

              <p>
                The request reaches an appropriate available blood source.
              </p>

            </div>


            <div className="home-process-step">

              <div className="home-process-number">
                4
              </div>

              <h3>
                Respond
              </h3>

              <p>
                Healthcare teams can coordinate the next step quickly.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="home-final-cta">

        <div className="home-container">

          <div className="home-final-cta-inner">

            <div>

              <p className="home-section-label">
                HELP BUILD A STRONGER BLOOD NETWORK
              </p>

              <h2>
                Better connections can
                <span> save critical time.</span>
              </h2>

              <p>
                Join HemoBridge and become part of a more connected approach
                to blood availability.
              </p>

            </div>

            <Link
              to="/login"
              className="home-final-button"
            >
              Get Started
              <ArrowRight size={18} />
            </Link>

          </div>

        </div>

      </section>


      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className="home-footer">

        <div className="home-container">

          <div className="home-footer-main">

            {/* Brand */}

            <div className="home-footer-brand">

              <Link
                to="/home"
                className="home-footer-logo"
              >
                <span className="home-footer-logo-icon">
                  <Droplet size={20} />
                </span>

                <span>
                  Hemo<span>Bridge</span>
                </span>
              </Link>

              <p>
                Connecting blood. Saving lives.
              </p>

            </div>


            {/* Navigation */}

            <div className="home-footer-column">

              <h3>
                Platform
              </h3>

              <Link to="/about">
                About HemoBridge
              </Link>

              <Link to="/login">
                Find Blood
              </Link>

              <Link to="/contact">
                Contact
              </Link>

            </div>


            {/* Contact */}

            <div className="home-footer-column">

              <h3>
                Connect
              </h3>

           <a
  href="https://www.instagram.com/hemobridge.ng/"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-2 text-gray-600 hover:text-red-600 transition"
>

  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-5 h-5"
  >
    <rect
      width="20"
      height="20"
      x="2"
      y="2"
      rx="5"
      ry="5"
    />

    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />

    <line
      x1="17.5"
      x2="17.51"
      y1="6.5"
      y2="6.5"
    />
  </svg>
  <span>hemobridge.ng</span>
</a>

              <a
                href="mailto:hemobridge@gmail.com"
                className="home-footer-social"
              >
                <Mail size={17} />
                hemobridge@gmail.com
              </a>

            </div>

          </div>


          <div className="home-footer-bottom">

            <p>
              © {new Date().getFullYear()} HemoBridge. All rights reserved.
            </p>

            <p>
              Connecting Blood. Saving Lives.
            </p>

          </div>

        </div>

      </footer>

    </div>
  );
}

export default Home;
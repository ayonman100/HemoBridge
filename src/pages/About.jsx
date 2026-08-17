import {
  Building2,
  Droplets,
  Heart,
  CheckCircle2,
  Users,
  Hospital,
  ShieldCheck,
} from "lucide-react";

import image from "../assets/images/optional dashboard page image.jpeg";
import "./About.css";

function About() {
  const connections = [
    {
      icon: Building2,
      title: "Hospitals",
      description:
        "Hospitals can search for available blood and submit emergency requests when patients need urgent transfusions.",
    },
    {
      icon: Droplets,
      title: "Blood Banks",
      description:
        "Blood banks can manage their inventory and respond to requests from healthcare facilities.",
    },
    {
      icon: Heart,
      title: "Blood Donors",
      description:
        "Donors can discover nearby donation centres and respond to blood requests that match their blood type.",
    },
  ];

  const benefits = [
    "Connect verified healthcare facilities",
    "Improve access to blood availability information",
    "Help hospitals respond to emergencies faster",
    "Make it easier for donors to find opportunities to help",
  ];

  return (
    <div className="about-page">

      {/* ================= HERO ================= */}
      <section className="about-hero">
        <div className="about-container about-hero-content">

          <div className="about-hero-text">

            <span className="about-eyebrow">
              About HemoBridge
            </span>

            <h1>
              Connecting Blood.
              <span> Saving Lives.</span>
            </h1>

            <p>
              HemoBridge is a digital platform designed to connect hospitals,
              blood banks, and blood donors through a centralized blood
              availability network.
            </p>

            <div className="about-hero-badges">

              <div className="about-hero-badge">
                <ShieldCheck size={18} />
                <span>Verified Network</span>
              </div>

              <div className="about-hero-badge">
                <Heart size={18} />
                <span>Community Driven</span>
              </div>

            </div>

          </div>


          {/* Hero Image */}
          <div className="about-hero-image">

            <img
              src={image}
              alt="Healthcare and blood donation"
            />

            <div className="about-image-card">

              <div className="about-image-card-icon">
                <Droplets size={22} />
              </div>

              <div>
                <strong>HemoBridge</strong>
                <span>Connecting Blood. Saving Lives.</span>
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* ================= MISSION ================= */}
      <section className="about-section">

        <div className="about-container about-mission">

          <div className="about-mission-content">

            <span className="about-eyebrow">
              Our Mission
            </span>

            <h2>
              Making emergency blood access
              <span> faster and easier.</span>
            </h2>

            <p>
              During medical emergencies, finding the right blood type at
              the right time can be critical. HemoBridge helps reduce the
              difficulty of locating available blood by connecting verified
              healthcare facilities and blood donors through one platform.
            </p>

            <p>
              Our goal is to make blood availability information easier to
              access while helping hospitals respond more efficiently to
              patients who need urgent transfusions.
            </p>


            <div className="about-benefits">

              {benefits.map((benefit) => (
                <div
                  className="about-benefit"
                  key={benefit}
                >
                  <CheckCircle2 size={20} />

                  <span>
                    {benefit}
                  </span>
                </div>
              ))}

            </div>

          </div>


          {/* Mission Visual */}
          <div className="about-mission-card">

            <div className="about-mission-icon">
              <Droplets size={42} />
            </div>

            <h3>
              One connection
              <br />
              can make a difference.
            </h3>

            <p>
              HemoBridge brings the right people and organizations closer
              together when blood is needed most.
            </p>

          </div>

        </div>

      </section>


      {/* ================= WHAT WE DO ================= */}
      <section className="about-section about-what-we-do">

        <div className="about-container">

          <div className="about-section-heading">

            <span className="about-eyebrow">
              What We Do
            </span>

            <h2>
              One platform, multiple connections
            </h2>

            <p>
              HemoBridge brings the key participants in the blood supply
              process together.
            </p>

          </div>


          <div className="about-connections">

            {connections.map((connection) => {

              const Icon = connection.icon;

              return (
                <div
                  className="about-connection-card"
                  key={connection.title}
                >

                  <div className="about-connection-icon">
                    <Icon size={26} />
                  </div>

                  <h3>
                    {connection.title}
                  </h3>

                  <p>
                    {connection.description}
                  </p>

                  <div className="about-connection-link">
                    <span></span>
                    
                  </div>

                </div>
              );

            })}

          </div>

        </div>

      </section>


      {/* ================= NETWORK ================= */}
      <section className="about-network">

        <div className="about-container">

          <div className="about-network-inner">

            <div className="about-network-text">

              <span className="about-eyebrow">
                Built Around Connection
              </span>

              <h2>
                Bringing the blood supply network closer together.
              </h2>

              <p>
                Every part of the HemoBridge platform is designed around
                one simple idea: making communication between hospitals,
                blood banks, and donors easier.
              </p>

            </div>


            <div className="about-network-stats">

              <div className="about-network-stat">

                <Hospital size={25} />

                <strong>
                  Hospitals
                </strong>

                <span>
                  Connected facilities
                </span>

              </div>


              <div className="about-network-stat">

                <Droplets size={25} />

                <strong>
                  Blood Banks
                </strong>

                <span>
                  Inventory partners
                </span>

              </div>


              <div className="about-network-stat">

                <Users size={25} />

                <strong>
                  Donors
                </strong>

                <span>
                  People ready to help
                </span>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= VISION ================= */}
      <section className="about-section about-vision">

        <div className="about-container about-vision-content">

          <span className="about-eyebrow">
            Our Vision
          </span>

          <h2>
            A more connected blood supply network.
          </h2>

          <p>
            We envision a healthcare ecosystem where hospitals can quickly
            identify available blood, blood banks can coordinate requests,
            and willing donors can easily find opportunities to help.
          </p>

          <div className="about-vision-icon">
            <Heart size={28} />
          </div>

        </div>

      </section>

    </div>
  );
}

export default About;

import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Building2,
  CheckCircle2,
  MapPin,
  Search,
  Droplets,
  ArrowRight,
  Hospital,
} from "lucide-react";

import "./Hospitals.css";

function Hospitals() {
  const [searchTerm, setSearchTerm] = useState("");

  const hospitals = [
    {
      id: 1,
      name: "Lagos University Teaching Hospital",
      location: "Idi-Araba, Lagos",
      status: "Verified",
      bloodServices: "Blood Services Available",
    },
    {
      id: 2,
      name: "Reddington Hospital",
      location: "Victoria Island, Lagos",
      status: "Verified",
      bloodServices: "Blood Services Available",
    },
    {
      id: 3,
      name: "St. Nicholas Hospital",
      location: "Lagos Island, Lagos",
      status: "Verified",
      bloodServices: "Blood Services Available",
    },
    {
      id: 4,
      name: "Gbagada General Hospital",
      location: "Gbagada, Lagos",
      status: "Verified",
      bloodServices: "Blood Services Available",
    },
  ];

  const filteredHospitals = hospitals.filter((hospital) =>
    `${hospital.name} ${hospital.location}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  return (
    <div className="hospitals-page">

      {/* ================= HERO ================= */}
      <section className="hospitals-hero">

        <div className="hospitals-container hospitals-hero-content">

          <div className="hospitals-hero-icon">
            <Hospital size={28} />
          </div>

          <p className="hospitals-eyebrow">
            HemoBridge Network
          </p>

          <h1>
            Hospitals in the{" "}
            <span>HemoBridge Network</span>
          </h1>

          <p className="hospitals-hero-description">
            Find verified healthcare facilities connected to the
            HemoBridge blood network and discover where blood services
            are available.
          </p>

        </div>

      </section>


      {/* ================= SEARCH ================= */}
      <section className="hospitals-search-section">

        <div className="hospitals-container">

          <div className="hospitals-search-card">

            <div className="hospitals-search-wrapper">

              <Search
                size={20}
                className="hospitals-search-icon"
              />

              <input
                type="text"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder="Search by hospital name or location..."
                className="hospitals-search-input"
              />

            </div>

          </div>

        </div>

      </section>


      {/* ================= FILTERS ================= */}
      <section className="hospitals-filter-section">

        <div className="hospitals-container">

          <div className="hospitals-filters">

            <button
              type="button"
              className="hospital-filter hospital-filter-active"
            >
              All Hospitals
            </button>

            <button
              type="button"
              className="hospital-filter"
            >
            </button>

          </div>

        </div>

      </section>


      {/* ================= HOSPITAL LIST ================= */}
      <section className="hospitals-list-section">

        <div className="hospitals-container">

          <div className="hospitals-list-header">

            <div>
              <h2>
                Connected Hospitals
              </h2>

              <p>
                Healthcare facilities currently listed on HemoBridge.
              </p>
            </div>

            <span className="hospitals-count">
              {filteredHospitals.length}{" "}
              {filteredHospitals.length === 1
                ? "hospital"
                : "hospitals"}
            </span>

          </div>


          {filteredHospitals.length > 0 ? (

            <div className="hospitals-grid">

              {filteredHospitals.map((hospital) => (

                <div
                  key={hospital.id}
                  className="hospital-card"
                >

                  {/* Hospital Information */}
                  <div className="hospital-card-content">

                    <div className="hospital-icon">
                      <Building2 size={27} />
                    </div>

                    <div className="hospital-information">

                      <div className="hospital-title-row">

                        <h3>
                          {hospital.name}
                        </h3>

                        <span className="hospital-status">
                          <CheckCircle2 size={13} />
                          {hospital.status}
                        </span>

                      </div>


                      <div className="hospital-detail">

                        <MapPin size={16} />

                        <span>
                          {hospital.location}
                        </span>

                      </div>


                      <div className="hospital-detail hospital-blood-service">

                        <Droplets size={17} />

                        <span>
                          {hospital.bloodServices}
                        </span>

                      </div>

                    </div>

                  </div>


                  {/* Action */}
                  <div className="hospital-card-action">

                    <button
                      type="button"
                      className="view-hospital-button"
                    >
                      View Hospital

                      <ArrowRight size={17} />

                    </button>

                  </div>

                </div>

              ))}

            </div>

          ) : (

            <div className="hospitals-empty-state">

              <div className="hospitals-empty-icon">
                <Search size={26} />
              </div>

              <h3>
                No hospitals found
              </h3>

              <p>
                Try searching with another hospital name or location.
              </p>

            </div>

          )}

        </div>

      </section>


      {/* ================= CTA ================= */}
      <section className="hospitals-cta">

        <div className="hospitals-container hospitals-cta-content">

          <div className="hospitals-cta-icon">
            <Building2 size={28} />
          </div>

          <h2>
            Is your hospital interested in HemoBridge?
          </h2>

          <p>
            Join the network and help make blood access faster and
            more efficient for patients who need it.
          </p>

          <Link
  to="/signup?role=hospital"
  className="hospitals-cta-button"
>
  Join the Network

  <ArrowRight size={18} />
</Link>

          

        </div>

      </section>

    </div>
  );
}

export default Hospitals;


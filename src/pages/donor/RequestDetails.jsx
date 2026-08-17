import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  Droplet,
  MapPin,
  Building2,
  Package,
  Navigation,
  AlertTriangle,
  HeartHandshake,
} from "lucide-react";
import "./RequestDetails.css";

function RequestDetails() {
  const { id } = useParams();

  return (
    <div className="request-details">

      {/* Back */}
      <div className="request-details__back">
        <Link to="/donor/requests">
          <ArrowLeft size={17} />
          Back to Blood Requests
        </Link>
      </div>

      {/* Header */}
      <section className="request-details__header">

        <p className="request-details__eyebrow">
          Blood Request #{id}
        </p>

        <h1>
          Emergency Blood Request
        </h1>

        <p>
          A patient currently needs your blood type.
        </p>

      </section>


      {/* Request Overview */}
      <section className="request-details__overview">

        <div className="request-details__blood-info">

          <div className="request-details__blood-icon">
            <Droplet size={30} />
          </div>

          <div>
            <p>
              Blood Type Required
            </p>

            <h2>
              O Positive
            </h2>
          </div>

        </div>

        <span className="request-details__urgency">
          <AlertTriangle size={16} />
          Urgent
        </span>

      </section>


      {/* Request Information */}
      <section className="request-details__card">

        <div className="request-details__card-header">
          <h2>
            Request Information
          </h2>

          <p>
            Details about the blood request
          </p>
        </div>


        <div className="request-details__info-grid">

          <div className="request-details__info-item">

            <div className="request-details__info-icon">
              <Building2 size={19} />
            </div>

            <div>
              <span>Hospital</span>
              <strong>
                Lagos University Teaching Hospital
              </strong>
            </div>

          </div>


          <div className="request-details__info-item">

            <div className="request-details__info-icon">
              <MapPin size={19} />
            </div>

            <div>
              <span>Location</span>
              <strong>
                Idi-Araba, Lagos
              </strong>
            </div>

          </div>


          <div className="request-details__info-item">

            <div className="request-details__info-icon">
              <Package size={19} />
            </div>

            <div>
              <span>Blood Units Needed</span>
              <strong>
                2 Units
              </strong>
            </div>

          </div>


          <div className="request-details__info-item">

            <div className="request-details__info-icon">
              <Navigation size={19} />
            </div>

            <div>
              <span>Distance</span>
              <strong>
                4.2 km away
              </strong>
            </div>

          </div>

        </div>

      </section>


      {/* Important Notice */}
      <section className="request-details__notice">

        <div className="request-details__notice-icon">
          <AlertTriangle size={21} />
        </div>

        <div>
          <h2>
            Before responding
          </h2>

          <p>
            Please make sure you are eligible to donate blood and are
            physically able to reach the hospital. The hospital will
            confirm your eligibility before donation.
          </p>
        </div>

      </section>


      {/* Action */}
      <section className="request-details__action">

        <div className="request-details__action-content">

          <div className="request-details__action-icon">
            <HeartHandshake size={23} />
          </div>

          <div>
            <h2>
              Can you help?
            </h2>

            <p>
              Let the hospital know that you are willing to respond.
            </p>
          </div>

        </div>


        <button
          type="button"
          className="request-details__donate-button"
        >
          <Droplet size={18} />
          I Can Donate
        </button>

      </section>

    </div>
  );
}

export default RequestDetails;
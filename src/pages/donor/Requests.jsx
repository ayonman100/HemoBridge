import { Link } from "react-router-dom";
import {
  Search,
  MapPin,
  Car,
  Droplet,
} from "lucide-react";
import "./Requests.css";

function Requests() {
  const bloodRequests = [
    {
      id: 1,
      bloodType: "O+",
      title: "Emergency Blood Request",
      hospital: "Lagos University Teaching Hospital",
      location: "Idi-Araba, Lagos",
      distance: "4.2 km away",
      units: 2,
      urgency: "Urgent",
    },
    {
      id: 2,
      bloodType: "O+",
      title: "Blood Donation Needed",
      hospital: "General Hospital Lagos",
      location: "Gbagada, Lagos",
      distance: "7.8 km away",
      units: 3,
      urgency: "High Priority",
    },
    {
      id: 3,
      bloodType: "O+",
      title: "Patient Blood Requirement",
      hospital: "Reddington Hospital",
      location: "Victoria Island, Lagos",
      distance: "11.5 km away",
      units: 1,
      urgency: "Normal",
    },
  ];

  return (
    <div className="donor-requests">

      {/* Page Header */}
      <section className="requests-header">
        <p>Help someone in need</p>

        <h1>Blood Requests</h1>

        <span>
          Find blood requests that match your blood type.
        </span>
      </section>

      {/* Search and Filter */}
      <section className="requests-filter">

        <div className="requests-search">
          <Search size={19} />

          <input
            type="text"
            placeholder="Search hospitals or locations..."
          />
        </div>

        <select defaultValue="O+">
          <option value="O+">O+ requests</option>
          <option value="A+">A+ requests</option>
          <option value="A-">A- requests</option>
          <option value="B+">B+ requests</option>
          <option value="B-">B- requests</option>
          <option value="AB+">AB+ requests</option>
          <option value="AB-">AB- requests</option>
          <option value="O-">O- requests</option>
        </select>

      </section>

      {/* Request Section */}
      <section>

        <div className="requests-section-header">

          <div>
            <h2>Nearby Requests</h2>

            <p>
              Requests that may match your blood type
            </p>
          </div>

          <span>
            {bloodRequests.length} requests
          </span>

        </div>

        {/* Request Cards */}
        <div className="requests-list">

          {bloodRequests.map((request) => (

            <article
              key={request.id}
              className="request-card"
            >

              <div className="request-main">

                {/* Blood Type */}
                <div className="request-blood-type">
                  <Droplet size={20} />
                  <span>{request.bloodType}</span>
                </div>

                {/* Information */}
                <div className="request-information">

                  <div className="request-title-row">

                    <h3>
                      {request.title}
                    </h3>

                    <span
                      className={`request-urgency ${request.urgency
                        .toLowerCase()
                        .replace(" ", "-")}`}
                    >
                      {request.urgency}
                    </span>

                  </div>

                  <p className="request-hospital">
                    {request.hospital}
                  </p>

                  <div className="request-meta">

                    <span>
                      <MapPin size={15} />
                      {request.location}
                    </span>

                    <span>
                      <Car size={15} />
                      {request.distance}
                    </span>

                  </div>

                </div>

              </div>

              {/* Right Side */}
              <div className="request-actions">

                <div className="blood-needed">

                  <span>
                    Blood needed
                  </span>

                  <strong>
                    {request.units}{" "}
                    {request.units === 1 ? "unit" : "units"}
                  </strong>

                </div>

                <Link
                  to={`/donor/requests/${request.id}`}
                  className="view-request-button"
                >
                  View Request
                </Link>

              </div>

            </article>

          ))}

        </div>

      </section>

    </div>
  );
}

export default Requests;
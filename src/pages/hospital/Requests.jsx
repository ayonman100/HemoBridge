import { Link } from "react-router-dom";
import "./Requests.css";

function Requests() {
  const requests = [
    {
      id: "HB-REQ-001",
      bloodType: "O+",
      units: 4,
      urgency: "Urgent",
      status: "Searching",
      date: "Aug 11, 2026",
      time: "10:32 AM",
      location: "Idi-Araba, Lagos",
    },
    {
      id: "HB-REQ-002",
      bloodType: "A-",
      units: 2,
      urgency: "Normal",
      status: "Matched",
      date: "Aug 11, 2026",
      time: "8:15 AM",
      location: "Idi-Araba, Lagos",
    },
    {
      id: "HB-REQ-003",
      bloodType: "B+",
      units: 3,
      urgency: "Critical",
      status: "Searching",
      date: "Aug 10, 2026",
      time: "4:45 PM",
      location: "Idi-Araba, Lagos",
    },
    {
      id: "HB-REQ-004",
      bloodType: "AB+",
      units: 2,
      urgency: "Normal",
      status: "Fulfilled",
      date: "Aug 8, 2026",
      time: "11:20 AM",
      location: "Idi-Araba, Lagos",
    },
  ];

  return (
    <div className="hospital-requests-page">

      {/* Page Header */}
      <section className="requests-header">

        <Link
          to="/hospital/dashboard"
          className="requests-back-link"
        >
          ← Back to Dashboard
        </Link>

        <h1>
          Blood Requests
        </h1>

        <p>
          View and manage blood requests from your hospital.
        </p>

      </section>

      {/* Summary */}
      <section className="requests-summary">

        <div className="summary-card">
          <p>Total Requests</p>
          <h2>12</h2>
        </div>

        <div className="summary-card">
          <p>Searching</p>
          <h2 className="summary-yellow">3</h2>
        </div>

        <div className="summary-card">
          <p>Matched</p>
          <h2 className="summary-blue">4</h2>
        </div>

        <div className="summary-card">
          <p>Fulfilled</p>
          <h2 className="summary-green">5</h2>
        </div>

      </section>

      {/* Actions and Filters */}
      <section className="requests-filters">

        <div className="filter-group">

          <select defaultValue="all">
            <option value="all">
              All Statuses
            </option>

            <option value="searching">
              Searching
            </option>

            <option value="matched">
              Matched
            </option>

            <option value="fulfilled">
              Fulfilled
            </option>
          </select>

          <select defaultValue="all">
            <option value="all">
              All Urgency
            </option>

            <option value="normal">
              Normal
            </option>

            <option value="urgent">
              Urgent
            </option>

            <option value="critical">
              Critical
            </option>
          </select>

        </div>

        <Link
          to="/hospital/request-blood"
          className="new-request-button"
        >
          + New Blood Request
        </Link>

      </section>

      {/* Request List */}
      <section className="request-list">

        <div className="request-list-header">

          <h2>
            Recent Requests
          </h2>

          <p>
            Your hospital's latest blood requests
          </p>

        </div>

        <div className="request-items">

          {requests.map((request) => (

            <div
              key={request.id}
              className="request-item"
            >

              <div className="request-item-content">

                {/* Request Information */}
                <div className="request-information">

                  <div className="blood-type-box">
                    {request.bloodType}
                  </div>

                  <div className="request-details">

                    <div className="request-title-row">

                      <h3>
                        {request.bloodType} Blood Request
                      </h3>

                      <span className="request-id">
                        {request.id}
                      </span>

                    </div>

                    <div className="request-meta">

                      <span>
                        🩸 {request.units} units
                      </span>

                      <span>
                        📍 {request.location}
                      </span>

                      <span>
                        🕒 {request.date} • {request.time}
                      </span>

                    </div>

                  </div>

                </div>

                {/* Status */}
                <div className="request-actions">

                  <span
                    className={`status-badge urgency-${request.urgency
                      .toLowerCase()
                      .replace(" ", "-")}`}
                  >
                    {request.urgency}
                  </span>

                  <span
                    className={`status-badge status-${request.status.toLowerCase()}`}
                  >
                    {request.status}
                  </span>

                  <Link
                    to={`/hospital/requests/${request.id}`}
                    className="view-button"
                  >
                    View
                  </Link>

                </div>

              </div>

            </div>

          ))}

        </div>

      </section>

      {/* Information Note */}
      <section className="requests-note">

        <span className="note-icon">
          💡
        </span>

        <p>
          Request statuses will update automatically once the HemoBridge
          matching and blood inventory systems are connected.
        </p>

      </section>

    </div>
  );
}

export default Requests;
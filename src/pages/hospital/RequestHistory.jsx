import { Link } from "react-router-dom";
import "./RequestHistory.css";

function RequestHistory() {
  const history = [
    {
      id: "HB-REQ-004",
      bloodType: "AB+",
      units: 2,
      status: "Fulfilled",
      date: "August 8, 2026",
      location: "Idi-Araba, Lagos",
      source: "Lagos Blood Donation Centre",
    },
    {
      id: "HB-REQ-005",
      bloodType: "O-",
      units: 3,
      status: "Fulfilled",
      date: "July 29, 2026",
      location: "Idi-Araba, Lagos",
      source: "National Blood Service Commission",
    },
    {
      id: "HB-REQ-006",
      bloodType: "A+",
      units: 2,
      status: "Cancelled",
      date: "July 18, 2026",
      location: "Idi-Araba, Lagos",
      source: "No source assigned",
    },
    {
      id: "HB-REQ-007",
      bloodType: "B+",
      units: 5,
      status: "Expired",
      date: "July 10, 2026",
      location: "Idi-Araba, Lagos",
      source: "No source assigned",
    },
  ];

  return (
    <div className="hospital-request-history">

      {/* Header */}
      <section className="history-page-header">

        <Link
          to="/hospital/requests"
          className="history-back-link"
        >
          ← Back to Requests
        </Link>

        <h1>Request History</h1>

        <p>
          Review previous blood requests from your hospital.
        </p>

      </section>


      {/* Summary */}
      <section className="history-summary">

        <div className="history-summary-card">
          <p>Fulfilled</p>

          <h2 className="summary-success">
            8
          </h2>

          <span>
            Successfully completed
          </span>
        </div>


        <div className="history-summary-card">
          <p>Cancelled</p>

          <h2>
            2
          </h2>

          <span>
            Cancelled requests
          </span>
        </div>


        <div className="history-summary-card">
          <p>Expired</p>

          <h2>
            2
          </h2>

          <span>
            Requests that expired
          </span>
        </div>

      </section>


      {/* Filters */}
      <section className="history-filters">

        <div className="history-filter-controls">

          <select defaultValue="all">
            <option value="all">
              All Statuses
            </option>

            <option value="fulfilled">
              Fulfilled
            </option>

            <option value="cancelled">
              Cancelled
            </option>

            <option value="expired">
              Expired
            </option>
          </select>


          <input
            type="text"
            placeholder="Search request ID..."
          />

        </div>


        <Link
          to="/hospital/requests"
          className="active-requests-link"
        >
          View active requests →
        </Link>

      </section>


      {/* History */}
      <section className="history-container">

        <div className="history-header">

          <h2>
            Previous Requests
          </h2>

          <p>
            Your hospital's completed and closed requests.
          </p>

        </div>


        <div className="history-list">

          {history.map((request) => (

            <div
              key={request.id}
              className="history-item"
            >

              {/* Request Information */}
              <div className="history-request">

                <div className="history-blood-type">
                  {request.bloodType}
                </div>


                <div className="history-request-info">

                  <div className="history-title-row">

                    <h3>
                      {request.bloodType} Blood Request
                    </h3>

                    <span>
                      {request.id}
                    </span>

                  </div>


                  <div className="history-details">

                    <span>
                      🩸 {request.units} units
                    </span>

                    <span>
                      📅 {request.date}
                    </span>

                    <span>
                      📍 {request.location}
                    </span>

                  </div>


                  <p className="history-source">
                    Source: {request.source}
                  </p>

                </div>

              </div>


              {/* Status */}
              <div className="history-actions">

                <span
                  className={`request-status ${
                    request.status === "Fulfilled"
                      ? "status-fulfilled"
                      : request.status === "Cancelled"
                      ? "status-cancelled"
                      : "status-expired"
                  }`}
                >
                  {request.status}
                </span>


                <button
                  type="button"
                  className="history-view-button"
                >
                  View
                </button>

              </div>

            </div>

          ))}

        </div>

      </section>

    </div>
  );
}

export default RequestHistory;
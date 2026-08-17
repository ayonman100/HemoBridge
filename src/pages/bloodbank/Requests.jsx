import { Link } from "react-router-dom";
import {
  ArrowLeft,
  CalendarDays,
  Check,
  CheckCircle,
  Clock,
  Droplets,
  Eye,
  Info,
  MapPin,
  Search,
  X,
} from "lucide-react";
import "./Requests.css";

function Requests() {
  const requests = [
    {
      id: "HB-REQ-001",
      hospital: "Lagos University Teaching Hospital",
      location: "Idi-Araba, Lagos",
      bloodType: "O+",
      units: 4,
      urgency: "Critical",
      status: "Pending",
      date: "August 11, 2026",
      time: "10:32 AM",
    },
    {
      id: "HB-REQ-002",
      hospital: "Reddington Hospital",
      location: "Victoria Island, Lagos",
      bloodType: "A+",
      units: 3,
      urgency: "Urgent",
      status: "Pending",
      date: "August 11, 2026",
      time: "9:48 AM",
    },
    {
      id: "HB-REQ-003",
      hospital: "St. Nicholas Hospital",
      location: "Lagos Island, Lagos",
      bloodType: "B+",
      units: 2,
      urgency: "Normal",
      status: "Approved",
      date: "August 11, 2026",
      time: "8:15 AM",
    },
    {
      id: "HB-REQ-004",
      hospital: "Gbagada General Hospital",
      location: "Gbagada, Lagos",
      bloodType: "AB+",
      units: 2,
      urgency: "Urgent",
      status: "Fulfilled",
      date: "August 10, 2026",
      time: "4:20 PM",
    },
    {
      id: "HB-REQ-005",
      hospital: "Lagos State University Teaching Hospital",
      location: "Ikeja, Lagos",
      bloodType: "O-",
      units: 3,
      urgency: "Critical",
      status: "Pending",
      date: "August 10, 2026",
      time: "2:45 PM",
    },
  ];

  return (
    <div className="bloodbank-requests">

      {/* Header */}
      <section className="requests-header">

        <Link to="/bloodbank/dashboard" className="back-link">
          <ArrowLeft size={16} />
          Back to Dashboard
        </Link>

        <div className="requests-header-content">

          <div>
            <h1>Blood Requests</h1>

            <p>
              Review and manage blood requests from hospitals.
            </p>
          </div>

          <div className="pending-badge">
            <Clock size={16} />
            3 Pending Requests
          </div>

        </div>

      </section>

      {/* Summary */}
      <section className="request-summary">

        <div className="summary-card">
          <div className="summary-icon total-icon">
            <Droplets size={21} />
          </div>

          <div>
            <p>Total Requests</p>
            <h3>24</h3>
            <span>This month</span>
          </div>
        </div>

        <div className="summary-card">
          <div className="summary-icon pending-icon">
            <Clock size={21} />
          </div>

          <div>
            <p>Pending</p>
            <h3>3</h3>
            <span>Need attention</span>
          </div>
        </div>

        <div className="summary-card">
          <div className="summary-icon approved-icon">
            <CheckCircle size={21} />
          </div>

          <div>
            <p>Approved</p>
            <h3>6</h3>
            <span>Being processed</span>
          </div>
        </div>

        <div className="summary-card">
          <div className="summary-icon fulfilled-icon">
            <Check size={21} />
          </div>

          <div>
            <p>Fulfilled</p>
            <h3>15</h3>
            <span>Successfully completed</span>
          </div>
        </div>

      </section>

      {/* Filters */}
      <section className="request-filters">

        <div className="filter-group">

          <select defaultValue="all">
            <option value="all">All Statuses</option>
            <option value="pending">Pending</option>
            <option value="approved">Approved</option>
            <option value="fulfilled">Fulfilled</option>
          </select>

          <select defaultValue="all">
            <option value="all">All Urgency</option>
            <option value="critical">Critical</option>
            <option value="urgent">Urgent</option>
            <option value="normal">Normal</option>
          </select>

        </div>

        <div className="request-search">
          <Search size={18} />

          <input
            type="text"
            placeholder="Search request or hospital..."
          />
        </div>

      </section>

      {/* Request List */}
      <section className="requests-container">

        <div className="requests-container-header">

          <div>
            <h2>Incoming Requests</h2>

            <p>
              Hospital requests requiring blood bank action.
            </p>
          </div>

          <span className="request-count">
            {requests.length} requests
          </span>

        </div>

        <div className="requests-list">

          {requests.map((request) => (

            <article
              key={request.id}
              className="request-card"
            >

              {/* Main Request Information */}
              <div className="request-main">

                <div
                  className={`blood-type-box ${request.urgency.toLowerCase()}`}
                >
                  <Droplets size={17} />
                  <strong>{request.bloodType}</strong>
                </div>

                <div className="request-information">

                  <div className="request-title">

                    <h3>{request.hospital}</h3>

                    <span className="request-id">
                      {request.id}
                    </span>

                  </div>

                  <div className="request-details">

                    <span>
                      <Droplets size={15} />
                      {request.units} units of {request.bloodType}
                    </span>

                    <span>
                      <MapPin size={15} />
                      {request.location}
                    </span>

                    <span>
                      <CalendarDays size={15} />
                      {request.date}
                    </span>

                  </div>

                  <div className="submitted-time">
                    <Clock size={14} />
                    Submitted at {request.time}
                  </div>

                </div>

              </div>

              {/* Actions */}
              <div className="request-actions">

                <span
                  className={`urgency-badge ${request.urgency.toLowerCase()}`}
                >
                  {request.urgency}
                </span>

                <span
                  className={`status-badge ${request.status.toLowerCase()}`}
                >
                  {request.status}
                </span>

                {request.status === "Pending" && (
                  <>
                    <button className="approve-button">
                      <Check size={16} />
                      Approve
                    </button>

                    <button className="decline-button">
                      <X size={16} />
                      Decline
                    </button>
                  </>
                )}

                {request.status === "Approved" && (
                  <button className="fulfill-button">
                    <CheckCircle size={16} />
                    Fulfill
                  </button>
                )}

                <button className="view-button">
                  <Eye size={16} />
                  View
                </button>

              </div>

            </article>

          ))}

        </div>

      </section>

      {/* Important Notice */}
      <section className="request-notice">

        <div className="notice-icon">
          <Info size={21} />
        </div>

        <div>
          <h2>Request processing</h2>

          <p>
            Before approving a request, confirm that enough compatible
            blood is available. Approved units should be reserved so
            they cannot be allocated to another hospital request.
          </p>
        </div>

      </section>

    </div>
  );
}

export default Requests;
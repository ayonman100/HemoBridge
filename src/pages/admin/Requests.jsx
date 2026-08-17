import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Download,
  Search,
  ChevronDown,
  Eye,
  ClipboardList,
  AlertTriangle,
  Clock3,
  CheckCircle2,
  XCircle,
  Droplets,
  MapPin,
} from "lucide-react";
import "./Requests.css";

function Requests() {
  const requests = [
    {
      id: "REQ-1048",
      hospital: "Lagos University Teaching Hospital",
      bloodType: "O+",
      units: 4,
      priority: "Emergency",
      location: "Idi-Araba, Lagos",
      status: "Searching",
      date: "Aug 11, 2026",
    },
    {
      id: "REQ-1047",
      hospital: "Mainland General Hospital",
      bloodType: "A+",
      units: 2,
      priority: "Urgent",
      location: "Lagos Mainland",
      status: "Fulfilled",
      date: "Aug 11, 2026",
    },
    {
      id: "REQ-1046",
      hospital: "Reddington Hospital",
      bloodType: "O-",
      units: 3,
      priority: "Emergency",
      location: "Victoria Island",
      status: "Searching",
      date: "Aug 10, 2026",
    },
    {
      id: "REQ-1045",
      hospital: "St. Nicholas Hospital",
      bloodType: "B+",
      units: 2,
      priority: "Normal",
      location: "Lagos Island",
      status: "Pending",
      date: "Aug 10, 2026",
    },
    {
      id: "REQ-1044",
      hospital: "Mercy Medical Centre",
      bloodType: "AB+",
      units: 1,
      priority: "Urgent",
      location: "Surulere, Lagos",
      status: "Cancelled",
      date: "Aug 9, 2026",
    },
  ];

  const [statusFilter, setStatusFilter] = useState("all");
  const [priorityFilter, setPriorityFilter] = useState("all");
  const [bloodFilter, setBloodFilter] = useState("all");
  const [search, setSearch] = useState("");

  const filteredRequests = useMemo(() => {
    return requests.filter((request) => {
      const matchesStatus =
        statusFilter === "all" ||
        request.status.toLowerCase() === statusFilter;

      const matchesPriority =
        priorityFilter === "all" ||
        request.priority.toLowerCase() === priorityFilter;

      const matchesBlood =
        bloodFilter === "all" ||
        request.bloodType.toLowerCase() === bloodFilter;

      const searchValue = search.toLowerCase();

      const matchesSearch =
        request.id.toLowerCase().includes(searchValue) ||
        request.hospital.toLowerCase().includes(searchValue) ||
        request.location.toLowerCase().includes(searchValue) ||
        request.bloodType.toLowerCase().includes(searchValue);

      return (
        matchesStatus &&
        matchesPriority &&
        matchesBlood &&
        matchesSearch
      );
    });
  }, [statusFilter, priorityFilter, bloodFilter, search]);

  const getPriorityClass = (priority) => {
    if (priority === "Emergency") return "priority-emergency";
    if (priority === "Urgent") return "priority-urgent";
    return "priority-normal";
  };

  const getStatusClass = (status) => {
    if (status === "Fulfilled") return "status-fulfilled";
    if (status === "Searching") return "status-searching";
    if (status === "Pending") return "status-pending";
    return "status-cancelled";
  };

  const getStatusIcon = (status) => {
    if (status === "Fulfilled") return <CheckCircle2 size={14} />;
    if (status === "Searching") return <Search size={14} />;
    if (status === "Pending") return <Clock3 size={14} />;
    return <XCircle size={14} />;
  };

  return (
    <div className="requests-page">

      {/* Header */}
      <section className="requests-header">

        <Link to="/admin/dashboard" className="back-link">
          <ArrowLeft size={16} />
          <span>Back to Dashboard</span>
        </Link>

        <div className="requests-header-content">

          <div>
            <div className="page-title-row">
              <div className="page-title-icon">
                <ClipboardList size={24} />
              </div>

              <div>
                <h1>Blood Requests</h1>

                <p>
                  Monitor blood requests submitted by hospitals
                  across the network.
                </p>
              </div>
            </div>
          </div>

          <button className="export-btn">
            <Download size={18} />
            <span>Export Requests</span>
          </button>

        </div>
      </section>

      {/* Statistics */}
      <section className="request-stats">

        <div className="request-stat-card">
          <div className="stat-icon stat-icon-blue">
            <ClipboardList size={21} />
          </div>

          <div>
            <p>Total Requests</p>
            <h2>248</h2>
            <span>All requests</span>
          </div>
        </div>

        <div className="request-stat-card">
          <div className="stat-icon stat-icon-red">
            <AlertTriangle size={21} />
          </div>

          <div>
            <p>Emergency</p>
            <h2 className="red-number">18</h2>
            <span className="red-text">
              Require immediate attention
            </span>
          </div>
        </div>

        <div className="request-stat-card">
          <div className="stat-icon stat-icon-yellow">
            <Clock3 size={21} />
          </div>

          <div>
            <p>Searching</p>
            <h2 className="yellow-number">31</h2>
            <span>Looking for matching blood</span>
          </div>
        </div>

        <div className="request-stat-card">
          <div className="stat-icon stat-icon-green">
            <CheckCircle2 size={21} />
          </div>

          <div>
            <p>Fulfilled</p>
            <h2 className="green-number">199</h2>
            <span>Successfully completed</span>
          </div>
        </div>

      </section>

      {/* Filters */}
      <section className="request-filters">

        <div className="filter-group">

          <div className="select-wrapper">
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option value="all">All Statuses</option>
              <option value="searching">Searching</option>
              <option value="pending">Pending</option>
              <option value="fulfilled">Fulfilled</option>
              <option value="cancelled">Cancelled</option>
            </select>

            <ChevronDown size={17} />
          </div>

          <div className="select-wrapper">
            <select
              value={priorityFilter}
              onChange={(e) => setPriorityFilter(e.target.value)}
            >
              <option value="all">All Priorities</option>
              <option value="emergency">Emergency</option>
              <option value="urgent">Urgent</option>
              <option value="normal">Normal</option>
            </select>

            <ChevronDown size={17} />
          </div>

          <div className="select-wrapper">
            <select
              value={bloodFilter}
              onChange={(e) => setBloodFilter(e.target.value)}
            >
              <option value="all">All Blood Types</option>
              <option value="o+">O+</option>
              <option value="o-">O-</option>
              <option value="a+">A+</option>
              <option value="a-">A-</option>
              <option value="b+">B+</option>
              <option value="b-">B-</option>
              <option value="ab+">AB+</option>
              <option value="ab-">AB-</option>
            </select>

            <ChevronDown size={17} />
          </div>

        </div>

        <div className="search-box">
          <Search size={18} />

          <input
            type="text"
            placeholder="Search requests..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

      </section>

      {/* Requests Table */}
      <section className="requests-table-card">

        <div className="table-heading">
          <div>
            <h2>Recent Requests</h2>

            <p>
              Recent blood requests submitted through HemoBridge.
            </p>
          </div>

          <span className="request-count">
            {filteredRequests.length} requests
          </span>
        </div>

        {/* Desktop */}
        <div className="desktop-table">

          <table>

            <thead>
              <tr>
                <th>Request</th>
                <th>Hospital</th>
                <th>Blood</th>
                <th>Priority</th>
                <th>Status</th>
                <th>Date</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>

              {filteredRequests.length > 0 ? (
                filteredRequests.map((request) => (
                  <tr key={request.id}>

                    <td>
                      <div className="request-id">
                        <span>{request.id}</span>

                        <small>
                          {request.units} unit
                          {request.units > 1 ? "s" : ""}
                        </small>
                      </div>
                    </td>

                    <td>
                      <div className="hospital-info">
                        <strong>{request.hospital}</strong>

                        <span>
                          <MapPin size={13} />
                          {request.location}
                        </span>
                      </div>
                    </td>

                    <td>
                      <span className="blood-badge">
                        <Droplets size={13} />
                        {request.bloodType}
                      </span>
                    </td>

                    <td>
                      <span
                        className={`priority-badge ${getPriorityClass(
                          request.priority
                        )}`}
                      >
                        {request.priority === "Emergency" && (
                          <AlertTriangle size={13} />
                        )}

                        {request.priority}
                      </span>
                    </td>

                    <td>
                      <span
                        className={`status-badge ${getStatusClass(
                          request.status
                        )}`}
                      >
                        {getStatusIcon(request.status)}
                        {request.status}
                      </span>
                    </td>

                    <td className="request-date">
                      {request.date}
                    </td>

                    <td className="action-cell">
                      <button className="view-btn">
                        <Eye size={16} />
                        View
                      </button>
                    </td>

                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7">
                    <div className="empty-state">
                      <Search size={30} />
                      <h3>No requests found</h3>
                      <p>
                        Try changing your filters or search term.
                      </p>
                    </div>
                  </td>
                </tr>
              )}

            </tbody>

          </table>

        </div>

        {/* Mobile */}
        <div className="mobile-requests">

          {filteredRequests.length > 0 ? (
            filteredRequests.map((request) => (
              <div className="mobile-request-card" key={request.id}>

                <div className="mobile-request-top">

                  <div>
                    <strong>{request.id}</strong>

                    <p>{request.hospital}</p>
                  </div>

                  <span className="blood-badge">
                    <Droplets size={13} />
                    {request.bloodType}
                  </span>

                </div>

                <div className="mobile-request-location">
                  <MapPin size={14} />
                  {request.location}
                </div>

                <div className="mobile-request-details">

                  <div>
                    <span>Units</span>
                    <strong>{request.units}</strong>
                  </div>

                  <div>
                    <span>Priority</span>

                    <strong
                      className={`mobile-priority ${getPriorityClass(
                        request.priority
                      )}`}
                    >
                      {request.priority}
                    </strong>
                  </div>

                  <div>
                    <span>Status</span>

                    <strong
                      className={`mobile-status ${getStatusClass(
                        request.status
                      )}`}
                    >
                      {request.status}
                    </strong>
                  </div>

                  <div>
                    <span>Date</span>
                    <strong>{request.date}</strong>
                  </div>

                </div>

                <button className="mobile-view-btn">
                  <Eye size={16} />
                  View Request
                </button>

              </div>
            ))
          ) : (
            <div className="mobile-empty-state">
              <Search size={30} />
              <h3>No requests found</h3>
              <p>Try changing your filters or search term.</p>
            </div>
          )}

        </div>

      </section>

    </div>
  );
}

export default Requests;
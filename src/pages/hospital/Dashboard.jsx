import { Link } from "react-router-dom";
import {
  Droplet,
  Search,
  ClipboardList,
  AlertTriangle,
  Building2,
  Clock3,
  CheckCircle2,
} from "lucide-react";

import SubscriptionCard from "../../components/subscription/SubscriptionCard";
import "./Dashboard.css";

function Dashboard() {
  const stats = [
    {
      title: "Active Requests",
      value: "3",
      subtitle: "Requests currently searching",
      icon: <AlertTriangle size={24} />,
    },
    {
      title: "Blood Units Received",
      value: "24",
      subtitle: "Units received this month",
      icon: <Droplet size={24} />,
    },
    {
      title: "Pending Requests",
      value: "2",
      subtitle: "Awaiting fulfilment",
      icon: <Clock3 size={24} />,
    },
  ];

  const requests = [
    {
      id: 1,
      blood: "O+",
      units: "4 units",
      urgency: "Urgent",
      status: "Searching",
      date: "Today, 10:32 AM",
    },
    {
      id: 2,
      blood: "A-",
      units: "2 units",
      urgency: "Normal",
      status: "Matched",
      date: "Today, 8:15 AM",
    },
    {
      id: 3,
      blood: "B+",
      units: "3 units",
      urgency: "Urgent",
      status: "Searching",
      date: "Yesterday",
    },
  ];

  return (
    <div className="hospital-dashboard">

      {/* =====================================================
          PAGE HEADER
      ===================================================== */}

      <section className="hospital-page-header">
        <p>Hospital Portal</p>

        <h1>Hospital Dashboard</h1>

        <span>
          Monitor blood requests, availability, and fulfilment.
        </span>
      </section>


      {/* =====================================================
          SUBSCRIPTION
      ===================================================== */}

      <section className="hospital-subscription">
        <SubscriptionCard
          trialActive={true}
          trialDaysRemaining={5}
        />
      </section>


      {/* =====================================================
          HOSPITAL OVERVIEW
      ===================================================== */}

      <section className="hospital-overview">

        <div className="hospital-overview-main">

          <div className="hospital-overview-icon">
            <Building2 size={26} />
          </div>

          <div>
            <p className="hospital-overview-label">
              Registered Hospital
            </p>

            <h2>
              Lagos University Teaching Hospital
            </h2>

            <p className="hospital-location">
              Idi-Araba, Lagos
            </p>
          </div>

        </div>

        <div className="verified-hospital">
          <CheckCircle2 size={16} />
          <span>Verified Hospital</span>
        </div>

      </section>


      {/* =====================================================
          STATS
      ===================================================== */}

      <section className="hospital-stats">

        {stats.map((stat) => (
          <div
            key={stat.title}
            className="hospital-stat-card"
          >

            <div className="hospital-stat-content">

              <p>
                {stat.title}
              </p>

              <strong>
                {stat.value}
              </strong>

              <span>
                {stat.subtitle}
              </span>

            </div>

            <div className="hospital-stat-icon">
              {stat.icon}
            </div>

          </div>
        ))}

      </section>


      {/* =====================================================
          QUICK ACTIONS
      ===================================================== */}

      <section className="hospital-quick-actions">

        <h2>
          Quick Actions
        </h2>

        <div className="hospital-action-grid">

          {/* Request Blood */}

          <Link
            to="/hospital/request-blood"
            className="hospital-action-card hospital-action-primary"
          >
            <div className="hospital-action-icon">
              <Droplet size={30} />
            </div>

            <h3>
              Request Blood
            </h3>

            <p>
              Create a new blood request for your hospital.
            </p>
          </Link>


          {/* Search Blood */}

          <Link
            to="/hospital/search-blood"
            className="hospital-action-card"
          >
            <div className="hospital-action-icon">
              <Search size={30} />
            </div>

            <h3>
              Search Blood
            </h3>

            <p>
              Check available blood units from nearby sources.
            </p>
          </Link>


          {/* Manage Requests */}

          <Link
            to="/hospital/requests"
            className="hospital-action-card"
          >
            <div className="hospital-action-icon">
              <ClipboardList size={30} />
            </div>

            <h3>
              Manage Requests
            </h3>

            <p>
              View and manage your hospital's blood requests.
            </p>
          </Link>

        </div>

      </section>


      {/* =====================================================
          ACTIVE REQUESTS
      ===================================================== */}

      <section className="hospital-active-requests">

        <div className="hospital-section-heading">

          <div>
            <h2>
              Active Blood Requests
            </h2>

            <p>
              Recent requests from your hospital
            </p>
          </div>

          <Link to="/hospital/requests">
            View all
          </Link>

        </div>


        <div className="hospital-request-list">

          {requests.map((request) => (

            <div
              key={request.id}
              className="hospital-request-card"
            >

              {/* Request Information */}

              <div className="hospital-request-main">

                <div className="hospital-request-blood">
                  <Droplet size={18} />
                  <span>{request.blood}</span>
                </div>

                <div>
                  <h3>
                    {request.blood} Blood Request
                  </h3>

                  <p>
                    {request.units} • {request.date}
                  </p>
                </div>

              </div>


              {/* Request Status */}

              <div className="hospital-request-status">

                <span
                  className={`request-urgency ${
                    request.urgency.toLowerCase()
                  }`}
                >
                  {request.urgency}
                </span>

                <span
                  className={`request-status ${
                    request.status.toLowerCase()
                  }`}
                >
                  {request.status}
                </span>

                <Link
                  to={`/hospital/requests/${request.id}`}
                >
                  View
                </Link>

              </div>

            </div>

          ))}

        </div>

      </section>


      {/* =====================================================
          EMERGENCY NOTICE
      ===================================================== */}

      <section className="hospital-emergency">

        <div className="hospital-emergency-icon">
          <AlertTriangle size={24} />
        </div>

        <div className="hospital-emergency-content">

          <h2>
            Need blood urgently?
          </h2>

          <p>
            Create an urgent request and HemoBridge will help identify
            compatible blood sources and potential donors.
          </p>

          <Link to="/hospital/request-blood">
            Create Urgent Request
          </Link>

        </div>

      </section>

    </div>
  );
}

export default Dashboard;
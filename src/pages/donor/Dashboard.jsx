import { Link } from "react-router-dom";
import {
  Droplet,
  Heart,
  HandHeart,
  MapPin,
  AlertTriangle,
  History,
  CalendarCheck,
} from "lucide-react";

import "./dashboard.css";

import StatCard from "../../components/dashboard/StatCard";
import MapCard from "../../components/dashboard/MapCard";

function Dashboard() {
  const donor = {
    name: "Donor",
    bloodType: "O+",
    totalDonations: 6,
    livesHelped: 18,
    eligible: true,
    nextDonationDate: "August 28, 2026",
  };

  const nearbyRequest = {
    bloodType: "O+",
    title: "Emergency Blood Request",
    hospital: "Lagos University Teaching Hospital",
    distance: "4.2 km away",
    unitsNeeded: 2,
    urgency: "Urgent",
  };

  return (
    <div className="donor-dashboard px-4 sm:px-6 lg:px-8 xl:px-10">

      {/* PAGE HEADER */}
      <section className="donor-page-header">
        <p className="donor-welcome">
          Welcome back
        </p>

        <h1>
          {donor.name} Dashboard
        </h1>

        <p className="donor-header-description">
          Manage your donations and help save lives.
        </p>
      </section>


      {/* DONATION AVAILABILITY */}
      <section className="donor-availability-card">

        <div className="donor-availability-content">

          <div>
            <p className="donor-section-label">
              Donation Availability
            </p>

            <h2>
              {donor.eligible
                ? "You are eligible to donate"
                : "You are currently unavailable"}
            </h2>

            <p className="donor-blood-text">
              Your blood type is{" "}
              <strong>{donor.bloodType}</strong>.
            </p>

            {donor.eligible && (
              <p className="donor-next-date">
                <CalendarCheck size={16} />

                <span>
                  Next eligible donation date:{" "}
                  <strong>{donor.nextDonationDate}</strong>
                </span>
              </p>
            )}
          </div>


          <div
            className={`donor-status ${
              donor.eligible
                ? "donor-status-available"
                : "donor-status-unavailable"
            }`}
          >
            <span className="donor-status-dot" />

            {donor.eligible
              ? "Available"
              : "Unavailable"}
          </div>

        </div>

      </section>


      {/* STATS */}
      <section className="donor-stats-grid">

        <StatCard
          title="Blood Type"
          value={donor.bloodType}
          subtitle="Your registered blood group"
          icon={<Droplet size={24} />}
        />

        <StatCard
          title="Total Donations"
          value={donor.totalDonations}
          subtitle="Donations completed"
          icon={<Heart size={24} />}
        />

        <StatCard
          title="Lives Potentially Helped"
          value={donor.livesHelped}
          subtitle="Based on your donations"
          icon={<HandHeart size={24} />}
        />

      </section>


      {/* QUICK ACTIONS */}
      <section className="donor-quick-actions">

        <h2 className="donor-content-title">
          Quick Actions
        </h2>

        <div className="donor-actions-grid">

          {/* FIND CENTRES */}
          <Link
            to="/donor/nearby-centres"
            className="donor-action-card donor-action-primary"
          >
            <div className="donor-action-icon">
              <MapPin size={30} />
            </div>

            <h3>
              Find Donation Centres
            </h3>

            <p>
              Find nearby places where you can donate blood.
            </p>
          </Link>


          {/* BLOOD REQUESTS */}
          <Link
            to="/donor/requests"
            className="donor-action-card donor-action-secondary"
          >
            <div className="donor-action-icon donor-action-icon-red">
              <AlertTriangle size={30} />
            </div>

            <h3>
              Blood Requests
            </h3>

            <p>
              View nearby requests that may need your blood type.
            </p>
          </Link>


          {/* DONATION HISTORY */}
          <Link
            to="/donor/donation-history"
            className="donor-action-card donor-action-secondary"
          >
            <div className="donor-action-icon donor-action-icon-red">
              <History size={30} />
            </div>

            <h3>
              Donation History
            </h3>

            <p>
              Review your previous blood donations.
            </p>
          </Link>

        </div>

      </section>


      {/* MAP */}
      <section className="donor-map-section">

        <h2 className="donor-content-title">
          Nearby Donation Centres
        </h2>

        <MapCard />

      </section>


      {/* NEARBY BLOOD REQUEST */}
      <section className="donor-request-card">

        <div className="donor-request-header">

          <div>
            <h2>
              Nearby Blood Request
            </h2>

            <p>
              Requests that may match your blood type
            </p>
          </div>

          <Link
            to="/donor/requests"
            className="donor-view-all"
          >
            View all
          </Link>

        </div>


        <div className="donor-request-content">

          <div className="donor-request-main">

            <div className="donor-request-tags">

              <span className="donor-blood-badge">
                <Droplet size={16} />
                {nearbyRequest.bloodType}
              </span>

              <span className="donor-urgency-badge">
                <AlertTriangle size={14} />
                {nearbyRequest.urgency}
              </span>

              <h3>
                {nearbyRequest.title}
              </h3>

            </div>


            <p className="donor-request-hospital">
              {nearbyRequest.hospital}
            </p>


            <div className="donor-request-details">

              <span>
                <MapPin size={15} />
                {nearbyRequest.distance}
              </span>

              <span>
                <Droplet size={15} />
                {nearbyRequest.unitsNeeded} units needed
              </span>

            </div>

          </div>


          <Link
            to="/donor/requests"
            className="donor-request-button"
          >
            View Request
          </Link>

        </div>

      </section>


      {/* DONATION REMINDER */}
      <section className="donor-reminder">

        <div className="donor-reminder-content">

          <div>

            <h2>
              <Droplet size={20} />
              Ready to make another difference?
            </h2>

            <p>
              Keep your donation history updated and help someone who needs
              your blood type.
            </p>

          </div>

          <Link
            to="/donor/nearby-centres"
            className="donor-reminder-button"
          >
            Find a Centre
          </Link>

        </div>

      </section>

    </div>
  );
}

export default Dashboard;
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Droplet,
  MapPin,
  CalendarDays,
  CheckCircle,
  Heart,
} from "lucide-react";

function DonationHistory() {
  const donations = [
    {
      id: "DON-001",
      date: "July 18, 2026",
      centre: "Lagos Blood Donation Centre",
      location: "Ikeja, Lagos",
      bloodType: "O+",
      units: 1,
      status: "Completed",
    },
    {
      id: "DON-002",
      date: "April 12, 2026",
      centre: "National Blood Service Commission",
      location: "Gbagada, Lagos",
      bloodType: "O+",
      units: 1,
      status: "Completed",
    },
    {
      id: "DON-003",
      date: "January 8, 2026",
      centre: "Lagos University Teaching Hospital",
      location: "Idi-Araba, Lagos",
      bloodType: "O+",
      units: 1,
      status: "Completed",
    },
    {
      id: "DON-004",
      date: "October 3, 2025",
      centre: "Lagos Blood Donation Centre",
      location: "Ikeja, Lagos",
      bloodType: "O+",
      units: 1,
      status: "Completed",
    },
    {
      id: "DON-005",
      date: "June 21, 2025",
      centre: "National Blood Service Commission",
      location: "Gbagada, Lagos",
      bloodType: "O+",
      units: 1,
      status: "Completed",
    },
    {
      id: "DON-006",
      date: "February 14, 2025",
      centre: "Lagos University Teaching Hospital",
      location: "Idi-Araba, Lagos",
      bloodType: "O+",
      units: 1,
      status: "Completed",
    },
  ];

  return (
    <div className="donation-history-page">

      {/* PAGE HEADER */}
      <section className="donation-history-header">

        <Link
          to="/donor/dashboard"
          className="donation-back-link"
        >
          <ArrowLeft size={16} />
          Back to Dashboard
        </Link>

        <h1>Donation History</h1>

        <p>
          Keep track of your previous blood donations.
        </p>

      </section>


      {/* SUMMARY CARDS */}
      <section className="donation-summary-grid">

        <div className="donation-summary-card">
          <p>Total Donations</p>

          <strong>6</strong>

          <span>Completed donations</span>
        </div>


        <div className="donation-summary-card donation-summary-highlight">
          <p>Blood Units Donated</p>

          <strong>6</strong>

          <span>Total units donated</span>
        </div>


        <div className="donation-summary-card">
          <p>Last Donation</p>

          <strong className="donation-last-date">
            July 18, 2026
          </strong>

          <span>
            Lagos Blood Donation Centre
          </span>
        </div>

      </section>


      {/* ELIGIBILITY */}
      <section className="donation-eligibility">

        <div className="donation-eligibility-icon">
          <CheckCircle size={22} />
        </div>

        <div>
          <h2>
            You are eligible to donate
          </h2>

          <p>
            Your next eligible donation date is October 18, 2026.
          </p>
        </div>

      </section>


      {/* DONATION LIST */}
      <section className="donation-list-card">

        <div className="donation-list-header">

          <h2>Your Donations</h2>

          <p>
            A record of your completed blood donations.
          </p>

        </div>


        <div className="donation-list">

          {donations.map((donation) => (

            <div
              key={donation.id}
              className="donation-item"
            >

              {/* LEFT */}
              <div className="donation-main">

                <div className="donation-icon">
                  <Droplet size={24} />
                </div>

                <div className="donation-details">

                  <div className="donation-title-row">

                    <h3>
                      Blood Donation
                    </h3>

                    <span>
                      {donation.id}
                    </span>

                  </div>

                  <p className="donation-centre">
                    {donation.centre}
                  </p>

                  <div className="donation-meta">

                    <span>
                      <MapPin size={15} />
                      {donation.location}
                    </span>

                    <span>
                      <CalendarDays size={15} />
                      {donation.date}
                    </span>

                  </div>

                </div>

              </div>


              {/* RIGHT */}
              <div className="donation-information">

                <div className="donation-info-box">
                  <span>Blood Type</span>
                  <strong>{donation.bloodType}</strong>
                </div>

                <div className="donation-info-box">
                  <span>Units</span>
                  <strong>{donation.units}</strong>
                </div>

                <span className="donation-status">
                  <CheckCircle size={14} />
                  {donation.status}
                </span>

              </div>

            </div>

          ))}

        </div>

      </section>


      {/* MOTIVATION */}
      <section className="donation-motivation">

        <div className="donation-motivation-icon">
          <Heart size={23} />
        </div>

        <div>

          <h2>
            Every donation matters
          </h2>

          <p>
            Your six donations have the potential to help multiple
            patients in need of blood. Thank you for being part of
            the HemoBridge donor community.
          </p>

        </div>

      </section>

    </div>
  );
}

export default DonationHistory;
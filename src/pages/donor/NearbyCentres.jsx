import {
  Search,
  MapPin,
  Hospital,
  Navigation,
  Clock,
  Droplet,
  Info,
} from "lucide-react";

import "./NearbyCentres.css";

import MapCard from "../../components/dashboard/MapCard";

function NearbyCentres() {
  const centres = [
    {
      id: 1,
      name: "Lagos University Teaching Hospital",
      location: "Idi-Araba, Lagos",
      distance: "4.2 km",
      status: "Open",
      hours: "Open until 5:00 PM",
    },
    {
      id: 2,
      name: "National Blood Service Commission",
      location: "Gbagada, Lagos",
      distance: "6.8 km",
      status: "Open",
      hours: "Open until 4:00 PM",
    },
    {
      id: 3,
      name: "Reddington Hospital",
      location: "Victoria Island, Lagos",
      distance: "9.5 km",
      status: "Open",
      hours: "Open until 6:00 PM",
    },
    {
      id: 4,
      name: "St. Nicholas Hospital",
      location: "Lagos Island, Lagos",
      distance: "11.2 km",
      status: "Closed",
      hours: "Opens tomorrow at 8:00 AM",
    },
  ];

  return (
    <div className="donor-nearby-centres">

      {/* PAGE HEADER */}

      <section className="nearby-header">

        <p className="nearby-eyebrow">
          Help save a life
        </p>

        <h1>
          Nearby Donation Centres
        </h1>

        <p className="nearby-description">
          Find blood donation centres near your location.
        </p>

      </section>


      {/* SEARCH / LOCATION */}

      <section className="nearby-search-card">

        <div className="nearby-search-row">

          <div className="nearby-search-box">

            <Search
              size={20}
              className="nearby-search-icon"
            />

            <input
              type="text"
              placeholder="Search by location or centre name"
            />

          </div>


          <button
            type="button"
            className="nearby-location-button"
          >
            <MapPin size={19} />

            Use My Location
          </button>

        </div>

      </section>


      {/* MAP */}

      <section className="nearby-map-section">

        <div className="nearby-section-heading">

          <div>
            <h2>
              Donation Centres Map
            </h2>

            <p>
              Explore nearby blood donation locations.
            </p>
          </div>

          <MapPin
            size={22}
            className="nearby-heading-icon"
          />

        </div>

        <MapCard />

      </section>


      {/* FILTERS */}

      <section className="nearby-filters">

        <button
          type="button"
          className="nearby-filter-active"
        >
          All Centres
        </button>

      </section>


      {/* RESULTS HEADER */}

      <div className="nearby-results-header">

        <div>

          <h2>
            Donation Centres
          </h2>

          <p>
            Centres available near you
          </p>

        </div>

        <span>
          {centres.length} centres
        </span>

      </div>


      {/* CENTRE LIST */}

      <section className="nearby-centres-list">

        {centres.map((centre) => (

          <div
            key={centre.id}
            className="nearby-centre-card"
          >

            <div className="nearby-centre-content">

              {/* Centre Information */}

              <div className="nearby-centre-info">

                <div className="nearby-centre-icon">
                  <Hospital size={24} />
                </div>

                <div className="nearby-centre-details">

                  <h3>
                    {centre.name}
                  </h3>

                  <p className="nearby-centre-location">
                    <MapPin size={15} />

                    {centre.location}
                  </p>

                  <div className="nearby-centre-meta">

                    <span>
                      <Navigation size={15} />

                      {centre.distance} away
                    </span>

                    <span
                      className={
                        centre.status === "Open"
                          ? "nearby-status nearby-status-open"
                          : "nearby-status nearby-status-closed"
                      }
                    >
                      {centre.status}
                    </span>

                    <span className="nearby-hours">
                      <Clock size={15} />

                      {centre.hours}
                    </span>

                  </div>

                </div>

              </div>


              {/* Actions */}

              <div className="nearby-centre-actions">

                <button
                  type="button"
                  className="nearby-details-button"
                >
                  <Hospital size={17} />

                  View Details
                </button>

                <button
                  type="button"
                  className="nearby-directions-button"
                >
                  <Navigation size={17} />

                  Get Directions
                </button>

              </div>

            </div>

          </div>

        ))}

      </section>


      {/* INFORMATION */}

      <section className="nearby-information">

        <div className="nearby-information-content">

          <div className="nearby-information-icon">
            <Info size={22} />
          </div>

          <div>

            <h2>
              Before you donate
            </h2>

            <p>
              Make sure you are feeling well and meet the donation
              requirements. The donation centre will carry out the
              necessary checks before your donation.
            </p>

          </div>

        </div>

      </section>


      {/* DONATION REMINDER */}

      <section className="nearby-reminder">

        <div className="nearby-reminder-content">

          <div className="nearby-reminder-icon">
            <Droplet size={22} />
          </div>

          <div>

            <h2>
              Your donation can make a difference
            </h2>

            <p>
              Find a convenient centre and keep your donation history
              up to date.
            </p>

          </div>

        </div>

      </section>

    </div>
  );
}

export default NearbyCentres;


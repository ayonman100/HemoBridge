import { Link } from "react-router-dom";
import "./SearchBlood.css";

function SearchBlood() {
  const results = [
    {
      id: 1,
      bloodType: "O+",
      source: "National Blood Service Commission",
      location: "Gbagada, Lagos",
      distance: "6.8 km",
      available: 12,
      verified: true,
      updated: "Updated 15 mins ago",
    },
    {
      id: 2,
      bloodType: "O+",
      source: "Lagos Blood Donation Centre",
      location: "Ikeja, Lagos",
      distance: "9.4 km",
      available: 7,
      verified: true,
      updated: "Updated 32 mins ago",
    },
    {
      id: 3,
      bloodType: "A+",
      source: "Reddington Hospital Blood Bank",
      location: "Victoria Island, Lagos",
      distance: "11.2 km",
      available: 5,
      verified: true,
      updated: "Updated 1 hour ago",
    },
    {
      id: 4,
      bloodType: "B+",
      source: "St. Nicholas Hospital",
      location: "Lagos Island, Lagos",
      distance: "12.5 km",
      available: 3,
      verified: true,
      updated: "Updated 2 hours ago",
    },
  ];

  return (
    <div className="search-blood-page">

      {/* Page Header */}
      <section className="search-blood-header">

        <Link
          to="/hospital/dashboard"
          className="search-blood-back"
        >
          ← Back to Dashboard
        </Link>

        <h1>Search Blood</h1>

        <p>
          Search available blood units from nearby verified sources.
        </p>

      </section>

      {/* Search Panel */}
      <section className="blood-search-panel">

        <div className="blood-search-panel-header">

          <h2>Blood Availability</h2>

          <p>
            Enter the blood type and quantity you need.
          </p>

        </div>

        <div className="blood-search-fields">

          {/* Blood Group */}
          <div className="blood-search-field">

            <label htmlFor="bloodGroup">
              Blood Group
            </label>

            <select
              id="bloodGroup"
              defaultValue=""
            >
              <option value="" disabled>
                Select group
              </option>

              <option value="A">A</option>
              <option value="B">B</option>
              <option value="AB">AB</option>
              <option value="O">O</option>
            </select>

          </div>

          {/* Rh Factor */}
          <div className="blood-search-field">

            <label htmlFor="rhFactor">
              Rh Factor
            </label>

            <select
              id="rhFactor"
              defaultValue=""
            >
              <option value="" disabled>
                Select factor
              </option>

              <option value="positive">
                Positive (+)
              </option>

              <option value="negative">
                Negative (-)
              </option>
            </select>

          </div>

          {/* Units */}
          <div className="blood-search-field">

            <label htmlFor="units">
              Units Needed
            </label>

            <input
              id="units"
              type="number"
              min="1"
              placeholder="e.g. 4"
            />

          </div>

          {/* Location */}
          <div className="blood-search-field">

            <label htmlFor="location">
              Location
            </label>

            <input
              id="location"
              type="text"
              defaultValue="Lagos"
            />

          </div>

        </div>

        <div className="blood-search-actions">

          <button
            type="button"
            className="blood-search-button"
          >
            🔍 Search Available Blood
          </button>

          <button
            type="button"
            className="blood-clear-button"
          >
            Clear Filters
          </button>

        </div>

      </section>

      {/* Results Header */}
      <section className="blood-results-header">

        <div>
          <h2>Available Blood</h2>

          <p>
            Blood sources matching your search
          </p>
        </div>

        <span>
          {results.length} sources found
        </span>

      </section>

      {/* Results */}
      <section className="blood-results">

        {results.map((result) => (

          <div
            key={result.id}
            className="blood-result-card"
          >

            <div className="blood-result-content">

              {/* Blood Source */}
              <div className="blood-source">

                <div className="blood-type-badge">
                  {result.bloodType}
                </div>

                <div className="blood-source-info">

                  <div className="blood-source-title">

                    <h3>
                      {result.source}
                    </h3>

                    {result.verified && (
                      <span className="verified-badge">
                        ✓ Verified
                      </span>
                    )}

                  </div>

                  <p className="blood-location">
                    📍 {result.location}
                  </p>

                  <div className="blood-source-meta">

                    <span>
                      {result.distance} away
                    </span>

                    <span>
                      {result.updated}
                    </span>

                  </div>

                </div>

              </div>

              {/* Availability */}
              <div className="blood-availability">

                <div>
                  <p>Available</p>

                  <strong>
                    {result.available} units
                  </strong>
                </div>

                <button
                  type="button"
                  className="blood-request-button"
                >
                  Request
                </button>

              </div>

            </div>

          </div>

        ))}

      </section>

      {/* Information */}
      <section className="blood-info-box">

        <div className="blood-info-icon">
          ℹ️
        </div>

        <div>

          <h2>
            About blood availability
          </h2>

          <p>
            Availability shown here is based on the latest information
            provided by connected blood banks and hospitals. Actual
            availability may change as blood is reserved or issued.
          </p>

        </div>

      </section>

    </div>
  );
}

export default SearchBlood;
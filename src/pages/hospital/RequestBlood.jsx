import { Link } from "react-router-dom";
import "./RequestBlood.css";

function RequestBlood() {
  return (
    <div className="request-blood-page">

      {/* Page Header */}
      <section className="request-blood-header">

        <Link
          to="/hospital/dashboard"
          className="request-blood-back"
        >
          ← Back to Dashboard
        </Link>

        <h1>Request Blood</h1>

        <p>
          Submit a blood request for your hospital.
        </p>

      </section>

      {/* Form */}
      <form className="request-blood-form">

        {/* Blood Requirement */}
        <section className="request-form-section">

          <div className="request-section-header">
            <h2>Blood Requirement</h2>

            <p>
              Tell us exactly what blood is needed.
            </p>
          </div>

          <div className="request-form-grid">

            {/* Blood Group */}
            <div className="request-field">

              <label htmlFor="bloodGroup">
                Blood Group
              </label>

              <select
                id="bloodGroup"
                name="bloodGroup"
                defaultValue=""
              >
                <option value="" disabled>
                  Select blood group
                </option>

                <option value="A">A</option>
                <option value="B">B</option>
                <option value="AB">AB</option>
                <option value="O">O</option>
              </select>

            </div>

            {/* Rh Factor */}
            <div className="request-field">

              <label htmlFor="rhFactor">
                Rh Factor
              </label>

              <select
                id="rhFactor"
                name="rhFactor"
                defaultValue=""
              >
                <option value="" disabled>
                  Select Rh factor
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
            <div className="request-field">

              <label htmlFor="units">
                Units Required
              </label>

              <input
                id="units"
                name="units"
                type="number"
                min="1"
                placeholder="e.g. 4"
              />

            </div>

            {/* Urgency */}
            <div className="request-field">

              <label htmlFor="urgency">
                Urgency
              </label>

              <select
                id="urgency"
                name="urgency"
                defaultValue=""
              >
                <option value="" disabled>
                  Select urgency
                </option>

                <option value="normal">
                  Normal
                </option>

                <option value="urgent">
                  Urgent
                </option>

                <option value="critical">
                  Critical Emergency
                </option>
              </select>

            </div>

          </div>

        </section>

        {/* Patient Information */}
        <section className="request-form-section">

          <div className="request-section-header">
            <h2>Patient Information</h2>

            <p>
              Provide basic information about the blood requirement.
            </p>
          </div>

          <div className="request-form-grid">

            {/* Patient ID */}
            <div className="request-field">

              <label htmlFor="patientId">
                Patient ID
              </label>

              <input
                id="patientId"
                name="patientId"
                type="text"
                placeholder="Enter patient ID"
              />

            </div>

            {/* Needed By */}
            <div className="request-field">

              <label htmlFor="neededBy">
                Blood Needed By
              </label>

              <input
                id="neededBy"
                name="neededBy"
                type="datetime-local"
              />

            </div>

          </div>

          {/* Reason */}
          <div className="request-field request-textarea-field">

            <label htmlFor="reason">
              Reason for Request
            </label>

            <textarea
              id="reason"
              name="reason"
              rows="4"
              placeholder="Briefly describe why the blood is required..."
            />

          </div>

        </section>

        {/* Request Location */}
        <section className="request-form-section">

          <div className="request-section-header">
            <h2>Request Location</h2>

            <p>
              Confirm where the blood should be delivered.
            </p>
          </div>

          <div className="request-form-grid">

            <div className="request-field">

              <label htmlFor="hospital">
                Hospital
              </label>

              <input
                id="hospital"
                name="hospital"
                type="text"
                defaultValue="Lagos University Teaching Hospital"
              />

            </div>

            <div className="request-field">

              <label htmlFor="location">
                Location
              </label>

              <input
                id="location"
                name="location"
                type="text"
                defaultValue="Idi-Araba, Lagos"
              />

            </div>

          </div>

        </section>

        {/* Emergency Notice */}
        <div className="request-emergency-notice">

          <div className="emergency-icon">
            🚨
          </div>

          <div>
            <h3>
              Emergency request
            </h3>

            <p>
              Mark the request as urgent or critical only when blood
              is needed immediately. This helps prioritize emergency
              cases appropriately.
            </p>
          </div>

        </div>

        {/* Actions */}
        <div className="request-form-actions">

          <Link
            to="/hospital/dashboard"
            className="request-cancel-button"
          >
            Cancel
          </Link>

          <button
            type="submit"
            className="request-submit-button"
          >
            Submit Blood Request
          </button>

        </div>

      </form>

    </div>
  );
}

export default RequestBlood;
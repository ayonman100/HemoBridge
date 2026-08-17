import { Link } from "react-router-dom";
import {
  ArrowLeft,
  AlertTriangle,
  Droplets,
  Search,
  RefreshCw,
} from "lucide-react";
import "./Inventory.css";

function Inventory() {
  const inventory = [
    {
      type: "O+",
      units: 72,
      reserved: 8,
      available: 64,
      status: "Good",
      updated: "15 mins ago",
    },
    {
      type: "O-",
      units: 18,
      reserved: 3,
      available: 15,
      status: "Good",
      updated: "20 mins ago",
    },
    {
      type: "A+",
      units: 51,
      reserved: 6,
      available: 45,
      status: "Good",
      updated: "32 mins ago",
    },
    {
      type: "A-",
      units: 12,
      reserved: 3,
      available: 9,
      status: "Low",
      updated: "45 mins ago",
    },
    {
      type: "B+",
      units: 43,
      reserved: 5,
      available: 38,
      status: "Good",
      updated: "1 hr ago",
    },
    {
      type: "B-",
      units: 9,
      reserved: 2,
      available: 7,
      status: "Low",
      updated: "1 hr ago",
    },
    {
      type: "AB+",
      units: 31,
      reserved: 4,
      available: 27,
      status: "Good",
      updated: "2 hrs ago",
    },
    {
      type: "AB-",
      units: 4,
      reserved: 1,
      available: 3,
      status: "Critical",
      updated: "2 hrs ago",
    },
  ];

  const getStatusClass = (status) => {
    if (status === "Good") return "inventory-status good";
    if (status === "Low") return "inventory-status low";
    return "inventory-status critical";
  };

  return (
    <div className="inventory-page">

      {/* Header */}
      <section className="inventory-header">

        <Link
          to="/bloodbank/dashboard"
          className="inventory-back-link"
        >
          <ArrowLeft size={16} />
          Back to Dashboard
        </Link>

        <div className="inventory-header-content">

          <div>
            <h1>Blood Inventory</h1>

            <p>
              Monitor and manage the blood units currently available.
            </p>
          </div>

          <button
            type="button"
            className="inventory-primary-btn"
          >
            <RefreshCw size={18} />
            Update Inventory
          </button>

        </div>

      </section>

      {/* Summary */}
      <section className="inventory-summary">

        <div className="inventory-summary-card">

          <div className="inventory-summary-top">
            <div className="inventory-summary-icon red">
              <Droplets size={22} />
            </div>
          </div>

          <p>Total Units</p>

          <h2>240</h2>

          <span>
            Currently in inventory
          </span>

        </div>

        <div className="inventory-summary-card">

          <div className="inventory-summary-top">
            <div className="inventory-summary-icon blue">
              <RefreshCw size={22} />
            </div>
          </div>

          <p>Reserved</p>

          <h2 className="blue-text">
            32
          </h2>

          <span>
            Held for active requests
          </span>

        </div>

        <div className="inventory-summary-card">

          <div className="inventory-summary-top">
            <div className="inventory-summary-icon green">
              <Droplets size={22} />
            </div>
          </div>

          <p>Available</p>

          <h2 className="green-text">
            208
          </h2>

          <span>
            Ready for requests
          </span>

        </div>

        <div className="inventory-summary-card">

          <div className="inventory-summary-top">
            <div className="inventory-summary-icon orange">
              <AlertTriangle size={22} />
            </div>
          </div>

          <p>Low Stock</p>

          <h2 className="red-text">
            3
          </h2>

          <span>
            Groups need attention
          </span>

        </div>

      </section>

      {/* Filters */}
      <section className="inventory-filter-card">

        <div className="inventory-filter-group">

          <div className="inventory-select-wrapper">

            <select defaultValue="all">
              <option value="all">
                All Blood Groups
              </option>

              <option value="O+">O+</option>
              <option value="O-">O-</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
            </select>

          </div>

          <div className="inventory-select-wrapper">

            <select defaultValue="all">
              <option value="all">
                All Stock Levels
              </option>

              <option value="good">
                Good
              </option>

              <option value="low">
                Low
              </option>

              <option value="critical">
                Critical
              </option>
            </select>

          </div>

        </div>

        <div className="inventory-search">

          <Search size={18} />

          <input
            type="text"
            placeholder="Search blood group..."
          />

        </div>

      </section>

      {/* Inventory Table */}
      <section className="inventory-table-card">

        <div className="inventory-table-header">

          <div>
            <h2>Current Stock</h2>

            <p>
              Blood availability by group.
            </p>
          </div>

          <span className="inventory-count">
            {inventory.length} blood groups
          </span>

        </div>

        {/* Desktop */}
        <div className="inventory-table-wrapper">

          <table className="inventory-table">

            <thead>
              <tr>

                <th>Blood Group</th>
                <th>Total Units</th>
                <th>Reserved</th>
                <th>Available</th>
                <th>Status</th>
                <th>Updated</th>
                <th>Action</th>

              </tr>
            </thead>

            <tbody>

              {inventory.map((item) => (

                <tr key={item.type}>

                  <td>

                    <div className="blood-group-cell">

                      <div className="blood-type-badge">
                        {item.type}
                      </div>

                      <span>
                        {item.type} Blood
                      </span>

                    </div>

                  </td>

                  <td className="inventory-number">
                    {item.units}
                  </td>

                  <td>
                    {item.reserved}
                  </td>

                  <td className="available-number">
                    {item.available}
                  </td>

                  <td>
                    <span className={getStatusClass(item.status)}>
                      <span className="status-dot" />
                      {item.status}
                    </span>
                  </td>

                  <td className="updated-text">
                    {item.updated}
                  </td>

                  <td className="inventory-action-cell">

                    <button
                      type="button"
                      className="inventory-update-btn"
                    >
                      Update
                    </button>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

        {/* Mobile */}
        <div className="inventory-mobile-list">

          {inventory.map((item) => (

            <div
              key={item.type}
              className="inventory-mobile-card"
            >

              <div className="inventory-mobile-top">

                <div className="blood-group-cell">

                  <div className="blood-type-badge">
                    {item.type}
                  </div>

                  <div>
                    <p className="mobile-blood-name">
                      {item.type} Blood
                    </p>

                    <span className="mobile-updated">
                      Updated {item.updated}
                    </span>
                  </div>

                </div>

                <span className={getStatusClass(item.status)}>
                  <span className="status-dot" />
                  {item.status}
                </span>

              </div>

              <div className="mobile-inventory-stats">

                <div>
                  <span>Total</span>
                  <strong>{item.units}</strong>
                </div>

                <div>
                  <span>Reserved</span>
                  <strong>{item.reserved}</strong>
                </div>

                <div>
                  <span>Available</span>
                  <strong className="green-text">
                    {item.available}
                  </strong>
                </div>

              </div>

              <button
                type="button"
                className="mobile-update-btn"
              >
                Update Stock
              </button>

            </div>

          ))}

        </div>

      </section>

      {/* Warning */}
      <section className="inventory-warning">

        <div className="inventory-warning-icon">
          <AlertTriangle size={22} />
        </div>

        <div>

          <h2>
            Inventory monitoring
          </h2>

          <p>
            Blood stock should be updated whenever units are received,
            reserved, issued, expired, or discarded. The backend will
            eventually keep these figures synchronized in real time.
          </p>

        </div>

      </section>

    </div>
  );
}

export default Inventory;
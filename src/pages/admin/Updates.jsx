import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Plus,
  FileText,
  CheckCircle,
  FileEdit,
  AlertTriangle,
  Settings,
  Megaphone,
  Edit3,
  Send,
  Save,
} from "lucide-react";

import "./Updates.css";

function Updates() {
  const updates = [
    {
      title: "O- Blood Shortage Alert",
      category: "Emergency",
      description:
        "Hospitals are currently experiencing increased demand for O- blood. Donors with O- blood type are encouraged to check nearby donation centres.",
      date: "Aug 11, 2026",
      status: "Published",
    },
    {
      title: "HemoBridge System Maintenance",
      category: "System",
      description:
        "Scheduled maintenance will take place to improve platform performance and reliability.",
      date: "Aug 9, 2026",
      status: "Published",
    },
    {
      title: "New Blood Bank Added",
      category: "Network",
      description:
        "LifeFlow Blood Bank has joined the HemoBridge network and is currently completing verification.",
      date: "Aug 7, 2026",
      status: "Published",
    },
  ];

  const getCategoryIcon = (category) => {
    if (category === "Emergency") {
      return <AlertTriangle size={21} />;
    }

    if (category === "System") {
      return <Settings size={21} />;
    }

    return <Megaphone size={21} />;
  };

  return (
    <div className="updates-page">

      {/* Header */}
      <section className="updates-header">

        <Link
          to="/admin/dashboard"
          className="back-link"
        >
          <ArrowLeft size={16} />
          Back to Dashboard
        </Link>

        <div className="updates-header-row">

          <div>
            <h1>
              Updates & Announcements
            </h1>

            <p>
              Publish important information and alerts across the HemoBridge
              platform.
            </p>
          </div>

          <button
            type="button"
            className="primary-button"
          >
            <Plus size={18} />
            Create Update
          </button>

        </div>

      </section>

      {/* Statistics */}
      <section className="updates-stat-grid">

        <div className="update-stat-card">

          <div className="stat-icon stat-icon-blue">
            <FileText size={21} />
          </div>

          <div>
            <p>Total Updates</p>

            <h2>24</h2>

            <span>
              Published announcements
            </span>
          </div>

        </div>

        <div className="update-stat-card">

          <div className="stat-icon stat-icon-green">
            <CheckCircle size={21} />
          </div>

          <div>
            <p>Published</p>

            <h2 className="green-text">
              21
            </h2>

            <span>
              Currently visible
            </span>
          </div>

        </div>

        <div className="update-stat-card">

          <div className="stat-icon stat-icon-yellow">
            <FileEdit size={21} />
          </div>

          <div>
            <p>Drafts</p>

            <h2 className="yellow-text">
              3
            </h2>

            <span>
              Waiting to be published
            </span>
          </div>

        </div>

      </section>

      {/* Create Update */}
      <section className="create-update-card">

        <div className="section-heading">

          <div>
            <h2>
              Create an Update
            </h2>

            <p>
              Share an announcement with hospitals, blood banks, donors, and
              other users.
            </p>
          </div>

        </div>

        <div className="update-form-grid">

          <div className="form-group">

            <label>
              Update Title
            </label>

            <input
              type="text"
              placeholder="Enter update title"
            />

          </div>

          <div className="form-group">

            <label>
              Category
            </label>

            <select defaultValue="general">

              <option value="general">
                General
              </option>

              <option value="emergency">
                Emergency
              </option>

              <option value="system">
                System
              </option>

              <option value="network">
                Network
              </option>

              <option value="announcement">
                Announcement
              </option>

            </select>

          </div>

        </div>

        <div className="form-group message-group">

          <label>
            Message
          </label>

          <textarea
            rows="5"
            placeholder="Write your announcement here..."
          />

        </div>

        <div className="form-actions">

          <button
            type="button"
            className="secondary-button"
          >
            <Save size={17} />
            Save Draft
          </button>

          <button
            type="button"
            className="primary-button"
          >
            <Send size={17} />
            Publish Update
          </button>

        </div>

      </section>

      {/* Recent Updates */}
      <section className="recent-updates-card">

        <div className="section-heading updates-list-heading">

          <div>
            <h2>
              Recent Updates
            </h2>

            <p>
              Previously published announcements.
            </p>
          </div>

        </div>

        <div className="updates-list">

          {updates.map((update) => (

            <div
              key={update.title}
              className="update-item"
            >

              <div className="update-item-content">

                <div
                  className={`update-category-icon ${
                    update.category.toLowerCase()
                  }`}
                >
                  {getCategoryIcon(update.category)}
                </div>

                <div className="update-details">

                  <div className="update-title-row">

                    <h3>
                      {update.title}
                    </h3>

                    <span className="category-badge">
                      {update.category}
                    </span>

                  </div>

                  <p className="update-description">
                    {update.description}
                  </p>

                  <p className="update-date">
                    Published {update.date}
                  </p>

                </div>

              </div>

              <div className="update-actions">

                <span className="published-badge">
                  <CheckCircle size={14} />
                  {update.status}
                </span>

                <button
                  type="button"
                  className="edit-button"
                >
                  <Edit3 size={15} />
                  Edit
                </button>

              </div>

            </div>

          ))}

        </div>

      </section>

    </div>
  );
}

export default Updates;
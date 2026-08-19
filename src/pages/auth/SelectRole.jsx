import { useNavigate } from "react-router-dom";
import {
  Droplets,
  Hospital,
  Building2,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import "./SelectRole.css";

function SelectRole() {
  const navigate = useNavigate();

  const handleRoleSelect = (role) => {
    navigate(`/signup?role=${role}`);
  };

  const roles = [
    {
      id: "donor",
      title: "Blood Donor",
      description:
        "Register as a donor and help provide blood to people who need it.",
      icon: Droplets,
      type: "donor",
    },
    {
      id: "hospital",
      title: "Hospital",
      description:
        "Register your hospital to search for blood and manage emergency requests.",
      icon: Hospital,
      type: "hospital",
    },
    {
      id: "bloodbank",
      title: "Blood Bank",
      description:
        "Register your blood bank to manage inventory and respond to blood requests.",
      icon: Building2,
      type: "bloodbank",
    },
  ];

  return (
    <div className="select-role-page">

      <header className="select-role-header">

        <div className="select-role-logo">
          <Droplets size={27} strokeWidth={2} />
        </div>

        <p className="select-role-eyebrow">
          Get Started with HemoBridge
        </p>

        <h1>
          Choose your account type
        </h1>

        <p className="select-role-subtitle">
          Select the type of account you want to create to get started.
        </p>

      </header>

      <main className="select-role-main">

        <div className="select-role-list">

          {roles.map((role) => {
            const RoleIcon = role.icon;

            return (
              <button
                key={role.id}
                type="button"
                onClick={() => handleRoleSelect(role.id)}
                className="role-card"
              >

                <div className={`role-icon role-icon-${role.type}`}>
                  <RoleIcon
                    size={28}
                    strokeWidth={2}
                  />
                </div>

                <div className="role-content">

                  <h2>
                    {role.title}
                  </h2>

                  <p>
                    {role.description}
                  </p>

                </div>

                <div className="role-arrow">
                  <ArrowRight size={18} />
                </div>

              </button>
            );
          })}

        </div>

      </main>

      <section className="select-role-trust">

        <ShieldCheck
          size={18}
          className="select-role-trust-icon"
        />

        <span>
          Secure registration on HemoBridge
        </span>

      </section>

      <footer className="select-role-footer">

        <p>
          Already have an account?
        </p>

        <button
          type="button"
          onClick={() => navigate("/login")}
          className="select-role-login"
        >
          Login
        </button>

      </footer>

    </div>
  );
}

export default SelectRole;
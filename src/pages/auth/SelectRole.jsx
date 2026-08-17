import { useNavigate } from "react-router-dom";
import {
  Droplets,
  Hospital,
  Building2,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

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
      iconBg: "bg-red-50",
      iconColor: "text-red-600",
    },
    {
      id: "hospital",
      title: "Hospital",
      description:
        "Register your hospital to search for blood and manage emergency requests.",
      icon: Hospital,
      iconBg: "bg-blue-50",
      iconColor: "text-blue-600",
    },
    {
      id: "bloodbank",
      title: "Blood Bank",
      description:
        "Register your blood bank to manage inventory and respond to blood requests.",
      icon: Building2,
      iconBg: "bg-purple-50",
      iconColor: "text-purple-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">

      {/* Header */}
      <header className="px-6 pt-10 pb-6 text-center">

        <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-red-50 text-red-600 mb-5">
          <Droplets size={26} strokeWidth={2} />
        </div>

        <p className="text-red-600 font-semibold mb-3">
          Get Started with HemoBridge
        </p>

        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
          Choose your account type
        </h1>

        <p className="mt-3 text-gray-600 max-w-xl mx-auto leading-7">
          Select the type of account you want to create to get started.
        </p>

      </header>


      {/* Role Cards */}
      <main className="flex-1 flex items-center justify-center px-6 py-8">

        <div className="w-full max-w-2xl space-y-4">

          {roles.map((role) => {

            const RoleIcon = role.icon;

            return (
              <button
                key={role.id}
                type="button"
                onClick={() => handleRoleSelect(role.id)}
                className="group w-full bg-white border border-gray-200 rounded-2xl p-5 md:p-6 text-left hover:border-red-400 hover:shadow-md transition duration-200 focus:outline-none focus:ring-2 focus:ring-red-200"
              >

                <div className="flex items-center gap-4 md:gap-5">

                  {/* Icon */}
                  <div
                    className={`w-14 h-14 shrink-0 rounded-xl ${role.iconBg} ${role.iconColor} flex items-center justify-center`}
                  >
                    <RoleIcon
                      size={28}
                      strokeWidth={2}
                    />
                  </div>


                  {/* Content */}
                  <div className="flex-1 min-w-0">

                    <h2 className="text-lg font-semibold text-gray-900 group-hover:text-red-600 transition">
                      {role.title}
                    </h2>

                    <p className="text-sm text-gray-500 mt-1 leading-6">
                      {role.description}
                    </p>

                  </div>


                  {/* Arrow */}
                  <div className="shrink-0 w-9 h-9 rounded-full bg-gray-50 text-gray-400 flex items-center justify-center group-hover:bg-red-50 group-hover:text-red-600 transition">
                    <ArrowRight size={18} />
                  </div>

                </div>

              </button>
            );
          })}

        </div>

      </main>


      {/* Trust Information */}
      <section className="px-6 pb-6">

        <div className="flex items-center justify-center gap-2 text-sm text-gray-500">

          <ShieldCheck
            size={17}
            className="text-green-600"
          />

          <span>
            Secure registration on HemoBridge
          </span>

        </div>

      </section>


      {/* Login */}
      <footer className="pb-10 text-center px-6">

        <p className="text-gray-600">
          Already have an account?
        </p>

        <button
          type="button"
          onClick={() => navigate("/login")}
          className="mt-2 text-red-600 font-semibold hover:text-red-700 transition"
        >
          Login
        </button>

      </footer>

    </div>
  );
}

export default SelectRole;
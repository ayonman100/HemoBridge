import { useNavigate } from "react-router-dom";

function SelectRole() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">

      {/* Header */}
      <div className="px-6 pt-10 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
          Welcome to HemoBridge
        </h1>

        <p className="mt-3 text-gray-600">
          How will you be using HemoBridge?
        </p>
      </div>

      {/* Role Cards */}
      <div className="flex-1 flex items-center justify-center px-6 py-10">

        <div className="w-full max-w-lg space-y-4">

          {/* Donor */}
          <button
            onClick={() => navigate("/Signup?role=donor")}
            className="w-full bg-white border border-gray-200 rounded-2xl p-6 text-left hover:border-red-500 hover:shadow-md transition"
          >
            <div className="flex items-center gap-5">

              <div className="w-14 h-14 rounded-xl bg-red-50 flex items-center justify-center text-3xl">
                🩸
              </div>

              <div>
                <h2 className="text-lg font-semibold text-gray-900">
                  Blood Donor
                </h2>

                <p className="text-sm text-gray-500 mt-1">
                  Donate blood and help save lives.
                </p>
              </div>

            </div>
          </button>

          {/* Hospital */}
          <button
            onClick={() => navigate("/Signup?role=hospital")}
            className="w-full bg-white border border-gray-200 rounded-2xl p-6 text-left hover:border-red-500 hover:shadow-md transition"
          >
            <div className="flex items-center gap-5">

              <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center text-3xl">
                🏥
              </div>

              <div>
                <h2 className="text-lg font-semibold text-gray-900">
                  Hospital
                </h2>

                <p className="text-sm text-gray-500 mt-1">
                  Request and find blood for patients.
                </p>
              </div>

            </div>
          </button>

          {/* Blood Bank */}
          <button
            onClick={() => navigate("/Signup?role=bloodbank")}
            className="w-full bg-white border border-gray-200 rounded-2xl p-6 text-left hover:border-red-500 hover:shadow-md transition"
          >
            <div className="flex items-center gap-5">

              <div className="w-14 h-14 rounded-xl bg-purple-50 flex items-center justify-center text-3xl">
                🏦
              </div>

              <div>
                <h2 className="text-lg font-semibold text-gray-900">
                  Blood Bank
                </h2>

                <p className="text-sm text-gray-500 mt-1">
                  Manage blood inventory and requests.
                </p>
              </div>

            </div>
          </button>

        </div>

      </div>

      {/* Login */}
      <div className="pb-10 text-center">
        <p className="text-gray-600">
          Already have an account?
        </p>

        <button
          onClick={() => navigate("/login")}
          className="mt-2 text-red-600 font-semibold hover:text-red-700"
        >
          Login
        </button>
      </div>

    </div>
  );
}

export default SelectRole;
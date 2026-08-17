import { Link } from "react-router-dom";
import {
  Droplets,
  ClipboardList,
  AlertTriangle,
  Heart,
  Package,
  Building2,
  CheckCircle,
  Clock,
  ArrowRight,
} from "lucide-react";

import SubscriptionCard from "../../components/subscription/SubscriptionCard";

function Dashboard() {
  const stats = [
    {
      title: "Total Blood Units",
      value: "248",
      subtitle: "Across all blood groups",
      icon: Droplets,
    },
    {
      title: "Pending Requests",
      value: "14",
      subtitle: "Requests awaiting action",
      icon: ClipboardList,
    },
    {
      title: "Critical Stock",
      value: "3",
      subtitle: "Blood groups running low",
      icon: AlertTriangle,
    },
    {
      title: "Issued This Month",
      value: "86",
      subtitle: "Units distributed",
      icon: Heart,
    },
  ];

  const inventory = [
    {
      type: "O+",
      units: 72,
      status: "Good",
    },
    {
      type: "O-",
      units: 18,
      status: "Good",
    },
    {
      type: "A+",
      units: 51,
      status: "Good",
    },
    {
      type: "A-",
      units: 12,
      status: "Low",
    },
    {
      type: "B+",
      units: 43,
      status: "Good",
    },
    {
      type: "B-",
      units: 9,
      status: "Low",
    },
    {
      type: "AB+",
      units: 31,
      status: "Good",
    },
    {
      type: "AB-",
      units: 4,
      status: "Critical",
    },
  ];

  return (
    <div className="space-y-8">

      {/* ==================== HEADER ==================== */}
      <section>

        <p className="text-sm font-medium text-gray-500">
          Welcome back
        </p>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mt-1">

          <div>

            <h1 className="text-3xl font-bold text-gray-900">
              Blood Bank Dashboard
            </h1>

            <p className="text-gray-500 mt-2">
              Monitor blood inventory and manage hospital requests.
            </p>

          </div>

          <Link
            to="/bloodbank/requests"
            className="inline-flex items-center justify-center gap-2 bg-red-600 text-white px-5 py-3 rounded-xl font-medium hover:bg-red-700 transition shadow-sm"
          >
            <ClipboardList size={18} />
            View Requests
          </Link>

        </div>

      </section>


      {/* ==================== SUBSCRIPTION ==================== */}
      <section>
        <SubscriptionCard
          trialActive={true}
          trialDaysRemaining={5}
        />
      </section>


      {/* ==================== STATS ==================== */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <div
              key={stat.title}
              className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-sm transition"
            >

              <div className="flex items-start justify-between gap-4">

                <div>

                  <p className="text-sm font-medium text-gray-500">
                    {stat.title}
                  </p>

                  <p className="text-3xl font-bold text-gray-900 mt-2">
                    {stat.value}
                  </p>

                  <p className="text-xs text-gray-400 mt-2">
                    {stat.subtitle}
                  </p>

                </div>

                <div className="w-12 h-12 rounded-xl bg-red-50 text-red-600 flex items-center justify-center shrink-0">
                  <Icon size={24} strokeWidth={2} />
                </div>

              </div>

            </div>
          );
        })}

      </section>


      {/* ==================== MAIN GRID ==================== */}
      <section className="grid grid-cols-1 xl:grid-cols-3 gap-6">


        {/* ==================== INVENTORY ==================== */}
        <div className="xl:col-span-2 bg-white border border-gray-200 rounded-2xl overflow-hidden">

          <div className="p-6 border-b border-gray-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

            <div>

              <div className="flex items-center gap-2">

                <div className="w-9 h-9 rounded-lg bg-red-50 text-red-600 flex items-center justify-center">
                  <Droplets size={19} />
                </div>

                <h2 className="text-xl font-bold text-gray-900">
                  Blood Inventory
                </h2>

              </div>

              <p className="text-sm text-gray-500 mt-2">
                Current available units by blood group.
              </p>

            </div>

            <Link
              to="/bloodbank/inventory"
              className="inline-flex items-center gap-1 text-sm font-medium text-red-600 hover:text-red-700 transition"
            >
              Manage Inventory
              <ArrowRight size={16} />
            </Link>

          </div>


          <div className="p-6 grid grid-cols-2 md:grid-cols-4 gap-4">

            {inventory.map((item) => (

              <div
                key={item.type}
                className="border border-gray-100 rounded-xl p-4 hover:border-gray-200 hover:shadow-sm transition"
              >

                <div className="flex items-center justify-between">

                  <span className="text-lg font-bold text-red-600">
                    {item.type}
                  </span>

                  <span
                    className={`w-2.5 h-2.5 rounded-full ${
                      item.status === "Good"
                        ? "bg-green-500"
                        : item.status === "Low"
                        ? "bg-yellow-500"
                        : "bg-red-500"
                    }`}
                  />

                </div>

                <p className="text-2xl font-bold text-gray-900 mt-3">
                  {item.units}
                </p>

                <p className="text-xs text-gray-500">
                  units available
                </p>

                <div className="flex items-center gap-1.5 mt-3">

                  {item.status === "Good" && (
                    <CheckCircle
                      size={14}
                      className="text-green-600"
                    />
                  )}

                  {item.status === "Low" && (
                    <AlertTriangle
                      size={14}
                      className="text-yellow-600"
                    />
                  )}

                  {item.status === "Critical" && (
                    <AlertTriangle
                      size={14}
                      className="text-red-600"
                    />
                  )}

                  <p
                    className={`text-xs font-medium ${
                      item.status === "Good"
                        ? "text-green-600"
                        : item.status === "Low"
                        ? "text-yellow-600"
                        : "text-red-600"
                    }`}
                  >
                    {item.status}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>


        {/* ==================== QUICK ACTIONS ==================== */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6">

          <div className="flex items-center gap-2">

            <div className="w-9 h-9 rounded-lg bg-gray-100 text-gray-700 flex items-center justify-center">
              <Package size={19} />
            </div>

            <h2 className="text-xl font-bold text-gray-900">
              Quick Actions
            </h2>

          </div>

          <p className="text-sm text-gray-500 mt-2">
            Common blood bank tasks.
          </p>


          <div className="space-y-3 mt-6">

            {/* Update Inventory */}
            <Link
              to="/bloodbank/inventory"
              className="flex items-center gap-4 p-4 rounded-xl bg-red-50 hover:bg-red-100 transition group"
            >

              <div className="w-10 h-10 rounded-xl bg-white text-red-600 flex items-center justify-center shadow-sm">
                <Droplets size={20} />
              </div>

              <div className="flex-1">

                <p className="font-semibold text-gray-900">
                  Update Inventory
                </p>

                <p className="text-xs text-gray-500 mt-1">
                  Add or adjust available units
                </p>

              </div>

              <ArrowRight
                size={17}
                className="text-gray-400 group-hover:text-red-600 transition"
              />

            </Link>


            {/* Manage Requests */}
            <Link
              to="/bloodbank/requests"
              className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition group"
            >

              <div className="w-10 h-10 rounded-xl bg-white text-gray-700 flex items-center justify-center shadow-sm">
                <ClipboardList size={20} />
              </div>

              <div className="flex-1">

                <p className="font-semibold text-gray-900">
                  Manage Requests
                </p>

                <p className="text-xs text-gray-500 mt-1">
                  Review hospital blood requests
                </p>

              </div>

              <ArrowRight
                size={17}
                className="text-gray-400 group-hover:text-gray-700 transition"
              />

            </Link>


            {/* Bank Profile */}
            <Link
              to="/bloodbank/profile"
              className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition group"
            >

              <div className="w-10 h-10 rounded-xl bg-white text-gray-700 flex items-center justify-center shadow-sm">
                <Building2 size={20} />
              </div>

              <div className="flex-1">

                <p className="font-semibold text-gray-900">
                  Bank Profile
                </p>

                <p className="text-xs text-gray-500 mt-1">
                  Manage blood bank information
                </p>

              </div>

              <ArrowRight
                size={17}
                className="text-gray-400 group-hover:text-gray-700 transition"
              />

            </Link>

          </div>

        </div>

      </section>


      {/* ==================== RECENT ACTIVITY ==================== */}
      <section className="bg-white border border-gray-200 rounded-2xl overflow-hidden">

        <div className="p-6 border-b border-gray-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">

          <div>

            <div className="flex items-center gap-2">

              <div className="w-9 h-9 rounded-lg bg-gray-100 text-gray-700 flex items-center justify-center">
                <Clock size={18} />
              </div>

              <h2 className="text-xl font-bold text-gray-900">
                Recent Activity
              </h2>

            </div>

            <p className="text-sm text-gray-500 mt-2">
              Latest activity in your blood bank.
            </p>

          </div>

          <span className="text-xs text-gray-400">
            Today
          </span>

        </div>


        <div className="divide-y divide-gray-100">


          {/* Activity 1 */}
          <div className="p-5 flex items-center gap-4 hover:bg-gray-50 transition">

            <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
              <ClipboardList size={18} />
            </div>

            <div className="flex-1">

              <p className="text-sm font-medium text-gray-900">
                New O+ blood request received
              </p>

              <p className="text-xs text-gray-500 mt-1">
                Lagos University Teaching Hospital
              </p>

            </div>

            <span className="text-xs text-gray-400 whitespace-nowrap">
              12 min ago
            </span>

          </div>


          {/* Activity 2 */}
          <div className="p-5 flex items-center gap-4 hover:bg-gray-50 transition">

            <div className="w-10 h-10 rounded-full bg-green-50 text-green-600 flex items-center justify-center shrink-0">
              <CheckCircle size={18} />
            </div>

            <div className="flex-1">

              <p className="text-sm font-medium text-gray-900">
                4 units of A+ issued
              </p>

              <p className="text-xs text-gray-500 mt-1">
                Request HB-REQ-004 fulfilled
              </p>

            </div>

            <span className="text-xs text-gray-400 whitespace-nowrap">
              1 hr ago
            </span>

          </div>


          {/* Activity 3 */}
          <div className="p-5 flex items-center gap-4 hover:bg-gray-50 transition">

            <div className="w-10 h-10 rounded-full bg-red-50 text-red-600 flex items-center justify-center shrink-0">
              <AlertTriangle size={18} />
            </div>

            <div className="flex-1">

              <p className="text-sm font-medium text-gray-900">
                AB- stock is critically low
              </p>

              <p className="text-xs text-gray-500 mt-1">
                Only 4 units remaining
              </p>

            </div>

            <span className="text-xs text-gray-400 whitespace-nowrap">
              2 hrs ago
            </span>

          </div>

        </div>

      </section>

    </div>
  );
}

export default Dashboard;
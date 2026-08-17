import { Link } from "react-router-dom";
import {
  Users,
  Hospital,
  Building2,
  Droplet,
  CheckCircle,
  AlertTriangle,
  Bell,
  UserPlus,
  ArrowRight,
} from "lucide-react";

function Dashboard() {
  const stats = [
    {
      title: "Total Users",
      value: "1,248",
      subtitle: "Registered on HemoBridge",
      icon: Users,
    },
    {
      title: "Hospitals",
      value: "86",
      subtitle: "Registered healthcare facilities",
      icon: Hospital,
    },
    {
      title: "Blood Banks",
      value: "24",
      subtitle: "Verified blood banks",
      icon: Building2,
    },
    {
      title: "Active Requests",
      value: "37",
      subtitle: "Blood requests in progress",
      icon: Droplet,
    },
  ];

  return (
    <>
      {/* Header */}
      <section className="mb-8">
        <p className="text-sm text-gray-500">
          Welcome back
        </p>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mt-1">
              Admin Dashboard
            </h1>

            <p className="text-gray-500 mt-2">
              Monitor and manage the HemoBridge platform.
            </p>
          </div>

          <Link
            to="/admin/updates"
            className="bg-red-600 text-white px-5 py-3 rounded-xl font-medium hover:bg-red-700 transition text-center"
          >
            Publish Update
          </Link>
        </div>
      </section>

      {/* Statistics */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <div
              key={stat.title}
              className="bg-white border border-gray-200 rounded-2xl p-6"
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-gray-500">
                    {stat.title}
                  </p>

                  <p className="text-3xl font-bold text-gray-900 mt-2">
                    {stat.value}
                  </p>

                  <p className="text-xs text-gray-400 mt-2">
                    {stat.subtitle}
                  </p>
                </div>

                <div className="w-12 h-12 rounded-xl bg-red-50 text-red-600 flex items-center justify-center">
                  <Icon size={24} strokeWidth={2} />
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* Main Grid */}
      <section className="grid grid-cols-1 xl:grid-cols-3 gap-6">

        {/* Platform Overview */}
        <div className="xl:col-span-2 bg-white border border-gray-200 rounded-2xl p-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold text-gray-900">
                Platform Overview
              </h2>

              <p className="text-sm text-gray-500 mt-1">
                Current state of the HemoBridge network.
              </p>
            </div>

            <span className="flex items-center gap-2 text-xs bg-green-50 text-green-700 px-3 py-1.5 rounded-full font-semibold">
              <span className="w-2 h-2 bg-green-500 rounded-full" />
              System Operational
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">

            <div className="bg-gray-50 rounded-xl p-5">
              <p className="text-sm text-gray-500">
                Verified Donors
              </p>

              <p className="text-2xl font-bold text-gray-900 mt-2">
                1,102
              </p>

              <p className="text-xs text-green-600 mt-2">
                +8.4% this month
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-5">
              <p className="text-sm text-gray-500">
                Blood Units Available
              </p>

              <p className="text-2xl font-bold text-gray-900 mt-2">
                4,826
              </p>

              <p className="text-xs text-green-600 mt-2">
                +4.2% this month
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-5">
              <p className="text-sm text-gray-500">
                Requests Fulfilled
              </p>

              <p className="text-2xl font-bold text-gray-900 mt-2">
                2,438
              </p>

              <p className="text-xs text-green-600 mt-2">
                +12.7% this month
              </p>
            </div>

          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6">
          <h2 className="text-xl font-bold text-gray-900">
            Quick Actions
          </h2>

          <p className="text-sm text-gray-500 mt-1">
            Common administrative tasks.
          </p>

          <div className="space-y-3 mt-6">

            <Link
              to="/admin/users"
              className="flex items-center gap-4 p-4 rounded-xl bg-red-50 hover:bg-red-100 transition"
            >
              <div className="w-10 h-10 rounded-lg bg-white text-red-600 flex items-center justify-center">
                <Users size={21} />
              </div>

              <div>
                <p className="font-semibold text-gray-900">
                  Manage Users
                </p>

                <p className="text-xs text-gray-500 mt-1">
                  View registered users
                </p>
              </div>

              <ArrowRight
                size={17}
                className="ml-auto text-gray-400"
              />
            </Link>

            <Link
              to="/admin/verification"
              className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition"
            >
              <div className="w-10 h-10 rounded-lg bg-white text-green-600 flex items-center justify-center">
                <CheckCircle size={21} />
              </div>

              <div>
                <p className="font-semibold text-gray-900">
                  Verification
                </p>

                <p className="text-xs text-gray-500 mt-1">
                  Review pending accounts
                </p>
              </div>

              <ArrowRight
                size={17}
                className="ml-auto text-gray-400"
              />
            </Link>

            <Link
              to="/admin/requests"
              className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition"
            >
              <div className="w-10 h-10 rounded-lg bg-white text-red-600 flex items-center justify-center">
                <Droplet size={21} />
              </div>

              <div>
                <p className="font-semibold text-gray-900">
                  Blood Requests
                </p>

                <p className="text-xs text-gray-500 mt-1">
                  Monitor system requests
                </p>
              </div>

              <ArrowRight
                size={17}
                className="ml-auto text-gray-400"
              />
            </Link>

          </div>
        </div>
      </section>

      {/* Alerts */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">

        {/* Verification Alerts */}
        <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">

          <div className="p-6 border-b border-gray-100 flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold text-gray-900">
                Pending Verification
              </h2>

              <p className="text-sm text-gray-500 mt-1">
                Accounts waiting for review.
              </p>
            </div>

            <Link
              to="/admin/verification"
              className="text-sm text-red-600 font-medium hover:text-red-700"
            >
              View all
            </Link>
          </div>

          <div className="divide-y divide-gray-100">

            <div className="p-5 flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
                <Hospital size={19} />
              </div>

              <div className="flex-1">
                <p className="font-medium text-gray-900">
                  Mainland General Hospital
                </p>

                <p className="text-xs text-gray-500 mt-1">
                  Hospital registration
                </p>
              </div>

              <span className="text-xs bg-yellow-50 text-yellow-700 px-3 py-1 rounded-full">
                Pending
              </span>
            </div>

            <div className="p-5 flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-red-50 text-red-600 flex items-center justify-center">
                <Building2 size={19} />
              </div>

              <div className="flex-1">
                <p className="font-medium text-gray-900">
                  Lagos Central Blood Bank
                </p>

                <p className="text-xs text-gray-500 mt-1">
                  Blood bank registration
                </p>
              </div>

              <span className="text-xs bg-yellow-50 text-yellow-700 px-3 py-1 rounded-full">
                Pending
              </span>
            </div>

          </div>
        </div>

        {/* System Alerts */}
        <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">

          <div className="p-6 border-b border-gray-100">
            <h2 className="text-xl font-bold text-gray-900">
              System Alerts
            </h2>

            <p className="text-sm text-gray-500 mt-1">
              Things that may require attention.
            </p>
          </div>

          <div className="p-5 space-y-4">

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-red-50 text-red-600 flex items-center justify-center shrink-0">
                <AlertTriangle size={19} />
              </div>

              <div>
                <p className="font-medium text-gray-900">
                  3 blood groups have critical stock
                </p>

                <p className="text-xs text-gray-500 mt-1">
                  Check blood bank inventory levels.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-yellow-50 text-yellow-600 flex items-center justify-center shrink-0">
                <Bell size={19} />
              </div>

              <div>
                <p className="font-medium text-gray-900">
                  14 requests require attention
                </p>

                <p className="text-xs text-gray-500 mt-1">
                  Some requests have been waiting for a response.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-green-50 text-green-600 flex items-center justify-center shrink-0">
                <CheckCircle size={19} />
              </div>

              <div>
                <p className="font-medium text-gray-900">
                  System health is normal
                </p>

                <p className="text-xs text-gray-500 mt-1">
                  All major services are currently operational.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Recent Activity */}
      <section className="bg-white border border-gray-200 rounded-2xl mt-6 overflow-hidden">

        <div className="p-6 border-b border-gray-100 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-gray-900">
              Recent System Activity
            </h2>

            <p className="text-sm text-gray-500 mt-1">
              Latest activity across the platform.
            </p>
          </div>

          <Link
            to="/admin/reports"
            className="text-sm text-red-600 font-medium hover:text-red-700"
          >
            View reports
          </Link>
        </div>

        <div className="divide-y divide-gray-100">

          <div className="p-5 flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-green-50 text-green-600 flex items-center justify-center">
              <CheckCircle size={19} />
            </div>

            <div className="flex-1">
              <p className="text-sm font-medium text-gray-900">
                New hospital verified
              </p>

              <p className="text-xs text-gray-500 mt-1">
                Mainland General Hospital was approved.
              </p>
            </div>

            <span className="text-xs text-gray-400">
              15 min ago
            </span>
          </div>

          <div className="p-5 flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-red-50 text-red-600 flex items-center justify-center">
              <Droplet size={19} />
            </div>

            <div className="flex-1">
              <p className="text-sm font-medium text-gray-900">
                Blood request fulfilled
              </p>

              <p className="text-xs text-gray-500 mt-1">
                Request HB-REQ-004 was completed.
              </p>
            </div>

            <span className="text-xs text-gray-400">
              42 min ago
            </span>
          </div>

          <div className="p-5 flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
              <UserPlus size={19} />
            </div>

            <div className="flex-1">
              <p className="text-sm font-medium text-gray-900">
                12 new donors registered
              </p>

              <p className="text-xs text-gray-500 mt-1">
                New donor accounts were created today.
              </p>
            </div>

            <span className="text-xs text-gray-400">
              1 hr ago
            </span>
          </div>

        </div>
      </section>
    </>
  );
}

export default Dashboard;
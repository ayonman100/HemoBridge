import { Link } from "react-router-dom";
import {
  Users,
  UserCheck,
  Droplet,
  MapPin,
  CalendarDays,
  ArrowLeft,
  Download,
  Eye,
} from "lucide-react";

function Donors() {
  const donors = [
    {
      name: "Ayo Adeyemi",
      email: "ayo@example.com",
      bloodType: "O+",
      location: "Lagos Mainland",
      donations: 6,
      status: "Active",
      lastDonation: "Jul 28, 2026",
    },
    {
      name: "Sarah Johnson",
      email: "sarah@example.com",
      bloodType: "A+",
      location: "Ikeja",
      donations: 4,
      status: "Active",
      lastDonation: "Jul 22, 2026",
    },
    {
      name: "Daniel Okafor",
      email: "daniel@example.com",
      bloodType: "B+",
      location: "Yaba",
      donations: 3,
      status: "Active",
      lastDonation: "Jul 18, 2026",
    },
    {
      name: "Mary Williams",
      email: "mary@example.com",
      bloodType: "O-",
      location: "Surulere",
      donations: 8,
      status: "Active",
      lastDonation: "Jul 12, 2026",
    },
    {
      name: "John Ibrahim",
      email: "john@example.com",
      bloodType: "AB+",
      location: "Lagos Island",
      donations: 2,
      status: "Inactive",
      lastDonation: "Jun 30, 2026",
    },
  ];

  return (
    <>
      {/* Header */}
      <section className="mb-8">
        <Link
          to="/admin/dashboard"
          className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-red-600 transition"
        >
          <ArrowLeft size={16} />
          Back to Dashboard
        </Link>

        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mt-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Donors
            </h1>

            <p className="text-gray-500 mt-2">
              Monitor registered blood donors across the HemoBridge network.
            </p>
          </div>

          <button
            type="button"
            className="inline-flex items-center justify-center gap-2 bg-red-600 text-white px-5 py-3 rounded-xl font-medium hover:bg-red-700 transition"
          >
            <Download size={18} />
            Export Donor List
          </button>
        </div>
      </section>

      {/* Statistics */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">

        {/* Total Donors */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-gray-500">
                Total Donors
              </p>

              <p className="text-3xl font-bold text-gray-900 mt-2">
                1,102
              </p>

              <p className="text-xs text-green-600 mt-2">
                +12% this month
              </p>
            </div>

            <div className="w-12 h-12 rounded-xl bg-red-50 text-red-600 flex items-center justify-center">
              <Users size={23} />
            </div>
          </div>
        </div>

        {/* Active Donors */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-gray-500">
                Active Donors
              </p>

              <p className="text-3xl font-bold text-green-600 mt-2">
                934
              </p>

              <p className="text-xs text-gray-400 mt-2">
                Currently available
              </p>
            </div>

            <div className="w-12 h-12 rounded-xl bg-green-50 text-green-600 flex items-center justify-center">
              <UserCheck size={23} />
            </div>
          </div>
        </div>

        {/* O+ Donors */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-gray-500">
                O+ Donors
              </p>

              <p className="text-3xl font-bold text-red-600 mt-2">
                386
              </p>

              <p className="text-xs text-gray-400 mt-2">
                Largest donor group
              </p>
            </div>

            <div className="w-12 h-12 rounded-xl bg-red-50 text-red-600 flex items-center justify-center">
              <Droplet size={23} />
            </div>
          </div>
        </div>

        {/* Donations */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-gray-500">
                Donations
              </p>

              <p className="text-3xl font-bold text-blue-600 mt-2">
                3,842
              </p>

              <p className="text-xs text-gray-400 mt-2">
                Completed donations
              </p>
            </div>

            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
              <Droplet size={23} />
            </div>
          </div>
        </div>

      </section>

      {/* Filters */}
      <section className="bg-white border border-gray-200 rounded-2xl p-5 mb-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">

          <div className="flex flex-col sm:flex-row gap-3">

            <select
              defaultValue="all"
              className="border border-gray-200 rounded-xl px-4 py-3 bg-white text-sm outline-none focus:ring-2 focus:ring-red-200 focus:border-red-500"
            >
              <option value="all">
                All Blood Types
              </option>

              <option value="a+">A+</option>
              <option value="a-">A-</option>
              <option value="b+">B+</option>
              <option value="b-">B-</option>
              <option value="ab+">AB+</option>
              <option value="ab-">AB-</option>
              <option value="o+">O+</option>
              <option value="o-">O-</option>
            </select>

            <select
              defaultValue="all"
              className="border border-gray-200 rounded-xl px-4 py-3 bg-white text-sm outline-none focus:ring-2 focus:ring-red-200 focus:border-red-500"
            >
              <option value="all">
                All Statuses
              </option>

              <option value="active">
                Active
              </option>

              <option value="inactive">
                Inactive
              </option>
            </select>

          </div>

          <div className="relative w-full lg:w-72">
            <input
              type="text"
              placeholder="Search donors..."
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-red-200 focus:border-red-500"
            />
          </div>

        </div>
      </section>

      {/* Donor Table */}
      <section className="bg-white border border-gray-200 rounded-2xl overflow-hidden">

        <div className="p-6 border-b border-gray-100">
          <h2 className="text-xl font-bold text-gray-900">
            Registered Donors
          </h2>

          <p className="text-sm text-gray-500 mt-1">
            Donors currently registered on HemoBridge.
          </p>
        </div>

        {/* Desktop */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full">

            <thead className="bg-gray-50">
              <tr>

                <th className="text-left px-6 py-4 text-xs font-semibold text-gray-500 uppercase">
                  Donor
                </th>

                <th className="text-left px-6 py-4 text-xs font-semibold text-gray-500 uppercase">
                  Blood Type
                </th>

                <th className="text-left px-6 py-4 text-xs font-semibold text-gray-500 uppercase">
                  Location
                </th>

                <th className="text-left px-6 py-4 text-xs font-semibold text-gray-500 uppercase">
                  Donations
                </th>

                <th className="text-left px-6 py-4 text-xs font-semibold text-gray-500 uppercase">
                  Status
                </th>

                <th className="text-right px-6 py-4 text-xs font-semibold text-gray-500 uppercase">
                  Action
                </th>

              </tr>
            </thead>

            <tbody className="divide-y divide-gray-100">

              {donors.map((donor) => (
                <tr
                  key={donor.email}
                  className="hover:bg-gray-50 transition"
                >

                  {/* Donor */}
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">

                      <div className="w-11 h-11 rounded-full bg-red-50 text-red-600 flex items-center justify-center font-bold">
                        {donor.name.charAt(0)}
                      </div>

                      <div>
                        <p className="text-sm font-semibold text-gray-900">
                          {donor.name}
                        </p>

                        <p className="text-xs text-gray-500 mt-1">
                          {donor.email}
                        </p>
                      </div>

                    </div>
                  </td>

                  {/* Blood Type */}
                  <td className="px-6 py-5">
                    <span className="inline-flex items-center gap-1.5 bg-red-50 text-red-700 px-3 py-1.5 rounded-full text-xs font-bold">
                      <Droplet size={13} />
                      {donor.bloodType}
                    </span>
                  </td>

                  {/* Location */}
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <MapPin
                        size={15}
                        className="text-gray-400"
                      />
                      {donor.location}
                    </div>
                  </td>

                  {/* Donations */}
                  <td className="px-6 py-5">
                    <p className="text-sm font-semibold text-gray-900">
                      {donor.donations}
                    </p>

                    <div className="flex items-center gap-1 mt-1">
                      <CalendarDays
                        size={12}
                        className="text-gray-400"
                      />

                      <p className="text-xs text-gray-400">
                        {donor.lastDonation}
                      </p>
                    </div>
                  </td>

                  {/* Status */}
                  <td className="px-6 py-5">
                    <span
                      className={`px-3 py-1.5 rounded-full text-xs font-semibold ${
                        donor.status === "Active"
                          ? "bg-green-50 text-green-700"
                          : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {donor.status}
                    </span>
                  </td>

                  {/* Action */}
                  <td className="px-6 py-5 text-right">
                    <button
                      type="button"
                      className="inline-flex items-center gap-1.5 text-red-600 text-sm font-medium hover:text-red-700 transition"
                    >
                      <Eye size={16} />
                      View
                    </button>
                  </td>

                </tr>
              ))}

            </tbody>
          </table>
        </div>

        {/* Mobile */}
        <div className="md:hidden divide-y divide-gray-100">

          {donors.map((donor) => (
            <div
              key={donor.email}
              className="p-5"
            >

              <div className="flex items-start justify-between gap-4">

                <div className="flex items-center gap-3">

                  <div className="w-11 h-11 rounded-full bg-red-50 text-red-600 flex items-center justify-center font-bold">
                    {donor.name.charAt(0)}
                  </div>

                  <div>
                    <p className="font-semibold text-gray-900">
                      {donor.name}
                    </p>

                    <p className="text-xs text-gray-500 mt-1">
                      {donor.email}
                    </p>
                  </div>

                </div>

                <span
                  className={`px-2.5 py-1 rounded-full text-xs font-semibold ${
                    donor.status === "Active"
                      ? "bg-green-50 text-green-700"
                      : "bg-gray-100 text-gray-600"
                  }`}
                >
                  {donor.status}
                </span>

              </div>

              <div className="grid grid-cols-2 gap-4 mt-5">

                <div>
                  <p className="text-xs text-gray-400">
                    Blood Type
                  </p>

                  <div className="flex items-center gap-1.5 mt-1">
                    <Droplet
                      size={14}
                      className="text-red-600"
                    />

                    <p className="text-sm font-bold text-red-600">
                      {donor.bloodType}
                    </p>
                  </div>
                </div>

                <div>
                  <p className="text-xs text-gray-400">
                    Donations
                  </p>

                  <p className="text-sm font-semibold text-gray-900 mt-1">
                    {donor.donations}
                  </p>
                </div>

                <div>
                  <p className="text-xs text-gray-400">
                    Location
                  </p>

                  <div className="flex items-center gap-1.5 mt-1">
                    <MapPin
                      size={14}
                      className="text-gray-400"
                    />

                    <p className="text-sm font-medium text-gray-900">
                      {donor.location}
                    </p>
                  </div>
                </div>

                <div>
                  <p className="text-xs text-gray-400">
                    Last Donation
                  </p>

                  <p className="text-sm font-medium text-gray-900 mt-1">
                    {donor.lastDonation}
                  </p>
                </div>

              </div>

              <button
                type="button"
                className="w-full inline-flex items-center justify-center gap-2 border border-gray-200 rounded-xl py-2.5 mt-5 text-sm font-medium text-gray-700 hover:bg-gray-50 transition"
              >
                <Eye size={16} />
                View Donor
              </button>

            </div>
          ))}

        </div>
      </section>
    </>
  );
}

export default Donors;
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  UserPlus,
  Search,
  ChevronDown,
  Users as UsersIcon,
  Droplets,
  Hospital,
  Building2,
  Eye,
} from "lucide-react";

function Users() {
  const users = [
    {
      name: "Ayo Adeyemi",
      email: "ayo@example.com",
      role: "Donor",
      status: "Active",
      joined: "Aug 11, 2026",
      bloodType: "O+",
    },
    {
      name: "Sarah Johnson",
      email: "sarah@example.com",
      role: "Donor",
      status: "Active",
      joined: "Aug 10, 2026",
      bloodType: "A+",
    },
    {
      name: "Mainland General Hospital",
      email: "admin@mainlandhospital.ng",
      role: "Hospital",
      status: "Verified",
      joined: "Aug 9, 2026",
      bloodType: "-",
    },
    {
      name: "Lagos Central Blood Bank",
      email: "admin@lagosbloodbank.ng",
      role: "Blood Bank",
      status: "Verified",
      joined: "Aug 8, 2026",
      bloodType: "-",
    },
    {
      name: "Daniel Okafor",
      email: "daniel@example.com",
      role: "Donor",
      status: "Suspended",
      joined: "Aug 7, 2026",
      bloodType: "B+",
    },
  ];

  const getRoleIcon = (role) => {
    if (role === "Donor") {
      return <Droplets size={18} />;
    }

    if (role === "Hospital") {
      return <Hospital size={18} />;
    }

    return <Building2 size={18} />;
  };

  const getRoleStyle = (role) => {
    if (role === "Donor") {
      return "bg-red-50 text-red-600";
    }

    if (role === "Hospital") {
      return "bg-blue-50 text-blue-600";
    }

    return "bg-purple-50 text-purple-600";
  };

  const getStatusStyle = (status) => {
    if (status === "Active") {
      return "bg-green-50 text-green-700";
    }

    if (status === "Verified") {
      return "bg-blue-50 text-blue-700";
    }

    return "bg-red-50 text-red-700";
  };

  return (
    <div className="w-full">

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
              Users
            </h1>

            <p className="text-gray-500 mt-2">
              Manage users and organisations registered on HemoBridge.
            </p>
          </div>

          <button
            type="button"
            className="inline-flex items-center justify-center gap-2 bg-red-600 text-white px-5 py-3 rounded-xl font-medium hover:bg-red-700 transition"
          >
            <UserPlus size={18} />
            Add User
          </button>

        </div>

      </section>

      {/* Statistics */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">

        {/* Total Users */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-sm transition">

          <div className="flex items-center justify-between">

            <div>
              <p className="text-sm text-gray-500">
                Total Users
              </p>

              <p className="text-3xl font-bold text-gray-900 mt-2">
                1,248
              </p>

              <p className="text-xs text-green-600 mt-2">
                +12% this month
              </p>
            </div>

            <div className="w-11 h-11 rounded-xl bg-gray-100 text-gray-600 flex items-center justify-center">
              <UsersIcon size={21} />
            </div>

          </div>

        </div>

        {/* Donors */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-sm transition">

          <div className="flex items-center justify-between">

            <div>
              <p className="text-sm text-gray-500">
                Donors
              </p>

              <p className="text-3xl font-bold text-red-600 mt-2">
                1,102
              </p>

              <p className="text-xs text-gray-400 mt-2">
                Registered donors
              </p>
            </div>

            <div className="w-11 h-11 rounded-xl bg-red-50 text-red-600 flex items-center justify-center">
              <Droplets size={21} />
            </div>

          </div>

        </div>

        {/* Hospitals */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-sm transition">

          <div className="flex items-center justify-between">

            <div>
              <p className="text-sm text-gray-500">
                Hospitals
              </p>

              <p className="text-3xl font-bold text-blue-600 mt-2">
                86
              </p>

              <p className="text-xs text-gray-400 mt-2">
                Registered hospitals
              </p>
            </div>

            <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
              <Hospital size={21} />
            </div>

          </div>

        </div>

        {/* Blood Banks */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-sm transition">

          <div className="flex items-center justify-between">

            <div>
              <p className="text-sm text-gray-500">
                Blood Banks
              </p>

              <p className="text-3xl font-bold text-purple-600 mt-2">
                24
              </p>

              <p className="text-xs text-gray-400 mt-2">
                Registered blood banks
              </p>
            </div>

            <div className="w-11 h-11 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
              <Building2 size={21} />
            </div>

          </div>

        </div>

      </section>

      {/* Filters */}
      <section className="bg-white border border-gray-200 rounded-2xl p-5 mb-6">

        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">

          {/* Select Filters */}
          <div className="flex flex-col sm:flex-row gap-3">

            <div className="relative">

              <select
                defaultValue="all"
                className="appearance-none w-full sm:w-44 border border-gray-200 rounded-xl px-4 py-3 pr-10 bg-white text-sm text-gray-700 outline-none focus:ring-2 focus:ring-red-200 focus:border-red-500 transition"
              >
                <option value="all">
                  All Roles
                </option>

                <option value="donor">
                  Donors
                </option>

                <option value="hospital">
                  Hospitals
                </option>

                <option value="bloodbank">
                  Blood Banks
                </option>
              </select>

              <ChevronDown
                size={16}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
              />

            </div>

            <div className="relative">

              <select
                defaultValue="all"
                className="appearance-none w-full sm:w-44 border border-gray-200 rounded-xl px-4 py-3 pr-10 bg-white text-sm text-gray-700 outline-none focus:ring-2 focus:ring-red-200 focus:border-red-500 transition"
              >
                <option value="all">
                  All Statuses
                </option>

                <option value="active">
                  Active
                </option>

                <option value="verified">
                  Verified
                </option>

                <option value="suspended">
                  Suspended
                </option>
              </select>

              <ChevronDown
                size={16}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
              />

            </div>

          </div>

          {/* Search */}
          <div className="relative w-full lg:w-72">

            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type="text"
              placeholder="Search users..."
              className="w-full border border-gray-200 rounded-xl pl-11 pr-4 py-3 text-sm outline-none focus:ring-2 focus:ring-red-200 focus:border-red-500 transition"
            />

          </div>

        </div>

      </section>

      {/* User Table */}
      <section className="bg-white border border-gray-200 rounded-2xl overflow-hidden">

        {/* Section Header */}
        <div className="p-6 border-b border-gray-100">

          <h2 className="text-xl font-bold text-gray-900">
            Registered Users
          </h2>

          <p className="text-sm text-gray-500 mt-1">
            Users currently registered on the platform.
          </p>

        </div>

        {/* Desktop Table */}
        <div className="hidden md:block overflow-x-auto">

          <table className="w-full">

            <thead className="bg-gray-50">

              <tr>

                <th className="text-left px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wide">
                  User
                </th>

                <th className="text-left px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wide">
                  Role
                </th>

                <th className="text-left px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wide">
                  Blood Type
                </th>

                <th className="text-left px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wide">
                  Status
                </th>

                <th className="text-left px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wide">
                  Joined
                </th>

                <th className="text-right px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wide">
                  Action
                </th>

              </tr>

            </thead>

            <tbody className="divide-y divide-gray-100">

              {users.map((user) => (

                <tr
                  key={user.email}
                  className="hover:bg-gray-50 transition"
                >

                  {/* User */}
                  <td className="px-6 py-5">

                    <div className="flex items-center gap-3">

                      <div className="w-11 h-11 rounded-full bg-red-50 text-red-600 flex items-center justify-center font-bold">
                        {user.name.charAt(0)}
                      </div>

                      <div>

                        <p className="text-sm font-semibold text-gray-900">
                          {user.name}
                        </p>

                        <p className="text-xs text-gray-500 mt-1">
                          {user.email}
                        </p>

                      </div>

                    </div>

                  </td>

                  {/* Role */}
                  <td className="px-6 py-5">

                    <div className="flex items-center gap-2">

                      <span
                        className={`w-8 h-8 rounded-lg flex items-center justify-center ${getRoleStyle(
                          user.role
                        )}`}
                      >
                        {getRoleIcon(user.role)}
                      </span>

                      <span className="text-sm text-gray-700">
                        {user.role}
                      </span>

                    </div>

                  </td>

                  {/* Blood Type */}
                  <td className="px-6 py-5">

                    {user.bloodType === "-" ? (

                      <span className="text-sm text-gray-400">
                        -
                      </span>

                    ) : (

                      <span className="inline-flex items-center gap-1 bg-red-50 text-red-700 px-3 py-1.5 rounded-full text-xs font-bold">
                        <Droplets size={13} />
                        {user.bloodType}
                      </span>

                    )}

                  </td>

                  {/* Status */}
                  <td className="px-6 py-5">

                    <span
                      className={`px-3 py-1.5 rounded-full text-xs font-semibold ${getStatusStyle(
                        user.status
                      )}`}
                    >
                      {user.status}
                    </span>

                  </td>

                  {/* Joined */}
                  <td className="px-6 py-5 text-sm text-gray-500">
                    {user.joined}
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

          {users.map((user) => (

            <div
              key={user.email}
              className="p-5"
            >

              {/* User Header */}
              <div className="flex items-start justify-between gap-4">

                <div className="flex items-center gap-3 min-w-0">

                  <div className="w-11 h-11 shrink-0 rounded-full bg-red-50 text-red-600 flex items-center justify-center font-bold">
                    {user.name.charAt(0)}
                  </div>

                  <div className="min-w-0">

                    <p className="font-semibold text-gray-900 truncate">
                      {user.name}
                    </p>

                    <p className="text-xs text-gray-500 mt-1 truncate">
                      {user.email}
                    </p>

                  </div>

                </div>

                <span
                  className={`shrink-0 px-3 py-1.5 rounded-full text-xs font-semibold ${getStatusStyle(
                    user.status
                  )}`}
                >
                  {user.status}
                </span>

              </div>

              {/* User Information */}
              <div className="grid grid-cols-2 gap-4 mt-5">

                <div>

                  <p className="text-xs text-gray-400">
                    Role
                  </p>

                  <div className="flex items-center gap-2 mt-1">

                    <span
                      className={`w-7 h-7 rounded-lg flex items-center justify-center ${getRoleStyle(
                        user.role
                      )}`}
                    >
                      {getRoleIcon(user.role)}
                    </span>

                    <p className="text-sm font-medium text-gray-900">
                      {user.role}
                    </p>

                  </div>

                </div>

                <div>

                  <p className="text-xs text-gray-400">
                    Blood Type
                  </p>

                  {user.bloodType === "-" ? (

                    <p className="text-sm text-gray-400 mt-1">
                      Not applicable
                    </p>

                  ) : (

                    <div className="flex items-center gap-1.5 mt-1 text-sm font-semibold text-red-600">
                      <Droplets size={15} />
                      {user.bloodType}
                    </div>

                  )}

                </div>

                <div>

                  <p className="text-xs text-gray-400">
                    Joined
                  </p>

                  <p className="text-sm font-medium text-gray-900 mt-1">
                    {user.joined}
                  </p>

                </div>

              </div>

              {/* Mobile Action */}
              <button
                type="button"
                className="w-full inline-flex items-center justify-center gap-2 border border-gray-200 rounded-xl py-2.5 mt-5 text-sm font-medium text-gray-700 hover:bg-gray-50 transition"
              >
                <Eye size={16} />
                View User
              </button>

            </div>

          ))}

        </div>

      </section>

    </div>
  );
}

export default Users;
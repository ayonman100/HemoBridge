import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Download,
  TrendingUp,
  Users,
  Hospital,
  Building2,
  MapPin,
  Activity,
  HeartPulse,
} from "lucide-react";

function Reports() {
  const bloodGroups = [
    { type: "O+", units: 386 },
    { type: "A+", units: 274 },
    { type: "B+", units: 198 },
    { type: "O-", units: 96 },
    { type: "A-", units: 72 },
    { type: "B-", units: 51 },
    { type: "AB+", units: 48 },
    { type: "AB-", units: 21 },
  ];

  const maxUnits = Math.max(
    ...bloodGroups.map((item) => item.units)
  );

  const donationData = [
    { month: "Mar", value: 210, height: 42 },
    { month: "Apr", value: 290, height: 58 },
    { month: "May", value: 240, height: 48 },
    { month: "Jun", value: 360, height: 72 },
    { month: "Jul", value: 320, height: 64 },
    { month: "Aug", value: 440, height: 88 },
  ];

  return (
    <div className="space-y-8">

      {/* Header */}
      <section>
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
              Reports & Analytics
            </h1>

            <p className="text-gray-500 mt-2">
              Monitor HemoBridge activity and network performance.
            </p>
          </div>

          <button
            type="button"
            className="inline-flex items-center justify-center gap-2 bg-red-600 text-white px-5 py-3 rounded-xl font-medium hover:bg-red-700 transition"
          >
            <Download size={18} />
            Export Report
          </button>

        </div>
      </section>

      {/* Main Statistics */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

        {/* Donations */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-sm transition">

          <div className="flex items-start justify-between">

            <div>
              <p className="text-sm text-gray-500">
                Total Donations
              </p>

              <p className="text-3xl font-bold text-gray-900 mt-2">
                3,842
              </p>

              <div className="flex items-center gap-1 mt-2 text-sm text-green-600">
                <TrendingUp size={15} />
                <span>14.8% this month</span>
              </div>
            </div>

            <div className="w-11 h-11 rounded-xl bg-red-50 text-red-600 flex items-center justify-center">
              <HeartPulse size={22} />
            </div>

          </div>

        </div>

        {/* Requests */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-sm transition">

          <div className="flex items-start justify-between">

            <div>
              <p className="text-sm text-gray-500">
                Blood Requests
              </p>

              <p className="text-3xl font-bold text-gray-900 mt-2">
                248
              </p>

              <p className="text-sm text-green-600 mt-2">
                80.2% fulfilled
              </p>
            </div>

            <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
              <Activity size={22} />
            </div>

          </div>

        </div>

        {/* Donors */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-sm transition">

          <div className="flex items-start justify-between">

            <div>
              <p className="text-sm text-gray-500">
                Registered Donors
              </p>

              <p className="text-3xl font-bold text-gray-900 mt-2">
                1,102
              </p>

              <div className="flex items-center gap-1 mt-2 text-sm text-green-600">
                <TrendingUp size={15} />
                <span>12% this month</span>
              </div>
            </div>

            <div className="w-11 h-11 rounded-xl bg-green-50 text-green-600 flex items-center justify-center">
              <Users size={22} />
            </div>

          </div>

        </div>

        {/* Lives Helped */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-sm transition">

          <div className="flex items-start justify-between">

            <div>
              <p className="text-sm text-gray-500">
                Lives Potentially Helped
              </p>

              <p className="text-3xl font-bold text-red-600 mt-2">
                11,526
              </p>

              <p className="text-sm text-gray-400 mt-2">
                Estimated impact
              </p>
            </div>

            <div className="w-11 h-11 rounded-xl bg-red-50 text-red-600 flex items-center justify-center">
              <HeartPulse size={22} />
            </div>

          </div>

        </div>

      </section>

      {/* Charts */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* Donation Activity */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6">

          <div className="flex items-center justify-between mb-6">

            <div>
              <h2 className="text-xl font-bold text-gray-900">
                Donation Activity
              </h2>

              <p className="text-sm text-gray-500 mt-1">
                Donations completed over the past 6 months.
              </p>
            </div>

            <div className="flex items-center gap-1 text-sm text-green-600 font-semibold">
              <TrendingUp size={16} />
              +14.8%
            </div>

          </div>

          <div className="h-64 flex items-end justify-between gap-3 sm:gap-5">

            {donationData.map((item) => (

              <div
                key={item.month}
                className="flex-1 flex flex-col items-center justify-end h-full"
              >

                <span className="text-xs text-gray-400 mb-2">
                  {item.value}
                </span>

                <div
                  className="w-full max-w-12 bg-red-500 hover:bg-red-600 rounded-t-xl transition"
                  style={{
                    height: `${item.height}%`,
                  }}
                />

                <span className="text-xs text-gray-500 mt-3">
                  {item.month}
                </span>

              </div>

            ))}

          </div>

        </div>

        {/* Request Performance */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6">

          <div className="mb-6">

            <h2 className="text-xl font-bold text-gray-900">
              Request Performance
            </h2>

            <p className="text-sm text-gray-500 mt-1">
              Current status of blood requests.
            </p>

          </div>

          <div className="space-y-6">

            {/* Fulfilled */}
            <div>

              <div className="flex justify-between text-sm mb-2">

                <span className="text-gray-600">
                  Fulfilled
                </span>

                <span className="font-semibold text-green-600">
                  80.2%
                </span>

              </div>

              <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-green-500 rounded-full w-[80%]" />
              </div>

            </div>

            {/* Searching */}
            <div>

              <div className="flex justify-between text-sm mb-2">

                <span className="text-gray-600">
                  Searching
                </span>

                <span className="font-semibold text-yellow-600">
                  12.5%
                </span>

              </div>

              <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-yellow-500 rounded-full w-[13%]" />
              </div>

            </div>

            {/* Pending */}
            <div>

              <div className="flex justify-between text-sm mb-2">

                <span className="text-gray-600">
                  Pending
                </span>

                <span className="font-semibold text-blue-600">
                  5.3%
                </span>

              </div>

              <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-blue-500 rounded-full w-[5%]" />
              </div>

            </div>

            {/* Cancelled */}
            <div>

              <div className="flex justify-between text-sm mb-2">

                <span className="text-gray-600">
                  Cancelled
                </span>

                <span className="font-semibold text-gray-500">
                  2%
                </span>

              </div>

              <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-gray-400 rounded-full w-[2%]" />
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* Blood Group Distribution */}
      <section className="bg-white border border-gray-200 rounded-2xl p-6">

        <div className="mb-6">

          <h2 className="text-xl font-bold text-gray-900">
            Blood Group Distribution
          </h2>

          <p className="text-sm text-gray-500 mt-1">
            Registered donor availability by blood type.
          </p>

        </div>

        <div className="space-y-5">

          {bloodGroups.map((blood) => {

            const percentage = Math.round(
              (blood.units / maxUnits) * 100
            );

            return (
              <div key={blood.type}>

                <div className="flex items-center justify-between mb-2">

                  <div className="flex items-center gap-3">

                    <span className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center font-bold">
                      {blood.type}
                    </span>

                    <span className="text-sm font-medium text-gray-700">
                      {blood.units} donors
                    </span>

                  </div>

                  <span className="text-sm text-gray-500">
                    {blood.units} units
                  </span>

                </div>

                <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden">

                  <div
                    className="h-full bg-red-500 rounded-full transition-all"
                    style={{
                      width: `${percentage}%`,
                    }}
                  />

                </div>

              </div>
            );
          })}

        </div>

      </section>

      {/* Network Summary */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-5">

        {/* Hospitals */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-sm transition">

          <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
            <Hospital size={24} />
          </div>

          <p className="text-sm text-gray-500">
            Verified Hospitals
          </p>

          <p className="text-3xl font-bold text-gray-900 mt-2">
            42
          </p>

        </div>

        {/* Blood Banks */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-sm transition">

          <div className="w-12 h-12 rounded-xl bg-red-50 text-red-600 flex items-center justify-center mb-4">
            <Building2 size={24} />
          </div>

          <p className="text-sm text-gray-500">
            Verified Blood Banks
          </p>

          <p className="text-3xl font-bold text-gray-900 mt-2">
            18
          </p>

        </div>

        {/* Donation Centres */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-sm transition">

          <div className="w-12 h-12 rounded-xl bg-green-50 text-green-600 flex items-center justify-center mb-4">
            <MapPin size={24} />
          </div>

          <p className="text-sm text-gray-500">
            Donation Centres
          </p>

          <p className="text-3xl font-bold text-gray-900 mt-2">
            67
          </p>

        </div>

      </section>

    </div>
  );
}

export default Reports;
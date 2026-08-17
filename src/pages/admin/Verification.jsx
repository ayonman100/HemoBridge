import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Hospital,
  Building2,
  MapPin,
  CalendarDays,
  Eye,
  Check,
  X,
  Clock3,
  CheckCircle2,
  XCircle,
  Info,
} from "lucide-react";

function Verification() {
  const applications = [
    {
      name: "St. Nicholas Hospital",
      type: "Hospital",
      location: "Lagos Island",
      email: "admin@stnicholashospital.com",
      submitted: "Aug 10, 2026",
      status: "Pending",
    },
    {
      name: "LifeFlow Blood Bank",
      type: "Blood Bank",
      location: "Yaba, Lagos",
      email: "admin@lifeflow.ng",
      submitted: "Aug 10, 2026",
      status: "Pending",
    },
    {
      name: "Mercy Medical Centre",
      type: "Hospital",
      location: "Surulere, Lagos",
      email: "admin@mercymedical.ng",
      submitted: "Aug 9, 2026",
      status: "Pending",
    },
    {
      name: "Hope Blood Services",
      type: "Blood Bank",
      location: "Lagos Island",
      email: "admin@hopeblood.ng",
      submitted: "Aug 8, 2026",
      status: "Pending",
    },
  ];

  const getOrganisationIcon = (type) => {
    if (type === "Hospital") {
      return <Hospital size={22} />;
    }

    return <Building2 size={22} />;
  };

  const getOrganisationStyle = (type) => {
    if (type === "Hospital") {
      return "bg-blue-50 text-blue-600";
    }

    return "bg-purple-50 text-purple-600";
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

        <div className="mt-4">

          <h1 className="text-3xl font-bold text-gray-900">
            Verification
          </h1>

          <p className="text-gray-500 mt-2 max-w-2xl">
            Review and verify hospitals and blood banks requesting access
            to HemoBridge.
          </p>

        </div>

      </section>

      {/* Statistics */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8">

        {/* Pending */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-sm transition">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-sm text-gray-500">
                Pending Reviews
              </p>

              <p className="text-3xl font-bold text-yellow-600 mt-2">
                4
              </p>

              <p className="text-xs text-gray-400 mt-2">
                Require admin attention
              </p>

            </div>

            <div className="w-11 h-11 rounded-xl bg-yellow-50 text-yellow-600 flex items-center justify-center">
              <Clock3 size={21} />
            </div>

          </div>

        </div>

        {/* Verified */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-sm transition">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-sm text-gray-500">
                Verified This Month
              </p>

              <p className="text-3xl font-bold text-green-600 mt-2">
                18
              </p>

              <p className="text-xs text-gray-400 mt-2">
                Successfully approved
              </p>

            </div>

            <div className="w-11 h-11 rounded-xl bg-green-50 text-green-600 flex items-center justify-center">
              <CheckCircle2 size={21} />
            </div>

          </div>

        </div>

        {/* Rejected */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-sm transition">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-sm text-gray-500">
                Rejected
              </p>

              <p className="text-3xl font-bold text-red-600 mt-2">
                3
              </p>

              <p className="text-xs text-gray-400 mt-2">
                Applications rejected
              </p>

            </div>

            <div className="w-11 h-11 rounded-xl bg-red-50 text-red-600 flex items-center justify-center">
              <XCircle size={21} />
            </div>

          </div>

        </div>

      </section>

      {/* Verification Queue */}
      <section className="bg-white border border-gray-200 rounded-2xl overflow-hidden">

        {/* Section Header */}
        <div className="p-6 border-b border-gray-100">

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">

            <div>

              <h2 className="text-xl font-bold text-gray-900">
                Verification Queue
              </h2>

              <p className="text-sm text-gray-500 mt-1">
                Applications waiting for review.
              </p>

            </div>

            <span className="inline-flex items-center gap-2 bg-yellow-50 text-yellow-700 px-4 py-2 rounded-full text-sm font-semibold w-fit">
              <Clock3 size={15} />
              4 Pending
            </span>

          </div>

        </div>

        {/* Applications */}
        <div className="divide-y divide-gray-100">

          {applications.map((application) => (

            <div
              key={application.email}
              className="p-6 hover:bg-gray-50 transition"
            >

              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

                {/* Organisation */}
                <div className="flex items-start gap-4 min-w-0">

                  <div
                    className={`w-12 h-12 shrink-0 rounded-xl flex items-center justify-center ${getOrganisationStyle(
                      application.type
                    )}`}
                  >
                    {getOrganisationIcon(application.type)}
                  </div>

                  <div className="min-w-0">

                    <div className="flex flex-wrap items-center gap-2">

                      <h3 className="font-semibold text-gray-900">
                        {application.name}
                      </h3>

                      <span className="bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full text-xs font-medium">
                        {application.type}
                      </span>

                    </div>

                    <p className="text-sm text-gray-500 mt-2 break-all">
                      {application.email}
                    </p>

                    <div className="flex flex-wrap gap-x-5 gap-y-2 mt-3">

                      <p className="inline-flex items-center gap-1.5 text-xs text-gray-400">
                        <MapPin size={14} />
                        {application.location}
                      </p>

                      <p className="inline-flex items-center gap-1.5 text-xs text-gray-400">
                        <CalendarDays size={14} />
                        Submitted {application.submitted}
                      </p>

                    </div>

                  </div>

                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-3 lg:shrink-0">

                  <button
                    type="button"
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl border border-gray-200 text-gray-700 text-sm font-medium hover:bg-white hover:border-gray-300 transition"
                  >
                    <Eye size={16} />
                    Review Details
                  </button>

                  <button
                    type="button"
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-green-600 text-white text-sm font-medium hover:bg-green-700 transition"
                  >
                    <Check size={16} />
                    Approve
                  </button>

                  <button
                    type="button"
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-red-50 text-red-600 text-sm font-medium hover:bg-red-100 transition"
                  >
                    <X size={16} />
                    Reject
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

      </section>

      {/* Information */}
      <section className="bg-blue-50 border border-blue-100 rounded-2xl p-6 mt-8">

        <div className="flex items-start gap-4">

          <div className="w-10 h-10 shrink-0 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
            <Info size={20} />
          </div>

          <div>

            <h3 className="font-semibold text-blue-900">
              Verification is important
            </h3>

            <p className="text-sm text-blue-700 mt-1 leading-relaxed">
              Only verified hospitals and blood banks should be able to
              participate in the HemoBridge blood request network. The
              backend will eventually validate submitted documents and
              update these verification records automatically.
            </p>

          </div>

        </div>

      </section>

    </div>
  );
}

export default Verification;
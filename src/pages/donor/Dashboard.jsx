import { Link } from "react-router-dom";
import DashboardLayout from "../../layouts/DashboardLayout";
import StatCard from "../../components/dashboard/StatCard";
import DashboardCard from "../../components/dashboard/DashboardCard";

function Dashboard() {
  return (
    <DashboardLayout>

      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

          <div>
            <p className="text-sm text-gray-500">
              Welcome back
            </p>

            <h1 className="text-2xl font-bold text-gray-900">
              Donor Dashboard
            </h1>
          </div>

          <Link
            to="/donor/profile"
            className="w-11 h-11 rounded-full bg-red-100 flex items-center justify-center text-red-600 font-bold"
          >
            D
          </Link>

        </div>
      </header>

      {/* Main */}
      <main className="max-w-7xl mx-auto px-6 py-8">

        {/* Availability Card */}
        <section className="bg-white rounded-2xl border border-gray-200 p-6 mb-8">

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">

            <div>
              <p className="text-sm text-gray-500">
                Donation Availability
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-1">
                You are eligible to donate
              </h2>

              <p className="text-gray-600 mt-2">
                Your blood type is O+.
              </p>
            </div>

            <div className="flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full w-fit">
              <span className="w-2.5 h-2.5 bg-green-500 rounded-full"></span>
              Available
            </div>

          </div>

        </section>

        {/* Stats */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">

          <StatCard
            title="Blood Type"
            value="O+"
            subtitle="Your registered blood group"
            icon="🩸"
          />

          <StatCard
            title="Total Donations"
            value="6"
            subtitle="Donations completed"
            icon="❤️"
          />

          <StatCard
            title="Lives Potentially Helped"
            value="18"
            subtitle="Based on your donations"
            icon="🤝"
          />

        </section>

        {/* Quick Actions */}
        <section className="mb-8">

          <h2 className="text-xl font-bold text-gray-900 mb-5">
            Quick Actions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

            <Link
              to="/donor/nearby-centres"
              className="bg-red-600 text-white rounded-2xl p-6 hover:bg-red-700 transition"
            >
              <div className="text-3xl mb-4">
                📍
              </div>

              <h3 className="font-semibold text-lg">
                Find Donation Centres
              </h3>

              <p className="text-red-100 text-sm mt-2">
                Find nearby places where you can donate blood.
              </p>
            </Link>

            <Link
              to="/donor/requests"
              className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-md transition"
            >
              <div className="text-3xl mb-4">
                🚨
              </div>

              <h3 className="font-semibold text-lg text-gray-900">
                Blood Requests
              </h3>

              <p className="text-gray-500 text-sm mt-2">
                View nearby requests that may need your blood type.
              </p>
            </Link>

            <Link
              to="/donor/donation-history"
              className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-md transition"
            >
              <div className="text-3xl mb-4">
                🩸
              </div>

              <h3 className="font-semibold text-lg text-gray-900">
                Donation History
              </h3>

              <p className="text-gray-500 text-sm mt-2">
                Review your previous blood donations.
              </p>
            </Link>

          </div>

        </section>

        {/* Nearby Blood Request */}
        <DashboardCard
          title="Nearby Blood Request"
          subtitle="Requests that may match your blood type"
          action={
            <Link
              to="/donor/requests"
              className="text-red-600 font-medium text-sm"
            >
              View all
            </Link>
          }
        >

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">

            <div>

              <div className="flex items-center gap-3">

                <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full font-bold">
                  O+
                </span>

                <h3 className="font-semibold text-gray-900">
                  Emergency Blood Request
                </h3>

              </div>

              <p className="text-gray-500 text-sm mt-3">
                Lagos University Teaching Hospital
              </p>

              <p className="text-gray-400 text-sm mt-1">
                4.2 km away
              </p>

            </div>

            <button
              type="button"
              className="bg-red-600 text-white px-5 py-3 rounded-lg font-medium hover:bg-red-700 transition"
            >
              View Request
            </button>

          </div>

        </DashboardCard>

      </main>

    </DashboardLayout>
  );
}

export default Dashboard;
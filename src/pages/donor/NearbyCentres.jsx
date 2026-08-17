import {
  Search,
  MapPin,
  Hospital,
  Navigation,
  Clock,
  Droplet,
  Info,
} from "lucide-react";

import MapCard from "../../components/dashboard/MapCard";

function NearbyCentres() {
  const centres = [
    {
      id: 1,
      name: "Lagos University Teaching Hospital",
      location: "Idi-Araba, Lagos",
      distance: "4.2 km",
      status: "Open",
      hours: "Open until 5:00 PM",
    },
    {
      id: 2,
      name: "National Blood Service Commission",
      location: "Gbagada, Lagos",
      distance: "6.8 km",
      status: "Open",
      hours: "Open until 4:00 PM",
    },
    {
      id: 3,
      name: "Reddington Hospital",
      location: "Victoria Island, Lagos",
      distance: "9.5 km",
      status: "Open",
      hours: "Open until 6:00 PM",
    },
    {
      id: 4,
      name: "St. Nicholas Hospital",
      location: "Lagos Island, Lagos",
      distance: "11.2 km",
      status: "Closed",
      hours: "Opens tomorrow at 8:00 AM",
    },
  ];

  return (
    <div className="donor-nearby-centres">

      {/* =====================================================
          PAGE HEADER
      ===================================================== */}

      <section className="mb-8">
        <p className="text-sm text-gray-500">
          Help save a life
        </p>

        <h1 className="text-3xl font-bold text-gray-900 mt-1">
          Nearby Donation Centres
        </h1>

        <p className="text-gray-500 mt-2">
          Find blood donation centres near your location.
        </p>
      </section>


      {/* =====================================================
          SEARCH / LOCATION
      ===================================================== */}

      <section className="bg-white border border-gray-200 rounded-2xl p-5 mb-8">

        <div className="flex flex-col md:flex-row gap-4">

          {/* Search */}

          <div className="flex-1 relative">

            <Search
              size={20}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type="text"
              placeholder="Search by location or centre name"
              className="w-full border border-gray-200 rounded-xl pl-11 pr-4 py-3 outline-none focus:ring-2 focus:ring-red-200 focus:border-red-500"
            />

          </div>


          {/* Location Button */}

          <button
            type="button"
            className="bg-red-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-red-700 transition flex items-center justify-center gap-2"
          >
            <MapPin size={19} />

            Use My Location
          </button>

        </div>

      </section>


      {/* =====================================================
          MAP
      ===================================================== */}

      <section className="mb-8">

        <div className="flex items-center justify-between mb-5">

          <div>
            <h2 className="text-xl font-bold text-gray-900">
              Donation Centres Map
            </h2>

            <p className="text-sm text-gray-500 mt-1">
              Explore nearby blood donation locations.
            </p>
          </div>

          <MapPin
            size={22}
            className="text-red-600"
          />

        </div>

        <MapCard />

      </section>


      {/* =====================================================
          FILTERS
      ===================================================== */}

      <section className="flex flex-wrap gap-3 mb-6">

        <button
          type="button"
          className="bg-red-600 text-white px-4 py-2 rounded-full text-sm font-medium"
        >
          All Centres
        </button>

      </section>


      {/* =====================================================
          RESULTS HEADER
      ===================================================== */}

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-5">

        <div>

          <h2 className="text-xl font-bold text-gray-900">
            Donation Centres
          </h2>

          <p className="text-sm text-gray-500 mt-1">
            Centres available near you
          </p>

        </div>

        <span className="text-sm text-gray-500">
          {centres.length} centres
        </span>

      </div>


      {/* =====================================================
          CENTRE LIST
      ===================================================== */}

      <section className="space-y-4">

        {centres.map((centre) => (

          <div
            key={centre.id}
            className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-md transition"
          >

            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

              {/* Centre Information */}

              <div className="flex items-start gap-4">

                <div className="w-12 h-12 rounded-xl bg-red-50 text-red-600 flex items-center justify-center shrink-0">
                  <Hospital size={24} />
                </div>

                <div>

                  <h3 className="font-semibold text-gray-900">
                    {centre.name}
                  </h3>

                  <p className="text-gray-500 text-sm mt-1 flex items-center gap-1">
                    <MapPin size={15} />

                    {centre.location}
                  </p>

                  <div className="flex flex-wrap items-center gap-4 mt-3">

                    <span className="text-sm text-gray-500 flex items-center gap-1">
                      <Navigation size={15} />

                      {centre.distance} away
                    </span>

                    <span
                      className={`text-xs font-semibold px-3 py-1 rounded-full ${
                        centre.status === "Open"
                          ? "bg-green-50 text-green-700"
                          : "bg-gray-100 text-gray-500"
                      }`}
                    >
                      {centre.status}
                    </span>

                    <span className="text-sm text-gray-400 flex items-center gap-1">
                      <Clock size={15} />

                      {centre.hours}
                    </span>

                  </div>

                </div>

              </div>


              {/* Actions */}

              <div className="flex flex-col sm:flex-row gap-3">

                <button
                  type="button"
                  className="border border-gray-200 text-gray-700 px-5 py-3 rounded-xl font-medium hover:bg-gray-50 transition flex items-center justify-center gap-2"
                >
                  <Hospital size={17} />

                  View Details
                </button>

                <button
                  type="button"
                  className="bg-red-600 text-white px-5 py-3 rounded-xl font-medium hover:bg-red-700 transition flex items-center justify-center gap-2"
                >
                  <Navigation size={17} />

                  Get Directions
                </button>

              </div>

            </div>

          </div>

        ))}

      </section>


      {/* =====================================================
          INFORMATION
      ===================================================== */}

      <section className="bg-red-50 border border-red-100 rounded-2xl p-6 mt-8">

        <div className="flex items-start gap-4">

          <div className="w-11 h-11 rounded-xl bg-red-100 text-red-600 flex items-center justify-center shrink-0">
            <Info size={22} />
          </div>

          <div>

            <h2 className="font-bold text-red-900">
              Before you donate
            </h2>

            <p className="text-red-800 text-sm mt-2 leading-6">
              Make sure you are feeling well and meet the donation
              requirements. The donation centre will carry out the
              necessary checks before your donation.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          DONATION REMINDER
      ===================================================== */}

      <section className="bg-white border border-gray-200 rounded-2xl p-6 mt-8">

        <div className="flex items-start gap-4">

          <div className="w-11 h-11 rounded-xl bg-red-50 text-red-600 flex items-center justify-center shrink-0">
            <Droplet size={22} />
          </div>

          <div>

            <h2 className="font-semibold text-gray-900">
              Your donation can make a difference
            </h2>

            <p className="text-sm text-gray-500 mt-1">
              Find a convenient centre and keep your donation history up to date.
            </p>

          </div>

        </div>

      </section>

    </div>
  );
}

export default NearbyCentres;
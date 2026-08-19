import { Link } from "react-router-dom";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Droplet,
  Bell,
  Shield,
  LogOut,
  Pencil,
  CheckCircle,
  CalendarDays,
  Heart,
} from "lucide-react";

import "./Profile.css";

function Profile() {
  return (
    <div className="donor-profile">

      {/* =====================================================
          PAGE HEADER
      ===================================================== */}

      <section className="mb-8">
        <p className="text-sm text-gray-500">
          Manage your account
        </p>

        <h1 className="text-3xl font-bold text-gray-900 mt-1">
          My Profile
        </h1>

        <p className="text-gray-500 mt-2">
          View and manage your donor information.
        </p>
      </section>


      {/* =====================================================
          PROFILE HEADER
      ===================================================== */}

      <section className="bg-white border border-gray-200 rounded-2xl p-6 mb-6">

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

          <div className="flex items-center gap-5">

            {/* Avatar */}

            <div className="w-20 h-20 rounded-full bg-red-100 text-red-600 flex items-center justify-center shrink-0">
              <User size={34} />
            </div>


            {/* User Information */}

            <div>

              <h2 className="text-2xl font-bold text-gray-900">
                Donor
              </h2>

              <p className="text-gray-500 mt-1">
                Blood Donor
              </p>

              <div className="flex items-center gap-2 mt-3">

                <span className="w-2.5 h-2.5 bg-green-500 rounded-full" />

                <span className="text-sm text-green-700 font-medium">
                  Available to donate
                </span>

              </div>

            </div>

          </div>


          {/* Edit Profile */}

          <button
            type="button"
            className="border border-gray-200 text-gray-700 px-5 py-3 rounded-xl font-medium hover:bg-gray-50 transition flex items-center justify-center gap-2"
          >
            <Pencil size={17} />

            Edit Profile
          </button>

        </div>

      </section>


      {/* =====================================================
          MAIN GRID
      ===================================================== */}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">


        {/* ===================================================
            PERSONAL INFORMATION
        =================================================== */}

        <section className="lg:col-span-2 bg-white border border-gray-200 rounded-2xl p-6">

          <div className="mb-6">

            <h2 className="text-xl font-bold text-gray-900">
              Personal Information
            </h2>

            <p className="text-sm text-gray-500 mt-1">
              Your basic account information
            </p>

          </div>


          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Full Name */}

            <div>
              <p className="text-sm text-gray-500 flex items-center gap-2">
                <User size={16} />
                Full Name
              </p>

              <p className="font-semibold text-gray-900 mt-2">
                Donor
              </p>
            </div>


            {/* Email */}

            <div>
              <p className="text-sm text-gray-500 flex items-center gap-2">
                <Mail size={16} />
                Email Address
              </p>

              <p className="font-semibold text-gray-900 mt-2 break-words">
                donor@example.com
              </p>
            </div>


            {/* Phone */}

            <div>
              <p className="text-sm text-gray-500 flex items-center gap-2">
                <Phone size={16} />
                Phone Number
              </p>

              <p className="font-semibold text-gray-900 mt-2">
                +234 800 000 0000
              </p>
            </div>


            {/* Location */}

            <div>
              <p className="text-sm text-gray-500 flex items-center gap-2">
                <MapPin size={16} />
                Location
              </p>

              <p className="font-semibold text-gray-900 mt-2">
                Lagos, Nigeria
              </p>
            </div>

          </div>

        </section>


        {/* ===================================================
            BLOOD INFORMATION
        =================================================== */}

        <section className="bg-white border border-gray-200 rounded-2xl p-6">

          <h2 className="text-xl font-bold text-gray-900">
            Blood Information
          </h2>

          <p className="text-sm text-gray-500 mt-1">
            Your registered blood information
          </p>


          <div className="mt-6">

            <p className="text-sm text-gray-500">
              Blood Type
            </p>

            <div className="flex items-center gap-3 mt-3">

              <div className="w-14 h-14 rounded-xl bg-red-50 text-red-600 flex items-center justify-center shrink-0">
                <Droplet size={25} />
              </div>

              <div>

                <p className="font-bold text-gray-900">
                  O Positive
                </p>

                <p className="text-sm text-gray-500">
                  O Rh-positive
                </p>

              </div>

            </div>

          </div>


          {/* Donation Status */}

          <div className="border-t border-gray-100 mt-6 pt-5">

            <p className="text-sm text-gray-500">
              Donation Status
            </p>

            <span className="inline-flex items-center gap-2 mt-2 bg-green-50 text-green-700 px-3 py-1.5 rounded-full text-sm font-semibold">
              <CheckCircle size={15} />

              Eligible
            </span>

          </div>

        </section>


        {/* ===================================================
            DONATION SUMMARY
        =================================================== */}

        <section className="lg:col-span-2 bg-white border border-gray-200 rounded-2xl p-6">

          <h2 className="text-xl font-bold text-gray-900">
            Donation Summary
          </h2>

          <p className="text-sm text-gray-500 mt-1">
            Your contribution so far
          </p>


          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-6">


            {/* Total Donations */}

            <div className="bg-gray-50 rounded-xl p-5">

              <div className="flex items-center justify-between">

                <p className="text-sm text-gray-500">
                  Total Donations
                </p>

                <Droplet
                  size={18}
                  className="text-red-600"
                />

              </div>

              <p className="text-2xl font-bold text-gray-900 mt-3">
                6
              </p>

            </div>


            {/* Last Donation */}

            <div className="bg-gray-50 rounded-xl p-5">

              <div className="flex items-center justify-between">

                <p className="text-sm text-gray-500">
                  Last Donation
                </p>

                <CalendarDays
                  size={18}
                  className="text-red-600"
                />

              </div>

              <p className="text-lg font-bold text-gray-900 mt-3">
                July 18, 2026
              </p>

            </div>


            {/* Next Eligible */}

            <div className="bg-gray-50 rounded-xl p-5">

              <div className="flex items-center justify-between">

                <p className="text-sm text-gray-500">
                  Next Eligible Date
                </p>

                <CalendarDays
                  size={18}
                  className="text-red-600"
                />

              </div>

              <p className="text-lg font-bold text-gray-900 mt-3">
                October 18, 2026
              </p>

            </div>

          </div>

        </section>


        {/* ===================================================
            ACCOUNT SETTINGS
        =================================================== */}

        <section className="bg-white border border-gray-200 rounded-2xl p-6">

          <h2 className="text-xl font-bold text-gray-900">
            Account
          </h2>

          <p className="text-sm text-gray-500 mt-1">
            Manage your account settings
          </p>


          <div className="space-y-3 mt-6">


            {/* Notifications */}

            <button
              type="button"
              className="w-full text-left px-4 py-3 rounded-xl hover:bg-gray-50 transition flex items-start gap-3"
            >

              <Bell
                size={20}
                className="text-gray-500 mt-0.5 shrink-0"
              />

              <div>

                <p className="font-medium text-gray-900">
                  Notifications
                </p>

                <p className="text-xs text-gray-500 mt-1">
                  Manage your notification preferences
                </p>

              </div>

            </button>


            {/* Security */}

            <button
              type="button"
              className="w-full text-left px-4 py-3 rounded-xl hover:bg-gray-50 transition flex items-start gap-3"
            >

              <Shield
                size={20}
                className="text-gray-500 mt-0.5 shrink-0"
              />

              <div>

                <p className="font-medium text-gray-900">
                  Security
                </p>

                <p className="text-xs text-gray-500 mt-1">
                  Manage your password and security
                </p>

              </div>

            </button>


            {/* Logout */}

            <Link
              to="/"
              className="flex items-center gap-3 px-4 py-3 rounded-xl text-red-600 hover:bg-red-50 transition"
            >

              <LogOut size={20} />

              <div>

                <p className="font-medium">
                  Log out
                </p>

                <p className="text-xs text-red-400 mt-1">
                  Sign out of your HemoBridge account
                </p>

              </div>

            </Link>

          </div>

        </section>

      </div>


      {/* =====================================================
          DONOR IMPACT
      ===================================================== */}

      <section className="bg-red-50 border border-red-100 rounded-2xl p-6 mt-8">

        <div className="flex items-start gap-4">

          <div className="w-11 h-11 rounded-xl bg-red-100 text-red-600 flex items-center justify-center shrink-0">
            <Heart size={22} />
          </div>

          <div>

            <h2 className="font-bold text-red-900">
              Your donations make an impact
            </h2>

            <p className="text-sm text-red-800 mt-2 leading-6">
              Every donation contributes to a stronger blood supply
              and can help patients who need blood during emergencies.
            </p>

          </div>

        </div>

      </section>

    </div>
  );
}

export default Profile;
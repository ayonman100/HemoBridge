import { Link } from "react-router-dom";
import { CheckCircle, ArrowRight, CreditCard } from "lucide-react";

function SubscriptionSuccess() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6 py-10">

      <div className="w-full max-w-md bg-white rounded-2xl border border-gray-200 p-8 md:p-10 text-center">

        {/* Success Icon */}
        <div className="w-20 h-20 mx-auto rounded-full bg-green-50 flex items-center justify-center mb-6">
          <CheckCircle
            size={44}
            strokeWidth={1.8}
            className="text-green-600"
          />
        </div>

        {/* Header */}
        <h1 className="text-3xl font-bold text-gray-900">
          Subscription Successful
        </h1>

        <p className="mt-3 text-gray-600 leading-relaxed">
          Your HemoBridge Basic Plan subscription has been successfully
          activated.
        </p>

        {/* Plan Details */}
        <div className="bg-gray-50 rounded-xl p-5 mt-7 text-left">

          <div className="flex items-center justify-between mb-4">
            <span className="text-sm text-gray-500">
              Plan
            </span>

            <span className="font-semibold text-gray-900">
              Basic Plan
            </span>
          </div>

          <div className="flex items-center justify-between mb-4">
            <span className="text-sm text-gray-500">
              Billing
            </span>

            <span className="font-semibold text-gray-900">
              Monthly
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500 flex items-center gap-2">
              <CreditCard size={15} />
              Amount
            </span>

            <span className="font-bold text-gray-900">
              ₦10,000
            </span>
          </div>

        </div>

        {/* Notice */}
        <div className="bg-green-50 border border-green-100 rounded-xl p-4 mt-6">

          <div className="flex items-start gap-3 text-left">

            <CheckCircle
              size={18}
              className="text-green-600 mt-0.5 shrink-0"
            />

            <p className="text-sm text-green-700 leading-relaxed">
              Your organization can now access the features included in the
              Basic Plan.
            </p>

          </div>

        </div>

        {/* Dashboard */}
        <Link
          to="/hospital/dashboard"
          className="flex items-center justify-center gap-2 w-full bg-red-600 text-white py-3.5 rounded-lg font-semibold hover:bg-red-700 transition mt-7"
        >
          Go to Dashboard

          <ArrowRight size={18} />
        </Link>

        {/* Subscription */}
        <Link
          to="/subscription"
          className="block mt-4 text-sm text-gray-600 hover:text-red-600 transition"
        >
          View Subscription
        </Link>

      </div>

    </div>
  );
}

export default SubscriptionSuccess;
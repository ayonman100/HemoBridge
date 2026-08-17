import { Link } from "react-router-dom";

function SubscriptionCard({
  trialActive = false,
  trialDaysRemaining = 0,
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6 mt-6">

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">

        {/* Subscription Information */}
        <div>

          <p className="text-sm text-gray-500">
            Subscription
          </p>

          {trialActive ? (
            <>
              <h2 className="text-xl font-bold text-gray-900 mt-1">
                Free Trial Active
              </h2>

              <p className="text-gray-500 text-sm mt-2">
                You have{" "}
                <span className="font-semibold text-gray-900">
                  {trialDaysRemaining} days
                </span>{" "}
                remaining in your free trial.
              </p>
            </>
          ) : (
            <>
              <h2 className="text-xl font-bold text-gray-900 mt-1">
                Basic Plan
              </h2>

              <p className="text-gray-500 text-sm mt-2">
                ₦10,000 per month
              </p>
            </>
          )}

        </div>

        {/* Status + Action */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-3">

          {trialActive && (
            <span className="inline-flex items-center justify-center gap-2 bg-yellow-50 text-yellow-700 px-4 py-2 rounded-full text-sm font-medium">
              <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
              Trial
            </span>
          )}

          <Link
            to="/subscription"
            className="bg-red-600 text-white px-5 py-3 rounded-lg font-semibold hover:bg-red-700 transition text-center"
          >
            Manage Subscription
          </Link>

        </div>

      </div>

    </div>
  );
}

export default SubscriptionCard;
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  CreditCard,
  ShieldCheck,
  CheckCircle2,
  LockKeyhole,
  Loader2,
} from "lucide-react";

function Checkout() {
  const navigate = useNavigate();

  const [isProcessing, setIsProcessing] = useState(false);

  const handlePayment = async (e) => {
    e.preventDefault();

    setIsProcessing(true);

    // Temporary frontend simulation
    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log("Payment initiated");

    setIsProcessing(false);

    // Temporary navigation
    navigate("/subscription/success");
  };

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">

      <div className="max-w-5xl mx-auto">

        {/* Back */}
        <Link
          to="/subscription"
          className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-red-600 transition mb-8"
        >
          <ArrowLeft size={17} />
          Back to Subscription
        </Link>

        {/* Header */}
        <div className="mb-8">

          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span>HemoBridge Subscription</span>
            <span>/</span>
            <span className="text-gray-700 font-medium">
              Checkout
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">
            Complete Your Subscription
          </h1>

          <p className="text-gray-600 mt-2 max-w-2xl">
            Continue with the Basic Plan to keep using HemoBridge's
            organization features.
          </p>

        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Payment Form */}
          <div className="lg:col-span-2">

            <div className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8">

              <div className="flex items-center gap-3 mb-6">

                <div className="w-11 h-11 rounded-xl bg-red-50 text-red-600 flex items-center justify-center">
                  <CreditCard size={22} />
                </div>

                <div>
                  <h2 className="text-xl font-bold text-gray-900">
                    Payment Information
                  </h2>

                  <p className="text-sm text-gray-500 mt-1">
                    Enter your organization details to continue.
                  </p>
                </div>

              </div>

              <form
                onSubmit={handlePayment}
                className="space-y-6"
              >

                {/* Organization Email */}
                <div>

                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Organization Email
                  </label>

                  <input
                    id="email"
                    type="email"
                    placeholder="Enter organization email"
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none transition focus:ring-2 focus:ring-red-200 focus:border-red-500"
                    required
                  />

                  <p className="text-xs text-gray-400 mt-2">
                    Use the email associated with your HemoBridge
                    organization account.
                  </p>

                </div>

                {/* Payment Method */}
                <div>

                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Payment Method
                  </label>

                  <div className="border border-red-200 bg-red-50 rounded-xl p-4">

                    <div className="flex items-center gap-3">

                      <div className="w-11 h-11 bg-white rounded-xl flex items-center justify-center text-red-600">
                        <CreditCard size={22} />
                      </div>

                      <div className="flex-1">

                        <div className="flex items-center justify-between gap-3">

                          <p className="font-semibold text-gray-900">
                            Card / Bank Payment
                          </p>

                          <CheckCircle2
                            size={20}
                            className="text-red-600"
                          />

                        </div>

                        <p className="text-sm text-gray-500 mt-1">
                          Secure online payment
                        </p>

                      </div>

                    </div>

                  </div>

                </div>

                {/* Security Notice */}
                <div className="bg-gray-50 border border-gray-100 rounded-xl p-4">

                  <div className="flex items-start gap-3">

                    <ShieldCheck
                      size={21}
                      className="text-green-600 shrink-0 mt-0.5"
                    />

                    <div>

                      <p className="text-sm font-semibold text-gray-800">
                        Secure payment
                      </p>

                      <p className="text-sm text-gray-600 leading-relaxed mt-1">
                        You will be redirected to our secure payment
                        provider to complete your payment. Your payment
                        information is handled securely by the payment
                        provider.
                      </p>

                    </div>

                  </div>

                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isProcessing}
                  className={`w-full py-3.5 rounded-xl font-semibold text-white transition flex items-center justify-center gap-2 ${
                    isProcessing
                      ? "bg-red-400 cursor-not-allowed"
                      : "bg-red-600 hover:bg-red-700"
                  }`}
                >

                  {isProcessing ? (
                    <>
                      <Loader2
                        size={20}
                        className="animate-spin"
                      />

                      Processing...
                    </>
                  ) : (
                    <>
                      Continue to Payment
                      <CreditCard size={18} />
                    </>
                  )}

                </button>

                {/* Security Footer */}
                <div className="flex items-center justify-center gap-2 text-xs text-gray-400">

                  <LockKeyhole size={14} />

                  Secure checkout powered by HemoBridge payment provider

                </div>

              </form>

            </div>

          </div>

          {/* Order Summary */}
          <div>

            <div className="bg-white rounded-2xl border border-gray-200 p-6 sticky top-6">

              <div className="flex items-center justify-between mb-6">

                <h2 className="text-xl font-bold text-gray-900">
                  Order Summary
                </h2>

                <div className="w-9 h-9 rounded-lg bg-red-50 text-red-600 flex items-center justify-center">
                  <CreditCard size={18} />
                </div>

              </div>

              {/* Plan */}
              <div className="flex items-start justify-between gap-4 pb-5 border-b border-gray-100">

                <div>

                  <p className="font-semibold text-gray-900">
                    Basic Plan
                  </p>

                  <p className="text-sm text-gray-500 mt-1">
                    HemoBridge Organization Plan
                  </p>

                </div>

                <p className="font-bold text-gray-900 whitespace-nowrap">
                  ₦10,000
                </p>

              </div>

              {/* Billing */}
              <div className="py-5 border-b border-gray-100">

                <div className="flex justify-between text-sm">

                  <span className="text-gray-500">
                    Billing
                  </span>

                  <span className="font-medium text-gray-900">
                    Monthly
                  </span>

                </div>

              </div>

              {/* Total */}
              <div className="flex items-center justify-between pt-5">

                <span className="font-semibold text-gray-900">
                  Total
                </span>

                <span className="text-2xl font-bold text-red-600">
                  ₦10,000
                </span>

              </div>

              {/* Features */}
              <div className="mt-6">

                <p className="text-sm font-semibold text-gray-900 mb-3">
                  Included with Basic
                </p>

                <ul className="space-y-3 text-sm text-gray-600">

                  <li className="flex items-start gap-2">
                    <CheckCircle2
                      size={17}
                      className="text-green-600 shrink-0 mt-0.5"
                    />
                    <span>
                      Blood inventory management
                    </span>
                  </li>

                  <li className="flex items-start gap-2">
                    <CheckCircle2
                      size={17}
                      className="text-green-600 shrink-0 mt-0.5"
                    />
                    <span>
                      Blood search and availability
                    </span>
                  </li>

                  <li className="flex items-start gap-2">
                    <CheckCircle2
                      size={17}
                      className="text-green-600 shrink-0 mt-0.5"
                    />
                    <span>
                      Emergency blood requests
                    </span>
                  </li>

                  <li className="flex items-start gap-2">
                    <CheckCircle2
                      size={17}
                      className="text-green-600 shrink-0 mt-0.5"
                    />
                    <span>
                      Donor matching
                    </span>
                  </li>

                  <li className="flex items-start gap-2">
                    <CheckCircle2
                      size={17}
                      className="text-green-600 shrink-0 mt-0.5"
                    />
                    <span>
                      Notifications and alerts
                    </span>
                  </li>

                </ul>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Checkout;
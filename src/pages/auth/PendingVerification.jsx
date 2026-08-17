import { useNavigate } from "react-router-dom";
import {
  Clock3,
  CheckCircle2,
  FileSearch,
  ClipboardCheck,
  ArrowLeft,
  Bell,
} from "lucide-react";

function PendingVerification() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6 py-10">

      <div className="w-full max-w-md bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-10">

        {/* ================= HEADER ================= */}

        <div className="text-center mb-8">

          {/* Icon */}

          <div className="w-20 h-20 mx-auto rounded-full bg-yellow-50 text-yellow-600 flex items-center justify-center mb-5">
            <Clock3 size={40} strokeWidth={1.8} />
          </div>

          <h1 className="text-3xl font-bold text-gray-900">
            Verification Pending
          </h1>

          <p className="mt-3 text-gray-600 leading-relaxed">
            Your organization account has been submitted successfully and
            is currently waiting for verification.
          </p>

        </div>

        {/* ================= STATUS ================= */}

        <div className="bg-yellow-50 border border-yellow-100 rounded-xl p-5 mb-6">

          <div className="flex items-start gap-3">

            {/* Status Indicator */}

            <div className="w-9 h-9 shrink-0 rounded-lg bg-white text-yellow-600 flex items-center justify-center">
              <Clock3 size={20} />
            </div>

            {/* Status Text */}

            <div>

              <p className="font-semibold text-gray-900">
                Pending Verification
              </p>

              <p className="text-sm text-gray-600 mt-1 leading-relaxed">
                Our team will review your organization information and
                submitted documents.
              </p>

            </div>

          </div>

        </div>

        {/* ================= WHAT HAPPENS NEXT ================= */}

        <div className="mb-7">

          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            What happens next?
          </h2>

          <div className="space-y-4">

            {/* Step 1 */}

            <div className="flex items-start gap-3">

              <div className="w-8 h-8 rounded-full bg-red-50 text-red-600 flex items-center justify-center shrink-0">
                <FileSearch size={17} />
              </div>

              <div className="pt-1">

                <p className="text-sm font-medium text-gray-900">
                  Document Review
                </p>

                <p className="text-sm text-gray-600 mt-1 leading-relaxed">
                  Your registration details and submitted documents are
                  reviewed by our verification team.
                </p>

              </div>

            </div>

            {/* Step 2 */}

            <div className="flex items-start gap-3">

              <div className="w-8 h-8 rounded-full bg-red-50 text-red-600 flex items-center justify-center shrink-0">
                <ClipboardCheck size={17} />
              </div>

              <div className="pt-1">

                <p className="text-sm font-medium text-gray-900">
                  Organization Approval
                </p>

                <p className="text-sm text-gray-600 mt-1 leading-relaxed">
                  Your organization is approved or contacted if additional
                  information is required.
                </p>

              </div>

            </div>

            {/* Step 3 */}

            <div className="flex items-start gap-3">

              <div className="w-8 h-8 rounded-full bg-red-50 text-red-600 flex items-center justify-center shrink-0">
                <CheckCircle2 size={17} />
              </div>

              <div className="pt-1">

                <p className="text-sm font-medium text-gray-900">
                  Access Your Dashboard
                </p>

                <p className="text-sm text-gray-600 mt-1 leading-relaxed">
                  Once approved, you can access your HemoBridge dashboard
                  and begin using the platform.
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* ================= NOTIFICATION NOTE ================= */}

        <div className="bg-gray-50 border border-gray-100 rounded-xl p-4 mb-6">

          <div className="flex items-start gap-3">

            <div className="w-9 h-9 shrink-0 rounded-lg bg-white text-red-600 flex items-center justify-center">
              <Bell size={18} />
            </div>

            <p className="text-sm text-gray-600 leading-relaxed pt-1">
              You will be notified when your account verification is
              complete.
            </p>

          </div>

        </div>

        {/* ================= LOGIN BUTTON ================= */}

        <button
          type="button"
          onClick={() => navigate("/login")}
          className="w-full bg-red-600 text-white py-3.5 rounded-xl font-semibold hover:bg-red-700 transition flex items-center justify-center gap-2"
        >
          <ArrowLeft size={18} />

          Back to Login
        </button>

      </div>

    </div>
  );
}

export default PendingVerification;
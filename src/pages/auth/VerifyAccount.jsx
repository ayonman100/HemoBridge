import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import {
  MailCheck,
  ShieldCheck,
  ArrowLeft,
  RefreshCw,
  CheckCircle2,
  Loader2,
} from "lucide-react";

function VerifyAccount() {
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();
  const role = searchParams.get("role") || "donor";

  const [code, setCode] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);
  const [isResending, setIsResending] = useState(false);
  const [error, setError] = useState("");

  // Handle verification
  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    if (code.length !== 6) {
      setError("Please enter the 6-digit verification code.");
      return;
    }

    setIsVerifying(true);

    // Temporary frontend simulation
    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log("Verification Code:", code);

    setIsVerifying(false);

    /*
      TEMPORARY NAVIGATION

      Later:
      1. Send verification code to backend.
      2. Backend verifies the code.
      3. Account is marked as verified.
      4. User receives authentication/session data.
      5. Redirect based on role.
    */

    if (role === "donor") {
      navigate("/donor/dashboard");
    } else {
      navigate("/pending-verification");
    }
  };

  // Resend verification code
  const handleResend = async () => {
    setError("");
    setIsResending(true);

    // Temporary frontend simulation
    await new Promise((resolve) => setTimeout(resolve, 800));

    console.log("Verification code resent.");

    setIsResending(false);

    alert("A new verification code has been sent.");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6 py-10">

      <div className="w-full max-w-md bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-10">

        {/* ================= HEADER ================= */}

        <div className="text-center mb-8">

          {/* Email Icon */}
          <div className="w-16 h-16 mx-auto rounded-2xl bg-red-50 text-red-600 flex items-center justify-center mb-5">
            <MailCheck size={32} />
          </div>

          <h1 className="text-3xl font-bold text-gray-900">
            Verify Your Account
          </h1>

          <p className="mt-3 text-gray-600 leading-relaxed">
            We sent a 6-digit verification code to your email address.
            Enter the code below to continue.
          </p>

        </div>

        {/* ================= SECURITY NOTICE ================= */}

        <div className="flex items-start gap-3 bg-gray-50 border border-gray-100 rounded-xl p-4 mb-6">

          <ShieldCheck
            size={20}
            className="text-green-600 shrink-0 mt-0.5"
          />

          <p className="text-sm text-gray-600 leading-relaxed">
            For your security, never share your verification code with
            anyone.
          </p>

        </div>

        {/* ================= ERROR ================= */}

        {error && (
          <div
            className="mb-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3"
            role="alert"
          >
            <div className="flex items-start gap-3">

              <span className="w-5 h-5 rounded-full bg-red-100 text-red-600 flex items-center justify-center shrink-0 mt-0.5">
                !
              </span>

              <p className="text-sm text-red-700 leading-relaxed">
                {error}
              </p>

            </div>
          </div>
        )}

        {/* ================= VERIFICATION FORM ================= */}

        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Verification Code */}

          <div>

            <label
              htmlFor="verification-code"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Verification Code
            </label>

            <input
              id="verification-code"
              type="text"
              inputMode="numeric"
              maxLength={6}
              value={code}
              onChange={(e) => {
                setCode(e.target.value.replace(/\D/g, ""));
                setError("");
              }}
              placeholder="000000"
              autoComplete="one-time-code"
              className="w-full border border-gray-300 rounded-xl px-4 py-3.5 text-center text-2xl font-semibold tracking-[0.5em] outline-none transition focus:ring-2 focus:ring-red-500 focus:border-red-500"
              required
            />

            <p className="text-xs text-gray-500 text-center mt-2">
              Enter the 6-digit code sent to your email.
            </p>

          </div>

          {/* Verify Button */}

          <button
            type="submit"
            disabled={isVerifying}
            className={`w-full py-3.5 rounded-xl font-semibold text-white transition flex items-center justify-center gap-2 ${
              isVerifying
                ? "bg-red-400 cursor-not-allowed"
                : "bg-red-600 hover:bg-red-700"
            }`}
          >

            {isVerifying ? (
              <>
                <Loader2
                  size={19}
                  className="animate-spin"
                />

                Verifying...
              </>
            ) : (
              <>
                <CheckCircle2 size={19} />

                Verify Account
              </>
            )}

          </button>

        </form>

        {/* ================= RESEND ================= */}

        <div className="text-center mt-7">

          <p className="text-sm text-gray-500">
            Didn't receive the code?
          </p>

          <button
            type="button"
            onClick={handleResend}
            disabled={isResending}
            className={`mt-2 inline-flex items-center justify-center gap-2 font-semibold transition ${
              isResending
                ? "text-gray-400 cursor-not-allowed"
                : "text-red-600 hover:text-red-700"
            }`}
          >

            {isResending ? (
              <>
                <Loader2
                  size={16}
                  className="animate-spin"
                />

                Sending...
              </>
            ) : (
              <>
                <RefreshCw size={16} />

                Resend Code
              </>
            )}

          </button>

        </div>

        {/* ================= BACK TO LOGIN ================= */}

        <div className="text-center mt-7 pt-6 border-t border-gray-100">

          <button
            type="button"
            onClick={() => navigate("/login")}
            className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition"
          >
            <ArrowLeft size={16} />

            Back to Login
          </button>

        </div>

      </div>

    </div>
  );
}

export default VerifyAccount;
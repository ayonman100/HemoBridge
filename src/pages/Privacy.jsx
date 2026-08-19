import { Link } from "react-router-dom";
import {
  ShieldCheck,
  Lock,
  UserCheck,
  Database,
  MapPin,
  Bell,
  Droplets,
  CreditCard,
  FileText,
  ArrowLeft,
} from "lucide-react";

function Privacy() {
  const sections = [
    {
      icon: Database,
      title: "1. Information We Collect",
      content: (
        <>
          <p>
            HemoBridge may collect information that you provide when creating
            an account, using our services, or communicating with us.
          </p>

          <ul>
            <li>Name and account information</li>
            <li>Email address and phone number</li>
            <li>Blood group and Rhesus factor</li>
            <li>Location and address information</li>
            <li>Hospital or blood bank registration information</li>
            <li>Verification and accreditation documents</li>
            <li>Donation and blood request history</li>
            <li>Subscription and payment-related information</li>
          </ul>
        </>
      ),
    },

    {
      icon: UserCheck,
      title: "2. How We Use Your Information",
      content: (
        <>
          <p>
            We use collected information to provide and improve HemoBridge
            services, including:
          </p>

          <ul>
            <li>Creating and managing user accounts</li>
            <li>Verifying hospitals and blood banks</li>
            <li>Matching blood requests with available resources</li>
            <li>Helping donors receive relevant donation requests</li>
            <li>Managing emergency blood requests</li>
            <li>Sending account and service notifications</li>
            <li>Processing subscriptions and payments</li>
            <li>Preventing fraud, abuse, and unauthorized access</li>
          </ul>
        </>
      ),
    },

    {
      icon: MapPin,
      title: "3. Location Information",
      content: (
        <p>
          HemoBridge may use location information to help users find relevant
          blood banks, hospitals, donors, or blood resources within a selected
          area. Location information should only be used for purposes related
          to providing the HemoBridge service.
        </p>
      ),
    },

    {
      icon: Bell,
      title: "4. Notifications and Communication",
      content: (
        <p>
          HemoBridge may send service-related communications through channels
          such as email, SMS, WhatsApp, or phone calls where applicable. These
          communications may include verification codes, emergency requests,
          donation notifications, account updates, appointment reminders, and
          payment notifications.
        </p>
      ),
    },

    {
      icon: CreditCard,
      title: "5. Payments",
      content: (
        <p>
          HemoBridge may use third-party payment providers to process
          subscriptions and other payments. Payment providers may process
          payment information according to their own privacy policies and
          security requirements. HemoBridge does not intend to store complete
          card details on its own systems.
        </p>
      ),
    },

    {
      icon: FileText,
      title: "6. Organization Verification",
      content: (
        <p>
          Hospitals and blood banks may be required to submit registration,
          licensing, accreditation, or other verification documents. These
          documents may be reviewed by authorized HemoBridge administrators for
          the purpose of verifying organizations before they receive access to
          certain platform features.
        </p>
      ),
    },

    {
      icon: Lock,
      title: "7. Data Security",
      content: (
        <p>
          HemoBridge will take reasonable technical and organizational measures
          to protect user information against unauthorized access, alteration,
          disclosure, or destruction. However, no internet-based system can
          guarantee absolute security.
        </p>
      ),
    },

    {
      icon: ShieldCheck,
      title: "8. Information Sharing",
      content: (
        <>
          <p>
            HemoBridge does not intend to sell users' personal information.
          </p>

          <p>
            Information may be shared with authorized users, service providers,
            or other parties when necessary to provide HemoBridge services,
            process payments, deliver notifications, verify organizations,
            comply with applicable laws, or protect the safety and security of
            the platform.
          </p>
        </>
      ),
    },

    {
      icon: UserCheck,
      title: "9. Your Responsibilities",
      content: (
        <p>
          Users are responsible for providing accurate information and keeping
          their account credentials secure. You should notify HemoBridge if you
          believe that your account has been accessed without authorization.
        </p>
      ),
    },

    {
      icon: Database,
      title: "10. Data Retention",
      content: (
        <p>
          HemoBridge may retain information for as long as reasonably necessary
          to provide services, maintain records, resolve disputes, comply with
          legal obligations, and protect the security of the platform.
        </p>
      ),
    },

    {
      icon: ShieldCheck,
      title: "11. Changes to This Privacy Policy",
      content: (
        <p>
          This Privacy Policy may be updated as HemoBridge develops its
          services. When important changes are made, appropriate notice may be
          provided through the platform or other available communication
          channels.
        </p>
      ),
    },

    {
      icon: FileText,
      title: "12. Contact Us",
      content: (
        <p>
          If you have questions, concerns, or requests relating to this Privacy
          Policy or the handling of your information, please contact the
          HemoBridge team through the contact channels provided on the
          platform.
        </p>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Header */}

      <header className="bg-white border-b border-gray-200">

        <div className="max-w-5xl mx-auto px-6 py-6">

          <Link
            to="/signup"
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-red-600 transition"
          >
            <ArrowLeft size={17} />
            Back to Sign Up
          </Link>

        </div>

      </header>

      {/* Main */}

      <main className="max-w-5xl mx-auto px-6 py-10 md:py-14">

        {/* Title */}

        <div className="text-center max-w-3xl mx-auto mb-12">

          <div className="w-16 h-16 mx-auto rounded-2xl bg-green-50 text-green-600 flex items-center justify-center mb-5">
            <ShieldCheck size={32} />
          </div>

          <p className="text-red-600 font-semibold mb-3">
            HemoBridge
          </p>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Privacy Policy
          </h1>

          <p className="mt-4 text-gray-600 leading-7">
            This Privacy Policy explains how HemoBridge collects, uses,
            protects, and manages information when you use our platform.
          </p>

          <p className="mt-3 text-sm text-gray-500">
            Last updated: August 2026
          </p>

        </div>

        {/* Introduction */}

        <section className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 mb-6">

          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Our Commitment to Privacy
          </h2>

          <p className="text-gray-600 leading-7">
            HemoBridge is designed to help connect donors, hospitals, and blood
            banks to improve access to blood resources. Because the platform
            may handle personal, organizational, location, and health-related
            information, protecting that information is an important part of
            our service.
          </p>

        </section>

        {/* Sections */}

        <div className="space-y-5">

          {sections.map((section) => {

            const Icon = section.icon;

            return (
              <section
                key={section.title}
                className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8"
              >

                <div className="flex items-start gap-4">

                  <div className="w-11 h-11 shrink-0 rounded-xl bg-red-50 text-red-600 flex items-center justify-center">
                    <Icon size={21} />
                  </div>

                  <div className="flex-1 min-w-0">

                    <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-4">
                      {section.title}
                    </h2>

                    <div className="text-gray-600 leading-7 space-y-4 privacy-content">
                      {section.content}
                    </div>

                  </div>

                </div>

              </section>
            );
          })}

        </div>

        {/* Footer Notice */}

        <div className="mt-8 bg-red-50 border border-red-100 rounded-2xl p-6">

          <div className="flex items-start gap-3">

            <ShieldCheck
              size={21}
              className="text-red-600 shrink-0 mt-1"
            />

            <p className="text-sm text-red-800 leading-6">
              By using HemoBridge, you acknowledge that you have read and
              understood this Privacy Policy. Additional privacy protections
              may apply depending on your location, role, and applicable laws.
            </p>

          </div>

        </div>

        {/* Navigation */}

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">

          <Link
            to="/terms"
            className="text-red-600 font-semibold hover:text-red-700 transition"
          >
            Read Terms of Service
          </Link>

          <span className="hidden sm:block text-gray-300">
            |
          </span>

          <Link
            to="/signup"
            className="text-gray-600 font-medium hover:text-gray-900 transition"
          >
            Return to Sign Up
          </Link>

        </div>

      </main>

      {/* Footer */}

      <footer className="border-t border-gray-200 bg-white">

        <div className="max-w-5xl mx-auto px-6 py-8 text-center">

          <div className="flex items-center justify-center gap-2 text-gray-500 text-sm">

            <Droplets
              size={17}
              className="text-red-600"
            />

            HemoBridge

          </div>

          <p className="text-xs text-gray-400 mt-2">
            Connecting Blood. Saving Lives.
          </p>

        </div>

      </footer>

    </div>
  );
}

export default Privacy;
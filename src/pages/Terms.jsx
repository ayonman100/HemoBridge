import { Link, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Droplets,
  ShieldCheck,
  UserCheck,
  Building2,
  FileText,
  CreditCard,
  AlertTriangle,
  Scale,
} from "lucide-react";

function Terms() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-6 py-5 flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2 text-red-600 font-bold text-lg"
          >
            <Droplets size={24} />
            HemoBridge
          </Link>

          <button
            type="button"
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-red-600 transition"
          >
            <ArrowLeft size={17} />
            Back
          </button>
        </div>
      </header>

      {/* Main */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
          {/* Page Header */}
          <div className="px-6 md:px-10 py-10 border-b border-gray-100">
            <div className="w-14 h-14 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center mb-5">
              <FileText size={28} />
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
              Terms of Service
            </h1>

            <p className="mt-3 text-gray-600 leading-7">
              These Terms of Service govern your use of the HemoBridge
              platform and its services.
            </p>

            <p className="mt-4 text-sm text-gray-500">
              Last updated: August 2026
            </p>
          </div>

          {/* Content */}
          <article className="px-6 md:px-10 py-10 space-y-10 text-gray-700 leading-7">
            <section>
              <SectionTitle
                icon={<ShieldCheck size={20} />}
                title="1. About HemoBridge"
              />

              <p>
                HemoBridge is a digital platform designed to help connect
                blood donors, hospitals, blood banks, and other authorized
                organizations involved in blood availability and emergency
                blood requests.
              </p>

              <p className="mt-4">
                HemoBridge provides technology and communication tools.
                It does not replace medical professionals, hospitals,
                blood banks, laboratory testing, or emergency medical
                services.
              </p>
            </section>

            <section>
              <SectionTitle
                icon={<UserCheck size={20} />}
                title="2. Eligibility and Accounts"
              />

              <p>
                You must provide accurate and complete information when
                creating an account and must keep your account information
                reasonably up to date.
              </p>

              <p className="mt-4">
                You are responsible for maintaining the confidentiality of
                your login credentials and for activity carried out through
                your account.
              </p>

              <p className="mt-4">
                You must not create an account using another person's
                identity or provide false information during registration
                or verification.
              </p>
            </section>

            <section>
              <SectionTitle
                icon={<Building2 size={20} />}
                title="3. Organizations and Verification"
              />

              <p>
                Hospitals and blood banks may be required to provide
                registration, licensing, accreditation, representative,
                or other organizational information for verification.
              </p>

              <p className="mt-4">
                HemoBridge may review submitted information and documents
                before approving an organization account.
              </p>

              <p className="mt-4">
                Verification does not constitute medical accreditation,
                government endorsement, or a guarantee of the quality of
                services provided by an organization.
              </p>
            </section>

            <section>
              <SectionTitle
                icon={<Droplets size={20} />}
                title="4. Donor Responsibilities"
              />

              <p>
                Donors are responsible for providing truthful information
                about their identity, blood group, availability, location,
                and other information requested by the platform.
              </p>

              <p className="mt-4">
                Registration as a donor does not automatically mean that
                you are medically eligible to donate blood. Donation
                eligibility must be determined by an appropriate medical
                professional or authorized blood collection organization.
              </p>

              <p className="mt-4">
                Donors should not rely on HemoBridge as a substitute for
                professional medical advice.
              </p>
            </section>

            <section>
              <SectionTitle
                icon={<AlertTriangle size={20} />}
                title="5. Emergency Blood Requests"
              />

              <p>
                HemoBridge may provide tools for hospitals and authorized
                organizations to create and manage emergency blood
                requests.
              </p>

              <p className="mt-4">
                The platform does not guarantee that blood will always be
                available, that a donor will respond, or that a request
                will be fulfilled within a particular period.
              </p>

              <p className="mt-4">
                In a medical emergency, users should also contact
                appropriate emergency medical services and healthcare
                professionals.
              </p>
            </section>

            <section>
              <SectionTitle
                icon={<Scale size={20} />}
                title="6. Acceptable Use"
              />

              <p>You agree not to:</p>

              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Provide knowingly false or misleading information.</li>
                <li>Impersonate another person or organization.</li>
                <li>Attempt to access another user's account.</li>
                <li>Attempt to bypass platform security controls.</li>
                <li>Use HemoBridge for unlawful activities.</li>
                <li>
                  Abuse, spam, harass, or threaten other users through the
                  platform.
                </li>
                <li>
                  Upload malicious software or content intended to damage
                  the platform.
                </li>
              </ul>
            </section>

            <section>
              <SectionTitle
                icon={<CreditCard size={20} />}
                title="7. Subscriptions and Payments"
              />

              <p>
                Certain HemoBridge features may require a subscription or
                payment.
              </p>

              <p className="mt-4">
                Prices, available plans, renewal terms, and payment
                conditions will be displayed before a user completes a
                subscription.
              </p>

              <p className="mt-4">
                Payments may be processed through third-party payment
                providers. HemoBridge does not store complete card
                credentials where payment processing is handled by the
                payment provider.
              </p>
            </section>

            <section>
              <SectionTitle
                icon={<ShieldCheck size={20} />}
                title="8. Privacy and Personal Information"
              />

              <p>
                Your use of HemoBridge involves the collection and
                processing of personal information. This may include
                information such as your name, email address, telephone
                number, location, account information, and information
                submitted during donor or organization registration.
              </p>

              <p className="mt-4">
                Information about how HemoBridge collects, uses, stores,
                protects, and handles personal data is explained in our{" "}
                <Link
                  to="/privacy"
                  className="text-red-600 font-semibold hover:underline"
                >
                  Privacy Policy
                </Link>
                .
              </p>
            </section>

            <section>
              <SectionTitle
                icon={<AlertTriangle size={20} />}
                title="9. Service Availability"
              />

              <p>
                We aim to keep HemoBridge available and reliable, but we
                cannot guarantee uninterrupted or error-free operation.
              </p>

              <p className="mt-4">
                Service availability may be affected by maintenance,
                network failures, third-party services, security incidents,
                or circumstances outside our reasonable control.
              </p>
            </section>

            <section>
              <SectionTitle
                icon={<Scale size={20} />}
                title="10. Limitation of Responsibility"
              />

              <p>
                HemoBridge is a technology platform and does not itself
                provide medical diagnosis, treatment, blood testing, blood
                collection, or transfusion services.
              </p>

              <p className="mt-4">
                Users remain responsible for decisions made using
                information obtained through the platform and should rely
                on qualified healthcare professionals for medical decisions.
              </p>
            </section>

            <section>
              <SectionTitle
                icon={<UserCheck size={20} />}
                title="11. Suspension and Termination"
              />

              <p>
                HemoBridge may restrict, suspend, or terminate an account
                where there is a reasonable basis to believe that the user
                has violated these Terms, provided false information,
                compromised platform security, or used the platform
                unlawfully.
              </p>

              <p className="mt-4">
                Users may also request closure of their account, subject to
                applicable legal, security, operational, and record-keeping
                requirements.
              </p>
            </section>

            <section>
              <SectionTitle
                icon={<FileText size={20} />}
                title="12. Intellectual Property"
              />

              <p>
                HemoBridge's software, branding, interface design, logos,
                original content, and related materials are protected by
                applicable intellectual property laws.
              </p>

              <p className="mt-4">
                You may not copy, modify, distribute, sell, or reproduce
                HemoBridge materials without appropriate authorization.
              </p>
            </section>

            <section>
              <SectionTitle
                icon={<FileText size={20} />}
                title="13. Changes to These Terms"
              />

              <p>
                HemoBridge may update these Terms from time to time to
                reflect changes to the platform, services, legal
                requirements, or business operations.
              </p>

              <p className="mt-4">
                When appropriate, users will be notified of material
                changes through the platform or another appropriate
                communication channel.
              </p>
            </section>

            <section>
              <SectionTitle
                icon={<ShieldCheck size={20} />}
                title="14. Contact"
              />

              <p>
                If you have questions about these Terms, please contact
                the HemoBridge team through the contact information made
                available on the platform.
              </p>
            </section>

            {/* Bottom notice */}
            <div className="rounded-2xl bg-gray-50 border border-gray-200 p-5">
              <p className="text-sm text-gray-600 leading-6">
                These Terms are a product draft intended for the HemoBridge
                application. They should be reviewed and approved by
                appropriate legal counsel before the platform is launched
                for production use.
              </p>
            </div>
          </article>
        </div>

        {/* Footer links */}
        <div className="flex flex-wrap items-center justify-center gap-5 mt-8 text-sm">
          <Link
            to="/privacy"
            className="text-gray-600 hover:text-red-600 transition"
          >
            Privacy Policy
          </Link>

          <Link
            to="/"
            className="text-gray-600 hover:text-red-600 transition"
          >
            HemoBridge Home
          </Link>
        </div>
      </main>
    </div>
  );
}

function SectionTitle({ icon, title }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <div className="w-9 h-9 rounded-lg bg-red-50 text-red-600 flex items-center justify-center shrink-0">
        {icon}
      </div>

      <h2 className="text-xl font-bold text-gray-900">
        {title}
      </h2>
    </div>
  );
}

export default Terms;

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Droplets,
  CheckCircle2,
  Clock3,
  ArrowRight,
  ShieldCheck,
  Headphones,
  Building2,
  Users,
  Database,
  Loader2,
} from "lucide-react";

function Subscription() {
  const navigate = useNavigate();

  const [selectedPlan, setSelectedPlan] = useState("basic");
  const [isLoading, setIsLoading] = useState(false);

  // Temporary frontend state.
  // Later this will come from the backend.
  const organization = {
    name: "HemoBridge Healthcare Organization",
    trialDaysRemaining: 5,
    trialActive: true,
  };

  const plans = [
    {
      id: "basic",
      name: "Basic",
      price: "₦10,000",
      period: "/month",
      description:
        "Everything your organization needs to coordinate blood availability and requests.",
      current: true,
      icon: Droplets,

      features: [
        "Blood Inventory Management",
        "Blood Search and Availability",
        "Emergency Blood Requests",
        "Donor Matching",
        "Donor Requests",
        "Notifications",
        "Low-Stock Alerts",
        "Basic Request Tracking",
        "Organization Profile",
        "Standard Customer Support",
      ],
    },

    {
      id: "professional",
      name: "Professional",
      description:
        "Advanced capabilities for organizations with higher operational requirements.",
      comingSoon: true,
      icon: Users,

      features: [
        "Multiple Staff Accounts",
        "Higher Request Capacity",
        "Multi-Location Inventory",
        "Detailed Blood-Request Tracking",
        "Enhanced Inventory Monitoring",
        "Priority Customer Support",
      ],
    },

    {
      id: "enterprise",
      name: "Enterprise",
      description:
        "Flexible solutions for healthcare networks and organizations requiring specialized integrations.",
      comingSoon: true,
      icon: Building2,

      features: [
        "API Integration",
        "Healthcare System Integration",
        "Multiple Branch Management",
        "Custom User Roles and Permissions",
        "Custom Reports and Analytics",
        "Dedicated Onboarding and Training",
        "Dedicated Customer Support",
      ],
    },
  ];

  const handleSubscribe = async () => {
    if (selectedPlan !== "basic") {
      return;
    }

    setIsLoading(true);

    // Temporary frontend simulation.
    // Later this will connect to Paystack or another payment provider.
    await new Promise((resolve) => setTimeout(resolve, 800));

    console.log("Selected subscription:", selectedPlan);

    setIsLoading(false);

    navigate("/subscription/checkout");
  };

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">

      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10">

          <div className="w-16 h-16 mx-auto rounded-2xl bg-red-50 text-red-600 flex items-center justify-center mb-5">
            <Droplets size={32} />
          </div>

          <p className="text-sm font-semibold text-red-600 mb-2">
            HemoBridge Subscription
          </p>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Choose Your HemoBridge Plan
          </h1>

          <p className="mt-3 text-gray-600 max-w-2xl mx-auto leading-7">
            Choose the plan that best fits your organization's blood
            coordination needs.
          </p>

        </div>

        {/* Trial Banner */}
        {organization.trialActive && (
          <div className="max-w-4xl mx-auto mb-10 bg-red-50 border border-red-100 rounded-2xl p-6">

            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">

              <div className="flex items-start gap-4">

                <div className="w-11 h-11 shrink-0 rounded-xl bg-white text-red-600 flex items-center justify-center">
                  <Clock3 size={22} />
                </div>

                <div>

                  <p className="text-sm font-semibold text-red-600">
                    FREE TRIAL ACTIVE
                  </p>

                  <h2 className="text-xl font-bold text-gray-900 mt-1">
                    You have {organization.trialDaysRemaining} days remaining
                  </h2>

                  <p className="text-sm text-gray-600 mt-2">
                    Explore HemoBridge's core features before choosing
                    your subscription plan.
                  </p>

                </div>

              </div>

              <div className="bg-white border border-red-100 rounded-xl px-6 py-3 text-center">

                <p className="text-2xl font-bold text-red-600">
                  {organization.trialDaysRemaining}
                </p>

                <p className="text-xs text-gray-500">
                  Days Left
                </p>

              </div>

            </div>

          </div>
        )}

        {/* Plans */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {plans.map((plan) => {

            const isSelected = selectedPlan === plan.id;
            const PlanIcon = plan.icon;

            return (
              <div
                key={plan.id}
                className={`relative bg-white rounded-2xl border p-7 transition duration-200 ${
                  isSelected && !plan.comingSoon
                    ? "border-red-500 ring-2 ring-red-100 shadow-sm"
                    : "border-gray-200"
                }`}
              >

                {/* Plan Badge */}
                {plan.comingSoon ? (
                  <div className="absolute top-5 right-5">

                    <span className="inline-flex items-center gap-1.5 bg-gray-100 text-gray-600 text-xs font-semibold px-3 py-1.5 rounded-full">
                      <Clock3 size={13} />
                      Coming Soon
                    </span>

                  </div>
                ) : (
                  <div className="absolute top-5 right-5">

                    <span className="bg-red-50 text-red-600 text-xs font-semibold px-3 py-1.5 rounded-full">
                      MVP Plan
                    </span>

                  </div>
                )}

                {/* Plan Icon */}
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${
                    plan.comingSoon
                      ? "bg-gray-100 text-gray-500"
                      : "bg-red-50 text-red-600"
                  }`}
                >
                  <PlanIcon size={24} />
                </div>

                {/* Plan Name */}
                <div className="pr-20">

                  <h2 className="text-2xl font-bold text-gray-900">
                    {plan.name}
                  </h2>

                  <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                    {plan.description}
                  </p>

                </div>

                {/* Price */}
                <div className="mt-7">

                  {plan.price ? (
                    <>
                      <span className="text-3xl font-bold text-gray-900">
                        {plan.price}
                      </span>

                      <span className="text-gray-500 ml-1">
                        {plan.period}
                      </span>
                    </>
                  ) : (
                    <span className="text-2xl font-bold text-gray-900">
                      Custom Pricing
                    </span>
                  )}

                </div>

                {/* Features */}
                <div className="mt-7">

                  <h3 className="font-semibold text-gray-900 mb-4">
                    What's included
                  </h3>

                  <ul className="space-y-3">

                    {plan.features.map((feature) => (

                      <li
                        key={feature}
                        className="flex items-start gap-3"
                      >

                        <CheckCircle2
                          size={18}
                          className={`mt-0.5 shrink-0 ${
                            plan.comingSoon
                              ? "text-gray-400"
                              : "text-green-600"
                          }`}
                        />

                        <span className="text-sm text-gray-600">
                          {feature}
                        </span>

                      </li>

                    ))}

                  </ul>

                </div>

                {/* Select Button */}
                <button
                  type="button"
                  disabled={plan.comingSoon}
                  onClick={() => setSelectedPlan(plan.id)}
                  className={`w-full mt-8 py-3 rounded-xl font-semibold transition flex items-center justify-center gap-2 ${
                    plan.comingSoon
                      ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                      : isSelected
                      ? "bg-red-600 text-white hover:bg-red-700"
                      : "border border-gray-300 text-gray-700 hover:border-red-500 hover:text-red-600"
                  }`}
                >

                  {plan.comingSoon
                    ? "Coming Soon"
                    : isSelected
                    ? "Selected"
                    : `Choose ${plan.name}`}

                  {!plan.comingSoon && !isSelected && (
                    <ArrowRight size={17} />
                  )}

                  {isSelected && !plan.comingSoon && (
                    <CheckCircle2 size={17} />
                  )}

                </button>

              </div>
            );
          })}

        </div>

        {/* Subscription Action */}
        <div className="max-w-2xl mx-auto mt-10 bg-white border border-gray-200 rounded-2xl p-6 text-center">

          <div className="w-11 h-11 mx-auto rounded-xl bg-red-50 text-red-600 flex items-center justify-center">
            <ShieldCheck size={23} />
          </div>

          <h2 className="text-xl font-bold text-gray-900 mt-4">
            Ready to continue?
          </h2>

          <p className="text-sm text-gray-500 mt-2">
            Your organization will continue with the Basic Plan.
          </p>

          <button
            type="button"
            onClick={handleSubscribe}
            disabled={isLoading || selectedPlan !== "basic"}
            className={`mt-6 w-full md:w-auto px-10 py-3.5 rounded-xl font-semibold text-white transition inline-flex items-center justify-center gap-2 ${
              isLoading || selectedPlan !== "basic"
                ? "bg-red-400 cursor-not-allowed"
                : "bg-red-600 hover:bg-red-700"
            }`}
          >

            {isLoading ? (
              <>
                <Loader2
                  size={19}
                  className="animate-spin"
                />

                Processing...
              </>
            ) : (
              <>
                Continue to Checkout
                <ArrowRight size={18} />
              </>
            )}

          </button>

        </div>

        {/* Trust Information */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto mt-8">

          <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
            <ShieldCheck
              size={17}
              className="text-green-600"
            />
            Secure platform
          </div>

          <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
            <Database
              size={17}
              className="text-blue-600"
            />
            Protected data
          </div>

          <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
            <Headphones
              size={17}
              className="text-red-600"
            />
            Customer support
          </div>

        </div>

        {/* Footer Note */}
        <div className="text-center mt-8">

          <p className="text-sm text-gray-500">
            Need help choosing a plan? Contact HemoBridge support.
          </p>

        </div>

      </div>

    </div>
  );
}

export default Subscription;
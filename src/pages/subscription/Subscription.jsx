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

import "./Subscription.css";

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
    <div className="subscription-page">
      <div className="subscription-container">

        {/* ================================
            HEADER
        ================================= */}

        <section className="subscription-header">

          <div className="subscription-header-icon">
            <Droplets size={32} />
          </div>

          <p className="subscription-label">
            HemoBridge Subscription
          </p>

          <h1>
            Choose Your HemoBridge Plan
          </h1>

          <p className="subscription-description">
            Choose the plan that best fits your organization's blood
            coordination needs.
          </p>

        </section>


        {/* ================================
            TRIAL BANNER
        ================================= */}

        {organization.trialActive && (
          <section className="subscription-trial">

            <div className="subscription-trial-content">

              <div className="subscription-trial-main">

                <div className="subscription-trial-icon">
                  <Clock3 size={22} />
                </div>

                <div>

                  <p className="subscription-trial-label">
                    FREE TRIAL ACTIVE
                  </p>

                  <h2>
                    You have {organization.trialDaysRemaining} days remaining
                  </h2>

                  <p>
                    Explore HemoBridge's core features before choosing
                    your subscription plan.
                  </p>

                </div>

              </div>


              <div className="subscription-days">

                <p>
                  {organization.trialDaysRemaining}
                </p>

                <span>
                  Days Left
                </span>

              </div>

            </div>

          </section>
        )}


        {/* ================================
            PLANS
        ================================= */}

        <section className="subscription-plans">

          {plans.map((plan) => {

            const isSelected = selectedPlan === plan.id;
            const PlanIcon = plan.icon;

            return (
              <article
                key={plan.id}
                className={`subscription-plan ${
                  isSelected && !plan.comingSoon
                    ? "subscription-plan-selected"
                    : ""
                }`}
              >

                {/* Plan Badge */}

                <div className="subscription-plan-badge">

                  {plan.comingSoon ? (
                    <span className="subscription-badge-coming">
                      <Clock3 size={13} />
                      Coming Soon
                    </span>
                  ) : (
                    <span className="subscription-badge-mvp">
                      MVP Plan
                    </span>
                  )}

                </div>


                {/* Plan Icon */}

                <div
                  className={`subscription-plan-icon ${
                    plan.comingSoon
                      ? "subscription-plan-icon-disabled"
                      : ""
                  }`}
                >
                  <PlanIcon size={24} />
                </div>


                {/* Plan Information */}

                <div className="subscription-plan-info">

                  <h2>
                    {plan.name}
                  </h2>

                  <p>
                    {plan.description}
                  </p>

                </div>


                {/* Price */}

                <div className="subscription-price">

                  {plan.price ? (
                    <>
                      <span>
                        {plan.price}
                      </span>

                      <small>
                        {plan.period}
                      </small>
                    </>
                  ) : (
                    <span className="subscription-custom-price">
                      Custom Pricing
                    </span>
                  )}

                </div>


                {/* Features */}

                <div className="subscription-features">

                  <h3>
                    What's included
                  </h3>

                  <ul>

                    {plan.features.map((feature) => (

                      <li key={feature}>

                        <CheckCircle2
                          size={18}
                          className={
                            plan.comingSoon
                              ? "feature-icon-disabled"
                              : "feature-icon"
                          }
                        />

                        <span>
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
                  className={`subscription-select-button ${
                    plan.comingSoon
                      ? "subscription-button-disabled"
                      : isSelected
                      ? "subscription-button-selected"
                      : "subscription-button-outline"
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

              </article>
            );
          })}

        </section>


        {/* ================================
            SUBSCRIPTION ACTION
        ================================= */}

        <section className="subscription-action">

          <div className="subscription-action-icon">
            <ShieldCheck size={23} />
          </div>

          <h2>
            Ready to continue?
          </h2>

          <p>
            Your organization will continue with the Basic Plan.
          </p>

          <button
            type="button"
            onClick={handleSubscribe}
            disabled={isLoading || selectedPlan !== "basic"}
            className={`subscription-checkout-button ${
              isLoading || selectedPlan !== "basic"
                ? "checkout-button-disabled"
                : ""
            }`}
          >

            {isLoading ? (
              <>
                <Loader2
                  size={19}
                  className="subscription-loader"
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

        </section>


        {/* ================================
            TRUST INFORMATION
        ================================= */}

        <section className="subscription-trust">

          <div className="subscription-trust-item">
            <ShieldCheck
              size={17}
              className="trust-icon-green"
            />

            <span>
              Secure platform
            </span>
          </div>


          <div className="subscription-trust-item">
            <Database
              size={17}
              className="trust-icon-blue"
            />

            <span>
              Protected data
            </span>
          </div>


          <div className="subscription-trust-item">
            <Headphones
              size={17}
              className="trust-icon-red"
            />

            <span>
              Customer support
            </span>
          </div>

        </section>


        {/* ================================
            FOOTER NOTE
        ================================= */}

        <footer className="subscription-footer">

          <p>
            Need help choosing a plan? Contact HemoBridge support.
          </p>

        </footer>

      </div>
    </div>
  );
}

export default Subscription;
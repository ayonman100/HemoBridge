import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageCircle,
  ArrowRight,
} from "lucide-react";

function Contact() {
  return (
    <div className="contact-page">

      {/* Hero Section */}
      <section className="contact-hero">
        <div className="contact-container contact-hero-content">

          <p className="contact-eyebrow">
            Contact HemoBridge
          </p>

          <h1 className="contact-hero-title">
            We're here to help.
          </h1>

          <p className="contact-hero-text">
            Have a question about HemoBridge, need support, or want to
            partner with us? Send us a message and our team will get back
            to you.
          </p>

        </div>
      </section>


      {/* Contact Section */}
      <section className="contact-section">

        <div className="contact-container contact-grid">

          {/* Contact Information */}
          <div className="contact-info">

            <p className="contact-eyebrow">
              Get in Touch
            </p>

            <h2 className="contact-section-title">
              Let's connect
            </h2>

            <p className="contact-description">
              Whether you are a hospital, blood bank, donor, or potential
              partner, we'd love to hear from you.
            </p>


            {/* Contact Items */}
            <div className="contact-items">

              {/* Email */}
              <div className="contact-item">

                <div className="contact-icon">
                  <Mail size={22} />
                </div>

                <div>
                  <h3>Email</h3>

                  <p>
                    support@hemobridge.com
                  </p>
                </div>

              </div>


              {/* Phone */}
              <div className="contact-item">

                <div className="contact-icon">
                  <Phone size={22} />
                </div>

                <div>
                  <h3>Phone</h3>

                  <p>
                    +234 800 000 0000
                  </p>
                </div>

              </div>


              {/* Location */}
              <div className="contact-item">

                <div className="contact-icon">
                  <MapPin size={22} />
                </div>

                <div>
                  <h3>Location</h3>

                  <p>
                    Lagos, Nigeria
                  </p>
                </div>

              </div>

            </div>


            {/* Small support card */}
            <div className="contact-support-card">

              <div className="contact-support-icon">
                <MessageCircle size={21} />
              </div>

              <div>
                <h3>Need quick support?</h3>

                <p>
                  Our team is available to help with questions about
                  hospitals, donors, blood banks, and the HemoBridge platform.
                </p>
              </div>

            </div>

          </div>


          {/* Contact Form */}
          <div className="contact-form-card">

            <div className="contact-form-header">

              <div className="contact-form-icon">
                <Send size={22} />
              </div>

              <div>
                <h2>
                  Send us a message
                </h2>

                <p>
                  Fill out the form below and we'll get back to you.
                </p>
              </div>

            </div>


            <form className="contact-form">

              {/* Name */}
              <div className="contact-field">

                <label htmlFor="fullName">
                  Full Name
                </label>

                <input
                  id="fullName"
                  type="text"
                  placeholder="Enter your full name"
                />

              </div>


              {/* Email */}
              <div className="contact-field">

                <label htmlFor="email">
                  Email Address
                </label>

                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                />

              </div>


              {/* Subject */}
              <div className="contact-field">

                <label htmlFor="subject">
                  Subject
                </label>

                <input
                  id="subject"
                  type="text"
                  placeholder="What is this about?"
                />

              </div>


              {/* Message */}
              <div className="contact-field">

                <label htmlFor="message">
                  Message
                </label>

                <textarea
                  id="message"
                  rows="5"
                  placeholder="Write your message..."
                />

              </div>


              {/* Submit */}
              <button
                type="submit"
                className="contact-submit-button"
              >
                <span>Send Message</span>
                <Send size={18} />
              </button>

            </form>

          </div>

        </div>

      </section>


      {/* Bottom CTA */}
      <section className="contact-cta">

        <div className="contact-container contact-cta-content">

          <div>

            <p className="contact-cta-label">
              Join the mission
            </p>

            <h2>
              Together, we can make blood access faster.
            </h2>

            <p>
              HemoBridge connects the people and organizations working to
              save lives.
            </p>

          </div>

          <ArrowRight className="contact-cta-arrow" size={32} />

        </div>

      </section>

    </div>
  );
}

export default Contact;
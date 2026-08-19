import { useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import {
  Droplets,
  User,
  Building2,
  Landmark,
  Mail,
  Phone,
  CalendarDays,
  Users,
  HeartPulse,
  MapPin,
  FileText,
  ShieldCheck,
  Eye,
  EyeOff,
  Lock,
  CheckCircle2,
  AlertCircle,
  Upload,
  ArrowLeft,
  Loader2,
} from "lucide-react";
import "./Signup.css";

function Signup() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const requestedRole = searchParams.get("role");

  const validRoles = ["donor", "hospital", "bloodbank"];

  const role = validRoles.includes(requestedRole)
    ? requestedRole
    : "donor";

  const roleName = {
    donor: "Donor",
    hospital: "Hospital",
    bloodbank: "Blood Bank",
  };

  const RoleIcon = {
    donor: User,
    hospital: Building2,
    bloodbank: Landmark,
  }[role];

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",

    dateOfBirth: "",
    gender: "",
    bloodGroup: "",
    rhesusFactor: "",
    lga: "",
    healthInformation: "",

    organizationName: "",
    address: "",
    state: "",
    registrationNumber: "",
    hospitalType: "",
    ownershipType: "",
    representativeName: "",
    representativeEmail: "",
    representativePhone: "",
    operatingStatus: "",

    password: "",
    confirmPassword: "",

    document: null,
    termsAccepted: false,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const passwordStrength =
    formData.password.length === 0
      ? ""
      : formData.password.length < 8
      ? "Weak"
      : formData.password.length < 12
      ? "Medium"
      : "Strong";

  const passwordsMatch =
    formData.confirmPassword.length > 0 &&
    formData.password === formData.confirmPassword;

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]:
        type === "checkbox"
          ? checked
          : type === "file"
          ? files?.[0] || null
          : value,
    }));

    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    if (formData.password.length < 8) {
      setError("Your password must be at least 8 characters long.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Your passwords do not match.");
      return;
    }

    if (!formData.termsAccepted) {
      setError(
        "Please accept the Terms of Service and Privacy Policy."
      );
      return;
    }

    setIsLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 1200));

    console.log("Role:", role);
    console.log("Signup Data:", formData);

    setIsLoading(false);

    if (role === "donor") {
      navigate("/verify-account?role=donor");
    } else {
      navigate("/pending-verification");
    }
  };

  return (
    <div className="signup-page">
      <div className="signup-container">

        {/* Back */}
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="signup-back-button"
        >
          <ArrowLeft size={17} />
          Back
        </button>

        {/* Main Card */}
        <div className="signup-card">

          {/* Header */}
          <div className="signup-header">

            <div className="signup-logo">
              <Droplets size={32} />
            </div>

            <div className="signup-role">
              <RoleIcon size={16} />
              <span>{roleName[role]} Account</span>
            </div>

            <h1>
              Create Your {roleName[role]} Account
            </h1>

            <p>
              Join HemoBridge and help make blood access faster,
              safer, and more efficient.
            </p>

          </div>

          {/* Form */}
          <div className="signup-form-container">

            {error && (
              <div className="signup-error" role="alert">
                <AlertCircle size={20} />

                <p>{error}</p>
              </div>
            )}

            <form
              onSubmit={handleSubmit}
              className="signup-form"
            >

              {/* ACCOUNT INFORMATION */}
              <section className="form-section">

                <div className="section-heading">
                  <div className="section-icon red">
                    <User size={20} />
                  </div>

                  <div>
                    <h2>Account Information</h2>
                    <p>
                      Enter your basic account details.
                    </p>
                  </div>
                </div>

                <div className="form-grid">

                  {/* First Name */}
                  <div className="form-field">
                    <label htmlFor="firstName">
                      First Name
                    </label>

                    <div className="input-wrapper">
                      <User size={18} />

                      <input
                        id="firstName"
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="Enter first name"
                        required
                      />
                    </div>
                  </div>

                  {/* Surname */}
                  <div className="form-field">
                    <label htmlFor="lastName">
                      Surname
                    </label>

                    <div className="input-wrapper">
                      <User size={18} />

                      <input
                        id="lastName"
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Enter surname"
                        required
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="form-field">
                    <label htmlFor="email">
                      {role === "donor"
                        ? "Email Address"
                        : "Official Email Address"}
                    </label>

                    <div className="input-wrapper">
                      <Mail size={18} />

                      <input
                        id="email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter email address"
                        required
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="form-field">
                    <label htmlFor="phone">
                      Phone Number
                    </label>

                    <div className="input-wrapper">
                      <Phone size={18} />

                      <input
                        id="phone"
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter phone number"
                        required
                      />
                    </div>
                  </div>

                </div>
              </section>

              {/* DONOR INFORMATION */}
              {role === "donor" && (
                <section className="form-section">

                  <div className="section-heading">
                    <div className="section-icon red">
                      <HeartPulse size={20} />
                    </div>

                    <div>
                      <h2>Donor Information</h2>
                      <p>
                        Tell us about your donation profile.
                      </p>
                    </div>
                  </div>

                  <div className="form-grid">

                    {/* DOB */}
                    <div className="form-field">
                      <label htmlFor="dateOfBirth">
                        Date of Birth
                      </label>

                      <div className="input-wrapper">
                        <CalendarDays size={18} />

                        <input
                          id="dateOfBirth"
                          type="date"
                          name="dateOfBirth"
                          value={formData.dateOfBirth}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    {/* Gender */}
                    <div className="form-field">
                      <label htmlFor="gender">
                        Gender
                      </label>

                      <div className="input-wrapper">
                        <Users size={18} />

                        <select
                          id="gender"
                          name="gender"
                          value={formData.gender}
                          onChange={handleChange}
                          required
                        >
                          <option value="">
                            Select gender
                          </option>
                          <option value="male">
                            Male
                          </option>
                          <option value="female">
                            Female
                          </option>
                          <option value="prefer-not-to-say">
                            Prefer not to say
                          </option>
                        </select>
                      </div>
                    </div>

                    {/* Blood Group */}
                    <div className="form-field">
                      <label htmlFor="bloodGroup">
                        Blood Group
                      </label>

                      <div className="input-wrapper">
                        <Droplets size={18} />

                        <select
                          id="bloodGroup"
                          name="bloodGroup"
                          value={formData.bloodGroup}
                          onChange={handleChange}
                          required
                        >
                          <option value="">
                            Select blood group
                          </option>
                          <option value="A">A</option>
                          <option value="B">B</option>
                          <option value="AB">AB</option>
                          <option value="O">O</option>
                        </select>
                      </div>
                    </div>

                    {/* Rhesus */}
                    <div className="form-field">
                      <label htmlFor="rhesusFactor">
                        Rhesus Factor
                      </label>

                      <div className="input-wrapper">
                        <Droplets size={18} />

                        <select
                          id="rhesusFactor"
                          name="rhesusFactor"
                          value={formData.rhesusFactor}
                          onChange={handleChange}
                          required
                        >
                          <option value="">
                            Select Rhesus factor
                          </option>
                          <option value="positive">
                            Positive (+)
                          </option>
                          <option value="negative">
                            Negative (-)
                          </option>
                        </select>
                      </div>
                    </div>

                    {/* LGA */}
                    <div className="form-field">
                      <label htmlFor="lga">
                        LGA / Location
                      </label>

                      <div className="input-wrapper">
                        <MapPin size={18} />

                        <input
                          id="lga"
                          type="text"
                          name="lga"
                          value={formData.lga}
                          onChange={handleChange}
                          placeholder="Enter LGA or location"
                          required
                        />
                      </div>
                    </div>

                    {/* Health */}
                    <div className="form-field full-width">
                      <label htmlFor="healthInformation">
                        Health / Eligibility Information
                      </label>

                      <textarea
                        id="healthInformation"
                        name="healthInformation"
                        value={formData.healthInformation}
                        onChange={handleChange}
                        rows="5"
                        placeholder="Provide relevant health or donation eligibility information"
                        required
                      />
                    </div>

                  </div>
                </section>
              )}

              {/* ORGANIZATION INFORMATION */}
              {(role === "hospital" || role === "bloodbank") && (
                <section className="form-section">

                  <div className="section-heading">
                    <div className="section-icon blue">
                      {role === "hospital" ? (
                        <Building2 size={20} />
                      ) : (
                        <Landmark size={20} />
                      )}
                    </div>

                    <div>
                      <h2>
                        {role === "hospital"
                          ? "Hospital Information"
                          : "Blood Bank Information"}
                      </h2>

                      <p>
                        Provide your organization's verification details.
                      </p>
                    </div>
                  </div>

                  <div className="form-grid">

                    {/* Organization Name */}
                    <div className="form-field full-width">
                      <label htmlFor="organizationName">
                        {role === "hospital"
                          ? "Hospital Name"
                          : "Blood Bank Name"}
                      </label>

                      <div className="input-wrapper">
                        {role === "hospital" ? (
                          <Building2 size={18} />
                        ) : (
                          <Landmark size={18} />
                        )}

                        <input
                          id="organizationName"
                          type="text"
                          name="organizationName"
                          value={formData.organizationName}
                          onChange={handleChange}
                          placeholder={
                            role === "hospital"
                              ? "Enter hospital name"
                              : "Enter blood bank name"
                          }
                          required
                        />
                      </div>
                    </div>

                    {/* Registration */}
                    <div className="form-field">
                      <label htmlFor="registrationNumber">
                        {role === "hospital"
                          ? "Hospital Registration Number"
                          : "Licence / Registration Number"}
                      </label>

                      <div className="input-wrapper">
                        <FileText size={18} />

                        <input
                          id="registrationNumber"
                          type="text"
                          name="registrationNumber"
                          value={formData.registrationNumber}
                          onChange={handleChange}
                          placeholder="Enter registration number"
                          required
                        />
                      </div>
                    </div>

                    {/* Hospital Type */}
                    {role === "hospital" && (
                      <div className="form-field">
                        <label htmlFor="hospitalType">
                          Hospital Type
                        </label>

                        <select
                          id="hospitalType"
                          name="hospitalType"
                          value={formData.hospitalType}
                          onChange={handleChange}
                          required
                        >
                          <option value="">
                            Select hospital type
                          </option>
                          <option value="general">
                            General Hospital
                          </option>
                          <option value="teaching">
                            Teaching Hospital
                          </option>
                          <option value="specialist">
                            Specialist Hospital
                          </option>
                          <option value="private">
                            Private Hospital
                          </option>
                          <option value="clinic">
                            Clinic
                          </option>
                          <option value="other">
                            Other
                          </option>
                        </select>
                      </div>
                    )}

                    {/* Ownership */}
                    {role === "hospital" && (
                      <div className="form-field">
                        <label htmlFor="ownershipType">
                          Ownership Type
                        </label>

                        <select
                          id="ownershipType"
                          name="ownershipType"
                          value={formData.ownershipType}
                          onChange={handleChange}
                          required
                        >
                          <option value="">
                            Select ownership
                          </option>
                          <option value="government">
                            Government
                          </option>
                          <option value="private">
                            Private
                          </option>
                          <option value="mission">
                            Mission / Faith-based
                          </option>
                          <option value="other">
                            Other
                          </option>
                        </select>
                      </div>
                    )}

                    {/* Address */}
                    <div className="form-field full-width">
                      <label htmlFor="address">
                        {role === "hospital"
                          ? "Hospital Address"
                          : "Blood Bank Address"}
                      </label>

                      <div className="input-wrapper">
                        <MapPin size={18} />

                        <input
                          id="address"
                          type="text"
                          name="address"
                          value={formData.address}
                          onChange={handleChange}
                          placeholder="Enter full address"
                          required
                        />
                      </div>
                    </div>

                    {/* State */}
                    <div className="form-field">
                      <label htmlFor="state">
                        State
                      </label>

                      <input
                        id="state"
                        type="text"
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        placeholder="Enter state"
                        required
                      />
                    </div>

                    {/* Representative */}
                    <div className="form-field">
                      <label htmlFor="representativeName">
                        Authorized Representative
                      </label>

                      <div className="input-wrapper">
                        <User size={18} />

                        <input
                          id="representativeName"
                          type="text"
                          name="representativeName"
                          value={formData.representativeName}
                          onChange={handleChange}
                          placeholder="Representative full name"
                          required
                        />
                      </div>
                    </div>

                    {/* Representative Email */}
                    <div className="form-field">
                      <label htmlFor="representativeEmail">
                        Representative Email
                      </label>

                      <div className="input-wrapper">
                        <Mail size={18} />

                        <input
                          id="representativeEmail"
                          type="email"
                          name="representativeEmail"
                          value={formData.representativeEmail}
                          onChange={handleChange}
                          placeholder="Representative email"
                          required
                        />
                      </div>
                    </div>

                    {/* Representative Phone */}
                    <div className="form-field">
                      <label htmlFor="representativePhone">
                        Representative Phone
                      </label>

                      <div className="input-wrapper">
                        <Phone size={18} />

                        <input
                          id="representativePhone"
                          type="tel"
                          name="representativePhone"
                          value={formData.representativePhone}
                          onChange={handleChange}
                          placeholder="Representative phone"
                          required
                        />
                      </div>
                    </div>

                    {/* Operating Status */}
                    {role === "bloodbank" && (
                      <div className="form-field">
                        <label htmlFor="operatingStatus">
                          Operating Status
                        </label>

                        <select
                          id="operatingStatus"
                          name="operatingStatus"
                          value={formData.operatingStatus}
                          onChange={handleChange}
                          required
                        >
                          <option value="">
                            Select operating status
                          </option>
                          <option value="active">
                            Currently Operating
                          </option>
                          <option value="temporarily-closed">
                            Temporarily Closed
                          </option>
                        </select>
                      </div>
                    )}

                    {/* Document */}
                    <div className="form-field full-width">

                      <label htmlFor="document">
                        {role === "hospital"
                          ? "Registration / Accreditation Document"
                          : "Licence / Registration Document"}
                      </label>

                      <div className="upload-box">

                        <Upload
                          size={30}
                          className="upload-icon"
                        />

                        <label
                          htmlFor="document"
                          className="upload-label"
                        >
                          <span>
                            Upload a document
                          </span>
                          <small>
                            PDF, JPG, JPEG or PNG
                          </small>
                        </label>

                        <input
                          id="document"
                          type="file"
                          name="document"
                          onChange={handleChange}
                          accept=".pdf,.jpg,.jpeg,.png"
                          hidden
                          required
                        />

                        {formData.document && (
                          <div className="uploaded-file">
                            <CheckCircle2 size={16} />
                            {formData.document.name}
                          </div>
                        )}

                      </div>
                    </div>

                  </div>
                </section>
              )}

              {/* SECURITY */}
              <section className="form-section">

                <div className="section-heading">
                  <div className="section-icon green">
                    <ShieldCheck size={20} />
                  </div>

                  <div>
                    <h2>Security</h2>
                    <p>
                      Create a secure password for your account.
                    </p>
                  </div>
                </div>

                <div className="form-grid">

                  {/* Password */}
                  <div className="form-field">
                    <label htmlFor="password">
                      Password
                    </label>

                    <div className="input-wrapper">
                      <Lock size={18} />

                      <input
                        id="password"
                        type={
                          showPassword
                            ? "text"
                            : "password"
                        }
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Create a password"
                        required
                      />

                      <button
                        type="button"
                        className="password-toggle"
                        onClick={() =>
                          setShowPassword(!showPassword)
                        }
                        aria-label={
                          showPassword
                            ? "Hide password"
                            : "Show password"
                        }
                      >
                        {showPassword ? (
                          <EyeOff size={19} />
                        ) : (
                          <Eye size={19} />
                        )}
                      </button>
                    </div>

                    {passwordStrength && (
                      <div className="password-strength">

                        <div className="strength-header">
                          <span>
                            Password strength
                          </span>

                          <strong
                            className={
                              passwordStrength.toLowerCase()
                            }
                          >
                            {passwordStrength}
                          </strong>
                        </div>

                        <div className="strength-track">
                          <div
                            className={`strength-bar ${passwordStrength.toLowerCase()}`}
                          />
                        </div>

                      </div>
                    )}
                  </div>

                  {/* Confirm Password */}
                  <div className="form-field">
                    <label htmlFor="confirmPassword">
                      Confirm Password
                    </label>

                    <div className="input-wrapper">
                      <Lock size={18} />

                      <input
                        id="confirmPassword"
                        type={
                          showConfirmPassword
                            ? "text"
                            : "password"
                        }
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        placeholder="Confirm your password"
                        required
                      />

                      <button
                        type="button"
                        className="password-toggle"
                        onClick={() =>
                          setShowConfirmPassword(
                            !showConfirmPassword
                          )
                        }
                        aria-label={
                          showConfirmPassword
                            ? "Hide password"
                            : "Show password"
                        }
                      >
                        {showConfirmPassword ? (
                          <EyeOff size={19} />
                        ) : (
                          <Eye size={19} />
                        )}
                      </button>
                    </div>

                    {formData.confirmPassword && (
                      <div
                        className={`password-match ${
                          passwordsMatch
                            ? "match"
                            : "no-match"
                        }`}
                      >
                        {passwordsMatch ? (
                          <CheckCircle2 size={16} />
                        ) : (
                          <AlertCircle size={16} />
                        )}

                        {passwordsMatch
                          ? "Passwords match"
                          : "Passwords do not match"}
                      </div>
                    )}
                  </div>

                </div>
              </section>

              {/* TERMS */}
              <div className="terms-section">

                <input
                  id="termsAccepted"
                  type="checkbox"
                  name="termsAccepted"
                  checked={formData.termsAccepted}
                  onChange={handleChange}
                  required
                />

                <label htmlFor="termsAccepted">
                  I agree to HemoBridge's{" "}
                  <Link to="/terms">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link to="/privacy">
                    Privacy Policy
                  </Link>
                  .
                </label>

              </div>

              {/* SUBMIT */}
              <button
                type="submit"
                disabled={isLoading}
                className="signup-submit"
              >
                {isLoading ? (
                  <>
                    <Loader2
                      size={19}
                      className="animate-spin"
                    />
                    Creating Account...
                  </>
                ) : (
                  <>
                    {role === "donor"
                      ? "Continue to Verification"
                      : `Submit ${roleName[role]} for Verification`}

                    <CheckCircle2 size={18} />
                  </>
                )}
              </button>

            </form>

            {/* LOGIN */}
            <div className="signup-login">
              <p>
                Already have an account?{" "}
                <Link to="/login">
                  Login
                </Link>
              </p>
            </div>

          </div>
        </div>

        {/* Footer */}
        <div className="signup-security-note">
          <ShieldCheck
            size={15}
            className="text-green-600"
          />
          Your information is securely handled by HemoBridge.
        </div>

      </div>
    </div>
  );
}

export default Signup;
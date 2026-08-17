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

function Signup() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  // Get role from URL
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

  // Role icons
  const RoleIcon = {
    donor: User,
    hospital: Building2,
    bloodbank: Landmark,
  }[role];

  // Form data
  const [formData, setFormData] = useState({
    // Common
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",

    // Donor
    dateOfBirth: "",
    gender: "",
    bloodGroup: "",
    rhesusFactor: "",
    lga: "",
    healthInformation: "",

    // Organization
    address: "",
    state: "",
    registrationNumber: "",
    hospitalType: "",
    ownershipType: "",
    representativeName: "",
    representativeEmail: "",
    representativePhone: "",
    operatingStatus: "",

    // Verification
    document: null,
    termsAccepted: false,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  // Password strength
  const passwordStrength =
    formData.password.length === 0
      ? ""
      : formData.password.length < 8
      ? "Weak"
      : formData.password.length < 12
      ? "Medium"
      : "Strong";

  // Password match
  const passwordsMatch =
    formData.confirmPassword.length > 0 &&
    formData.password === formData.confirmPassword;

  // Handle input changes
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

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    // Password validation
    if (formData.password.length < 8) {
      setError("Your password must be at least 8 characters long.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Your passwords do not match.");
      return;
    }

    // Terms validation
    if (!formData.termsAccepted) {
      setError(
        "Please accept the Terms of Service and Privacy Policy."
      );
      return;
    }

    setIsLoading(true);

    // Temporary frontend simulation
    await new Promise((resolve) => setTimeout(resolve, 1200));

    console.log("Role:", role);
    console.log("Signup Data:", formData);

    setIsLoading(false);

    /*
      TEMPORARY FRONTEND NAVIGATION

      Later:
      1. Send registration data to backend.
      2. Backend creates the account.
      3. Email/phone verification is triggered.
      4. Organization documents are reviewed.
      5. Account status is returned.
    */

    if (role === "donor") {
      navigate("/verify-account?role=donor");
    } else {
      navigate("/pending-verification");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 px-4 sm:px-6 py-8 md:py-12">

      <div className="w-full max-w-3xl mx-auto">

        {/* ================= BACK ================= */}

        <button
          type="button"
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-red-600 transition mb-6"
        >
          <ArrowLeft size={17} />
          Back
        </button>

        {/* ================= CARD ================= */}

        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">

          {/* ================= HEADER ================= */}

          <div className="px-6 py-8 md:px-10 md:py-10 text-center border-b border-gray-100">

            <div className="w-16 h-16 mx-auto rounded-2xl bg-red-50 text-red-600 flex items-center justify-center mb-5">
              <Droplets size={32} />
            </div>

            <div className="inline-flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-full px-4 py-2 mb-4">
              <RoleIcon size={16} className="text-red-600" />

              <span className="text-sm font-medium text-gray-700">
                {roleName[role]} Account
              </span>
            </div>

            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
              Create Your {roleName[role]} Account
            </h1>

            <p className="mt-3 text-gray-600 max-w-xl mx-auto">
              Join HemoBridge and help make blood access faster,
              safer, and more efficient.
            </p>

          </div>

          {/* ================= FORM CONTENT ================= */}

          <div className="p-6 md:p-10">

            {/* ================= ERROR ================= */}

            {error && (
              <div
                className="mb-7 rounded-xl border border-red-200 bg-red-50 px-4 py-4"
                role="alert"
              >

                <div className="flex items-start gap-3">

                  <AlertCircle
                    size={20}
                    className="text-red-600 shrink-0 mt-0.5"
                  />

                  <p className="text-sm text-red-700 leading-relaxed">
                    {error}
                  </p>

                </div>

              </div>
            )}

            {/* ================= FORM ================= */}

            <form
              onSubmit={handleSubmit}
              className="space-y-10"
            >

              {/* ================= ACCOUNT INFORMATION ================= */}

              <section>

                <div className="flex items-center gap-3 mb-5">

                  <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center">
                    <User size={20} />
                  </div>

                  <div>
                    <h2 className="text-lg font-bold text-gray-900">
                      Account Information
                    </h2>

                    <p className="text-sm text-gray-500">
                      Enter your basic account details.
                    </p>
                  </div>

                </div>

                <div className="space-y-5">

                  {/* Name */}

                  <div>

                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      {role === "donor"
                        ? "Full Name"
                        : `${roleName[role]} Name`}
                    </label>

                    <div className="relative">

                      <User
                        size={18}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                      />

                      <input
                        id="name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder={
                          role === "donor"
                            ? "Enter your full name"
                            : `Enter ${roleName[
                                role
                              ].toLowerCase()} name`
                        }
                        className="w-full border border-gray-300 rounded-xl pl-11 pr-4 py-3 outline-none transition focus:ring-2 focus:ring-red-100 focus:border-red-500"
                        required
                      />

                    </div>

                  </div>

                  {/* Email */}

                  <div>

                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      {role === "donor"
                        ? "Email Address"
                        : "Official Email Address"}
                    </label>

                    <div className="relative">

                      <Mail
                        size={18}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                      />

                      <input
                        id="email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter email address"
                        className="w-full border border-gray-300 rounded-xl pl-11 pr-4 py-3 outline-none transition focus:ring-2 focus:ring-red-100 focus:border-red-500"
                        required
                      />

                    </div>

                  </div>

                  {/* Phone */}

                  <div>

                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Phone Number
                    </label>

                    <div className="relative">

                      <Phone
                        size={18}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                      />

                      <input
                        id="phone"
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter phone number"
                        className="w-full border border-gray-300 rounded-xl pl-11 pr-4 py-3 outline-none transition focus:ring-2 focus:ring-red-100 focus:border-red-500"
                        required
                      />

                    </div>

                  </div>

                </div>

              </section>

              {/* ================= DONOR INFORMATION ================= */}

              {role === "donor" && (
                <section>

                  <div className="flex items-center gap-3 mb-5">

                    <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center">
                      <HeartPulse size={20} />
                    </div>

                    <div>
                      <h2 className="text-lg font-bold text-gray-900">
                        Donor Information
                      </h2>

                      <p className="text-sm text-gray-500">
                        Help us understand your donation profile.
                      </p>
                    </div>

                  </div>

                  <div className="space-y-5">

                    {/* Date of Birth */}

                    <div>

                      <label
                        htmlFor="dateOfBirth"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Date of Birth
                      </label>

                      <div className="relative">

                        <CalendarDays
                          size={18}
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                        />

                        <input
                          id="dateOfBirth"
                          type="date"
                          name="dateOfBirth"
                          value={formData.dateOfBirth}
                          onChange={handleChange}
                          className="w-full border border-gray-300 rounded-xl pl-11 pr-4 py-3 outline-none focus:ring-2 focus:ring-red-100 focus:border-red-500"
                          required
                        />

                      </div>

                    </div>

                    {/* Gender */}

                    <div>

                      <label
                        htmlFor="gender"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Gender
                      </label>

                      <div className="relative">

                        <Users
                          size={18}
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                        />

                        <select
                          id="gender"
                          name="gender"
                          value={formData.gender}
                          onChange={handleChange}
                          className="w-full border border-gray-300 rounded-xl pl-11 pr-4 py-3 bg-white outline-none focus:ring-2 focus:ring-red-100 focus:border-red-500"
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

                    <div>

                      <label
                        htmlFor="bloodGroup"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Blood Group
                      </label>

                      <div className="relative">

                        <Droplets
                          size={18}
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-red-500"
                        />

                        <select
                          id="bloodGroup"
                          name="bloodGroup"
                          value={formData.bloodGroup}
                          onChange={handleChange}
                          className="w-full border border-gray-300 rounded-xl pl-11 pr-4 py-3 bg-white outline-none focus:ring-2 focus:ring-red-100 focus:border-red-500"
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

                    <div>

                      <label
                        htmlFor="rhesusFactor"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Rhesus Factor
                      </label>

                      <select
                        id="rhesusFactor"
                        name="rhesusFactor"
                        value={formData.rhesusFactor}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-xl px-4 py-3 bg-white outline-none focus:ring-2 focus:ring-red-100 focus:border-red-500"
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

                    {/* LGA */}

                    <div>

                      <label
                        htmlFor="lga"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        LGA / Location
                      </label>

                      <div className="relative">

                        <MapPin
                          size={18}
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                        />

                        <input
                          id="lga"
                          type="text"
                          name="lga"
                          value={formData.lga}
                          onChange={handleChange}
                          placeholder="Enter your LGA or location"
                          className="w-full border border-gray-300 rounded-xl pl-11 pr-4 py-3 outline-none focus:ring-2 focus:ring-red-100 focus:border-red-500"
                          required
                        />

                      </div>

                    </div>

                    {/* Health Information */}

                    <div>

                      <label
                        htmlFor="healthInformation"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Health / Eligibility Information
                      </label>

                      <textarea
                        id="healthInformation"
                        name="healthInformation"
                        value={formData.healthInformation}
                        onChange={handleChange}
                        rows="4"
                        placeholder="Provide relevant health or donation eligibility information"
                        className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none resize-none focus:ring-2 focus:ring-red-100 focus:border-red-500"
                        required
                      />

                    </div>

                  </div>

                </section>
              )}

              {/* ================= ORGANIZATION INFORMATION ================= */}

              {(role === "hospital" || role === "bloodbank") && (
                <section>

                  <div className="flex items-center gap-3 mb-5">

                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                      {role === "hospital" ? (
                        <Building2 size={20} />
                      ) : (
                        <Landmark size={20} />
                      )}
                    </div>

                    <div>

                      <h2 className="text-lg font-bold text-gray-900">
                        {role === "hospital"
                          ? "Hospital Information"
                          : "Blood Bank Information"}
                      </h2>

                      <p className="text-sm text-gray-500">
                        Provide your organization's verification details.
                      </p>

                    </div>

                  </div>

                  <div className="space-y-5">

                    {/* Registration Number */}

                    <div>

                      <label
                        htmlFor="registrationNumber"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        {role === "hospital"
                          ? "Hospital Registration Number"
                          : "Licence / Registration Number"}
                      </label>

                      <div className="relative">

                        <FileText
                          size={18}
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                        />

                        <input
                          id="registrationNumber"
                          type="text"
                          name="registrationNumber"
                          value={formData.registrationNumber}
                          onChange={handleChange}
                          placeholder={
                            role === "hospital"
                              ? "Enter hospital registration number"
                              : "Enter licence or registration number"
                          }
                          className="w-full border border-gray-300 rounded-xl pl-11 pr-4 py-3 outline-none focus:ring-2 focus:ring-red-100 focus:border-red-500"
                          required
                        />

                      </div>

                    </div>

                    {/* Hospital Type */}

                    {role === "hospital" && (
                      <div>

                        <label
                          htmlFor="hospitalType"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Hospital Type
                        </label>

                        <select
                          id="hospitalType"
                          name="hospitalType"
                          value={formData.hospitalType}
                          onChange={handleChange}
                          className="w-full border border-gray-300 rounded-xl px-4 py-3 bg-white outline-none focus:ring-2 focus:ring-red-100 focus:border-red-500"
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
                      <div>

                        <label
                          htmlFor="ownershipType"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Ownership Type
                        </label>

                        <select
                          id="ownershipType"
                          name="ownershipType"
                          value={formData.ownershipType}
                          onChange={handleChange}
                          className="w-full border border-gray-300 rounded-xl px-4 py-3 bg-white outline-none focus:ring-2 focus:ring-red-100 focus:border-red-500"
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

                    <div>

                      <label
                        htmlFor="address"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        {role === "hospital"
                          ? "Hospital Address"
                          : "Blood Bank Address"}
                      </label>

                      <div className="relative">

                        <MapPin
                          size={18}
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                        />

                        <input
                          id="address"
                          type="text"
                          name="address"
                          value={formData.address}
                          onChange={handleChange}
                          placeholder={
                            role === "hospital"
                              ? "Enter hospital address"
                              : "Enter blood bank address"
                          }
                          className="w-full border border-gray-300 rounded-xl pl-11 pr-4 py-3 outline-none focus:ring-2 focus:ring-red-100 focus:border-red-500"
                          required
                        />

                      </div>

                    </div>

                    {/* State */}

                    <div>

                      <label
                        htmlFor="state"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        State
                      </label>

                      <input
                        id="state"
                        type="text"
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        placeholder="Enter state"
                        className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-red-100 focus:border-red-500"
                        required
                      />

                    </div>

                    {/* Representative */}

                    <div>

                      <label
                        htmlFor="representativeName"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Authorized Representative
                      </label>

                      <div className="relative">

                        <User
                          size={18}
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                        />

                        <input
                          id="representativeName"
                          type="text"
                          name="representativeName"
                          value={formData.representativeName}
                          onChange={handleChange}
                          placeholder="Full name of authorized representative"
                          className="w-full border border-gray-300 rounded-xl pl-11 pr-4 py-3 outline-none focus:ring-2 focus:ring-red-100 focus:border-red-500"
                          required
                        />

                      </div>

                    </div>

                    {/* Representative Email */}

                    <div>

                      <label
                        htmlFor="representativeEmail"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Representative Email
                      </label>

                      <div className="relative">

                        <Mail
                          size={18}
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                        />

                        <input
                          id="representativeEmail"
                          type="email"
                          name="representativeEmail"
                          value={formData.representativeEmail}
                          onChange={handleChange}
                          placeholder="Representative email"
                          className="w-full border border-gray-300 rounded-xl pl-11 pr-4 py-3 outline-none focus:ring-2 focus:ring-red-100 focus:border-red-500"
                          required
                        />

                      </div>

                    </div>

                    {/* Representative Phone */}

                    <div>

                      <label
                        htmlFor="representativePhone"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Representative Phone
                      </label>

                      <div className="relative">

                        <Phone
                          size={18}
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                        />

                        <input
                          id="representativePhone"
                          type="tel"
                          name="representativePhone"
                          value={formData.representativePhone}
                          onChange={handleChange}
                          placeholder="Representative phone number"
                          className="w-full border border-gray-300 rounded-xl pl-11 pr-4 py-3 outline-none focus:ring-2 focus:ring-red-100 focus:border-red-500"
                          required
                        />

                      </div>

                    </div>

                    {/* Operating Status */}

                    {role === "bloodbank" && (
                      <div>

                        <label
                          htmlFor="operatingStatus"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Operating Status
                        </label>

                        <select
                          id="operatingStatus"
                          name="operatingStatus"
                          value={formData.operatingStatus}
                          onChange={handleChange}
                          className="w-full border border-gray-300 rounded-xl px-4 py-3 bg-white outline-none focus:ring-2 focus:ring-red-100 focus:border-red-500"
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

                    <div>

                      <label
                        htmlFor="document"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        {role === "hospital"
                          ? "Registration / Accreditation Document"
                          : "Licence / Registration Document"}
                      </label>

                      <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-red-400 transition">

                        <Upload
                          size={28}
                          className="mx-auto text-gray-400 mb-3"
                        />

                        <label
                          htmlFor="document"
                          className="cursor-pointer"
                        >

                          <span className="text-sm font-semibold text-red-600 hover:text-red-700">
                            Upload a document
                          </span>

                          <span className="text-sm text-gray-500">
                            {" "}or select a file
                          </span>

                        </label>

                        <input
                          id="document"
                          type="file"
                          name="document"
                          onChange={handleChange}
                          accept=".pdf,.jpg,.jpeg,.png"
                          className="hidden"
                          required
                        />

                        {formData.document && (
                          <div className="mt-3 flex items-center justify-center gap-2 text-sm text-green-600">
                            <CheckCircle2 size={16} />
                            {formData.document.name}
                          </div>
                        )}

                        <p className="text-xs text-gray-500 mt-2">
                          PDF, JPG, JPEG or PNG
                        </p>

                      </div>

                    </div>

                  </div>

                </section>
              )}

              {/* ================= SECURITY ================= */}

              <section>

                <div className="flex items-center gap-3 mb-5">

                  <div className="w-10 h-10 rounded-xl bg-green-50 text-green-600 flex items-center justify-center">
                    <ShieldCheck size={20} />
                  </div>

                  <div>

                    <h2 className="text-lg font-bold text-gray-900">
                      Security
                    </h2>

                    <p className="text-sm text-gray-500">
                      Create a secure password for your account.
                    </p>

                  </div>

                </div>

                <div className="space-y-5">

                  {/* Password */}

                  <div>

                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Password
                    </label>

                    <div className="relative">

                      <Lock
                        size={18}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                      />

                      <input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Create a password"
                        className="w-full border border-gray-300 rounded-xl pl-11 pr-12 py-3 outline-none focus:ring-2 focus:ring-red-100 focus:border-red-500"
                        required
                      />

                      <button
                        type="button"
                        onClick={() =>
                          setShowPassword(!showPassword)
                        }
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700 transition"
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
                      <div className="mt-3">

                        <div className="flex items-center justify-between mb-1">

                          <span className="text-xs text-gray-500">
                            Password strength
                          </span>

                          <span
                            className={`text-xs font-semibold ${
                              passwordStrength === "Weak"
                                ? "text-red-600"
                                : passwordStrength === "Medium"
                                ? "text-yellow-600"
                                : "text-green-600"
                            }`}
                          >
                            {passwordStrength}
                          </span>

                        </div>

                        <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">

                          <div
                            className={`h-full rounded-full transition-all ${
                              passwordStrength === "Weak"
                                ? "w-1/3 bg-red-500"
                                : passwordStrength === "Medium"
                                ? "w-2/3 bg-yellow-500"
                                : "w-full bg-green-500"
                            }`}
                          />

                        </div>

                      </div>
                    )}

                  </div>

                  {/* Confirm Password */}

                  <div>

                    <label
                      htmlFor="confirmPassword"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Confirm Password
                    </label>

                    <div className="relative">

                      <Lock
                        size={18}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                      />

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
                        className="w-full border border-gray-300 rounded-xl pl-11 pr-12 py-3 outline-none focus:ring-2 focus:ring-red-100 focus:border-red-500"
                        required
                      />

                      <button
                        type="button"
                        onClick={() =>
                          setShowConfirmPassword(
                            !showConfirmPassword
                          )
                        }
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700 transition"
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
                        className={`flex items-center gap-2 mt-2 text-sm font-medium ${
                          passwordsMatch
                            ? "text-green-600"
                            : "text-red-600"
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

              {/* ================= TERMS ================= */}

              <div className="border-t border-gray-100 pt-7">

                <div className="flex items-start gap-3">

                  <input
                    id="termsAccepted"
                    type="checkbox"
                    name="termsAccepted"
                    checked={formData.termsAccepted}
                    onChange={handleChange}
                    className="mt-1 w-4 h-4 accent-red-600 cursor-pointer"
                    required
                  />

                  <label
                    htmlFor="termsAccepted"
                    className="text-sm text-gray-600 leading-relaxed cursor-pointer"
                  >
                    I agree to HemoBridge's{" "}

                    <Link
                      to="/terms"
                      className="text-red-600 font-medium hover:underline"
                    >
                      Terms of Service
                    </Link>{" "}

                    and{" "}

                    <Link
                      to="/privacy"
                      className="text-red-600 font-medium hover:underline"
                    >
                      Privacy Policy
                    </Link>
                    .
                  </label>

                </div>

              </div>

              {/* ================= SUBMIT ================= */}

              <button
                type="submit"
                disabled={isLoading}
                className={`w-full py-3.5 rounded-xl font-semibold text-white transition flex items-center justify-center gap-2 ${
                  isLoading
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

                    Creating Account...
                  </>
                ) : (
                  <>
                    {role === "donor"
                      ? "Continue to Verification"
                      : `Submit ${roleName[
                          role
                        ]} for Verification`}

                    <CheckCircle2 size={18} />
                  </>
                )}

              </button>

            </form>

            {/* ================= LOGIN ================= */}

            <div className="text-center mt-8 pt-7 border-t border-gray-100">

              <p className="text-sm text-gray-600">

                Already have an account?{" "}

                <Link
                  to="/login"
                  className="text-red-600 font-semibold hover:text-red-700 transition"
                >
                  Login
                </Link>

              </p>

            </div>

          </div>

        </div>

        {/* ================= FOOTER ================= */}

        <div className="flex items-center justify-center gap-2 mt-6 text-xs text-gray-500">

          <ShieldCheck size={15} className="text-green-600" />

          Your information is securely handled by HemoBridge.

        </div>

      </div>

    </div>
  );
}

export default Signup;
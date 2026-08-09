import { useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const role = searchParams.get("role") || "donor";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    bloodGroup: "",
    address: "",
    registrationNumber: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    console.log("Role:", role);
    console.log("Signup Data:", formData);

    // Temporary frontend navigation
    if (role === "donor") {
      navigate("/donor/dashboard");
    } else if (role === "hospital") {
      navigate("/hospital/dashboard");
    } else if (role === "bloodbank") {
      navigate("/bloodbank/dashboard");
    }
  };

  const roleName = {
    donor: "Donor",
    hospital: "Hospital",
    bloodbank: "Blood Bank",
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6 py-10">

      <div className="w-full max-w-lg bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-10">

        {/* Header */}
        <div className="text-center mb-8">

          <div className="text-5xl mb-4">
            🩸
          </div>

          <h1 className="text-3xl font-bold text-gray-900">
            Create Your {roleName[role]} Account
          </h1>

          <p className="mt-3 text-gray-600">
            Join HemoBridge and help make blood access faster.
          </p>

        </div>

        {/* Signup Form */}
        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {role === "donor" ? "Full Name" : `${roleName[role]} Name`}
            </label>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder={
                role === "donor"
                  ? "Enter your full name"
                  : `Enter ${roleName[role].toLowerCase()} name`
              }
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {role === "donor" ? "Email Address" : "Official Email Address"}
            </label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter email address"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number
            </label>

            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter phone number"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>

          {/* Donor Blood Group */}
          {role === "donor" && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Blood Group
              </label>

              <select
                name="bloodGroup"
                value={formData.bloodGroup}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-red-500 bg-white"
                required
              >
                <option value="">Select blood group</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
              </select>
            </div>
          )}

          {/* Organization Address */}
          {role !== "donor" && (
            <>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Address
                </label>

                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder={`Enter ${roleName[role].toLowerCase()} address`}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-red-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Registration Number
                </label>

                <input
                  type="text"
                  name="registrationNumber"
                  value={formData.registrationNumber}
                  onChange={handleChange}
                  placeholder="Enter registration number"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-red-500"
                  required
                />
              </div>
            </>
          )}

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>

            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Create a password"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Confirm Password
            </label>

            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm your password"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-red-600 text-white py-3.5 rounded-lg font-semibold hover:bg-red-700 transition"
          >
            {role === "donor"
              ? "Create Donor Account"
              : `Register ${roleName[role]}`}
          </button>

        </form>

        {/* Login */}
        <div className="text-center mt-7">

          <p className="text-gray-600">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-red-600 font-semibold hover:text-red-700"
            >
              Login
            </Link>
          </p>

        </div>

      </div>

    </div>
  );
}

export default Signup;
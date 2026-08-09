import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Login Data:", formData);

    // Temporary navigation until authentication is connected
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6 py-10">

      <div className="w-full max-w-md bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-10">

        {/* Header */}
        <div className="text-center mb-8">

          <div className="text-5xl mb-4">
            🩸
          </div>

          <h1 className="text-3xl font-bold text-gray-900">
            Welcome Back
          </h1>

          <p className="mt-3 text-gray-600">
            Login to your HemoBridge account
          </p>

        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>

          {/* Password */}
          <div>
            <div className="flex items-center justify-between mb-2">

              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>

              <Link
                to="/forgot-password"
                className="text-sm text-red-600 hover:text-red-700"
              >
                Forgot password?
              </Link>

            </div>

            <div className="relative">

              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 pr-20 outline-none focus:ring-2 focus:ring-red-500"
                required
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-gray-500 hover:text-gray-700"
              >
                {showPassword ? "Hide" : "Show"}
              </button>

            </div>
          </div>

          {/* Remember Me */}
          <div className="flex items-center gap-2">

            <input
              type="checkbox"
              id="remember"
              className="w-4 h-4 accent-red-600"
            />

            <label
              htmlFor="remember"
              className="text-sm text-gray-600"
            >
              Remember me
            </label>

          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-red-600 text-white py-3.5 rounded-lg font-semibold hover:bg-red-700 transition"
          >
            Login
          </button>

        </form>

        {/* Register */}
        <div className="text-center mt-7">

          <p className="text-gray-600">
            Don't have an account?{" "}
            <Link
              to="/select-role"
              className="text-red-600 font-semibold hover:text-red-700"
            >
              Create one
            </Link>
          </p>

        </div>

      </div>

    </div>
  );
}

export default Login;
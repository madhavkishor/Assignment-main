import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const goto = () => {
    navigate("/Register");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // localStorage se user data uthao
    const savedUser = JSON.parse(localStorage.getItem("user"));

    if (!savedUser) {
      setError("No user found, please register first!");
      return;
    }

    // credentials match check karo
    if (savedUser.emailAddress === email && savedUser.password === password) {
      localStorage.setItem("isLoggedIn", "true"); // optional flag
      setError("");
      navigate("/Account"); // profile page pe le jao
    } else {
      setError("Invalid credentials!");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-6 sm:py-8">
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sm:p-6 md:p-8 w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">
        <div className="mb-6 sm:mb-8 text-center">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 mb-1">
            Welcome Back
          </h1>
          <p className="text-sm sm:text-base text-gray-600">
            Login to continue
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 md:space-y-6">
          {/* Email */}
          <div className="relative">
            <div className="absolute -top-2 left-3 bg-white px-1 text-xs sm:text-sm text-purple-600 font-medium">
              Email address
            </div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2.5 sm:py-3 border border-gray-300 rounded-md 
                         focus:outline-none focus:ring-2 focus:ring-purple-500 
                         focus:border-transparent text-gray-700 text-sm sm:text-base"
              required
            />
          </div>

          {/* Password */}
          <div className="relative">
            <div className="absolute -top-2 left-3 bg-white px-1 text-xs sm:text-sm text-purple-600 font-medium">
              Password
            </div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2.5 sm:py-3 border border-gray-300 rounded-md 
                         focus:outline-none focus:ring-2 focus:ring-purple-500 
                         focus:border-transparent text-gray-700 text-sm sm:text-base"
              required
            />
          </div>

          {/* Error */}
          {error && <p className="text-red-500 text-sm sm:text-base mt-1">{error}</p>}

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium 
                       py-2.5 sm:py-3 px-4 rounded-md transition duration-200 
                       focus:outline-none focus:ring-2 focus:ring-purple-500 
                       focus:ring-offset-2 mt-6 sm:mt-8 text-sm sm:text-base"
          >
            Login
          </button>

          {/* Register Link */}
          <div className="text-center mt-4">
            <p className="text-purple-500 text-sm sm:text-base">
              If you don’t have an account, go back to sign in page
            </p>
            <p
              onClick={goto}
              className="inline-block mt-2 text-purple-700 border rounded px-3 py-1 
                         cursor-pointer hover:bg-purple-700 hover:text-white 
                         text-sm sm:text-base"
            >
              Sign up
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

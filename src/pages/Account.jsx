import { useNavigate } from "react-router-dom";
import React from 'react';

const Account = () => {
      const navigate = useNavigate();

  // Mock user data for demo
  const user = {
    fullName: "Marry Doe",
    email: "Marry@Gmail.Com"
  };

  const handleLogout = () => {
    alert("Logged out successfully!");
      navigate("/login");

    
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-start justify-center px-4 py-6 sm:py-8">
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sm:p-6 md:p-8 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
        
        {/* Header */}
        <div className="mb-6 sm:mb-8">
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-700">
            Account Settings
          </h2>
        </div>

        {/* Profile Section */}
        {user ? (
          <div className="mb-6">
            <div className="flex items-center gap-3 sm:gap-4 mb-4">
              <div className="relative">
                <img
                  src="https://i.pravatar.cc/100?img=47"
                  alt="profile"
                  className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover"
                />
                {/* Purple indicator dot */}
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-purple-600 rounded-full border-2 border-white flex items-center justify-center">
                  <span className="text-white text-xs font-bold">✓</span>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 text-sm sm:text-base">
                  {user.fullName}
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm">
                  {user.email}
                </p>
              </div>
            </div>
            
            {/* Description */}
            <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
              Lorem Ipsum Dolor Sit Amet, Consectetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
            </p>
          </div>
        ) : (
          <p className="text-gray-500 mb-6">No user found!</p>
        )}

        {/* Empty space to match the design */}
        <div className="min-h-[200px] sm:min-h-[300px] md:min-h-[400px]"></div>

        {/* Bottom Navigation/Actions */}
        <div className="flex justify-center">
          <button
            onClick={handleLogout}
            className="flex items-center justify-center w-12 h-12 bg-gray-100 hover:bg-gray-200 rounded-full transition duration-200 focus:outline-none focus:ring-2 focus:ring-gray-300"
          >
            <svg
              className="w-5 h-5 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 12h8m0 0l-3-3m3 3l-3 3"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Account;
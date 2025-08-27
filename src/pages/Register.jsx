// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const Register = () => {
//   const navigate = useNavigate();
//   const [form, setForm] = useState({
//     fullName: "",
//     phone: "",
//     email: "",
//     password: "",
//     company: "",
//     agency: "yes",
//   });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     localStorage.setItem("user", JSON.stringify(form));
//     navigate("/account");
//   };

//   return (
//     <div className="w-full h-[750px] max-w-sm mx-auto p-6 bg-white shadow-md rounded-lg">
//       <h2 className="text-xl md:text-2xl font-bold mb-4">
//         Create your PopX account
//       </h2>
//       <form onSubmit={handleSubmit} className="space-y-3">
//         <input
//           type="text"
//           name="fullName"
//           placeholder="Full Name"
//           required
//           onChange={handleChange}
//           className="w-full border p-2 rounded"
//         />
//         <input
//           type="text"
//           name="phone"
//           placeholder="Phone Number"
//           required
//           onChange={handleChange}
//           className="w-full border p-2 rounded"
//         />
//         <input
//           type="email"
//           name="email"
//           placeholder="Email Address"
//           required
//           onChange={handleChange}
//           className="w-full border p-2 rounded"
//         />
//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           required
//           onChange={handleChange}
//           className="w-full border p-2 rounded"
//         />
//         <input
//           type="text"
//           name="company"
//           placeholder="Company Name"
//           onChange={handleChange}
//           className="w-full border p-2 rounded"
//         />

//         <div className="flex gap-4 items-center">
//           <label>Are you an Agency?</label>
//           <label>
//             <input
//               type="radio"
//               name="agency"
//               value="yes"
//               checked={form.agency === "yes"}
//               onChange={handleChange}
//             />{" "}
//             Yes
//           </label>
//           <label>
//             <input
//               type="radio"
//               name="agency"
//               value="no"
//               checked={form.agency === "no"}
//               onChange={handleChange}
//             />{" "}
//             No
//           </label>
//         </div>

//         <button
//           type="submit"
//           className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition"
//         >
//           Create Account
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Register;




// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const Register = () => {
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     fullName: "",
//     phoneNumber: "",
//     emailAddress: "",
//     password: "",
//     companyName: "",
//     isAgency: true,
//   });

//   // input change handler
//   const handleInputChange = (field, value) => {
//     setFormData((prev) => ({
//       ...prev,
//       [field]: value,
//     }));
//   };

//   // submit handler
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form submitted:", formData);

//     // yahan future me backend API call karna ho sakta hai
//     navigate("/account");
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-6 w-screen sm:py-8">
//       <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sm:p-6 md:p-8 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
//         {/* Heading */}
//         <div className="mb-6 sm:mb-8">
//           <h1 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mb-1">
//             Create your
//           </h1>
//           <h1 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900">
//             PopX account
//           </h1>
//         </div>

//         {/* Form */}
//         <form onSubmit={handleSubmit}>
//           <div className="space-y-4 sm:space-y-5 md:space-y-6">
//             {/* Full Name */}
//             <div className="relative">
//               <div className="absolute -top-2 left-3 bg-white px-1 text-xs text-purple-600 font-medium">
//                 Full Name*
//               </div>
//               <input
//                 type="text"
//                 value={formData.fullName}
//                 onChange={(e) => handleInputChange("fullName", e.target.value)}
//                 className="w-full px-3 py-2.5 sm:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-700 text-sm sm:text-base"
//               />
//             </div>

//             {/* Phone Number */}
//             <div className="relative">
//               <div className="absolute -top-2 left-3 bg-white px-1 text-xs text-purple-600 font-medium">
//                 Phone number*
//               </div>
//               <input
//                 type="tel"
//                 value={formData.phoneNumber}
//                 onChange={(e) =>
//                   handleInputChange("phoneNumber", e.target.value)
//                 }
//                 className="w-full px-3 py-2.5 sm:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-700 text-sm sm:text-base"
//               />
//             </div>

//             {/* Email */}
//             <div className="relative">
//               <div className="absolute -top-2 left-3 bg-white px-1 text-xs text-purple-600 font-medium">
//                 Email address*
//               </div>
//               <input
//                 type="email"
//                 value={formData.emailAddress}
//                 onChange={(e) =>
//                   handleInputChange("emailAddress", e.target.value)
//                 }
//                 className="w-full px-3 py-2.5 sm:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-700 text-sm sm:text-base"
//               />
//             </div>

//             {/* Password */}
//             <div className="relative">
//               <div className="absolute -top-2 left-3 bg-white px-1 text-xs text-purple-600 font-medium">
//                 Password*
//               </div>
//               <input
//                 type="password"
//                 value={formData.password}
//                 onChange={(e) =>
//                   handleInputChange("password", e.target.value)
//                 }
//                 className="w-full px-3 py-2.5 sm:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-700 text-sm sm:text-base"
//               />
//             </div>

//             {/* Company Name */}
//             <div className="relative">
//               <div className="absolute -top-2 left-3 bg-white px-1 text-xs text-purple-600 font-medium">
//                 Company name
//               </div>
//               <input
//                 type="text"
//                 value={formData.companyName}
//                 onChange={(e) =>
//                   handleInputChange("companyName", e.target.value)
//                 }
//                 className="w-full px-3 py-2.5 sm:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-700 text-sm sm:text-base"
//               />
//             </div>

//             {/* Agency Question */}
//             <div className="pt-2">
//               <p className="text-xs sm:text-sm text-gray-700 mb-2 sm:mb-3">
//                 Are you an Agency?*
//               </p>
//               <div className="flex space-x-4 sm:space-x-6">
//                 <label className="flex items-center">
//                   <input
//                     type="radio"
//                     name="isAgency"
//                     checked={formData.isAgency === true}
//                     onChange={() => handleInputChange("isAgency", true)}
//                     className="w-4 h-4 text-purple-600 border-gray-300 focus:ring-purple-500"
//                   />
//                   <span className="ml-2 text-xs sm:text-sm text-gray-700">
//                     Yes
//                   </span>
//                 </label>

//                 <label className="flex items-center">
//                   <input
//                     type="radio"
//                     name="isAgency"
//                     checked={formData.isAgency === false}
//                     onChange={() => handleInputChange("isAgency", false)}
//                     className="w-4 h-4 text-purple-600 border-gray-300 focus:ring-purple-500"
//                   />
//                   <span className="ml-2 text-xs sm:text-sm text-gray-700">
//                     No
//                   </span>
//                 </label>
//               </div>
//             </div>

//             {/* Submit */}
//             <button
//               type="submit"
//               className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-2.5 sm:py-3 px-4 rounded-md transition duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 mt-6 sm:mt-8 text-sm sm:text-base"
//             >
//               Create Account
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Register;




// 3

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    emailAddress: "",
    password: "",
    companyName: "",
    isAgency: true,
  });

  // input change handler
  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  // submit handler
  const handleSubmit = (e) => {
    e.preventDefault();

    // Save user data in localStorage
    localStorage.setItem("user", JSON.stringify(formData));

    console.log("User registered:", formData);

    // Navigate to login page after register
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-6 w-screen sm:py-8">
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sm:p-6 md:p-8 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
        {/* Heading */}
        <div className="mb-6 sm:mb-8">
          <h1 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mb-1">
            Create your
          </h1>
          <h1 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900">
            PopX account
          </h1>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <div className="space-y-4 sm:space-y-5 md:space-y-6">
            {/* Full Name */}
            <div className="relative">
              <div className="absolute -top-2 left-3 bg-white px-1 text-xs text-purple-600 font-medium">
                Full Name*
              </div>
              <input
                type="text"
                value={formData.fullName}
                onChange={(e) => handleInputChange("fullName", e.target.value)}
                className="w-full px-3 py-2.5 sm:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-700 text-sm sm:text-base"
                required
              />
            </div>

            {/* Phone Number */}
            <div className="relative">
              <div className="absolute -top-2 left-3 bg-white px-1 text-xs text-purple-600 font-medium">
                Phone number*
              </div>
              <input
                type="tel"
                value={formData.phoneNumber}
                onChange={(e) =>
                  handleInputChange("phoneNumber", e.target.value)
                }
                className="w-full px-3 py-2.5 sm:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-700 text-sm sm:text-base"
                required
              />
            </div>

            {/* Email */}
            <div className="relative">
              <div className="absolute -top-2 left-3 bg-white px-1 text-xs text-purple-600 font-medium">
                Email address*
              </div>
              <input
                type="email"
                value={formData.emailAddress}
                onChange={(e) =>
                  handleInputChange("emailAddress", e.target.value)
                }
                className="w-full px-3 py-2.5 sm:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-700 text-sm sm:text-base"
                required
              />
            </div>

            {/* Password */}
            <div className="relative">
              <div className="absolute -top-2 left-3 bg-white px-1 text-xs text-purple-600 font-medium">
                Password*
              </div>
              <input
                type="password"
                value={formData.password}
                onChange={(e) =>
                  handleInputChange("password", e.target.value)
                }
                className="w-full px-3 py-2.5 sm:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-700 text-sm sm:text-base"
                required
              />
            </div>

            {/* Company Name */}
            <div className="relative">
              <div className="absolute -top-2 left-3 bg-white px-1 text-xs text-purple-600 font-medium">
                Company name
              </div>
              <input
                type="text"
                value={formData.companyName}
                onChange={(e) =>
                  handleInputChange("companyName", e.target.value)
                }
                className="w-full px-3 py-2.5 sm:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-700 text-sm sm:text-base"
              />
            </div>

            {/* Agency Question */}
            <div className="pt-2">
              <p className="text-xs sm:text-sm text-gray-700 mb-2 sm:mb-3">
                Are you an Agency?*
              </p>
              <div className="flex space-x-4 sm:space-x-6">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="isAgency"
                    checked={formData.isAgency === true}
                    onChange={() => handleInputChange("isAgency", true)}
                    className="w-4 h-4 text-purple-600 border-gray-300 focus:ring-purple-500"
                  />
                  <span className="ml-2 text-xs sm:text-sm text-gray-700">
                    Yes
                  </span>
                </label>

                <label className="flex items-center">
                  <input
                    type="radio"
                    name="isAgency"
                    checked={formData.isAgency === false}
                    onChange={() => handleInputChange("isAgency", false)}
                    className="w-4 h-4 text-purple-600 border-gray-300 focus:ring-purple-500"
                  />
                  <span className="ml-2 text-xs sm:text-sm text-gray-700">
                    No
                  </span>
                </label>
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-2.5 sm:py-3 px-4 rounded-md transition duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 mt-6 sm:mt-8 text-sm sm:text-base"
            >
              Create Account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;

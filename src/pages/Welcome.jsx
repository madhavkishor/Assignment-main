import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div className="w-full h-[300px] max-w-sm mx-auto p-6 bg-gray-100 shadow-md rounded-lg">
      <h2 className="text-xl md:text-2xl font-bold mb-2">Welcome to PopX</h2>
      <p className="text-gray-500 text-sm md:text-base mb-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      </p>
      <Link to="/register">
        <button className="w-full bg-purple-600 text-white py-2 rounded mb-5 mt-7 hover:bg-purple-700 transition">
          Create Account
        </button>
      </Link>
      <Link to="/login">
        <button className="w-full bg-purple-200 text-purple-900 py-2 rounded hover:bg-purple-300 transition">
          Already Registered? Login
        </button>
      </Link>
    </div>
  );
};

export default Welcome;

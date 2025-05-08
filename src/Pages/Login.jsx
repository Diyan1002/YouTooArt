import React from "react";
import loginImage from "../assets/banner.png"; // Replace with actual image
import logo from "../assets/logo.png";         // Replace with actual logo
import { useNavigate } from "react-router-dom"; // ✅ Import this

const Login = () => {
  const navigate = useNavigate(); // ✅ Hook for navigation

  const handleCreateAccount = () => {
    // Navigate to the Create Account page with a callback to return to login
    navigate("/create-account", { state: { redirectTo: "/login" } });
  };

  return (
    <div className="flex h-screen bg-white">
      {/* Left Section (Smaller width) */}
      <div className="w-full md:w-[35%] flex items-center justify-center relative">
        {/* Logo - Clickable to go home */}
        <div className="absolute top-6 left-6 cursor-pointer" onClick={() => navigate("/")}>
          <img src={logo} alt="You2Art Logo" className="h-12 object-contain" />
        </div>
        {/* Login Card */}
        <div className="w-[90%] max-w-sm p-6 bg-white">
          <h2 className="text-lg font-semibold mb-4">Login</h2>

          <label className="text-sm mb-1 block font-medium">Contact Number</label>
          <div className="flex items-center rounded-md overflow-hidden mb-4">
            <div className="flex items-center gap-2 mb-4">
              {/* Country Code */}
              <div className="flex items-center bg-gray-100 border rounded-3xl px-3 py-2">
                <img
                  src="https://flagcdn.com/w40/pk.png" // Pakistan flag image URL
                  alt="Pakistan Flag"
                  className="w-5 h-5 mr-2"
                />
                <span className="text-gray-600">+92</span>
              </div>

              {/* Input Field */}
              <div className="flex-1 bg-gray-100 border rounded-3xl">
                <input
                  type="text"
                  placeholder="Enter Contact"
                  className="w-full py-2 px-2 outline-none bg-transparent"
                />
              </div>
            </div>
          </div>
          <button
            onClick={() => navigate("/verify-otp")}
            className="bg-black text-white py-2 rounded-3xl w-full mb-3"
          >
            Send OTP
          </button>

          <p className="text-sm text-black mb-1">
            Don’t have an account yet?{" "}
            <a
              className="text-blue-600 font-medium cursor-pointer"
              onClick={handleCreateAccount}
            >
              Create<br /> Account
            </a>
          </p>
        </div>

        {/* Terms & Conditions */}
        <p className="mt-6 text-xs text-gray-500 leading-relaxed absolute bottom-6 left-12">
          By <span className="font-semibold">Signing in</span>, you agree with the{" "}
          <a href="#" className="text-blue-600 underline">Terms &<br /> Conditions</a> of You2Art.
        </p>
      </div>

      {/* Right Section (Image) */}
      <div className="hidden md:flex w-[80%] items-center justify-center p-6">
        <div className="rounded-3xl overflow-hidden shadow-xl w-full h-full">
          <img
            src={loginImage}
            alt="Login Visual"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
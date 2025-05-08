import React from "react";
import loginImage from "../assets/banner.png"; // Replace with actual image
import logo from "../assets/logo.png";         // Replace with actual logo
import { useNavigate } from "react-router-dom";

const CreateAccount = () => {
  const navigate = useNavigate();

  const handleCreateAccount = () => {
    // Perform account creation logic here
    console.log("Account created!");
    navigate("/login"); // Redirect to login after account creation
  };

  return (
    <div className="flex h-screen bg-white">
      {/* Left Section (Smaller width) */}
      <div className="w-full md:w-[35%] flex items-center justify-center relative">
        {/* Logo - Clickable to go home */}
        <div className="absolute top-6 left-6 cursor-pointer" onClick={() => navigate("/")}>
          <img src={logo} alt="You2Art Logo" className="h-12 object-contain" />
        </div>

        {/* Create Account Card */}
        <div className="w-[90%] max-w-sm p-6 bg-white">
          <h2 className="text-lg font-semibold mb-4">Create Account</h2>

          <label className="text-sm mb-1 block font-medium">Full Name</label>
          <div className="flex items-center bg-gray-100 border rounded-3xl mb-4">
            <input
              type="text"
              placeholder="Enter Full Name"
              className="w-full py-2 px-2 outline-none bg-transparent"
            />
          </div>

          <label className="text-sm mb-1 block font-medium">Email Address</label>
          <div className="flex items-center bg-gray-100 border rounded-3xl mb-4">
            <input
              type="email"
              placeholder="Enter Email Address"
              className="w-full py-2 px-2 outline-none bg-transparent"
            />
          </div>

          <label className="text-sm mb-1 block font-medium">Contact Number</label>
          <div className="flex items-center bg-gray-100 border rounded-3xl mb-4">
            <input
              type="text"
              placeholder="Enter Contact Number"
              className="w-full py-2 px-2 outline-none bg-transparent"
            />
          </div>

          <button
            onClick={handleCreateAccount}
            className="bg-black text-white py-2 rounded-3xl w-full mb-3"
          >
            Create Account
          </button>

          <p className="text-sm text-black mb-1">
            Already have an account?{" "}
            <a
              className="text-blue-600 font-medium cursor-pointer"
              onClick={() => navigate("/login")}
            >
              Login
            </a>
          </p>
        </div>

        {/* Terms & Conditions */}
        <p className="mt-6 text-xs text-gray-500 leading-relaxed absolute bottom-6 left-12">
          By <span className="font-semibold">Creating an account</span>, you agree with the{" "}
          <a href="#" className="text-blue-600 underline">Terms & Conditions</a> of You2Art.
        </p>
      </div>

      {/* Right Section (Image) */}
      <div className="hidden md:flex w-[80%] items-center justify-center p-6">
        <div className="rounded-3xl overflow-hidden shadow-xl w-full h-full">
          <img
            src={loginImage}
            alt="Create Account Visual"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import loginImage from "../assets/banner.png";
import logo from "../assets/logo.png";
import successImage from "../assets/created.png";
import CreateProfileModal from "./CreateProfileModal";

const OtpVerification = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");
  const [accountCreated, setAccountCreated] = useState(false);
  const [showCreateProfile, setShowCreateProfile] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState([]);

  const categories = [
    "Production House",
    "Director",
    "Actor",
    "Singer",
    "Musician",
    "Dancer",
    "Choreographer",
    "Editor",
    "Cinematographer",
    "Still Photographer",
    "Sound Mixing",
    "VFX",
    "Producer",
    "Stunt Director",
    "Art Director",
    "Dubbing Artist",
    "Makeup Artist",
    "Continue Designer",
  ];

  const handleChange = (e) => {
    const value = e.target.value.replace(/\D/g, "").slice(0, 6);
    setOtp(value);
  };

  const handleVerify = () => {
    if (otp.length === 6) {
      setAccountCreated(true);
    }
  };

  const handleCreateProfile = () => {
    setAccountCreated(false);
    setShowCreateProfile(true);
  };

  const handleCategoryToggle = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((c) => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const handleProfileSubmit = () => {
    console.log("Selected categories:", selectedCategories);
    navigate("/home");
  };

  return (
    <div className="flex flex-col md:flex-row h-screen bg-white relative">
      {/* Left Section - Form */}
      <div className="w-full md:w-[35%] flex items-center justify-center relative py-10 md:py-0">
        {/* Logo */}
        <div
          className="absolute top-6 left-6 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img src={logo} alt="You2Art Logo" className="h-10 md:h-12 object-contain" />
        </div>

        <div className="w-[90%] max-w-sm p-4 md:p-6">
          {/* Back Arrow - Mobile */}
          <div
            className="flex items-center text-black cursor-pointer mb-4 md:mb-6"
            onClick={() => navigate(-1)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5 mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <span className="md:hidden">Back</span>
          </div>

          <h2 className="text-xl md:text-2xl font-bold mb-2">Verify Your Account</h2>
          <p className="text-sm md:text-base text-gray-600 mb-6">
            Please enter 6 digits OTP you received on your registered phone{" "}
            <span className="text-blue-600 font-semibold">+92325******41</span>
          </p>

          <label className="text-sm md:text-base mb-1 block font-medium">Enter OTP</label>
          <input
            type="text"
            value={otp}
            onChange={handleChange}
            className="w-full text-center text-lg tracking-widest py-2 md:py-3 bg-gray-100 rounded-3xl mb-6 outline-none"
            maxLength={6}
            inputMode="numeric"
            pattern="[0-9]*"
          />

          <button
            onClick={handleVerify}
            className="w-full bg-black text-white py-2 md:py-3 rounded-3xl font-semibold hover:bg-gray-800 transition-colors"
          >
            Verify
          </button>
        </div>

        {/* Terms - Mobile */}
        <p className="mt-6 text-xs text-gray-500 leading-relaxed absolute bottom-4 left-6 right-6 text-center md:hidden">
          By <span className="font-semibold">Signing in</span>, you agree with the{" "}
          <a href="#" className="text-blue-600 underline">
            Terms & Conditions
          </a>{" "}
          of You2Art.
        </p>
      </div>

      {/* Right Section - Image (Desktop only) */}
      <div className="hidden md:flex w-[65%] items-center justify-center p-6 bg-gray-50">
        <div className="rounded-3xl overflow-hidden shadow-xl w-full h-full max-h-[90vh]">
          <img
            src={loginImage}
            alt="Login Visual"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Terms - Desktop */}
      <p className="hidden md:block mt-6 text-xs text-gray-500 leading-relaxed absolute bottom-6 left-12">
        By <span className="font-semibold">Signing in</span>, you agree with the{" "}
        <a href="#" className="text-blue-600 underline">
          Terms & Conditions
        </a>{" "}
        of You2Art.
      </p>

      {/* Account Created Modal */}
      {accountCreated && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-6 w-full max-w-md md:w-[40%] md:h-auto text-center relative shadow-lg">
            <button
              onClick={() => setAccountCreated(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
            <img
              src={successImage}
              alt="Success"
              className="mx-auto mb-4 w-24 h-24 md:w-32 md:h-32"
            />
            <h2 className="text-xl md:text-2xl font-semibold mb-2">Account Created</h2>
            <p className="text-sm md:text-base text-gray-600 mb-6">
              Your account was created, you can now start exploring Talent and
              post Casting Calls.
            </p>
            <div className="flex flex-col md:flex-row justify-between gap-2">
              <button
                onClick={() => navigate("/home")}
                className="flex-1 bg-gray-200 text-black py-2 rounded-full hover:bg-gray-300 transition-colors"
              >
                Skip For Now
              </button>
              <button
                onClick={handleCreateProfile}
                className="flex-1 bg-black text-white py-2 rounded-full hover:bg-gray-800 transition-colors"
              >
                Create Profile
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Create Profile Modal */}
      {showCreateProfile && (
        <CreateProfileModal
          categories={categories}
          selectedCategories={selectedCategories}
          handleCategoryToggle={handleCategoryToggle}
          handleProfileSubmit={handleProfileSubmit}
          onClose={() => setShowCreateProfile(false)}
        />
      )}
    </div>
  );
};

export default OtpVerification;
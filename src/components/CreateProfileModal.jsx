import React, { useState } from "react";
import successImage from "../assets/created.png";
import { useNavigate } from "react-router-dom";

const CreateProfileModal = ({
  categories,
  selectedCategories,
  handleCategoryToggle,
  onClose,
}) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    country: "",
    city: "",
    bio: "",
    profileImage: null,
  });
  const [isProfileComplete, setIsProfileComplete] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleNextStep = () => {
    setStep(2);
  };

  const handleSubmit = () => {
    console.log("Profile submitted:", {
      categories: selectedCategories,
      ...formData
    });
    setIsProfileComplete(true);
  };

  const handleProceedToHome = () => {
    navigate("/");
  };

  if (isProfileComplete) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white text-center relative rounded-2xl w-full max-w-xs md:max-w-sm md:w-[40%] h-auto">
          <div className="p-6 md:p-8 flex flex-col items-center">
            <div className="flex items-center justify-center h-20 w-20 md:h-24 md:w-24 rounded-full bg-green-100 mb-4 md:mb-6">
              <img
                src={successImage}
                alt="Success"
                className="w-16 h-16 md:w-20 md:w-20"
              />
            </div>
            <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Profile Completed!</h2>
            <p className="text-gray-600 mb-6 md:mb-8 text-center text-sm md:text-base">
              Congrats! You just completed your profile.
            </p>
            <button
              onClick={handleProceedToHome}
              className="w-full bg-black text-white py-2 md:py-3 rounded-full font-medium"
            >
              Proceed to Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-2 md:p-4">
      <div className="bg-white rounded-2xl w-full max-w-xs md:max-w-lg mx-auto">
        <div className="p-4 md:p-6">
          {/* HEADER */}
          <div className="flex flex-col mb-3 md:mb-4">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-lg md:text-xl font-bold">Complete Profile</h2>
                <p className="text-xs md:text-sm text-sky-400">
                  Step {step} of 2
                </p>
              </div>
              <button
                onClick={onClose}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            <div className="w-full h-px bg-gray-300 mt-2"></div>
          </div>

          {/* STEP 1: Category Selection */}
          {step === 1 && (
            <>
              <h3 className="text-sm md:text-base font-semibold mb-2 md:mb-3">Choose Category</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 max-h-[50vh] md:max-h-[60vh] overflow-y-auto pr-1 md:pr-2">
                {categories.map((category) => {
                  const isSelected = selectedCategories.includes(category);
                  return (
                    <div
                      key={category}
                      onClick={() => handleCategoryToggle(category)}
                      className={`flex items-center py-2 px-3 rounded-lg cursor-pointer ${
                        isSelected
                          ? "bg-sky-100 border border-sky-500"
                          : "hover:bg-gray-50"
                      }`}
                    >
                      <div
                        className={`w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-3 flex items-center justify-center rounded-full border ${
                          isSelected
                            ? "bg-sky-500 border-sky-500"
                            : "border-gray-300"
                        }`}
                      >
                        {isSelected && (
                          <div className="w-2 h-2 md:w-2.5 md:h-2.5 bg-white rounded-full"></div>
                        )}
                      </div>
                      <label className="text-xs md:text-sm flex-grow cursor-pointer">
                        {category}
                      </label>
                    </div>
                  );
                })}
              </div>

              {/* Buttons */}
              <div className="flex flex-col md:flex-row justify-end gap-2 mt-3 md:mt-4">
                <button
                  onClick={onClose}
                  className="px-3 py-2 md:px-4 md:py-3 border bg-gray-200 border-gray-300 text-black rounded-full text-xs font-medium"
                >
                  Skip For Now
                </button>
                <button
                  onClick={handleNextStep}
                  disabled={selectedCategories.length === 0}
                  className={`px-3 py-2 md:px-4 md:py-3 rounded-full text-xs font-medium ${
                    selectedCategories.length === 0
                      ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                      : "bg-black text-white"
                  }`}
                >
                  Save and Next
                </button>
              </div>
            </>
          )}

          {/* STEP 2: Complete Profile */}
          {step === 2 && (
            <form className="space-y-3 md:space-y-4" onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}>
              {/* Upload */}
              <div className="flex flex-col bg-sky-100 items-center border rounded-xl py-4 md:py-6">
                <label className="text-black cursor-pointer text-xs md:text-sm">
                  <input
                    type="file"
                    accept="image/*"
                    name="profileImage"
                    onChange={handleInputChange}
                    className="hidden"
                  />
                  Drag and Drop or <span className="text-blue-500 underline">Browse</span> an image
                </label>
                <p className="text-xs text-gray-400">File Size Limit: 4 Mb</p>
              </div>

              {/* Input Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name *"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="border rounded-md bg-gray-200 px-3 py-2 text-xs md:text-sm"
                  required
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name *"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="border bg-gray-200 rounded-md px-3 py-2 text-xs md:text-sm"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  className="border bg-gray-200 rounded-md px-3 py-2 text-xs md:text-sm"
                  required
                >
                  <option value="">Choose Country *</option>
                  <option value="USA">USA</option>
                  <option value="Canada">Canada</option>
                </select>

                <select
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  className="border bg-gray-200 rounded-md px-3 py-2 text-xs md:text-sm"
                  required
                >
                  <option value="">Choose City *</option>
                  <option value="New York">New York</option>
                  <option value="Toronto">Toronto</option>
                </select>
              </div>

              <textarea
                name="bio"
                placeholder="Short Bio *"
                value={formData.bio}
                onChange={handleInputChange}
                className="border bg-gray-200 rounded-md px-3 py-2 text-xs md:text-sm w-full"
                rows="3"
                required
              />

              {/* Buttons */}
              <div className="flex flex-col-reverse md:flex-row justify-between gap-2">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="px-3 py-2 md:px-4 md:py-3 border border-gray-300 text-black rounded-full text-xs font-medium"
                >
                  Back
                </button>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-3 py-2 md:px-4 md:py-3 border border-gray-300 text-black rounded-full text-xs font-medium"
                  >
                    Skip For Now
                  </button>
                  <button
                    type="submit"
                    className="px-3 py-2 md:px-4 md:py-3 bg-black text-white rounded-full text-xs font-medium"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default CreateProfileModal;
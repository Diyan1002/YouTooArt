import React, { useState } from "react";
import { Bell } from "lucide-react";
import searchImg from "../assets/search.png";

const Terms = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="flex-1 bg-white h-screen flex flex-col">
  {/* Header */}
  <div className="flex justify-between items-center p-3 mx-2 rounded-sm border-b shadow-sm bg-white">
    <div className="text-xl font-medium" style={{ fontFamily: "Inter, sans-serif" }}>
      Terms & Conditions
    </div>
    <div className="flex items-center gap-4 px-2">
      <div className="relative">
        <input
          type="text"
          placeholder="Search"
          className="p-2 rounded-2xl w-full md:w-50 text-sm pl-10 border bg-gray-100 focus:bg-white focus:outline-none"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <img
          src={searchImg}
          alt="Search"
          className="absolute left-3 top-3 w-4 h-4 brightness-0 opacity-50"
        />
      </div>
      <div className="border border-gray-300 p-2 rounded-full">
        <Bell className="text-black text-lg w-4 h-4 cursor-pointer" />
      </div>
    </div>
  </div>

  {/* Terms & Conditions */}
  <div className="flex-1 p-6 space-y-6 max-w-4xl mx-auto text-sm md:text-base overflow-auto hide-scrollbar">
    <h1 className="text-2xl font-bold">Terms & Conditions</h1>
    <p className="text-gray-600">Effective Date: 25 Nov, 2022</p>

    <section>
      <h2 className="text-lg font-semibold">1. Introduction</h2>
      <p className="text-gray-600">
        Welcome to the You2Art App ("App", "We", "Us", or "Our"). This Privacy Policy outlines how we collect, use, disclose,
        and protect your personal information when you use the App. By using the App, you agree to the terms and practices described in this Privacy Policy.
      </p>
    </section>

    <section>
      <h2 className="text-lg font-semibold">2. Information We Collect</h2>
      <p className="text-gray-600">2.1 Personal Information: When you create an account, we may collect personal information such as your name, email address, profile picture, and location.</p>
      <p className="text-gray-600">2.2 User Content: The App allows you to post and share User Content. This content may contain personal information that you choose to share with others.</p>
      <p className="text-gray-600">2.3 Usage Data: We collect information about your interactions with the App, including log data, device information, and usage patterns.</p>
    </section>

    <section>
      <h2 className="text-lg font-semibold">3. How We Use Your Information</h2>
      <p className="text-gray-600">3.1 Providing Services: We use your information to provide and improve the services offered by the App, including personalized content and recommendations.</p>
      <p className="text-gray-600">3.2 Communication: We may use your email address to send you notifications, updates, and marketing materials related to the App. You can opt out of these communications at any time.</p>
      <p className="text-gray-600">3.3 Analytics: We analyze user interactions to improve the App’s functionality, user experience, and performance.</p>
    </section>

    <section>
      <h2 className="text-lg font-semibold">4. Sharing and Disclosure</h2>
      <p className="text-gray-600">4.1 User Content: Your User Content may be visible to other users of the App according to your privacy settings.</p>
      <p className="text-gray-600">4.2 Service Providers: We may share your information with third-party service providers who assist in operating the App or providing related services.</p>
      <p className="text-gray-600">4.3 Legal Compliance: We may disclose your information if required by law, regulation, legal process, or governmental request.</p>
    </section>
  </div>
</div>
  );
};

export default Terms;

import React, { useState } from "react";
import { Bell, ChevronDown, ChevronUp } from "lucide-react";
import searchImg from "../assets/search.png";

const faqs = [
  { question: "What is the You2Art?", answer: "You2Art is a platform where artists and users connect through creative content like videos, images, and more." },
  { question: "How do I create an account on the You2Art?", answer: "You can sign up using your email or social media accounts through the app's onboarding process." },
  { question: "What types of content can I share on the app?", answer: "You can share videos, photos, audio clips, and written content related to art and creativity." },
  { question: "How can I interact with other users?", answer: "You can like, comment, follow, and send messages to other users." },
  {
    question: "Is my personal information safe on the app?",
    answer:
      "We take your privacy seriously. Your personal information is protected through security measures and data encryption. You can control your privacy settings to determine who can view your content and interact with you.",
  },
  { question: "How can I discover actors and directors?", answer: "Use the search and discovery features to find actors, directors, and other talents." },
  { question: "Can I customize my feed to see specific types of art?", answer: "Yes, you can use filters and preferences to personalize your feed." },
  { question: "How can I provide feedback or report inappropriate content?", answer: "Use the in-app feedback tools or report options on content to let us know your concerns." },
];

const Support = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex-1 bg-white h-screen flex flex-col overflow-auto">
      {/* Header */}
      <div className="flex justify-between items-center p-3 mx-2 rounded-sm border-b shadow-sm bg-white">
        <div className="text-xl font-medium" style={{ fontFamily: "Inter, sans-serif" }}>
          Support & FAQ
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

      {/* FAQ Section */}
      <div className="p-4">
        <h2 className="text-md font-semibold text-gray-400 mb-4">Frequently Asked Questions</h2>
        <div className="bg-white rounded-md border divide-y">
          {faqs.map((faq, index) => (
            <div key={index}>
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-4 focus:outline-none"
              >
                <span style={{ fontFamily: "Inter, sans-serif", fontWeight: 500 }} className="text-base text-left text-black font-medium">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-4 h-4 text-gray-500" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-gray-500" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-4 pb-4 text-sm text-gray-600">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Support;

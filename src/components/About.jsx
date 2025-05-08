import React, { useState } from "react";
import { Bell } from "lucide-react";
import searchImg from "../assets/search.png";

const About = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
<div className="flex-1 bg-white h-screen flex flex-col">
{/* Header */}
      <div className="flex justify-between items-center p-3 mx-2 rounded-sm border-b shadow-sm bg-white">
        <div className="text-xl font-medium" style={{ fontFamily: "Inter, sans-serif" }}>
          About us
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

      {/* About Us Content */}
      <div className="p-6 space-y-6 max-w-4xl mx-auto flex-1 overflow-auto hide-scrollbar">
      <h1 className="text-2xl font-bold">About Us</h1>

        <section>
          <h2 className="text-lg font-medium">Our Vision</h2>
          <p className="text-gray-500">
            At You2Art, we believe that art has the power to inspire, provoke thought, and foster connections that transcend boundaries. Our vision is to create an inclusive community where artists of all backgrounds and disciplines can showcase their creations, receive recognition, and find inspiration in the work of others.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-medium">Who We Are</h2>
          <p className="text-gray-500">
            We are a team of artists, technologists, and dreamers who are passionate about nurturing a thriving artistic ecosystem. Our diverse backgrounds allow us to blend creativity with innovation, ensuring that the You2Art app is a place where imagination knows no limits.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-medium">What We Offer</h2>
          <p className="text-gray-500">
            Through the You2Art app, you can explore a diverse spectrum of art forms – from mesmerizing paintings and captivating photographs to exhilarating performances and soul-stirring poetry. Connect with like-minded individuals who share your passion, engage in conversations that spark creativity, and discover hidden gems from emerging talents.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-medium">Empowerment Through Connection</h2>
          <p className="text-gray-500">
            We believe that art thrives in an environment of collaboration and shared experiences. With You2Art, you can connect with fellow artists, exchange ideas, and support each other’s artistic journeys. Whether you’re a seasoned creator or someone just dipping their toes into the world of art, you’ll find a welcoming community that embraces uniqueness and celebrates expression.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-medium">Your Art, Your Story</h2>
          <p className="text-gray-500">
            Every artist has a story to tell, and we’re here to help you share it with the world. Use the You2Art app to tell your story through your art, connect with an appreciative audience, and embark on a journey of self-discovery and growth.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-medium">Join Us</h2>
          <p className="text-gray-500">
            We invite you to become a part of the You2Art community. Whether you’re here to share your creations, engage in conversations, or simply immerse yourself in the diverse world of art, we’re excited to have you on board. Together, let’s ignite creativity, foster connections, and make the world a more colorful place through the magic of art.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-medium">Contact Us</h2>
        </section>
      </div>
    </div>
  );
};

export default About;

// components/ServiceCard.js
import React from "react";

const ServiceCard = ({ image, title, description }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden group">
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-gray-800 group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-600">{description}</p>
        <div className="mt-4 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
          <span className="text-primary font-semibold inline-flex items-center">
            <a href="/services">Learn More</a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;

import React, { useEffect, useRef, useState } from "react";

// boiler team image
import BoilerTeam from "../img/Boiler-Team-inaction.jpg";

const About = () => {
  const [isVisible, setIsVisible] = useState({});
  const sectionRefs = useRef([]);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observers = sectionRefs.current.map((ref, index) => {
      if (!ref) return null;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsVisible((prev) => ({ ...prev, [index]: true }));
            }
          });
        },
        { threshold: 0.1 },
      );

      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, []);

  const values = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-primary"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          />
        </svg>
      ),
      title: "Mission",
      description:
        "To provide reliable, efficient, and safe boiler solutions that power Kenyan industries towards sustainable growth.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-primary"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
          <path
            fillRule="evenodd"
            d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
            clipRule="evenodd"
          />
        </svg>
      ),
      title: "Vision",
      description:
        "To be the leading boiler solutions provider in East Africa, recognized for excellence and innovation.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-primary"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
        </svg>
      ),
      title: "Our Team",
      description:
        "Skilled technicians and experienced engineers with hands-on industry experience, delivering practical, high-quality engineering solutions.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-primary"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
            clipRule="evenodd"
          />
        </svg>
      ),
      title: "Our Reach",
      description:
        "Serving industries across Kenya including manufacturing, food & beverage, pharmaceuticals, engineering, and processing plants.",
    },
  ];

  const servicesList = [
    {
      title: "Boiler Installation, Operation & Maintenance",
      description:
        "Complete boiler system solutions including installation, daily operation, preventive maintenance, and overhauling. Ensuring high efficiency, reduced fuel consumption, and minimal downtime.",
      icon: (
        <svg
          className="h-8 w-8 text-primary"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
          />
        </svg>
      ),
    },
    {
      title: "Steam, Air & Water Pipeline Systems",
      description:
        "Design, fabrication, and installation of pipeline systems for steam, air, thermic fluids, and water. Built to meet industrial standards ensuring safe, efficient flow across operations.",
      icon: (
        <svg
          className="h-8 w-8 text-primary"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
    },
    {
      title: "Industrial Chimney Design & Installation",
      description:
        "Custom-designed industrial chimneys for boilers, furnaces, and generators, including fabrication, supply, and installation services.",
      icon: (
        <svg
          className="h-8 w-8 text-primary"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
      ),
    },
    {
      title: "Water Treatment Systems (WTP & ETP)",
      description:
        "Design and implementation of water treatment solutions including RO plants, softeners, DM plants, and wastewater treatment systems to ensure compliance and efficiency.",
      icon: (
        <svg
          className="h-8 w-8 text-primary"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
          />
        </svg>
      ),
    },
    {
      title: "Facility Management Services",
      description:
        "Complete operation and maintenance services for utility equipment, helping businesses maintain performance, reduce risks, and focus on core production activities.",
      icon: (
        <svg
          className="h-8 w-8 text-primary"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          />
        </svg>
      ),
    },
    {
      title: "Engineering Expertise & Supply",
      description:
        "Technical consulting, system design, and supply of engineering components tailored to specific operational needs.",
      icon: (
        <svg
          className="h-8 w-8 text-primary"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
    },
  ];

  const highlights = [
    {
      number: "50+",
      label: "Industrial Boiler Overhauls",
      description: "Completed annually",
    },
    {
      number: "5+",
      label: "Years Experience",
      description: "In industrial energy solutions",
    },
    {
      number: "24/7",
      label: "Emergency Support",
      description: "Available for critical needs",
    },
    {
      number: "100%",
      label: "Client Satisfaction",
      description: "Committed to excellence",
    },
  ];

  const approachSteps = [
    {
      step: "1",
      title: "Identify & Analyze",
      description: "System challenges and operational needs",
    },
    {
      step: "2",
      title: "Design Solutions",
      description: "Practical and cost-effective approaches",
    },
    {
      step: "3",
      title: "Implement",
      description: "With precision and efficiency",
    },
    {
      step: "4",
      title: "Maintain & Support",
      description: "For long-term performance",
    },
  ];

  return (
    <div className="pt-20 overflow-hidden">
      {/* Hero Section */}
      <section
        ref={(el) => (sectionRefs.current[0] = el)}
        className={`bg-gradient-to-r from-primary to-blue-800 text-white py-20 transition-all duration-1000 transform ${
          isVisible[0]
            ? "translate-y-0 opacity-100"
            : "translate-y-10 opacity-0"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Geared Energy Solutions Ltd
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-2">
              Powering Industrial Efficiency. Reducing Downtime.
            </p>
            <p className="text-lg text-blue-200">
              Delivering Reliable Energy Solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section
        ref={(el) => (sectionRefs.current[1] = el)}
        className={`py-16 transition-all duration-1000 transform ${
          isVisible[1]
            ? "translate-y-0 opacity-100"
            : "translate-y-10 opacity-0"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Company Overview</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  <strong className="text-primary">
                    Geared Energy Solutions Ltd
                  </strong>{" "}
                  is a Kenyan-based engineering company specializing in boiler
                  systems, utility services, and industrial energy solutions. We
                  work with factories, manufacturing plants, and industrial
                  businesses to ensure their operations run efficiently,
                  reliably, and without costly interruptions.
                </p>
                <p>
                  In industries where downtime leads to financial loss and
                  operational setbacks, we position ourselves as a dependable
                  technical partner focused on performance, efficiency, and
                  long-term reliability.
                </p>
                <p>
                  Our role goes beyond providing services. We help businesses
                  reduce energy costs, improve system efficiency, and maintain
                  consistent production by delivering practical, high-quality
                  engineering solutions.
                </p>
                <p>
                  With a combination of skilled technicians, experienced
                  engineers, and a strong commitment to quality, Geared Energy
                  Solutions Ltd continues to support industries across sectors
                  including manufacturing, food and beverage, pharmaceuticals,
                  engineering, and processing plants.
                </p>
                <p className="font-semibold text-primary">
                  We are driven by one goal: to ensure every system we handle
                  performs at its highest level while minimizing risk, downtime,
                  and inefficiencies.
                </p>
              </div>
            </div>
            <div className="relative group">
              <div className="bg-gray-300 h-[500px] rounded-xl shadow-xl overflow-hidden">
                <img
                  src={BoilerTeam}
                  alt="Geared Energy Team in Action"
                  className="h-full w-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values Section */}
      <section
        ref={(el) => (sectionRefs.current[2] = el)}
        className={`py-16 bg-gray-50 transition-all duration-1000 transform ${
          isVisible[2]
            ? "translate-y-0 opacity-100"
            : "translate-y-10 opacity-0"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Purpose</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Guided by a clear vision and commitment to excellence
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        ref={(el) => (sectionRefs.current[3] = el)}
        className={`py-16 transition-all duration-1000 transform ${
          isVisible[3]
            ? "translate-y-0 opacity-100"
            : "translate-y-10 opacity-0"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive industrial engineering and energy solutions designed
              to support critical operations and improve system performance.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesList.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300 hover:scale-105 group"
              >
                <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience, Results & Impact */}
      <section
        ref={(el) => (sectionRefs.current[4] = el)}
        className={`py-16 bg-gradient-to-r from-primary to-blue-800 text-white transition-all duration-1000 transform ${
          isVisible[4]
            ? "translate-y-0 opacity-100"
            : "translate-y-10 opacity-0"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Experience, Results & Impact
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Geared Energy Solutions Ltd has built a strong track record in
              delivering reliable engineering solutions across multiple
              industries.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {highlights.map((highlight, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  {highlight.number}
                </div>
                <div className="font-semibold mb-1">{highlight.label}</div>
                <div className="text-sm text-blue-200">
                  {highlight.description}
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-4">Our Impact</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-green-400 mr-2 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Reduced equipment failure and downtime</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-green-400 mr-2 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Improved energy efficiency and cost savings</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-green-400 mr-2 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Increased operational reliability</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-green-400 mr-2 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Better maintenance planning and system longevity</span>
                </li>
              </ul>
            </div>
            <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-4">Industry Experience</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Manufacturing",
                  "Food & Beverage",
                  "Pharmaceuticals",
                  "Engineering",
                  "Processing Plants",
                  "Steel Industry",
                ].map((industry, idx) => (
                  <span
                    key={idx}
                    className="bg-white/20 px-3 py-1 rounded-full text-sm"
                  >
                    {industry}
                  </span>
                ))}
              </div>
              <p className="mt-4 text-sm text-blue-100">
                Proven ability to improve system efficiency and reduce downtime
                across diverse industrial sectors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section
        ref={(el) => (sectionRefs.current[5] = el)}
        className={`py-16 transition-all duration-1000 transform ${
          isVisible[5]
            ? "translate-y-0 opacity-100"
            : "translate-y-10 opacity-0"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Why Choose Geared Energy Solutions Ltd
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choosing the right engineering partner is critical for any
              industrial operation. We focus on delivering consistent value
              through expertise, reliability, and results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Technical Expertise",
                description:
                  "Skilled engineers and technicians with hands-on experience in industrial systems and utility equipment.",
              },
              {
                title: "Reliable Service Delivery",
                description:
                  "Committed to timely execution, meeting deadlines, and maintaining high service standards.",
              },
              {
                title: "Client-Focused Approach",
                description:
                  "Customized solutions to meet unique operational needs, both current and future.",
              },
              {
                title: "Efficiency-Driven Solutions",
                description:
                  "Improve system performance, reduce waste, and optimize energy usage.",
              },
              {
                title: "Long-Term Partnership",
                description:
                  "Building relationships based on trust, reliability, and consistent performance.",
              },
              {
                title: "Proactive Maintenance",
                description:
                  "Preventing issues before they affect operations, not just fixing problems.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all"
              >
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    className="h-6 w-6 text-primary"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section
        ref={(el) => (sectionRefs.current[6] = el)}
        className={`py-16 bg-gray-50 transition-all duration-1000 transform ${
          isVisible[6]
            ? "translate-y-0 opacity-100"
            : "translate-y-10 opacity-0"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Approach</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A structured and practical approach to every project ensuring
              measurable results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {approachSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-xl shadow-lg p-6 text-center h-full">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
                {index < approachSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <svg
                      className="h-6 w-6 text-primary"
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
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-700">
              This ensures that every solution we provide delivers{" "}
              <strong>real, measurable results</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Expertise Stats */}
      <section
        ref={(el) => (sectionRefs.current[7] = el)}
        className={`py-16 transition-all duration-1000 transform ${
          isVisible[7]
            ? "translate-y-0 opacity-100"
            : "translate-y-10 opacity-0"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gradient-to-br from-primary/5 to-blue-50 rounded-xl">
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-lg font-semibold mb-2">
                Industrial Boiler Overhauls
              </div>
              <p className="text-gray-600 text-sm">Completed annually</p>
            </div>
            <div className="text-center p-8 bg-gradient-to-br from-primary/5 to-blue-50 rounded-xl">
              <div className="text-4xl font-bold text-primary mb-2">5+</div>
              <div className="text-lg font-semibold mb-2">Years Experience</div>
              <p className="text-gray-600 text-sm">
                In industrial energy solutions
              </p>
            </div>
            <div className="text-center p-8 bg-gradient-to-br from-primary/5 to-blue-50 rounded-xl">
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-lg font-semibold mb-2">
                Emergency Support
              </div>
              <p className="text-gray-600 text-sm">
                Available for critical needs
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-primary text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Improve Your Operations?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            If your business is looking to improve system efficiency, reduce
            downtime, or optimize energy usage, Geared Energy Solutions Ltd is
            ready to support you.
          </p>
          <div className="bg-white/10 rounded-xl p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">📍 Location</h3>
                <p>Industrial Area, Nairobi</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">📞 Phone</h3>
                <p>0729 319 247 / 0737 139 976</p>
              </div>
              <div className="md:col-span-2">
                <h3 className="text-lg font-semibold mb-2">✉️ Email</h3>
                <p>info@gearedenergy.co.ke</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:info@gearedenergy.co.ke"
              className="bg-white text-primary hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-all duration-300 hover:scale-105 transform"
            >
              Request Site Assessment
            </a>
            <a
              href="tel:+254729319247"
              className="bg-secondary hover:bg-red-700 font-semibold py-3 px-8 rounded-lg transition-all duration-300 hover:scale-105 transform"
            >
              Call for Consultation
            </a>
          </div>
          <p className="mt-6 text-sm text-blue-200">
            Your Trusted Partner in Industrial Energy & Utility Solutions.
          </p>
        </div>
      </section>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 1s ease-out forwards;
          opacity: 0;
        }

        .delay-200 {
          animation-delay: 200ms;
        }

        .delay-400 {
          animation-delay: 400ms;
        }
      `}</style>
    </div>
  );
};

export default About;

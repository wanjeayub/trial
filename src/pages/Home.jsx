import React, { useState, useEffect, useRef } from "react";
import ServiceCard from "../components/ServiceCard";

// image imports
import boilerImage1 from "../img/12208.jpg";
import boilerImage2 from "../img/refactory-cement.jpg";
import boilerImage3 from "../img/insulation-mat.jpg";
import boilerImage4 from "../img/12214.jpg";
import boilerImage5 from "../img/11466.jpg";
import boilerImage6 from "../img/11503.jpg";

// Import service images - replace with your actual service images
import boilerInstallationImg from "../img/boiler-installation.jpeg";
import maintenanceImg from "../img/boiler-maintenance.jpeg";
import sparePartsImg from "../img/boiler-spares.jpg";
import emergencyRepairsImg from "../img/refactory-cement.jpg";

// Import client logos
import cherryLogo from "../img/cherry-logo.png";
import timberStudiosLogo from "../img/timber-logo.jpeg";
import beulaTimberLogo from "../img/beulah_logo.jpg";
import mokoMattressesLogo from "../img/moko_logo.jpeg";

// import our partner logos
import dehuLogo from "../img/dehu_logo.jpg";

const Home = () => {
  const services = [
    {
      image: boilerInstallationImg,
      title: "Boiler Installation",
      description:
        "Professional installation of industrial and commercial boilers with certified expertise.",
    },
    {
      image: maintenanceImg,
      title: "Maintenance & Servicing",
      description:
        "Regular maintenance and servicing to ensure optimal performance and longevity.",
    },
    {
      image: sparePartsImg,
      title: "Spare Parts Supply",
      description:
        "Genuine boiler spare parts from leading manufacturers with warranty.",
    },
    {
      image: emergencyRepairsImg,
      title: "Emergency Repairs",
      description:
        "24/7 emergency repair services for unexpected breakdowns and failures.",
    },
  ];

  const features = [
    "Certified boiler technicians",
    "Genuine OEM parts",
    "24/7 emergency service",
    "Free consultation",
    "Maintenance contracts",
    "Energy efficiency audits",
  ];

  const clients = [
    {
      id: 1,
      name: "Cherry Interior Ltd.",
      logo: cherryLogo,
      alt: "Cherry Interior Ltd. Logo",
    },
    {
      id: 2,
      name: "Timber Studios Ltd.",
      logo: timberStudiosLogo,
      alt: "Timber Studios Ltd. Logo",
    },
    {
      id: 4,
      name: "Beula Timber Ltd.",
      logo: beulaTimberLogo,
      alt: "Beula Timber Ltd. Logo",
    },
    {
      id: 5,
      name: "Moko Mattresses Ltd.",
      logo: mokoMattressesLogo,
      alt: "Moko Mattresses Ltd. Logo",
    },
  ];

  const partners = [
    {
      id: 1,
      name: "Dehu Limited.",
      logo: dehuLogo,
      alt: "Dehu Limited. Logo",
    },
  ];

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
        { threshold: 0.2 },
      );

      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, []);

  return (
    <div>
      {/* Hero Section with Background Image */}
      <section
        ref={(el) => (sectionRefs.current[0] = el)}
        className="relative h-screen flex items-center justify-center text-white"
        style={{
          backgroundImage: `url(${boilerImage6})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fadeInUp">
            Professional Boiler Solutions in Kenya
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-fadeInUp delay-200">
            Your trusted partner for boiler installation, maintenance, and
            genuine spare parts supply.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeInUp delay-400">
            <a
              href="tel:+254729319247"
              className="bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 hover:scale-105 transform"
            >
              Call Now: +254 729 319247
            </a>
            <a
              href="mailto:gearedenergy@gmail.com"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-primary font-semibold py-3 px-8 rounded-lg transition-all duration-300 hover:scale-105 transform"
            >
              Email Us
            </a>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto mt-12 pt-8 border-t border-white/20">
            <div>
              <div className="text-2xl md:text-3xl font-bold">50+</div>
              <div className="text-sm">Happy Clients</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold">5+</div>
              <div className="text-sm">Years Experience</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold">24/7</div>
              <div className="text-sm">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        ref={(el) => (sectionRefs.current[1] = el)}
        className={`py-16 bg-gray-50 transition-all duration-1000 transform ${
          isVisible[1]
            ? "translate-y-0 opacity-100"
            : "translate-y-10 opacity-0"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive boiler solutions tailored to your needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index}>
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section
        ref={(el) => (sectionRefs.current[2] = el)}
        className={`py-16 transition-all duration-1000 transform ${
          isVisible[2]
            ? "translate-y-0 opacity-100"
            : "translate-y-10 opacity-0"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Us?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We deliver quality, reliability, and expertise you can trust
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center p-4 bg-gray-50 rounded-lg"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-green-500 mr-3 h-5 w-5 flex-shrink-0"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-primary to-blue-700 rounded-lg p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">
                Need Immediate Assistance?
              </h3>
              <p className="mb-4">
                Our team is available 24/7 to handle your boiler emergencies.
              </p>
              <a
                href="tel:+254729319247"
                className="inline-block bg-white text-primary px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Call Emergency: +254 729 319247
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section
        ref={(el) => (sectionRefs.current[3] = el)}
        className={`py-16 bg-gray-50 transition-all duration-1000 transform ${
          isVisible[3]
            ? "translate-y-0 opacity-100"
            : "translate-y-10 opacity-0"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Clients</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Trusted by leading companies across Kenya
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {clients.map((client) => (
              <div
                key={client.id}
                className="bg-white rounded-lg shadow-md p-6 flex items-center justify-center hover:shadow-lg transition-shadow"
              >
                <img
                  src={client.logo}
                  alt={client.alt}
                  className="max-h-16 object-contain"
                />
              </div>
            ))}
          </div>

          {/* Testimonial */}
          <div className="mt-12 bg-white rounded-lg p-8 max-w-3xl mx-auto shadow-lg">
            <div className="text-primary mb-4 flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
            <p className="text-lg italic text-gray-700 text-center mb-4">
              "Geared Energy provided exceptional boiler installation services
              for our manufacturing facility. Their expertise and
              professionalism exceeded our expectations."
            </p>
            <p className="font-semibold text-center text-gray-800">
              — Operations Manager, Moko Mattresses Ltd.
            </p>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section
        ref={(el) => (sectionRefs.current[3] = el)}
        className={`py-16 bg-gray-50 transition-all duration-1000 transform ${
          isVisible[3]
            ? "translate-y-0 opacity-100"
            : "translate-y-10 opacity-0"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Partners
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {partners.map((partner) => (
              <div
                key={partner.id}
                className="bg-white rounded-lg shadow-md p-6 flex items-center justify-center hover:shadow-lg transition-shadow"
              >
                <img
                  src={partner.logo}
                  alt={partner.alt}
                  className="max-h-16 object-contain"
                />
              </div>
            ))}
          </div>

          {/* Testimonial */}
          <div className="mt-12 bg-white rounded-lg p-8 max-w-3xl mx-auto shadow-lg">
            <div className="text-primary mb-4 flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
            <p className="text-lg italic text-gray-700 text-center mb-4">
              "Geared Energy provided exceptional boiler installation services
              for our manufacturing facility. Their expertise and
              professionalism exceeded our expectations."
            </p>
            <p className="font-semibold text-center text-gray-800">
              — Operations Manager, Moko Mattresses Ltd.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready for Reliable Boiler Solutions?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Contact us today for a free consultation and quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:gearedenergy@gmail.com"
              className="bg-white text-primary hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-all duration-300 hover:scale-105 transform"
            >
              Email: gearedenergy@gmail.com
            </a>
            <a
              href="tel:+254729319247"
              className="bg-secondary hover:bg-red-700 font-semibold py-3 px-8 rounded-lg transition-all duration-300 hover:scale-105 transform"
            >
              Call: +254 729 319247
            </a>
          </div>
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

export default Home;

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
import boilerInstallationImg from "../img/12208.jpg";
import maintenanceImg from "../img/12214.jpg";
import sparePartsImg from "../img/11503.jpg";
import emergencyRepairsImg from "../img/refactory-cement.jpg";

// Import client logos
import cherryLogo from "../img/cherry-logo.png";
import timberStudiosLogo from "../img/timber-logo.jpeg";
import boilafricaLogo from "../img/boilafrica_logo.jpg";
import beulaTimberLogo from "../img/beulah_logo.jpg";
import mokoMattressesLogo from "../img/moko_logo.jpeg";

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
      id: 3,
      name: "Boilafrica General Suppliers",
      logo: boilafricaLogo,
      alt: "Boilafrica General Suppliers Logo",
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

  const slides = [
    {
      id: 1,
      image: boilerImage1,
      alt: "Boiler Installation Project 1",
    },
    {
      id: 2,
      image: boilerImage2,
      alt: "Boiler Maintenance Project 2",
    },
    {
      id: 3,
      image: boilerImage3,
      alt: "Industrial Boiler System",
    },
    {
      id: 4,
      image: boilerImage4,
      alt: "Boiler Service Team",
    },
    {
      id: 5,
      image: boilerImage5,
      alt: "Boiler Parts Inventory",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
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

  // Auto-play slideshow
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section with Fade-in Animation */}
      <section
        ref={(el) => (sectionRefs.current[0] = el)}
        className={`pt-20 pb-20 bg-gradient-to-r from-primary to-blue-800 text-white transition-all duration-1000 transform ${
          isVisible[0]
            ? "translate-y-0 opacity-100"
            : "translate-y-10 opacity-0"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fadeInLeft">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-pulse-slow">
                Professional Boiler Solutions in Kenya
              </h1>
              <p className="text-xl mb-8 text-blue-100 animate-fadeInUp delay-200">
                Your trusted partner for boiler installation, maintenance, and
                genuine spare parts supply. Serving industries across Kenya with
                excellence and reliability.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 animate-fadeInUp delay-400">
                <a
                  href="/contact"
                  className="btn-secondary inline-flex items-center justify-center hover:scale-105 transform transition-transform duration-300"
                >
                  Get Free Quote
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-2 h-5 w-5 animate-bounce-x"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="/services"
                  className="bg-white text-primary hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105 transform inline-flex items-center justify-center"
                >
                  Our Services
                </a>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end animate-float">
              <img
                src={boilerImage6}
                alt="Boiler Installation"
                className="h-96 rounded-xl object-contain hover:scale-105 transform transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section with Image Cards */}
      <section
        ref={(el) => (sectionRefs.current[1] = el)}
        className={`section-padding bg-gray-50 transition-all duration-1000 transform ${
          isVisible[1]
            ? "translate-y-0 opacity-100"
            : "translate-y-10 opacity-0"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 relative inline-block">
              Our Services
              <span className="absolute bottom-0 left-0 w-full h-1 bg-primary transform scale-x-0 transition-transform duration-500 origin-left group-hover:scale-x-100"></span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive boiler solutions tailored to meet your industrial
              and commercial needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section with Marquee Effect */}
      <section
        ref={(el) => (sectionRefs.current[2] = el)}
        className={`section-padding bg-white transition-all duration-1000 transform ${
          isVisible[2]
            ? "translate-y-0 opacity-100"
            : "translate-y-10 opacity-0"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Valued Clients
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Trusted by leading companies across Kenya for reliable boiler
              solutions and services
            </p>
          </div>

          <div className="relative overflow-hidden">
            {/* Animated Marquee for Clients */}
            <div className="flex animate-marquee whitespace-nowrap">
              {[...clients, ...clients].map((client, index) => (
                <div
                  key={`${client.id}-${index}`}
                  className="flex-shrink-0 w-64 mx-4 transform transition-all duration-300 hover:scale-105 hover:shadow-xl group"
                >
                  <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
                    <div className="h-48 bg-gray-50 flex items-center justify-center p-6">
                      <img
                        src={client.logo}
                        alt={client.alt}
                        className="max-h-32 max-w-48 object-contain transition-all duration-500 group-hover:scale-110 group-hover:rotate-3"
                      />
                    </div>
                    <div className="p-6 text-center">
                      <h3 className="font-semibold text-lg text-gray-800">
                        {client.name}
                      </h3>
                      <div className="mt-2 flex items-center justify-center animate-pulse-slow">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-yellow-400"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonial with Fade-in Animation */}
          <div className="mt-12 text-center max-w-3xl mx-auto animate-fadeInUp">
            <div className="text-primary mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 mx-auto animate-bounce-slow"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
            <p className="text-xl italic text-gray-700 mb-4">
              "Geared Energy provided exceptional boiler installation services
              for our manufacturing facility. Their expertise and
              professionalism exceeded our expectations."
            </p>
            <p className="font-semibold text-gray-800">
              — Operations Manager, Moko Mattresses Ltd.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section with Slideshow */}
      <section
        ref={(el) => (sectionRefs.current[3] = el)}
        className={`section-padding transition-all duration-1000 transform ${
          isVisible[3]
            ? "translate-y-0 opacity-100"
            : "translate-y-10 opacity-0"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              {/* Slideshow Container with Animations */}
              <div className="relative overflow-hidden rounded-xl shadow-lg group">
                <div
                  className="flex transition-transform duration-700 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {slides.map((slide) => (
                    <div key={slide.id} className="w-full flex-shrink-0">
                      <img
                        src={slide.image}
                        alt={slide.alt}
                        className="w-full h-96 object-cover transform transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                  ))}
                </div>

                {/* Animated Navigation Buttons */}
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all duration-300 hover:scale-110 opacity-0 group-hover:opacity-100"
                  aria-label="Previous slide"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all duration-300 hover:scale-110 opacity-0 group-hover:opacity-100"
                  aria-label="Next slide"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
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
                </button>

                {/* Animated Indicators */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`transition-all duration-300 ${
                        currentSlide === index
                          ? "w-6 h-3 bg-white"
                          : "w-3 h-3 bg-white/50 hover:bg-white/80"
                      } rounded-full`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>

              <div className="mt-4 text-center text-gray-600">
                <p className="animate-pulse-slow">
                  Browse through our projects and services gallery
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Choose Geared Energy?
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center transform transition-all duration-300 hover:translate-x-2"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-green-500 mr-3 h-5 w-5 animate-bounce-slow"
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

              {/* Stats with Counter Animation */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="text-center transform transition-all duration-300 hover:scale-110">
                  <div className="text-primary mx-auto mb-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 mx-auto animate-float"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                    </svg>
                  </div>
                  <div className="text-2xl font-bold animate-pulse-slow">
                    50+
                  </div>
                  <div className="text-gray-600">Clients Served</div>
                </div>
                <div className="text-center transform transition-all duration-300 hover:scale-110">
                  <div className="text-primary mx-auto mb-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 mx-auto animate-float"
                      style={{ animationDelay: "0.2s" }}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="text-2xl font-bold animate-pulse-slow">
                    5+
                  </div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div className="text-center transform transition-all duration-300 hover:scale-110">
                  <div className="text-primary mx-auto mb-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 mx-auto animate-float"
                      style={{ animationDelay: "0.4s" }}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="text-2xl font-bold animate-pulse-slow">
                    24/7
                  </div>
                  <div className="text-gray-600">Support Available</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section with Pulse Animation */}
      <section className="bg-primary text-white section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-pulse-slow">
            Need Boiler Solutions?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Contact us today for a free consultation and quote. Our experts are
            ready to assist you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:sales@gearedenergy.com"
              className="bg-white text-primary hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-all duration-300 hover:scale-110 transform hover:shadow-2xl"
            >
              Email: gearedenergy@gmail.com
            </a>
            <a
              href="tel:+254729319247"
              className="bg-secondary hover:bg-red-700 font-semibold py-3 px-8 rounded-lg transition-all duration-300 hover:scale-110 transform hover:shadow-2xl"
            >
              Call: +254729319247
            </a>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

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

        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes bounce-x {
          0%,
          100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(5px);
          }
        }

        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-fadeInLeft {
          animation: fadeInLeft 1s ease-out;
        }

        .animate-fadeInUp {
          animation: fadeInUp 1s ease-out forwards;
          opacity: 0;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-bounce-x {
          animation: bounce-x 1s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        .animate-bounce-slow {
          animation: bounce 2s ease-in-out infinite;
        }

        .animate-marquee {
          animation: marquee 30s linear infinite;
        }

        .delay-200 {
          animation-delay: 200ms;
        }

        .delay-400 {
          animation-delay: 400ms;
        }

        .group:hover .animate-marquee {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default Home;

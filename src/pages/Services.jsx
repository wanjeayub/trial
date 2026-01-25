import React from 'react';

const Services = () => {
  const products = [
    {
      name: 'Boiler Tubes',
      category: 'Replacement Parts',
    },
    {
      name: 'Pressure Valves',
      category: 'Safety Equipment',
    },
    {
      name: 'Burner Assemblies',
      category: 'Combustion',
    },
    {
      name: 'Control Panels',
      category: 'Automation',
    },
    {
      name: 'Heat Exchangers',
      category: 'Core Components',
    },
    {
      name: 'Pumps & Motors',
      category: 'Circulation',
    }
  ];

  const services = [
    {
      title: 'Installation Services',
      description: 'Professional installation of industrial boilers with full commissioning',
      features: ['Site assessment', 'Equipment installation', 'System testing', 'Staff training']
    },
    {
      title: 'Maintenance Programs',
      description: 'Regular maintenance plans to ensure optimal performance',
      features: ['Scheduled inspections', 'Preventive maintenance', 'Performance optimization', 'Energy audits']
    },
    {
      title: 'Emergency Repairs',
      description: '24/7 emergency repair services for critical breakdowns',
      features: ['Rapid response', 'Diagnostic services', 'Parts replacement', 'System restoration']
    },
    {
      title: 'Spare Parts Supply',
      description: 'Genuine OEM parts with warranty and delivery across Kenya',
      features: ['Original parts', 'Warranty included', 'Nationwide delivery', 'Technical support']
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Products & Services</h1>
          <p className="text-xl max-w-3xl mx-auto text-blue-100">
            Comprehensive boiler solutions, genuine spare parts, and professional services for industries across Kenya
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Core Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-semibold mb-4 text-primary">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Available Spare Parts</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gray-300 flex items-center justify-center">
                  <span className="text-gray-600">{product.name} Image</span>
                </div>
                <div className="p-6">
                  <span className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {product.category}
                  </span>
                  <h3 className="text-xl font-semibold mt-3 mb-2">{product.name}</h3>
                  <a 
                    href="mailto:sales@gearedenergy.com?subject=Inquiry about product"
                    className="text-primary hover:text-blue-700 font-medium inline-flex items-center"
                  >
                    Request Quote
                    <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="text-primary h-7 w-7" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Quality Parts</h3>
              <p className="text-gray-600">Genuine OEM parts with warranty</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="text-primary h-7 w-7" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                  <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1v-1.05a2.5 2.5 0 010-4.9V10a1 1 0 001-1V6a1 1 0 00-1-1H8.5V3a2 2 0 00-2-2H4a2 2 0 00-2 2v1.05a2.5 2.5 0 010 4.9V10a1 1 0 00-1 1v1.05a2.5 2.5 0 010 4.9V15a1 1 0 001 1z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Fast Delivery</h3>
              <p className="text-gray-600">Nationwide delivery across Kenya</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="text-primary h-7 w-7" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">24/7 Support</h3>
              <p className="text-gray-600">Round-the-clock technical support</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="text-primary h-7 w-7" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Free Quotes</h3>
              <p className="text-gray-600">No-obligation quotations</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
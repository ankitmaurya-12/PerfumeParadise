import React from 'react';

const AboutPage = () => {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Founder & CEO",
      description: "With 15 years in luxury fragrances, Sarah brings her passion for perfumery to every aspect of our business."
    },
    {
      name: "Michael Chen",
      role: "Master Perfumer",
      description: "A graduate of ISIPCA, Michael has created signature scents for luxury brands worldwide."
    },
    {
      name: "Emma Roberts",
      role: "Creative Director",
      description: "Emma ensures our brand aesthetic matches the elegance of our fragrances."
    }
  ];

  const values = [
    {
      title: "Sustainability",
      description: "We're committed to eco-friendly practices and sustainable sourcing of ingredients."
    },
    {
      title: "Quality",
      description: "Only the finest ingredients and most skilled artisans create our perfumes."
    },
    {
      title: "Integrity",
      description: "Transparency and honesty in every aspect of our business."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Our Story</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Founded in 2010, Perfume Paradise has grown from a small boutique to a leading destination 
            for luxury fragrances. Our passion for perfumery drives us to source the finest ingredients 
            and collaborate with the world's most talented perfumers.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <h3 className="text-4xl font-bold text-gray-900 mb-2">500+</h3>
              <p className="text-gray-600">Unique Fragrances</p>
            </div>
            <div className="p-6">
              <h3 className="text-4xl font-bold text-gray-900 mb-2">50+</h3>
              <p className="text-gray-600">Countries Served</p>
            </div>
            <div className="p-6">
              <h3 className="text-4xl font-bold text-gray-900 mb-2">100k+</h3>
              <p className="text-gray-600">Happy Customers</p>
            </div>
            <div className="p-6">
              <h3 className="text-4xl font-bold text-gray-900 mb-2">25+</h3>
              <p className="text-gray-600">Industry Awards</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Meet Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img 
                  src="/api/placeholder/300/300"
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-gray-600 mb-4">{member.role}</p>
                  <p className="text-gray-600">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            To create exceptional fragrances that inspire and delight, while maintaining 
            our commitment to sustainability and ethical practices. We believe that every 
            person deserves to find their perfect scent, and we're here to guide them on 
            that journey.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
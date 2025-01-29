import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How do I choose the right perfume?",
      answer: "Choosing the right perfume is a personal journey. Consider your preferred scent families (floral, woody, oriental, etc.), test the fragrance on your skin, and give it time to develop. Our expert consultants are also available to help you find your perfect match."
    },
    {
      question: "What's the difference between Eau de Parfum and Eau de Toilette?",
      answer: "The main difference lies in the concentration of fragrance oils. Eau de Parfum (EDP) typically contains 15-20% fragrance oils and lasts longer, while Eau de Toilette (EDT) contains 5-15% and has a lighter scent."
    },
    {
      question: "How should I store my perfumes?",
      answer: "Store your perfumes in a cool, dry place away from direct sunlight and heat. Avoid keeping them in the bathroom as humidity can affect the fragrance. The ideal storage temperature is between 55-70°F (12-21°C)."
    },
    {
      question: "Do you offer international shipping?",
      answer: "Yes, we offer international shipping to most countries. Shipping costs and delivery times vary by location. Please check our shipping policy for detailed information."
    },
    {
      question: "What is your return policy?",
      answer: "We accept returns within 30 days of purchase for unopened items in their original packaging. For hygiene reasons, we cannot accept returns of opened fragrances unless they arrive damaged or defective."
    },
    {
      question: "How long does a perfume typically last?",
      answer: "An opened bottle of perfume, when stored properly, typically lasts 3-5 years. However, unopened perfumes can last much longer. The best way to check if a perfume has gone bad is to smell it - if the scent has changed significantly, it may be time to replace it."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-600">
            Find answers to common questions about our fragrances, shipping, and more.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12">
        <div className="max-w-3xl mx-auto px-4">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <span className="text-lg font-semibold text-gray-900">{faq.question}</span>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-gray-600" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-600" />
                  )}
                </button>
                <div 
                  className={`px-6 transition-all duration-200 ease-in-out ${
                    openIndex === index ? 'max-h-96 py-4' : 'max-h-0 overflow-hidden'
                  }`}
                >
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Still have questions?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Can't find the answer you're looking for? Please contact our friendly team.
          </p>
          <button className="bg-blue-600 text-white py-3 px-8 rounded-md hover:bg-blue-700 transition-colors">
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
};

export default FAQPage;
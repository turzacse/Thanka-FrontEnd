import React, { useState } from "react";
import img from './7636724.png'

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is Thanaka Face Pack?",
      answer: "Thanaka Face Pack is a natural skincare product made with ingredients that nourish and protect the skin.",
    },
    {
      question: "How do I use the Thanaka Face Pack?",
      answer: "Apply a thin layer to clean skin, leave on for 10-15 minutes, then rinse with warm water.",
    },
    {
      question: "Is the product safe for sensitive skin?",
      answer: "Yes, it is made with gentle, natural ingredients suitable for most skin types, including sensitive skin.",
    },
  ];

  return (
    <div className="bg-gradient-to-r from-[#658BAE] to-[#123955] text-white py-16 px-4 sm:px-8 lg:px-16 rounded-lg">
      <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
      <div className="flex flex-col-reverse md:flex-row justify-between">
      <div className="md:w-1/2">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-300 py-4">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left font-semibold  text-lg focus:outline-none flex justify-between items-center"
            >
              {faq.question}
              <span>{activeIndex === index ? "-" : "+"}</span>
            </button>
            {activeIndex === index && (
              <p className="mt-2 text-gray-200">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>

      <div className="md:w-1/2 flex md:justify-end justify-center">
      <img className="rounded-full" src={img} alt="" />
      </div>
      </div>
      
    </div>
  );
};

export default FAQ;

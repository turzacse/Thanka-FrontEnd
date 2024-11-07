import React from "react";
import img from './c.png'

const ContactUs = () => {
  return (
    <div className="py-10 ">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8 hidden md:block">Contact Us</h2>
      <div className="flex md:flex-row flex-col justify-between items-center">
        <div className="w-1/2 flex justify-start">
        <img src={img} alt="" className="w-[450px] mb-10" />
        </div>

        <form className="md:w-1/2 w-full bg-gradient-to-r from-[#658BAE] to-[#123955] p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label className="block text-gray-100 font-semibold mb-2" htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            placeholder="Enter your name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-100 font-semibold mb-2" htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-100 font-semibold mb-2" htmlFor="message">Message</label>
          <textarea
            id="message"
            rows="4"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            placeholder="Write your message"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition duration-200"
        >
          Send Message
        </button>
      </form>
      </div>
      
      
    </div>
  );
};

export default ContactUs;

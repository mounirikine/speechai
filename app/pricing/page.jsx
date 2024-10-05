"use client"

import React, { useState } from 'react';
import Pricing from '../dashboard/_components/Pricing';
import Header from '../../components/ui/Header';
import Footer from '../../components/ui/footer';

const page = () => {
  const [activeIndex, setActiveIndex] = useState(0); // Index of the currently active FAQ card

  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index)); // Close the card if it's already open, otherwise open the clicked card
  };

  const faqs = [
    {
      question: 'How do I generate speech from text?',
      answer: 'To generate speech from text, simply enter your desired text into the input field, choose the voice style and language, and click the "Generate Speech" button. The system will create an audio file that you can download or use directly.',
    },
    {
      question: 'How do I create images from text?',
      answer: 'Enter a description of the image you want to generate, specify the style and dimensions, and click "Generate Image." Our AI will process the request and provide a downloadable image that fits your description.',
    },
    {
      question: 'Can I generate videos from text?',
      answer: 'Yes! To generate videos, input your script, choose a video style, and set the duration. Click "Generate Video," and our system will create a short video that you can download and use.',
    },
    {
      question: 'How do I manage my generated files?',
      answer: 'After generating a file, it will be available for download in your dashboard under the "Generated Files" section. You can preview, download, or delete files directly from there.',
    },
  ];

  return (
    <>
      <Header />
      <section className="py-14 test">
        <Pricing />
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-4xl font-manrope text-center font-bold text-white leading-[3.25rem]">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="accordion-group">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`accordion border border-solid border-gray-300 p-4 rounded-xl transition duration-500 mb-8 lg:p-4 ${
                  activeIndex === index ? 'bg-indigo-600 border-indigo-600' : ''
                }`}
              >
                <button
                  className="accordion-toggle group inline-flex items-center justify-between text-left text-lg font-normal leading-8 text-white w-full transition duration-500 hover:text-white"
                  onClick={() => toggleAccordion(index)}
                >
                  <h5>{faq.question}</h5>
                  {activeIndex === index ? (
                    <svg
                      className="w-6 h-6 text-indigo-600 transition duration-500 group-hover:text-indigo-600"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6 12H18"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="w-6 h-6 text-white transition duration-500 group-hover:text-indigo-600"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6 12H18M12 18V6"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </button>
                <div
                  className="accordion-content w-full overflow-hidden pr-4 transition-all duration-500"
                  style={{
                    maxHeight: activeIndex === index ? '250px' : '0',
                  }}
                >
                  <p className="text-base text-white font-normal leading-6">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section class=" :bg-gray-900">
  <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
      <div class="mx-auto max-w-screen-md sm:text-center">
          <h2 class="mb-4 text-3xl tracking-tight font-extrabold  sm:text-4xl text-white">Sign up for our newsletter</h2>
          <p class="mx-auto mb-8 max-w-2xl font-light text-gray-300 md:mb-12 sm:text-xl :text-gray-400">Stay up to date with the roadmap progress, announcements and exclusive discounts feel free to sign up with your email.</p>
          <form action="#">
              <div class="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
                  <div class="relative w-full">
                      <label for="email" class="hidden mb-2 text-sm font-medium text-gray-900 :text-gray-300">Email address</label>
                      <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                          <svg class="w-5 h-5 text-gray-500 :text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                      </div>
                      <input class="block p-3 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:rounded-none sm:rounded-l-lg focus:ring-primary-500 focus:border-primary-500 :bg-gray-700 :border-gray-600 :placeholder-gray-400 :text-white :focus:ring-primary-500 :focus:border-primary-500" placeholder="Enter your email" type="email" id="email" required="" />
                  </div>
                  <div>
                      <button type="submit" class="py-3 px-5 w-full text-sm font-medium text-center text-white rounded-lg border cursor-pointer bg-purple-700 border-primary-600 sm:rounded-none sm:rounded-r-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 :bg-primary-600 :hover:bg-primary-700 :focus:ring-primary-800">Subscribe</button>
                  </div>
              </div>
              <div class="mx-auto max-w-screen-sm text-sm text-left text-gray-500 newsletter-form-footer :text-gray-300">We care about the protection of your data. <a href="#" class="font-medium text-primary-600 :text-primary-500 hover:underline">Read our Privacy Policy</a>.</div>
          </form>
      </div>
  </div>
</section>

<Footer />
    </>
  );
};

export default page;

import React from 'react';
import Header from '../../components/ui/Header';
import TypewriterEffectSmoothDemo from '../dashboard/_components/type';
import Footer from '../../components/ui/footer';
import Pricing from '../dashboard/_components/Pricing';
import Image from 'next/image';

const page = () => {
  return (
    <section className='py-5 transition-all absolute inset-0 h-full w-full'>
      <Header />

      <section className="min-h-screen py-32 test">
        <h1 className="text-4xl md:text-6xl mx-auto w-11/12 md:w-7/12 text-center font-semibold">
          Our Mission is to Explore the Advancement of AI Applications
        </h1>
        <p className="mt-10 w-12/12 md:w-8/12 mx-auto text-center">
          We aim to revolutionize how content is created through our innovative SaaS platform. Our application leverages advanced AI technologies to generate high-quality text, stunning images, and engaging videos from simple text inputs. With our API, users can easily integrate these capabilities into their projects, streamlining the content creation process and enhancing productivity.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-7/12 mx-auto mt-24 gap-8">
          <div className="flex flex-col items-center justify-center gap-2 border p-10 rounded-xl bg-[#0f0e29]">
            <h1 className="text-center text-4xl font-semibold text-purple-600">100+</h1>
            <h1 className="text-center text-white">Text Generation APIs</h1>
          </div>
          <div className="flex flex-col items-center justify-center gap-2 border p-10 rounded-xl bg-[#0f0e29]">
            <h1 className="text-center text-4xl font-semibold text-purple-600">200+</h1>
            <h1 className="text-center text-white">Image Generation APIs</h1>
          </div>
          <div className="flex flex-col items-center justify-center gap-2 border p-10 rounded-xl bg-[#0f0e29]">
            <h1 className="text-center text-4xl font-semibold text-purple-600">150+</h1>
            <h1 className="text-center text-white">Video Generation APIs</h1>
          </div>
          <div className="flex flex-col items-center justify-center gap-2 border p-10 rounded-xl bg-[#0f0e29]">
            <h1 className="text-center text-4xl font-semibold text-purple-600">500+</h1>
            <h1 className="text-center text-white">Projects Completed</h1>
          </div>
        </div>
        <p className="mt-16 w-11/12 md:w-8/12 mx-auto text-center text-lg">
          Join 4,000+ companies already growing
        </p>
      </section>

      <section className="container mx-auto py-10">
        <h1 className="text-4xl md:text-5xl font-semibold text-center mb-14">
          Unlock the Power of AI-Driven Content Creation
        </h1>

        <div className="flex items-center mt-6 md:mt-10">
          <div className="p-4 flex gap-7 flex-col md:flex-row items-center">
            <div className="md:w-6/12">
              <h2 className="text-3xl md:text-4xl font-semibold mb-4">Improvement, Innovation, Integrity</h2>
              <p className="text-gray-400">
                Our mission focuses on driving improvement and innovation in AI applications. 
                We provide tools that allow users to generate creative content effortlessly. 
                Whether it&apos;s text, images, or videos, our platform empowers users to explore the potential of AI technology in their projects.
              </p>
            </div>

            <Image
              className="rounded-3xl mx-auto md:w-6/12"
              src="https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F4c1851d3-9053-4628-9ad8-f465947990fe_1280x720.jpeg"
              alt="AI Image"
              width={1280}
              height={720}
            />
          </div>
        </div>
      </section>

      <section className='hidden lg:block w-full'>
        <TypewriterEffectSmoothDemo />
      </section>

      <hr className='w-10/12 mx-auto' />
      <section className="bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-md sm:text-center">
            <h2 className="mb-4 text-3xl tracking-tight font-extrabold sm:text-4xl text-white">Sign up for our newsletter</h2>
            <p className="mx-auto mb-8 max-w-2xl font-light text-gray-300 md:mb-12 sm:text-xl">
              Stay up to date with the roadmap progress, announcements and exclusive discounts. Feel free to sign up with your email.
            </p>
            <form action="#">
              <div className="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
                <div className="relative w-full">
                  <label htmlFor="email" className="hidden mb-2 text-sm font-medium text-gray-900">Email address</label>
                  <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                    </svg>
                  </div>
                  <input className="block p-3 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:rounded-none sm:rounded-l-lg focus:ring-primary-500 focus:border-primary-500" placeholder="Enter your email" type="email" id="email" required />
                </div>
                <div>
                  <button type="submit" className="py-3 px-5 w-full text-sm font-medium text-center text-white rounded-lg border cursor-pointer bg-purple-700 border-primary-600 sm:rounded-none sm:rounded-r-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300">
                    Subscribe
                  </button>
                </div>
              </div>
              <div className="mx-auto max-w-screen-sm text-sm text-left text-gray-500">
                We care about the protection of your data. <a href="#" className="font-medium text-primary-600 hover:underline">Read our Privacy Policy</a>.
              </div>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </section>
  );
};

export default page;

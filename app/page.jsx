"use client";
import Link from "next/link";
import "./style.css";
import { ArrowRight, ChevronRight, Gem, Pen } from "lucide-react";
import HeroScrollDemo from "./dashboard/_components/tablet";
import AppleCardsCarouselDemo from "./dashboard/_components/apple";
import logo1 from "../public/logo1.png";
import logo2 from "../public/logo2.png";
import logo3 from "../public/logo3.png";
import logo4 from "../public/logo4.png";
import logo5 from "../public/logo5.png";
import diamond from "../public/diamond.svg";
import pen from "../public/pen.svg";
import Header from "../components/ui/Header";

import Footer from "../components/ui/footer";

import Image from "next/image";
import { useState } from "react";
import Pricing from "./dashboard/_components/Pricing";

export default function Home() {
  const logos = [logo1, logo2, logo3, logo4, logo5];

  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="py-5 transition-all absolute inset-0 h-full w-full bg-black">
      <Header />

      <section className="min-h-screen flex flex-col items-center justify-center test bg-black">
        <section className="container mx-auto flex items-center justify-center flex-col pt-24">
          <h1 className="text-4xl md:text-6xl w-11/12 md:w-8/12 text-center font-semibold bg-gradient-to-r from-purple-600 via-green-500 to-purple-100 bg-clip-text text-transparent">
            Advanced  AI Solutions for Text to Speech & Image & and Video
            Generation
          </h1>
          <p className="text-sm md:text-base text-center w-11/12 md:w-6/12 mx-auto mt-5 text-gray-200">
            Leverage AI to effortlessly generate speech, images, and videos. Our
            platform offers cutting-edge tools to boost creativity and
            efficiency.
          </p>
          <div className="flex pt-8 md:pt-14 gap-3 md:gap-5 flex-wrap justify-center">
            <Link
              href="/sign-in"
              className="bg-white text-black px-5 md:px-8 py-2 rounded-full font-semibold flex items-center justify-center gap-2 transition-transform duration-200"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              Get Started
              <span
                className={`transition-transform duration-200 transform ${
                  isHovered ? "translate-x-1" : ""
                }`}
              >
                <ArrowRight size={20} />
              </span>
            </Link>

            <Link
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              href=""
              className="text-white bg-transparent border border-white px-5 md:px-8 py-2 rounded-full flex items-center justify-center gap-2"
            >
              Learn More <ArrowRight size={20} />
            </Link>
          </div>
        </section>
        <HeroScrollDemo />
      </section>

      <section className="container mx-auto py-10 overflow-hidden bg-black">
        <div className="logo-slider flex items-center justify-center animate-slide ">
          {logos.map((item, index) => (
            <Image
              src={item}
              key={index}
              width={250}
              height={100} // You can adjust this value as needed for height
              className="logo-item mx-5 object-contain w-[50px]"
              alt={`Logo ${index}`}
            />
          ))}
        </div>
      </section>

      <div className="container mx-auto py-10 bg-black">
        <div className="flex flex-col md:flex-row items-center pt-10 bg-black">
          {/* Left content */}
          <div className="w-full md:w-7/12 px-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-12 tracking-wider leading-snug capitalize">
              A single place to generate images with{" "}
              <span className="text-purple-600">AI</span>
            </h1>

            {/* First feature */}
            <div className="flex flex-col sm:flex-row gap-5 items-start mb-10">
              <Image
                src={diamond}
                className=" sm:w-10 md:w-[200px]"
                alt="Diamond"
              />
              <div>
                <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold capitalize mb-3">
                  Generate high-quality images
                </h1>
                <p className="text-sm sm:text-base">
                  Our AI-powered tool allows you to create stunning,
                  high-resolution images in seconds. Whether you&apos;re looking for
                  creative visuals for marketing, design projects, or personal
                  use, you can generate images that meet your specific needs
                  with incredible quality and speed.
                </p>
              </div>
            </div>

            {/* Second feature */}
            <div className="flex flex-col sm:flex-row gap-5 ">
              <Image src={pen} className="sm:w-10 md:w-[200px]" alt="Pen" />
              <div>
                <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold capitalize mb-3">
                  Edit and upscale images
                </h1>
                <p className="text-sm sm:text-base">
                  Easily enhance and upscale your generated images with our
                  integrated editing tools. Adjust colors, contrast, or apply
                  filters to get the perfect look, and upscale the resolution to
                  make your images ready for any platform or use case, from
                  digital displays to print.
                </p>
              </div>
            </div>

            {/* Button */}
            <Link
              href=""
              className="bg-white w-full sm:w-6/12 md:w-3/12 mt-8 sm:mt-10 md:mt-14 text-black px-5 md:px-8 py-2 rounded-full font-semibold flex items-center justify-center gap-2"
            >
              Get Started <ArrowRight size={20} />
            </Link>
          </div>

          {/* Right content (image) */}
          <div className="w-full md:w-5/12 p-4 md:p-16 mt-10 md:mt-0 ">
          <Image
  src="https://b2-backblaze-stackpath.b-cdn.net/225458/vfyks0_3f3fc929aba2e4bf330b37728a0d4054d256023e.jpg"
  alt="AI-generated image"
  width={1200} // Set an appropriate width based on the original image
  height={800} // Set an appropriate height based on the aspect ratio
  className="rounded-2xl"
/>
          </div>
        </div>
      </div>

      <div className="container mx-auto pb-10 bg-black">
        <div className="flex flex-col md:flex-row items-center pt-10">
          {/* Left content */}
          <div className="w-full md:w-7/12 p-4 mt-10 md:mt-0 relative hidden lg:block">
  <div className="relative">
    <Image
      className="w-full h-auto"
      src="https://assets-global.website-files.com/63eba862e4eb8f6d39e4c621/63ed4714204b6637b733596a_available-on-desktop-and-mobile-image-generativeai-x-webflow-template.png"
      alt="Available on desktop and mobile"
      width={1200} // Adjust the width based on the original image size
      height={800} // Adjust the height based on the image aspect ratio
    />
  </div>
  <Image
    src="https://cdn.prod.website-files.com/63eba862e4eb8f6d39e4c621/63ed4776a4b189de702a2716_available-on-desktop-and-mobile-right-image-generativeai-x-webflow-template.png"
    className="rounded-2xl absolute w-[120px] sm:w-[150px] top-32 left-5 sm:left-10"
    alt="AI-generated image"
    width={150} // Set appropriate width for this image
    height={150} // Set appropriate height for this image based on aspect ratio
  />
</div>

          {/* Right content */}
          <div className="w-full md:w-5/12 px-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-10 sm:mb-12 md:mb-14 tracking-wider leading-snug capitalize">
              Available on desktop and mobile
            </h1>
            <p className="mb-8 sm:mb-10 text-sm sm:text-base">
              Access our AI image generator on any device. Whether you&apos;re on the
              go with your phone or working from your desktop, our platform is
              designed to be responsive and intuitive, ensuring you can create
              and edit images anytime, anywhere.
            </p>

            <Link
              href=""
              className="text-white w-full sm:w-5/12 bg-transparent border border-white px-5 md:px-8 py-2 rounded-full flex items-center justify-center gap-2"
            >
              Learn More <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </div>

      <section className="container mx-auto flex flex-col md:flex-row items-center mt-32 bg-black">
        <div className="w-full md:w-6/12 p-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-10 sm:mb-12 md:mb-14 tracking-wider leading-snug capitalize">
            Try Generative AI for free today
          </h1>
          <p className="text-sm sm:text-base">
            Experience the power of generative AI without any cost. Create
            stunning visuals, generate creative content, or explore AI-based
            solutions for your projects. Whether you&apos;re a designer, marketer, or
            just curious about AI, this tool will help you bring your ideas to
            life in no time.
          </p>

          <Link
            href=""
            className="bg-white w-full sm:w-5/12 mt-14 text-black px-5 md:px-8 py-2 rounded-full font-semibold flex items-center justify-center gap-2"
          >
            Get Started <ArrowRight size={20} />
          </Link>
        </div>

        <div className="w-full md:w-6/12 p-4 ">
        <Image
  src="https://assets-global.website-files.com/63eba862e4eb8f6d39e4c621/63ed4e029a674e0a8d11dd4f_try-generative-ai-for-free-today-image-generativeai-x-webflow-template.png"
  alt="Try generative AI for free"
  width={1200} // Set an appropriate width based on the original image size
  height={800} // Set an appropriate height based on the aspect ratio
  className="w-full h-auto rounded-lg"
/>
        </div>
      </section>

      <section className="min-h-screen container mx-auto py-32 bg-black">
        <h1 className="text-3xl md:text-5xl font-semibold mb-5 tracking-wider leading-snug capitalize lg:text-center lg:w-6/12 mx-auto">
          Generate Different Image Styles
        </h1>
        <p className="w-full lg:w-8/12 mx-auto text-center mb-10">
          Explore the versatility of generative AI by creating diverse image
          styles. From stunning 3D visuals to lifelike representations, our tool
          empowers you to unleash your creativity. Whether you&apos;re crafting
          digital art or diving into fantastical realms, you can bring your
          imaginative concepts to life with ease and speed.
        </p>

        <div className="flex items-center justify-center gap-5 mt-10 lg:flex-row flex-col md:w-6/12 mx-auto">
          <Link
            href=""
            className="text-white w-full lg:w-5/12 bg-transparent border border-white px-5 md:px-8 py-2 rounded-full flex items-center justify-center gap-2"
          >
            3D
          </Link>
          <Link
            href=""
            className="text-white w-full lg:w-5/12 bg-transparent border border-white px-5 md:px-8 py-2 rounded-full flex items-center justify-center gap-2"
          >
            Realistic
          </Link>
          <Link
            href=""
            className="text-white w-full lg:w-5/12 bg-transparent border border-white px-5 md:px-8 py-2 rounded-full flex items-center justify-center gap-2"
          >
            Digital Art
          </Link>
          <Link
            href=""
            className="text-white w-full lg:w-5/12 bg-transparent border border-white px-5 md:px-8 py-2 rounded-full flex items-center justify-center gap-2"
          >
            Fantasy
          </Link>
        </div>


<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 pt-14">
  <Image
    className="rounded-2xl"
    src="https://cdn.prod.website-files.com/63eba862e4eb8f6d39e4c621/63ed5b6c612fe54e57c1c989_3d-image-01-generativeai-x-webflow-template.jpg"
    alt="3D Image"
    width={500} // Adjust width based on the original size
    height={600} // Adjust height based on the aspect ratio
  />
  <Image
    className="rounded-2xl"
    src="https://cdn.prod.website-files.com/63eba862e4eb8f6d39e4c621/63ed5d9876e014239ac64ae1_realistic-image-01-generativeai-x-webflow-template.jpg"
    alt="Realistic Image"
    width={500} // Adjust width based on the original size
    height={600} // Adjust height based on the aspect ratio
  />
  <Image
    className="rounded-2xl"
    src="https://cdn.prod.website-files.com/63eba862e4eb8f6d39e4c621/63ed5d977c72ebea8691ccf7_realistic-image-05-generativeai-x-webflow-template.jpg"
    alt="Another Realistic Image"
    width={500} // Adjust width based on the original size
    height={600} // Adjust height based on the aspect ratio
  />
  <Image
    className="rounded-2xl"
    src="https://cdn.prod.website-files.com/63eba862e4eb8f6d39e4c621/63ed5ed547a02d540eadddd2_digital-art-image-02-generativeai-x-webflow-template.jpg"
    alt="Digital Art Image"
    width={500} // Adjust width based on the original size
    height={600} // Adjust height based on the aspect ratio
  />
  <Image
    className="rounded-2xl"
    src="https://cdn.prod.website-files.com/63eba862e4eb8f6d39e4c621/63ed858935fcf382c3bbe67a_fantasy-image-02-generativeai-x-webflow-template.jpg"
    alt="Fantasy Image"
    width={500} // Adjust width based on the original size
    height={600} // Adjust height based on the aspect ratio
  />
</div>

      </section>

      <section className="pb-14 test bg-black">
        <Pricing />
      </section>
      <hr className="w-10/12 mx-auto bg-black" />

      <AppleCardsCarouselDemo />

      <Footer />
    </section>
  );
}

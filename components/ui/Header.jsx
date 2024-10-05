"use client";
import { ChevronRight, Menu } from "lucide-react";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { useAuth, UserButton } from '@clerk/nextjs'; // Import Clerk authentication

const Header = () => {
  const router = usePathname();
  const { isSignedIn } = useAuth(); // Check if user is signed in

  console.log(router);

  return (
    <>
      <header className="bg-[#0a0a0a] w-11/12 md:w-7/12 mx-auto rounded-full px-4 md:px-8 shadow-md sticky top-5 z-[99999999999]">
        <nav className="flex items-center justify-between py-2">
          <Link href="/" className="flex items-center text-lg">
            <img
              width={53}
              src="https://cdn.prod.website-files.com/66d87bb582928970cd067300/66ddde5e2f6ed23bce12b022_Logo-p-500.png"
              alt="Speech AI Logo"
              className="w-12 h-12"
            />
            <span className="text-white">
              Speech <span className="text-purple-600 font-bold">AI</span>
            </span>
          </Link>
          <ul className="hidden md:flex items-center justify-center gap-4 md:gap-8">
            <li>
              <Link href="/" prefetch={true}>
                <span
                  className={`${
                    router === "/"
                      ? "text-purple-500 font-semibold"
                      : "text-white"
                  }`}
                >
                  Home
                </span>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <span
                  className={`${
                    router === "/about"
                      ? "text-purple-500 font-semibold"
                      : "text-white"
                  }`}
                >
                  About
                </span>
              </Link>
            </li>
            <li>
              <Link href="/pricing">
                <span
                  className={`${
                    router === "/pricing"
                      ? "text-purple-500 font-semibold"
                      : "text-white"
                  }`}
                >
                  Pricing
                </span>
              </Link>
            </li>
            <li>
              <Link href="/support">
                <span
                  className={`${
                    router === "/support"
                      ? "text-purple-500 font-semibold"
                      : "text-white"
                  }`}
                >
                  Support
                </span>
              </Link>
            </li>
          </ul>

          {/* Conditionally render Start Free Trial or UserButton */}
          {isSignedIn ? (
            <div className=" hidden lg:flex items-center justify-center gap-1 ">
              <Link href="/dashboard" className="font-light">Go to the dashboard</Link>
              <UserButton afterSignOutUrl="/" />
              
            </div>
          ) : (
            <Link
              href="/start-trial"
              className="lg:flex hidden items-center gap-2 border px-3 py-2 md:px-5 md:py-2 rounded-full bg-black border-gray-500 text-white"
            >
              Start Free Trial
              <ChevronRight size={20} />
            </Link>
          )}

          <button
            type="button"
            className="flex lg:hidden"
            aria-haspopup="dialog"
            aria-expanded="false"
            aria-controls="hs-offcanvas-example"
            data-hs-overlay="#hs-offcanvas-example"
          >
            <Menu />
          </button>

          <div
            id="hs-offcanvas-example"
            className="hs-overlay hs-overlay-open:translate-x-0 block lg:hidden -translate-x-full fixed top-0 start-0 transition-all duration-300 transform h-full max-w-xs w-full z-[80] bg-black"
            role="dialog"
            tabIndex="-1"
            aria-labelledby="hs-offcanvas-example-label"
          >
            <div className="flex justify-between items-center py-3 px-4 border-b dark:border-neutral-700">
              <h3 id="hs-offcanvas-example-label" className="font-bold text-white">
                <Link href="/" className="flex items-center text-lg">
                  <img
                    width={53}
                    src="https://cdn.prod.website-files.com/66d87bb582928970cd067300/66ddde5e2f6ed23bce12b022_Logo-p-500.png"
                    alt="Speech AI Logo"
                    className="w-12 h-12"
                  />
                  <span className="text-white">
                    Speech <span className="text-purple-600 font-bold">AI</span>
                  </span>
                </Link>
              </h3>
              <button
                type="button"
                className="size-8 inline-flex justify-center items-center gap-x-2 rounded-full border border-transparent bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200"
                aria-label="Close"
                data-hs-overlay="#hs-offcanvas-example"
              >
                <span className="sr-only">Close</span>
                <svg
                  className="shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 6 6 18"></path>
                  <path d="m6 6 12 12"></path>
                </svg>
              </button>
            </div>
            <div className="p-4 text-white h-[80%]">
              <ul className="items-center justify-center gap-4 md:gap-8 flex flex-col w-full h-full">
                <li className="w-full flex items-center justify-center">
                  <Link href="/" className="w-full flex items-center justify-center">
                    <span
                      className={`${
                        router === "/"
                          ? "bg-white text-black font-semibold"
                          : "text-white"
                      } w-full text-center py-2 rounded-xl`}
                    >
                      Home
                    </span>
                  </Link>
                </li>
                <li className="w-full flex items-center justify-center">
                  <Link href="/about" className="w-full flex items-center justify-center">
                    <span
                      className={`${
                        router === "/about"
                          ? "bg-white text-black font-semibold"
                          : "text-white"
                      } w-full text-center py-2 rounded-xl`}
                    >
                      About
                    </span>
                  </Link>
                </li>
                <li className="w-full flex items-center justify-center">
                  <Link href="/pricing" className="w-full flex items-center justify-center">
                    <span
                      className={`${
                        router === "/pricing"
                          ? "bg-white text-black font-semibold"
                          : "text-white"
                      } w-full text-center py-2 rounded-xl`}
                    >
                      Pricing
                    </span>
                  </Link>
                </li>
                <li className="w-full flex items-center justify-center">
                  <Link href="/support" className="w-full flex items-center justify-center">
                    <span
                      className={`${
                        router === "/support"
                          ? "bg-white text-black font-semibold"
                          : "text-white"
                      } w-full text-center py-2 rounded-xl`}
                    >
                      Support
                    </span>
                  </Link>
                </li>

                {/* Conditionally render Start Free Trial in mobile menu */}
                {isSignedIn ? <div className=" bg-purple-600 w-full py-2 rounded-lg lg:hidden flex items-center justify-center gap-1 ">
              <Link href="/dashboard" className="font-light">Go to the dashboard</Link>
              <UserButton afterSignOutUrl="/" />
              
            </div> : (
                  <Link
                    href="/start-trial"
                    className="flex lg:hidden mt-16 items-center gap-2 border px-10 hover:bg-transparent py-2 md:px-5 md:py-2 rounded-full bg-purple-600 border-gray-500 text-white"
                  >
                    Start Free Trial
                    <ChevronRight size={20} />
                  </Link>
                )}
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;

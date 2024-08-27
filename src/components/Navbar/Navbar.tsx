import Link from "next/link";
import { Fragment } from "react";

export const Navbar = () => {
  return (
    <Fragment>
      <div className="top-0 py-1 lg:py-2 w-full bg-[#f3f4f6] lg:relative z-50 dark:bg-gray-900 -mb-10">
        <nav className="z-10 sticky top-0 left-0 right-0 max-w-4xl xl:max-w-5xl mx-auto px-5 py-2.5 lg:border-none lg:py-4">
          <div className="flex items-center justify-between">
            <button>
              <div className="flex items-center space-x-2">
                <Link href={"/"} className="text-black dark:text-white font-bold text-2xl">
                  DaiRestro
                </Link>
              </div>
            </button>
            <div className="hidden lg:block">
              <ul className="flex space-x-10 text-base font-bold text-black/60 dark:text-white">
                <li className="hover:underline hover:underline-offset-4 hover:w-fit transition-all duration-100 ease-linear">
                  <Link href="/">Home</Link>
                </li>
                <li className="hover:underline hover:underline-offset-4 hover:w-fit transition-all duration-100 ease-linear">
                  <Link href="/ourservices">Our services</Link>
                </li>
                <li className="hover:underline hover:underline-offset-4 hover:w-fit transition-all duration-100 ease-linear">
                  <Link href="/about">About</Link>
                </li>
                <li className="hover:underline hover:underline-offset-4 hover:w-fit transition-all duration-100 ease-linear">
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </div>
            <div className="hidden lg:flex lg:items-center gap-x-2">
              <Link href={"/sign-up"} className="flex items-center text-black dark:text-white justify-center px-6 py-2.5 font-semibold">
                Sign up
              </Link>
              <Link href={"/sign-in"} className="flex items-center justify-center rounded-md bg-[#4A3BFF] text-white px-6 py-2.5 font-semibold hover:shadow-lg hover:drop-shadow transition duration-200">
                Login
              </Link>
            </div>
            <div className="flex items-center justify-center lg:hidden">
              <button className="focus:outline-none text-slate-200 dark:text-white">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                  className="text-2xl text-slate-800 dark:text-white focus:outline-none active:scale-110 active:text-red-500"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </nav>
      </div>
    </Fragment>
  );
};

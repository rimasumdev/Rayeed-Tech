"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/outline";
import gsap from "gsap";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [dropdownStates, setDropdownStates] = useState({
    solutions: false,
    language: false,
  });
  const dropdownRef = useRef(null);
  const mobileDropdownRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      if (currentScrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);

  const toggleDropdown = (dropdown) => {
    setDropdownStates((prevState) => {
      const newState = {
        ...prevState,
        [dropdown]: !prevState[dropdown],
      };

      // Add animation for both desktop and mobile solutions dropdown
      if (dropdown === "solutions") {
        const targetRef =
          window.innerWidth >= 1024 ? dropdownRef : mobileDropdownRef;

        if (newState[dropdown]) {
          // Opening animation
          gsap.fromTo(
            targetRef.current,
            {
              height: 0,
              opacity: 0,
              y: -10,
            },
            {
              height: "auto",
              opacity: 1,
              y: 0,
              duration: 0.3,
              ease: "power2.out",
            }
          );
        } else {
          // Closing animation
          gsap.to(targetRef.current, {
            height: 0,
            opacity: 0,
            y: -10,
            duration: 0.3,
            ease: "power2.in",
          });
        }
      }

      return newState;
    });
  };

  const links = [
    { href: "#", label: "AnyCasS" },
    { href: "#", label: "AnyBasS" },
    { href: "#", label: "AnyPasS" },
  ];

  const navLinks = [
    { href: "#", label: "Services" },
    { href: "#", label: "About Us" },
  ];
  const languageLinks = [
    { href: "#", label: "EN (English)" },
    { href: "#", label: "TH (Thai)" },
    { href: "#", label: "ID (Bahasa Indonesia)" },
    {
      href: "#",
      label: "TW (Traditional Chinese)",
      icon: "/icons/tw-flag.svg",
    },
  ];

  const handleLanguageChange = (language) => {
    // Here you can handle the language change
    console.log("Selected language:", language);
  };

  return (
    <div
      className={`mx-auto fixed w-full top-0 z-50 transition-all duration-300 pb-4 ${
        isScrolled ? "bg-[#1F80F0] shadow-lg" : "bg-transparent"
      } ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
    >
      <div className="w-full flex items-center justify-between lg:hidden bg-[#1F80F0] lg:bg-transparent text-white py-8 px-8 lg:px-6 lg:py-3">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold uppercase">
          <img
            src="/site_logo.svg"
            alt="Anytech"
            className="w-[134px] lg:w-[170px]"
          />
        </Link>

        {/* Mobile Menu Button */}
        <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <XMarkIcon className="h-6 w-6 text-white" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </button>
      </div>
      <nav
        className={`lg:container mx-auto ${
          isScrolled ? "bg-[#1F80F0]" : "bg-[#1B76E9] lg:bg-transparent"
        } px-8 lg:pb-0 lg:mt-0 lg:px-6 lg:py-3 z-50`}
      >
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="hidden lg:block text-xl font-bold uppercase"
          >
            <img
              src="/site_logo.svg"
              alt="Anytech"
              className="w-[134px] lg:w-[170px]"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-6 items-center justify-center text-white">
            <div
              className="relative"
              onMouseEnter={() => toggleDropdown("solutions")}
              onMouseLeave={() => toggleDropdown("solutions")}
            >
              <button className="flex items-center gap-1 h-12 py-3 px-6">
                Solutions
                <ChevronDownIcon
                  className={`h-4 w-4 transition-transform ${
                    dropdownStates.solutions ? "rotate-180" : ""
                  }`}
                />
              </button>
              <ul
                ref={dropdownRef}
                className="absolute left-0 bg-white text-black shadow-lg rounded-md space-y-2 w-60 divide-y divide-solid p-3"
                style={{ height: 0, overflow: "hidden", opacity: 0 }}
              >
                {links.map((link, index) => (
                  <li key={index} className="w-full">
                    <Link
                      href={link.href}
                      className="block px-4 py-2 rounded hover:text-blue-500"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {navLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="flex items-center gap-1 h-12 py-3 px-6 hover:border-b-2 hover:border-white"
              >
                {link.label}
              </Link>
            ))}
            <div
              className="relative w-40 self-center"
              onMouseEnter={() => toggleDropdown("language")}
              onMouseLeave={() => toggleDropdown("language")}
            >
              <button className="btn btn-outline text-white border-white rounded-full normal-case flex items-center gap-1">
                <GlobeAltIcon className="h-4 w-4" />
                EN
                <ChevronDownIcon
                  className={`h-4 w-4 transition-transform ${
                    dropdownStates.language ? "rotate-180" : ""
                  }`}
                />
              </button>
              {dropdownStates.language && (
                <div className="absolute z-50 w-60 mt-1 bg-white rounded-md shadow-lg">
                  {languageLinks.map((link, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        handleLanguageChange(link.label.split(" ")[0]);
                        toggleDropdown("language");
                      }}
                      className="w-full flex items-center gap-2 px-4 py-2 text-black hover:bg-gray-100"
                    >
                      {link.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className="items-center gap-2 hidden lg:flex ">
            <button className="btn btn-outline text-white border-white rounded-md px-6 hover:bg-white hover:text-blue-500 hover:border-white">
              Contact Us <ChevronRightIcon className="h-4 w-4" />
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        {isOpen && (
          <div className="z-50 flex flex-col space-y-4 mt-8 pb-8 w-full text-white">
            <div className="flex flex-col gap-8">
              <div className="relative">
                <button
                  className="flex items-center justify-between w-full"
                  onClick={() => toggleDropdown("solutions")}
                >
                  Solutions
                  <ChevronDownIcon
                    className={`h-4 w-4 transition-transform ${
                      dropdownStates.solutions ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <ul
                  ref={mobileDropdownRef}
                  className="w-full"
                  style={{ height: 0, overflow: "hidden", opacity: 0 }}
                >
                  {links.map((link, index) => (
                    <li key={index} className="py-1">
                      <Link
                        href={link.href}
                        className="block px-4 py-2 hover:bg-base-300 rounded hover:text-blue-500"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {navLinks.map((link, index) => (
                <Link key={index} href={link.href} className="block">
                  {link.label}
                </Link>
              ))}

              <div className="relative w-40 self-center">
                <select
                  onChange={handleLanguageChange}
                  className="w-full appearance-none bg-transparent text-white border border-white rounded-md py-2 px-4 pr-8 focus:outline-none focus:ring-2 focus:ring-white/50 hover:border-white/80 transition-all"
                  defaultValue="EN"
                >
                  {languageLinks.map((link, index) => (
                    <option
                      key={index}
                      value={link.label.split(" ")[0]}
                      className="text-black bg-white"
                    >
                      {link.label}
                    </option>
                  ))}
                </select>
                <ChevronDownIcon className="h-4 w-4 absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none text-white" />
              </div>
            </div>

            <div className="px-6 pt-2">
              <button className="btn btn-outline w-full rounded-md px-6 border text-white border-white bg-transparent">
                Contact Us <ChevronRightIcon className="h-4 w-4" />
              </button>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Nav;

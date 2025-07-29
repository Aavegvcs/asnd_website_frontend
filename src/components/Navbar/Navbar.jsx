"use client";

import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import ASND_logo from "@/assets/ASND_logo.svg";
import Container from "../Container/Container";

const navLinks = [
  { name: "Industries", href: "/" },
  { name: "Services", href: "/" },
  { name: "Products", href: "/" },
  { name: "Blogs", href: "/" },
  { name: "About", href: "/" },
  { name: "Careers", href: "/" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={`w-full fixed top-0 left-0 transform transition-transform duration-300 z-50 translate-x-0 ${
          scrolled ? "bg-white shadow-md" : "bg-[#fff] opacity-90"
        }`}
      >
        <Container>
          <nav className="py-4 flex items-center justify-between">
            <img
              src={ASND_logo.src}
              alt="ASND Logo"
              className="h-8 w-auto md:px-0 px-[16px]"
            />

            <ul className="hidden md:flex space-x-6 text-gray-800 font-medium">
              {navLinks.map(({ name, href }, index) => (
                <li key={index} className="cursor-pointer">
                  <a href={href}>{name}</a>
                </li>
              ))}
            </ul>

            <div className="hidden md:block">
              <button className="bg-black text-white px-5 py-2 rounded-full hover:bg-gray-900 transition cursor-pointer">
                Contact Us
              </button>
            </div>

            <div className="md:hidden px-[16px]">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-800"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </nav>
        </Container>
      </header>

      {isMobileMenuOpen && (
        <>
          <div
            className="fixed bg-opacity-50 z-[9998]"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          <div className="fixed top-0 right-0 h-full w-[280px] bg-white z-[9999] shadow-lg transition-transform duration-300">
            <div className="flex justify-end p-4">
              <button onClick={() => setIsMobileMenuOpen(false)}>
                <X size={24} className="text-gray-800" />
              </button>
            </div>

            <div className="flex flex-col px-6 space-y-6 text-gray-800 font-medium">
              {navLinks.map(({ name, href }, index) => (
                <a
                  key={index}
                  href={href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block pb-1 ${
                    index !== navLinks.length - 1 ? "border-b" : ""
                  }`}
                >
                  {name}
                </a>
              ))}

              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="bg-black text-white w-full py-2 rounded-full hover:bg-gray-900 transition"
              >
                Contact Us
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;

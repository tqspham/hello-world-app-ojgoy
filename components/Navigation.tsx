"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { label: "Home", href: "#" },
    { label: "About", href: "#" },
    { label: "Services", href: "#" },
    { label: "Contact", href: "#" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-(--color-background) border-b border-(--color-border)">
      <div className="h-20 flex items-center justify-between px-6 lg:px-8 max-w-7xl mx-auto w-full">
        {/* Left Section: Logo/Brand */}
        <div className="flex-shrink-0">
          <span className="text-lg font-semibold text-(--color-primary)">
            Brand
          </span>
        </div>

        {/* Center Section: Desktop Menu */}
        <div className="hidden sm:flex items-center gap-8 flex-1 justify-center">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="nav-link"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right Section: CTA Button and Mobile Menu Toggle */}
        <div className="flex items-center gap-4">
          <button className="hidden sm:inline-flex bg-(--color-accent) text-white px-5 py-2.5 rounded text-sm font-semibold uppercase tracking-wide hover:opacity-90 transition-opacity duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--color-accent)">
            Get Started
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={toggleMenu}
            className="sm:hidden p-2 text-(--color-primary) hover:bg-(--color-surface) rounded transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--color-accent)"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="sm:hidden bg-(--color-background) border-t border-(--color-border) px-6 py-4">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="nav-link block py-2 text-base"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <button className="w-full bg-(--color-accent) text-white px-5 py-2.5 rounded text-sm font-semibold uppercase tracking-wide hover:opacity-90 transition-opacity duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--color-accent) mt-2">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;

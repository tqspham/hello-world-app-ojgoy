import { Mail, Linkedin, Twitter, Github } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-12 border-t border-(--color-border) bg-(--color-surface)">
      <div className="mx-auto max-w-7xl px-6 py-8 sm:py-12 lg:px-8">
        {/* Desktop Layout */}
        <div className="hidden sm:grid sm:grid-cols-2 sm:gap-8">
          {/* Left Section: Navigation and Info */}
          <div className="flex flex-col gap-8">
            {/* Navigation Links */}
            <nav className="flex flex-col gap-4">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-(--color-primary)">
                Navigation
              </h3>
              <ul className="flex flex-col gap-2">
                <li>
                  <a
                    href="#"
                    className="text-sm text-(--color-secondary) hover:text-(--color-accent) hover:underline transition-colors"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-(--color-secondary) hover:text-(--color-accent) hover:underline transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-(--color-secondary) hover:text-(--color-accent) hover:underline transition-colors"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-(--color-secondary) hover:text-(--color-accent) hover:underline transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </nav>

            {/* Company Info */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-(--color-primary) mb-3">
                Company
              </h3>
              <p className="text-sm text-(--color-secondary) leading-relaxed">
                Building exceptional digital experiences with modern technology and design.
              </p>
            </div>
          </div>

          {/* Right Section: Social and Legal */}
          <div className="flex flex-col gap-8">
            {/* Social Links */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-(--color-primary) mb-4">
                Follow Us
              </h3>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-(--color-background) text-(--color-secondary) hover:text-(--color-accent) hover:bg-(--color-border) transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-(--color-background) text-(--color-secondary) hover:text-(--color-accent) hover:bg-(--color-border) transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-(--color-background) text-(--color-secondary) hover:text-(--color-accent) hover:bg-(--color-border) transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="mailto:hello@example.com"
                  className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-(--color-background) text-(--color-secondary) hover:text-(--color-accent) hover:bg-(--color-border) transition-colors"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Legal Links */}
            <nav className="flex flex-col gap-2">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-(--color-primary) mb-2">
                Legal
              </h3>
              <ul className="flex flex-col gap-2">
                <li>
                  <a
                    href="#"
                    className="text-sm text-(--color-secondary) hover:text-(--color-accent) hover:underline transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-(--color-secondary) hover:text-(--color-accent) hover:underline transition-colors"
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-(--color-secondary) hover:text-(--color-accent) hover:underline transition-colors"
                  >
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="sm:hidden flex flex-col gap-6">
          {/* Navigation Links */}
          <nav>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-(--color-primary) mb-3">
              Navigation
            </h3>
            <ul className="flex flex-col gap-2">
              <li>
                <a
                  href="#"
                  className="text-sm text-(--color-secondary) hover:text-(--color-accent) hover:underline transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-(--color-secondary) hover:text-(--color-accent) hover:underline transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-(--color-secondary) hover:text-(--color-accent) hover:underline transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-(--color-secondary) hover:text-(--color-accent) hover:underline transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          {/* Company Info */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-(--color-primary) mb-2">
              Company
            </h3>
            <p className="text-sm text-(--color-secondary) leading-relaxed">
              Building exceptional digital experiences with modern technology and design.
            </p>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-(--color-primary) mb-3">
              Follow Us
            </h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-(--color-background) text-(--color-secondary) hover:text-(--color-accent) hover:bg-(--color-border) transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-(--color-background) text-(--color-secondary) hover:text-(--color-accent) hover:bg-(--color-border) transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-(--color-background) text-(--color-secondary) hover:text-(--color-accent) hover:bg-(--color-border) transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="mailto:hello@example.com"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-(--color-background) text-(--color-secondary) hover:text-(--color-accent) hover:bg-(--color-border) transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Legal Links */}
          <nav>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-(--color-primary) mb-2">
              Legal
            </h3>
            <ul className="flex flex-col gap-2">
              <li>
                <a
                  href="#"
                  className="text-sm text-(--color-secondary) hover:text-(--color-accent) hover:underline transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-(--color-secondary) hover:text-(--color-accent) hover:underline transition-colors"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-(--color-secondary) hover:text-(--color-accent) hover:underline transition-colors"
                >
                  Cookie Policy
                </a>
              </li>
            </ul>
          </nav>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-(--color-border) text-center">
          <p className="text-xs text-(--color-muted-text)">
            &copy; {currentYear} AI Generated App. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

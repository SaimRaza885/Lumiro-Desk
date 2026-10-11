import { useState, useEffect } from "react";
import { Link as LinkScroll } from "react-scroll";
import Logo from "../components/Logo";
import ThemeToggle from "../components/ThemeToggle";

const Header = () => {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 16);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { title: "Features", to: "features", offset: -90 },
    { title: "Gallery", to: "gallery", offset: -90 },
    { title: "FAQ", to: "faq", offset: -90 },
    { title: "Install", to: "install", offset: -90 },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 h-16 sm:h-20 transition-all duration-300 ${
          hasScrolled
            ? "border-b border-s3/50 bg-s1/80 backdrop-blur-lg shadow-sm"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-full max-w-[1200px] items-center justify-between px-4 sm:px-6">
          {/* Left: Brand Identity */}
          <LinkScroll
            to="hero"
            offset={-250}
            spy
            smooth
            className="cursor-pointer transition-opacity hover:opacity-90"
          >
            <Logo />
          </LinkScroll>

          {/* Center: Clean Linear-style Navigation Links (Desktop) */}
          <nav className="hidden md:flex items-center gap-5 lg:gap-7">
            {navLinks.map(({ title, to, offset }) => (
              <LinkScroll
                key={title}
                to={to}
                offset={offset}
                spy
                smooth
                activeClass="!text-p4 font-semibold"
                className="text-[13px] sm:text-[13.5px] font-medium text-p5 hover:text-p4 transition-colors duration-200 cursor-pointer"
              >
                {title}
              </LinkScroll>
            ))}
          </nav>

          {/* Right: Actions (Desktop) */}
          <div className="hidden md:flex items-center gap-2 lg:gap-3">
            <ThemeToggle />
            <LinkScroll
              to="download"
              offset={-90}
              spy
              smooth
              className="flex h-9 sm:h-10 items-center justify-center rounded-full bg-p4 px-4 sm:px-5 text-[13px] sm:text-[14px] font-medium text-s1 shadow-sm transition-all duration-200 hover:opacity-90 active:scale-95 cursor-pointer"
            >
              Download free
            </LinkScroll>
          </div>

          {/* Mobile Actions - Hamburger only */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              type="button"
              aria-label="Toggle navigation menu"
              className="flex size-8 sm:size-9 items-center justify-center rounded-full border border-s3 bg-s2/80 text-p4 backdrop-blur-lg transition-colors hover:border-s4"
            >
              <div className="relative flex size-4 flex-col justify-center gap-1">
                <span
                  className={`h-0.5 w-full bg-current rounded-full transition-all duration-300 ${
                    isMenuOpen ? "translate-y-1.5 rotate-45" : ""
                  }`}
                />
                <span
                  className={`h-0.5 w-full bg-current rounded-full transition-opacity duration-300 ${
                    isMenuOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`h-0.5 w-full bg-current rounded-full transition-all duration-300 ${
                    isMenuOpen ? "-translate-y-1.5 -rotate-45" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Full-height Mobile Sidebar Menu - Outside header to prevent transparency issues */}
      <div
        className={`md:hidden fixed inset-0 z-50 transition-all duration-300 ${
          isMenuOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <div
          onClick={() => setIsMenuOpen(false)}
          className={`fixed inset-0 bg-black/50 transition-opacity duration-300 ${
            isMenuOpen ? "opacity-100" : "opacity-0"
          }`}
        />
        <nav
          className={`fixed top-0 left-0 h-full w-64 sm:w-72 bg-s1/98 backdrop-blur-3xl border-r border-s3/50 shadow-2xl shadow-p4/10 transform transition-transform duration-300 ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex h-16 sm:h-20 items-center justify-between px-4 sm:px-5 border-b border-s3/30">
            <Logo />
            <ThemeToggle />
          </div>
          <div className="flex flex-col h-[calc(100%-5rem)] sm:h-[calc(100%-80px)] p-4">
            {navLinks.map(({ title, to, offset }, index) => (
              <LinkScroll
                key={title}
                to={to}
                offset={offset}
                spy
                smooth
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center gap-3 rounded-xl px-4 py-4 text-[15px] sm:text-[16px] font-medium text-p4 hover:bg-s2/60 hover:text-p4 transition-all cursor-pointer"
              >
                <div className="flex size-9 items-center justify-center rounded-xl bg-gradient-to-br from-p4/10 to-p4/20">
                  <span className="text-[12px] font-bold text-p4">{index + 1}</span>
                </div>
                <span className="text-p4">{title}</span>
              </LinkScroll>
            ))}
            <div className="mt-auto pt-4 border-t border-s3/30">
              <LinkScroll
                to="download"
                offset={-90}
                spy
                smooth
                onClick={() => setIsMenuOpen(false)}
                className="flex h-12 w-full items-center justify-center rounded-xl bg-gradient-to-r from-p4 to-p4/80 text-[15px] font-semibold text-s1 shadow-lg transition-all hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                Download for Windows
              </LinkScroll>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;

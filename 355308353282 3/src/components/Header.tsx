import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export default function Header() {
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle language
  const toggleLanguage = () => {
    setLanguage(language === "en" ? "zh" : "en");
  };

  // Navigation links
  const navLinks = [
    { path: "/", label: t("nav.home") },
    { path: "/tours", label: t("nav.tours") },
    { path: "/exhibitions", label: t("nav.exhibitions") },
    { path: "/about", label: t("nav.about") },
    { path: "/contact", label: t("nav.contact") },
  ];

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled 
          ? "bg-white shadow-md py-3" 
          : "bg-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
           {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center text-white font-bold text-xl mr-2">
              TC
            </div>
            <span className={cn("font-bold text-xl", isScrolled ? "text-gray-900" : "text-white")}>
              Tour & Business in China
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "font-medium transition-colors duration-200 hover:text-red-600",
                  isScrolled ? "text-gray-700" : "text-white"
                )}
              >
                {link.label}
              </Link>
            ))}
            
            {/* Language Switch */}
            <button
              onClick={toggleLanguage}
              className={cn(
                "flex items-center space-x-1 px-3 py-1 rounded-full transition-colors",
                isScrolled 
                  ? "bg-gray-100 text-gray-800 hover:bg-gray-200" 
                  : "bg-white/20 text-white hover:bg-white/30"
              )}
            >
              <span>{language === "en" ? "中文" : "EN"}</span>
              <i className="fa-solid fa-chevron-down text-xs"></i>
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={cn("text-2xl", isScrolled ? "text-gray-900" : "text-white")}
            >
              <i className={`fa-solid ${mobileMenuOpen ? "fa-times" : "fa-bars"}`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white shadow-lg"
        >
          <div className="px-4 py-5 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="block py-2 text-gray-700 hover:text-red-600 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            
            {/* Mobile Language Switch */}
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-1 w-full px-3 py-2 bg-gray-100 rounded-full text-gray-800"
            >
              <span>{language === "en" ? "中文" : "EN"}</span>
              <i className="fa-solid fa-chevron-down text-xs"></i>
            </button>
          </div>
        </motion.div>
      )}
    </header>
  );
}